/**
 * Navigation configuration for the dashboard sidebar.
 */
import {
  LayoutDashboard,
  Users,
  UserCog,
  FileText,
  BarChart3,
  Settings,
  Settings2,
} from "lucide-react";

export const DASHBOARD_NAV_ITEMS = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/drivers", label: "Drivers", icon: Users },
  {
    path: "/passenger-assistants",
    label: "Passenger Assistants",
    icon: UserCog,
  },
  { path: "/documents", label: "Documents", icon: FileText },
  { path: "/reports", label: "Reports", icon: BarChart3 },
  { path: "/users", label: "User Management", icon: Settings },
  {
    path: "/system-configurations",
    label: "System Configurations",
    icon: Settings2,
  },
];
