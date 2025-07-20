import { createBrowserRouter, Navigate } from "react-router";
import Dashlayout from '../layouts/authlayout/index';
import Dashboard from '../views/dashboard/index';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashlayout/>,
      children: [
        { index: true, element: <Navigate to={"/dashboard"} replace/>},
        { path: "/dashboard", element: <Dashboard/>},
      ]
    },
]);

export default router;