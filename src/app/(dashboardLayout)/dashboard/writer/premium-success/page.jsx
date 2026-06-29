import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { Button } from "@heroui/react";

import Link from "next/link";
import { baseURL } from "@/lib/api/baseUrl";

// import { stripe } from "../../lib/stripe";

export default async function PremiumSuccess({ searchParams }) {
  const { session_id } = await searchParams;
  console.log(session_id, "session_id ");

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });
  console.log(session);
  // ****

  const res = await fetch(
    `${baseURL}/api/users/upgrade-premium/${session?.customer_email}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ type: "subscription" }),
    },
  );
  const data = await res.json();
  console.log(data, "stripe premium");

  return (
    <section id="success">
      <p>
        We appreciate your business! A confirmation email will be sent to the
        user.If you have any questions, please email{" "}
        <a href="mailto:orders@example.com">orders@example.com</a>.
      </p>
      <Link href="/ebooks">
        <Button className="px-6 py-3 mt-4 font-semibold text-white bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg hover:from-cyan-500 hover:via-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(30,144,255,0.3)]">
          Browse Ebooks
        </Button>
      </Link>
    </section>
  );
}
