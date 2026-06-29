import { auth } from "@/lib/auth";
import ManageEbookClient from "./ManageEbookClient";
import { headers } from "next/headers";
import { myEbooks } from "@/lib/api/ebooks/data";
import { Suspense } from "react";
import { Spinner } from "@heroui/react";

const ManageEbook = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const ebooks = await myEbooks(session?.user?.email);

  return (
    <div className="p-6 bg-slate-950 min-h-screen text-slate-300">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white">Manage Your Ebooks</h2>
          <p className="text-xs text-slate-500">
            View, edit, and track your published ebooks status.
          </p>
        </div>
        {/* Table */}
        <Suspense fallback={<Spinner></Spinner>}>
          <ManageEbookClient ebooks={ebooks}></ManageEbookClient>
        </Suspense>
      </div>
    </div>
  );
};

export default ManageEbook;
