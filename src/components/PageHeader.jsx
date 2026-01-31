/**
 * Reusable page header for dashboard pages.
 * Provides consistent title and optional description.
 */

const PageHeader = ({ title, description }) => {
  return (
    <header className="mb-8">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
    </header>
  );
};

export default PageHeader;
