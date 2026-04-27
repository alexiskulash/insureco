import { useNavigate, useLocation } from 'react-router-dom';
import { TopNav, Footer } from './SiteShell';
import '../styles/site-pages.scss';

/**
 * SiteLayout — wraps interior pages with the landing-page-style
 * TopNav and Footer. Use this for all pages in the main nav.
 * SignUpPage and LoginPage use their own full-screen layouts.
 */
export default function SiteLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const onNav = (path) => { navigate(path); window.scrollTo(0, 0); };

  return (
    <div className="site-page">
      <TopNav onNav={onNav} activeRoute={location.pathname} />
      <main className="site-main">{children}</main>
      <Footer onNav={onNav} />
    </div>
  );
}
