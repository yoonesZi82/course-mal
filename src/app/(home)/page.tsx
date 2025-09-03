import BouncingLoader from "@/components/loader/bouncing/bouncing-loader";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 py-4 h-screen container">
      <BouncingLoader />
      <Button className="px-6" asChild>
        <Link href="/panel">
          {" "}
          Go to panel
          <LayoutDashboard />
        </Link>
      </Button>
    </div>
  );
}
