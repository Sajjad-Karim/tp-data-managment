import { Link, NavLink } from "react-router-dom";
import { LayoutDashboard, LogOut, X } from "lucide-react";
import { cn } from "@/lib/utils";

const ACTIVE_NAV_GRADIENT = {
  background: "linear-gradient(135deg, #c41e3a 0%, #ea580c 100%)",
};

/**
 * Dashboard sidebar (desktop + mobile drawer).
 * - Fixed to viewport height (h-screen)
 * - No internal scrolling (nav list fits current item count)
 * - Mobile: overlay + slide-in drawer
 */
const DashboardSidebar = ({
  sidebarOpen,
  handleCloseSidebar,
  navItems,
  isNavActive,
}) => {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={handleCloseSidebar}
        aria-hidden={!sidebarOpen}
      />

      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-50 h-screen flex flex-col shrink-0 w-72",
          "bg-white dark:bg-[#1a1a2e] border-r border-border/80",
          "shadow-xl shadow-black/5 dark:shadow-black/20 lg:shadow-[2px_0_12px_rgba(0,0,0,0.04)] dark:lg:shadow-[2px_0_12px_rgba(0,0,0,0.2)]",
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
          {navItems.map((item) => {
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
    </>
  );
};

export default DashboardSidebar;
