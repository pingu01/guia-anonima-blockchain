import './styles/global.css'
import { Navbar } from './components/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { Marketplace } from './Pages/Marketplace';


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
    ],
  }
]);

export function App() {
  return <RouterProvider router={router} />
}

