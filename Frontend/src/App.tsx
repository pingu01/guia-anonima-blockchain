import './styles/global.css'
import { Navbar } from './components/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { Marketplace } from './Pages/Marketplace';
import { BuyToken } from './Pages/BuyToken';


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
        path: "/processo-seletivo",
        // element: <ProcessoSeletivo />,
      },
      {
        path: "/sobre-nos",
        // element: <SobreNos />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/buy-token",
        element: <BuyToken />,
      }
    ],
  }
]);

export function App() {
  return <RouterProvider router={router} />
}

