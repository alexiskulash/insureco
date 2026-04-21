import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import SiteLayout from "./components/SiteLayout";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SignUpConfirmationPage from "./pages/SignUpConfirmationPage";
import DashboardHome from "./pages/DashboardHome";
import AboutPage from "./pages/AboutPage";
import ThemePreviewPage from "./pages/ThemePreviewPage";
import ProgressIndicatorPreview from "./pages/ProgressIndicatorPreview";
import BusinessComingSoon from "./pages/business/BusinessComingSoon";
import BusinessDashboard from "./pages/business/BusinessDashboard";
import PropertiesPage from "./pages/business/PropertiesPage";
import PropertyDetailPage from "./pages/business/PropertyDetailPage";
import AddPropertyPage from "./pages/business/AddPropertyPage";
import FleetPage from "./pages/business/FleetPage";
import VehicleDetailPage from "./pages/business/VehicleDetailPage";
import AddVehiclePage from "./pages/business/AddVehiclePage";
import FileClaimPage from "./pages/business/FileClaimPage";
import MakePaymentPage from "./pages/business/MakePaymentPage";
import MapPage from "./pages/business/MapPage";
import FinancialDashboard1 from "./pages/FinancialDashboard1";
import FinancialDashboard2 from "./pages/FinancialDashboard2";
import FinancialDashboard3 from "./pages/FinancialDashboard3";
import FinancialDashboardOptions from "./pages/FinancialDashboardOptions";

export default function App() {
  return (
    <Routes>
      {/* ── Full-screen standalone pages ─────────────────────── */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signup/confirmation" element={<SignUpConfirmationPage />} />

      {/* ── Site-layout pages (landing-page nav + footer) ────── */}
      <Route path="/about" element={<SiteLayout><AboutPage /></SiteLayout>} />
      <Route path="/dashboard" element={<SiteLayout><DashboardHome /></SiteLayout>} />
      <Route path="/financial-dashboards" element={<SiteLayout><FinancialDashboardOptions /></SiteLayout>} />
      <Route path="/business/dashboard" element={<SiteLayout><BusinessDashboard /></SiteLayout>} />
      <Route path="/business/fleet" element={<SiteLayout><FleetPage /></SiteLayout>} />
      <Route path="/business/properties" element={<SiteLayout><PropertiesPage /></SiteLayout>} />
      <Route path="/business/map" element={<SiteLayout><MapPage /></SiteLayout>} />
      <Route path="/business/claims" element={<SiteLayout><BusinessComingSoon /></SiteLayout>} />
      <Route path="/business/payments" element={<SiteLayout><BusinessComingSoon /></SiteLayout>} />

      {/* ── Carbon-Layout pages (detail/sub pages + utilities) ── */}
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/financial-dashboard-1" element={<FinancialDashboard1 />} />
              <Route path="/financial-dashboard-2" element={<FinancialDashboard2 />} />
              <Route path="/financial-dashboard-3" element={<FinancialDashboard3 />} />
              <Route path="/theme-preview" element={<ThemePreviewPage />} />
              <Route path="/progress-preview" element={<ProgressIndicatorPreview />} />
              <Route path="/business" element={<Navigate to="/business/dashboard" replace />} />
              <Route path="/business/properties/add" element={<AddPropertyPage />} />
              <Route path="/business/properties/:propertyId" element={<PropertyDetailPage />} />
              <Route path="/business/fleet/add" element={<AddVehiclePage />} />
              <Route path="/business/fleet/:vehicleId" element={<VehicleDetailPage />} />
              <Route path="/business/file-claim" element={<FileClaimPage />} />
              <Route path="/business/make-payment" element={<MakePaymentPage />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}
