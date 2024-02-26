import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "",
  keywords: ['', '', '', '', '', '', ''],
};

export default function ContactPage() {
  return (
    <>
      <Contact /> 
    </>
  );
}
