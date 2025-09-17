// src/App.jsx

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from "./components/layout/Header.jsx";
import Home from './pages/Home.jsx';

const Layout = () => {
  return (
    <>
      {/* Adicionando padding horizontal de 40px (px-10) ao Header */}
      <div className="relative px-10 sticky top-0 z-50">
        <Header />
      </div>
      
      {/* Adicionando padding horizontal de 80px (px-20) ao conteúdo principal */}
      <main className="px-20">
        <Outlet />
      </main>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // O Layout é aplicado a todas as rotas
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

// O componente App principal que apenas renderiza o nosso roteador
function App() {
  return <RouterProvider router={router} />;
}

export default App;