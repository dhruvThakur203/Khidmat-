import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { MenuPage } from './pages/MenuPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { GalleryPage } from './pages/GalleryPage';
import { CateringPage } from './pages/CateringPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';

const router = createBrowserRouter([
  {
    element: <Layout transparentHeader />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/our-story', element: <StoryPage /> },
      { path: '/menu', element: <MenuPage /> },
      { path: '/experience', element: <ExperiencePage /> },
      { path: '/gallery', element: <GalleryPage /> },
      { path: '/catering', element: <CateringPage /> },
      { path: '/locations', element: <LocationsPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
