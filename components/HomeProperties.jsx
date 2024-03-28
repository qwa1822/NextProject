import { fetchProperties } from "@/utils/request";
import PropertiesCard from "./PropertiesCard";
import Link from "next/link";

const HomeProperties = async () => {
  const properties = await fetchProperties();

  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <div className="w-screen mx-auto">
        <div className="display w-full justify-center items-center">
          <h2 className=" text-center  rounded-xl text-black font-bold  px-2 py-2 mx-auto">
            Recent Propertices
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 px-2 py-2">
          {recentProperties === 0 && <p>No Propertices Found</p>}
          {recentProperties.map(item => (
            <PropertiesCard item={item} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center my-3">
        <Link href="/properties">
          <button className=" p-4 bg-black text-white rounded-xl hover:scale-105 transition-all duration-500 ">
            View ALl NextLink
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomeProperties;
