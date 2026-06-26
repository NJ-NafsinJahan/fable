import React from "react";
import DashboardHeader from "@/components/DashboardHeader";

const addEbookPage = () => {
  return (
    <div>
      {/* HEADER SECTION */}
      <DashboardHeader
        title="Publish New Ebook"
        description="Bring your next masterpiece to life. Fill in the details, upload your manuscript, and share it with the world."
        badge="New Creation"
      />
    </div>
  );
};

export default addEbookPage;
