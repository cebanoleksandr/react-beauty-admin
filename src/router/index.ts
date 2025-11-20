import { createBrowserRouter, redirect, type RouteObject } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import CalendarPage from "../pages/CalendarPage";
import ClientsPage from "../pages/ClientsPage";
import NotFoundPage from "../pages/NotFoundPage";
import StaffPage from "../pages/StaffPage";
import SettingsPage from "../pages/SettingsPage";
import ServicesPage from "../pages/ServicesPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import MaterialesPage from "../pages/MaterialesPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const loader = () => {
  const token = localStorage.getItem("token-admin");
  if (!token) throw redirect("/login");
  return null;
}

const autLoader = () => {
  const token = localStorage.getItem("token-admin");
  if (!!token) throw redirect("/");
  return null;
}

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { path: '/', Component: HomePage },
      { path: '/calendar', loader, Component: CalendarPage },
      { path: '/clients', loader, Component: ClientsPage },
      { path: '/staff', loader, Component: StaffPage },
      { path: '/settings', loader, Component: SettingsPage },
      { path: '/services', loader, Component: ServicesPage },
      { path: '/analytics', loader, Component: AnalyticsPage },
      { path: '/materiales', loader, Component: MaterialesPage },
      { path: '/login', loader: autLoader, Component: LoginPage },
      { path: '/register', loader: autLoader, Component: RegisterPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
