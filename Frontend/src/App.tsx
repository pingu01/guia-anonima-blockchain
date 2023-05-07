import './styles/global.css'
import { Navbar } from './components/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { BuyPage } from './Pages/BuyPage';
import { AboutPage } from './Pages/AboutPage';
import { CampainPage } from './Pages/CampainsPage';

const AppLayout = () => (
  <div className="App">
    <Navbar />
    <Outlet />
    {/* <Footer /> */}
  </div>
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/campaigns",
        element: <CampainPage  />,
      },
      {
        path: "/buy",
        element: <BuyPage />,
      },
    ],
  }
]);

export function App() {
  return <RouterProvider router={router} />
}

