import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import RestaurentMenu from './component/RestaurentMenu';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/restaurants/:resName/:resId', element: <RestaurentMenu /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
