/**
 * Site footer. Used with Layout for non-dashboard pages.
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-6">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
        © {currentYear} TP Data Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
