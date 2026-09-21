import { Outlet, useLocation } from 'react-router-dom';

/** Subtle route transition wrapper — opacity + small translateY. */
export function PageRoute() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-route">
      <Outlet />
    </div>
  );
}
