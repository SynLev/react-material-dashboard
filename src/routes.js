import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import ErrorLayout from 'src/layouts/ErrorLayout';
import AccountView from 'src/components/account/AccountView';
import CustomerListView from 'src/components/customer/CustomerListView';
import DashboardView from 'src/components/reports/DashboardView';
import NotFoundView from 'src/components/errors/NotFoundView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: '3XETHUSD', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <ErrorLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
