import Link from "next/link";
import React from "react";
// import properties from "@/properties.json";
import PropertiesCard from "@/components/PropertiesCard";
import { fetchProperties } from "@/utils/request";

const PropertiesPage = async () => {
  const properties = await fetchProperties();
  if (properties.length === 0) {
    <p>No Properties found </p>;
  }

  // Sort Properties by date

  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return (
    <div className="px-4 py-6">
      <div className="container   m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map(item => (
            <PropertiesCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
