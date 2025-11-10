import { createBrowserRouter, type RouteObject } from "react-router-dom";
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

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { path: '/', Component: HomePage },
      { path: '/calendar', Component: CalendarPage },
      { path: '/clients', Component: ClientsPage },
      { path: '/staff', Component: StaffPage },
      { path: '/settings', Component: SettingsPage },
      { path: '/services', Component: ServicesPage },
      { path: '/analytics', Component: AnalyticsPage },
      { path: '/materiales', Component: MaterialesPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
