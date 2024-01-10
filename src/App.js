import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import RestaurentMenu from './component/RestaurentMenu';
// import Grocery from './component/Grocery';

const Grocery = lazy(() => import('./component/Grocery'));
const About = lazy(() => import('./component/About'));

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
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading About Page...</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: '/contact', element: <Contact /> },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading Grocery Page...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: '/restaurants/:resName/:resId', element: <RestaurentMenu /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
