import FeatureDetails from "@/components/Features/FeatureDetail";
import { Feature } from '@/types/feature';
import featuresData from "@/components/Features/featuresData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "",
  keywords: ['', '', '', '', '', '', '', '', '', ''],
};

const FeatureDetailsPage = async ({ params: { id } }: { params: { id: string } }) => {
  const feature: Feature = featuresData.find((p) => p.id === id)!

  if (!feature) {
    return (
      <div>
        <p>Feature not found</p>
      </div>
    );
  }

  return (
    <div>
      <FeatureDetails feature={feature} />
    </div>
  );
};

export default FeatureDetailsPage;