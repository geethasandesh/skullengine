import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Animation from '../sections/Animation';
import Digital from '../sections/Digital';
import Video from '../sections/Video';
import Graphic from '../sections/Graphic';
import Interior from '../sections/Interior';
import Web from '../sections/Web';
import Contact from '../pages/Contact';
import About  from '../pages/About';
import Vfx from '../sections/Vfx';
import AppDevelopment from '../sections/AppDevelopment';

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
        element: <Animation />,
      },
      {
        path: 'vfx',
        element: <Vfx />,
      },
      {
        path: 'app-development',
        element: <AppDevelopment />,
      },
      {
        path: 'video',
        element: <Video />,
      },
      {
        path: 'digital',
        element: <Digital />,
      },  
      {
        path: 'graphic',
        element: <Graphic />,
      },
      {
        path: 'web',
        element: <Web />,
      },  
      {
        path: 'interior',
        element: <Interior />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about',
        element: <About />,
      }
    ],
  },
]);

export default router;