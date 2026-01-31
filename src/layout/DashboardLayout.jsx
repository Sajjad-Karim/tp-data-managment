import { Outlet, Link, useLocation, NavLink } from "react-router-dom";
import { LayoutDashboard, Bell, Menu, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

import { DASHBOARD_NAV_ITEMS } from "@/lib/dashboardNav";

const DASHBOARD_SIDEBAR_CLASS =
  "w-64 border-r border-border/60 bg-white/60 backdrop-blur-xl dark:bg-[#1a1a2e]/60 flex flex-col shrink-0 supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-[#1a1a2e]/50";

const DASHBOARD_HEADER_CLASS =
  "h-14 border-b border-border/60 bg-white/60 backdrop-blur-xl dark:bg-[#1a1a2e]/60 px-6 flex items-center justify-between shrink-0 supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-[#1a1a2e]/50";

const NAV_LINK_ACTIVE_CLASS =
  "bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.98]";
const NAV_LINK_INACTIVE_CLASS =
  "text-muted-foreground hover:bg-accent hover:text-accent-foreground active:scale-[0.98]";

const DashboardLayout = () => {
  const location = useLocation();

  const isNavActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={DASHBOARD_SIDEBAR_CLASS} aria-label="Main navigation">
        <div className="p-4 border-b border-border/60">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold text-primary transition-all duration-200 ease-out hover:opacity-90 hover:brightness-110 active:scale-[0.98] rounded-md py-1"
            aria-label="TP Data Management - Dashboard"
          >
            <LayoutDashboard className="size-6" aria-hidden />
            TP Data Mgmt
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-1" role="navigation">
          {DASHBOARD_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = isNavActive(item.path);
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ease-out",
                  isActive ? NAV_LINK_ACTIVE_CLASS : NAV_LINK_INACTIVE_CLASS
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="size-5 shrink-0" aria-hidden />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border/60">
          <Link
            to="/login"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-out active:scale-[0.98]"
            aria-label="Sign out"
          >
            <LogOut className="size-5 shrink-0" aria-hidden />
            Sign out
          </Link>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header
          className={DASHBOARD_HEADER_CLASS}
          role="banner"
        >
          <button
            type="button"
            className="p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95 transition-all duration-200 ease-out md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" aria-hidden />
          </button>
          <div className="flex-1 min-w-0" />
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95 transition-all duration-200 ease-out"
              aria-label="Notifications"
            >
              <Bell className="size-5" aria-hidden />
            </button>
            <div
              className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium text-primary"
              aria-hidden
            >
              U
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6" role="main" id="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
