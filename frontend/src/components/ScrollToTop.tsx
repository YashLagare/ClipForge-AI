import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = (window as any).lenis;

    if (lenis) {
      // Lenis-aware scroll
      lenis.scrollTo(0, { immediate: true });
    } else {
      // fallback
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <Outlet />;
}
