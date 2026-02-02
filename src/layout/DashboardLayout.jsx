import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Bell, Menu, Search } from "lucide-react";

import { DASHBOARD_NAV_ITEMS } from "@/lib/dashboardNav";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

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
      <DashboardSidebar
        sidebarOpen={sidebarOpen}
        handleCloseSidebar={handleCloseSidebar}
        navItems={DASHBOARD_NAV_ITEMS}
        isNavActive={isNavActive}
      />

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
