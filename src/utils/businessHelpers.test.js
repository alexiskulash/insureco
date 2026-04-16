import { describe, it, expect } from "vitest";
import {
  formatCurrency,
  formatNumber,
  isDatePast,
  formatMileage,
  isValidEmail,
  isValidVIN,
  calculateCoveragePercentage,
  calculateInsurancePayout,
  getAssetType,
  formatVehicleName,
} from "./businessHelpers";

// =============================================================================
// formatCurrency
// =============================================================================

describe("formatCurrency", () => {
  it("formats a positive number with cents", () => {
    expect(formatCurrency(1234.56)).toBe("$1,234.56");
  });

  it("formats a large number with commas", () => {
    expect(formatCurrency(1000000)).toBe("$1,000,000.00");
  });

  it("formats zero as $0.00", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  it("returns $0.00 for null", () => {
    expect(formatCurrency(null)).toBe("$0.00");
  });

  it("returns $0.00 for undefined", () => {
    expect(formatCurrency(undefined)).toBe("$0.00");
  });

  it("formats without cents when showCents is false", () => {
    expect(formatCurrency(500, false)).toBe("$500");
  });
});

// =============================================================================
// formatNumber
// =============================================================================

describe("formatNumber", () => {
  it("formats a number with two decimal places", () => {
    expect(formatNumber(1234.5)).toBe("1,234.50");
  });

  it("returns '0' for null", () => {
    expect(formatNumber(null)).toBe("0");
  });

  it("returns '0' for undefined", () => {
    expect(formatNumber(undefined)).toBe("0");
  });
});

// =============================================================================
// isDatePast
// =============================================================================

describe("isDatePast", () => {
  it("returns true for a past date string", () => {
    expect(isDatePast("2000-01-01")).toBe(true);
  });

  it("returns true for a past Date object", () => {
    expect(isDatePast(new Date("2000-01-01"))).toBe(true);
  });

  it("returns false for a future date", () => {
    expect(isDatePast("2099-12-31")).toBe(false);
  });

  it("returns false for a falsy value", () => {
    expect(isDatePast(null)).toBe(false);
    expect(isDatePast("")).toBe(false);
  });
});

// =============================================================================
// formatMileage
// =============================================================================

describe("formatMileage", () => {
  it("formats mileage with unit by default", () => {
    expect(formatMileage(45230)).toBe("45,230 mi");
  });

  it("formats mileage without unit when showUnit is false", () => {
    expect(formatMileage(45230, false)).toBe("45,230");
  });

  it("returns '0 mi' for null", () => {
    expect(formatMileage(null)).toBe("0 mi");
  });
});

// =============================================================================
// isValidEmail
// =============================================================================

describe("isValidEmail", () => {
  it("returns true for a valid email", () => {
    expect(isValidEmail("user@example.com")).toBe(true);
  });

  it("returns false for an email without @", () => {
    expect(isValidEmail("userexample.com")).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isValidEmail("")).toBe(false);
  });

  it("returns false for null", () => {
    expect(isValidEmail(null)).toBe(false);
  });
});

// =============================================================================
// isValidVIN
// =============================================================================

describe("isValidVIN", () => {
  it("returns true for a valid 17-character VIN", () => {
    expect(isValidVIN("1HGCM82633A004352")).toBe(true);
  });

  it("returns false for a VIN that is too short", () => {
    expect(isValidVIN("1HGCM826")).toBe(false);
  });

  it("returns false for null", () => {
    expect(isValidVIN(null)).toBe(false);
  });
});

// =============================================================================
// calculateCoveragePercentage
// =============================================================================

describe("calculateCoveragePercentage", () => {
  it("calculates correct percentage", () => {
    expect(calculateCoveragePercentage(5000, 10000)).toBe(50);
  });

  it("caps at 100% when claim exceeds limit", () => {
    expect(calculateCoveragePercentage(15000, 10000)).toBe(100);
  });

  it("returns 0 when coverageLimit is 0", () => {
    expect(calculateCoveragePercentage(5000, 0)).toBe(0);
  });
});

// =============================================================================
// calculateInsurancePayout
// =============================================================================

describe("calculateInsurancePayout", () => {
  it("subtracts deductible from approved amount", () => {
    expect(calculateInsurancePayout(10000, 1000)).toBe(9000);
  });

  it("returns 0 if approved amount is 0", () => {
    expect(calculateInsurancePayout(0, 1000)).toBe(0);
  });

  it("returns 0 if payout would be negative", () => {
    expect(calculateInsurancePayout(500, 1000)).toBe(0);
  });
});

// =============================================================================
// getAssetType
// =============================================================================

describe("getAssetType", () => {
  it("returns 'property' for PROP- prefix", () => {
    expect(getAssetType("PROP-2024-001")).toBe("property");
  });

  it("returns 'vehicle' for VEH- prefix", () => {
    expect(getAssetType("VEH-2024-001")).toBe("vehicle");
  });

  it("returns null for unknown prefix", () => {
    expect(getAssetType("UNKNOWN-001")).toBeNull();
  });

  it("returns null for null input", () => {
    expect(getAssetType(null)).toBeNull();
  });
});

// =============================================================================
// formatVehicleName
// =============================================================================

describe("formatVehicleName", () => {
  it("combines year, make, and model", () => {
    expect(formatVehicleName({ year: 2022, make: "Toyota", model: "Corolla" })).toBe(
      "2022 Toyota Corolla"
    );
  });

  it("handles missing fields gracefully", () => {
    expect(formatVehicleName({ make: "Ford" })).toBe("Ford");
  });

  it("returns 'Unknown Vehicle' for empty object", () => {
    expect(formatVehicleName({})).toBe("Unknown Vehicle");
  });

  it("returns 'N/A' for null", () => {
    expect(formatVehicleName(null)).toBe("N/A");
  });
});
