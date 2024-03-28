"use client";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/request";
import { useEffect, useState } from "react";
import ProperyHeaderImage from "@/components/ProperyHeaderImage";
import PropertyHeaderImage from "@/components/ProperyHeaderImage";
import Link from "next/link";
import PropertiesDetail from "@/components/propertDetail";

const PropertyId = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;

      try {
        const fetchedProperty = await fetchProperty(id);
        setProperty(fetchedProperty);
      } catch (error) {
        console.error("Error Fetching property", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [id]);

  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }
  return (
    <>
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <PropertiesDetail property={property} />
        </>
      )}
    </>
  );
};

export default PropertyId;
