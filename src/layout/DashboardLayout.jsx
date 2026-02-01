import { useState, useEffect } from "react";
import { Outlet, Link, useLocation, NavLink } from "react-router-dom";
import { LayoutDashboard, Bell, Menu, LogOut, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

import { DASHBOARD_NAV_ITEMS } from "@/lib/dashboardNav";

const ACTIVE_NAV_GRADIENT = {
  background: "linear-gradient(135deg, #c41e3a 0%, #ea580c 100%)",
};

const DashboardLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isNavActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const handleCloseSidebar = () => setSidebarOpen(false);
  const handleToggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    if (sidebarOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [sidebarOpen]);

  return (
    <div className="h-screen overflow-hidden flex bg-muted/30">
      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={handleCloseSidebar}
        aria-hidden={!sidebarOpen}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-50 h-screen flex flex-col shrink-0 w-72",
          "bg-white dark:bg-[#1a1a2e] border-r border-border/80",

          "transition-transform duration-300 ease-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Main navigation"
      >
        {/* Brand — same height as header (h-14 lg:h-16) */}
        <div className="h-14 lg:h-16 flex items-center justify-between gap-2 px-4 border-b border-border/80 shrink-0">
          <Link
            to="/"
            onClick={handleCloseSidebar}
            className="flex items-center gap-2.5 text-foreground no-underline rounded-md py-1.5 px-1 transition-all duration-200 hover:bg-accent/80 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
            aria-label="TP Data Management - Dashboard"
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white shadow-md shadow-primary/25"
              style={ACTIVE_NAV_GRADIENT}
              aria-hidden
            >
              <LayoutDashboard className="size-4" aria-hidden />
            </span>
            <span className="text-base font-bold tracking-tight text-foreground">
              TP Data Mgmt
            </span>
          </Link>
          <button
            type="button"
            onClick={handleCloseSidebar}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
            aria-label="Close sidebar"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        {/* Nav — no scroll; sidebar height fixed to screen */}
        <nav className="flex-1 min-h-0 py-4 px-3 space-y-1" role="navigation">
          {DASHBOARD_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = isNavActive(item.path);
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleCloseSidebar}
                className={cn(
                  "flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2",
                  isActive
                    ? "text-white shadow-md shadow-primary/25"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
                )}
                style={isActive ? ACTIVE_NAV_GRADIENT : undefined}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="size-5 shrink-0 opacity-90" aria-hidden />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Sign out */}
        <div className="p-3 border-t border-border/80">
          <Link
            to="/login"
            onClick={handleCloseSidebar}
            className="flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
            aria-label="Sign out"
          >
            <LogOut className="size-5 shrink-0" aria-hidden />
            Sign out
          </Link>
        </div>
      </aside>

      {/* Main content area — only this scrolls when content is large */}
      <div className="flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden">
        {/* Header */}
        <header
          className="sticky top-0 z-30 h-14 lg:h-16 shrink-0 flex items-center gap-4 px-4 sm:px-6 lg:px-8 border-b border-border/80 bg-white/90 dark:bg-[#1a1a2e]/90 backdrop-blur-xl shadow-sm shadow-black/5 supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-[#1a1a2e]/80"
          role="banner"
        >
          <button
            type="button"
            onClick={handleToggleSidebar}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            aria-expanded={sidebarOpen}
          >
            <Menu className="size-5" aria-hidden />
          </button>

          {/* Global search — hidden on smallest screens to save space */}
          <div className="flex-1 min-w-0 mx-2 sm:mx-4">
            <label htmlFor="global-search" className="sr-only">
              Search
            </label>
            <div className="relative max-w-xl">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none"
                aria-hidden
              />
              <input
                id="global-search"
                type="search"
                placeholder="Search…"
                autoComplete="off"
                className="w-full h-9 pl-9 pr-4 rounded-md border border-border bg-muted/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                aria-label="Search"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              className="p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
              aria-label="Notifications"
            >
              <Bell className="size-5" aria-hidden />
            </button>
            <div
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-md flex items-center justify-center text-sm font-semibold text-primary bg-primary/15 border border-primary/20"
              aria-hidden
            >
              U
            </div>
          </div>
        </header>

        {/* Page content */}
        <main
          className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 dashboard-main-scroll"
          role="main"
          id="main-content"
        >
          <div className="mx-auto max-w-[1600px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
