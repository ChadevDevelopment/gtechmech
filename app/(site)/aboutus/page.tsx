import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "",
  keywords: ['', '', '', '', '', '', '', '', '', ''],
};

export default function AboutUsPage() {
  return (
    <>
      <div className="pt-40 pb-20">
        <About />
      </div>
    </>
  );
}
