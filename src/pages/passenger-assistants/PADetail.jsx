import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const PADetail = () => {
  const { id } = useParams();

  return (
    <div>
      <Link
        to="/passenger-assistants"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to passenger assistants
      </Link>
      <PageHeader
        title={`Passenger Assistant #${id}`}
        description="View and edit passenger assistant details."
      />
      {/* PA detail content will be added here */}
    </div>
  );
};

export default PADetail;
