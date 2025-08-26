"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full h-screen">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="font-bold text-4xl">404</h1>
        <p className="font-bold text-2xl">Page not found</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button
          onClick={() => {
            window.history.back();
          }}
        >
          <ArrowLeft />
          Back to previous page
        </Button>
        <Button asChild>
          <Link href="/">
            <Home />
            Home page
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
