import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { CateringServicePage } from './components/catering/CateringServicePage';
import { cateringServices } from './data/catering';
import { HomePage } from './pages/HomePage';
import { AboutKhidmatPage } from './pages/AboutKhidmatPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { GalleryPage } from './pages/GalleryPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';
import { EventsPage } from './pages/EventsPage';
import { AreasWeServePage } from './pages/AreasWeServePage';
import { CateringMenuPage } from './pages/CateringMenuPage';
import { CateringEventsPage } from './pages/CateringEventsPage';
import { GuestCountPage } from './pages/GuestCountPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { NotFoundPage } from './pages/NotFoundPage';

const cateringRoutes = cateringServices.map((service) => ({
  path: `/${service.slug}`,
  element: <CateringServicePage service={service} />,
}));

const router = createBrowserRouter([
  {
    element: <Layout transparentHeader />,
    children: [
      { path: '/', element: <HomePage /> },
      ...cateringRoutes,
      { path: '/about-khidmat', element: <AboutKhidmatPage /> },
      { path: '/our-story', element: <Navigate to="/about-khidmat" replace /> },
      { path: '/events', element: <EventsPage /> },
      { path: '/gallery', element: <GalleryPage /> },
      { path: '/areas-we-serve', element: <AreasWeServePage /> },
      { path: '/catering-menu-noida', element: <CateringMenuPage /> },
      { path: '/catering-for-events-noida', element: <CateringEventsPage /> },
      { path: '/catering-by-guest-count', element: <GuestCountPage /> },
      { path: '/restaurant', element: <RestaurantPage /> },
      { path: '/experience', element: <ExperiencePage /> },
      { path: '/catering', element: <Navigate to="/noida-catering" replace /> },
      { path: '/office-catering-noida', element: <Navigate to="/corporate-catering-noida" replace /> },
      { path: '/office-catering', element: <Navigate to="/corporate-catering-noida" replace /> },
      { path: '/large-celebrations', element: <Navigate to="/noida-catering" replace /> },
      { path: '/large-celebrations-noida', element: <Navigate to="/noida-catering" replace /> },
      { path: '/private-catering-noida', element: <Navigate to="/private-party-catering-noida" replace /> },
      { path: '/menu', element: <Navigate to="/catering-menu-noida" replace /> },
      { path: '/locations', element: <LocationsPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
