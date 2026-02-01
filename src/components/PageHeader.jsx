/**
 * Reusable page header for dashboard pages.
 * Provides consistent title and optional description.
 */

const PageHeader = ({ title, description }) => {
  return (
    <header className="mb-6 sm:mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      {description && (
        <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
      )}
    </header>
  );
};

export default PageHeader;
