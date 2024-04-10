import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <LoginPage />,
                },
                {path: '/home', element: <HomePage />},
                {path: '/products', element: <ProductsPage />},
            ],
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
