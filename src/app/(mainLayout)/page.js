import Hero from "@/components/Hero";
import TopWriters from "@/components/TopWriters";

export default function Homepage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Home Page page */}
      <Hero></Hero>
      <TopWriters></TopWriters>
    </div>
  );
}
