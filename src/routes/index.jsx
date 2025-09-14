import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import AnimationPage from '../pages/AnimationPage';
import AppDevelopmentPage from '../pages/AppDevelopmentPage';
import DigitalPage from '../pages/DigitalPage';
import WebPage from '../pages/WebPage';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'animation',
        element: <AnimationPage />,
      },
      {
        path: 'app-development',
        element: <AppDevelopmentPage />,
      },
      {
        path: 'digital',
        element: <DigitalPage />,
      },
      {
        path: 'web',
        element: <WebPage />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ],
  },
]);

export default router;