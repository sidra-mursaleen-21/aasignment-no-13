import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Dashboard from "../pages/dashboard";
import Analytics from "../pages/analytics";
import Calender from "../pages/calender";
import Chat from "../pages/chat";
import Customer from "../pages/customer";
import CustomerDetail from "../pages/customerDetail";
import Food from "../pages/food";
import FoodDetail from "../pages/foodDetail";
import OrderDetail from "../pages/orderDetail";
import OrderList from "../pages/orderList";
import Reviews from "../pages/reviews";
import Wallet from "../pages/wallet";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "calender",
        element: <Calender />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "customer",
        element: <Customer />,
      },
      {
        path: "customerDetail",
        element: <CustomerDetail />,
      },
      {
        path: "food",
        element: <Food />,
      },
      {
        path: "foodDetail",
        element: <FoodDetail />,
      },
      {
        path: "orderDetail",
        element: <OrderDetail />,
      },
      {
        path: "orderList",
        element: <OrderList />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
