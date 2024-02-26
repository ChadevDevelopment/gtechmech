import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "",
  keywords: ['', '', '', '', '', ''],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="pt-40 pb-20">
        <PrivacyPolicy />
      </div>
    </>
  );
}
