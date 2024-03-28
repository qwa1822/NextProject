import 이미지 from "@/assets/images/properties/a1.jpg";
import { getRouteMatcher } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";
// import 이미지2 from "@/";
function PropertiesCard({ item }) {
  const getRateDisplay = () => {
    const { rates } = item;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className="w-full flex flex-col border rounded-xl shadow-xl  drop-shadow-xl">
      <Link href={`/properties/${item._id}`}>
        <div className="relative">
          <img
            src={`/images/properties/${item.images[0]}`}
            className="w-full h-full"
            alt=""
          />
          {/* <Image
          sizes="100vw"
          height={0}
          width={0}
          src={`/assets/images/properties/${item.images[0]}`}
          alt=""
        /> */}

          <span className="absolute px-2 py-2 rounded-xl right-0 top-2 bg-white text-blue-400">
            ${getRateDisplay()}
          </span>
        </div>

        <div className="w-full my-2  px-2 py-2">
          <h2 className="text-slate-500">{item.type}</h2>

          <span className="md:text-2xl text-xl font-bold">{item.name}</span>
        </div>
      </Link>

      <div className="flex my-2 justify-center items-center gap-3">
        <FaBed className="inline mr-2" />
        <span className="text-sm text-red-500">{item.beds}Beds</span>
        <FaBath className="inline mr-2" />
        <span className="text-sm text-slate-500">{item.baths} Baths</span>
        <FaRulerCombined className="inline mr-2" />

        <span className="text-sm text-slate-500">{item.square_feat} sqft</span>
      </div>

      <div className="flex justify-center gap-3">
        {item.rates.nightly && (
          <>
            <FaMoneyBill className="inline mr-2" />
            <span className="text-green-200 text-sm">Nightly</span>
          </>
        )}

        {item.rates.weekly && (
          <span className="text-green-200 text-sm">Weekly</span>
        )}

        {item.rates.monthly && (
          <span className="text-green-200 text-sm">Monthly</span>
        )}
      </div>

      <div className="flex items-center justify-between  px-2 py-2">
        <div className="px-2 py-2">
          <span className="text-sm flex gap-3 text-red-500">
            <FaMapMarker className="text-orange-700" />
            {item.location.city} {item.location.state}
          </span>
        </div>
        <Link href={`/properties/${item._id}`}>
          <button className="bg-blue-500 text-white rounded-xl py-2 px-2">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PropertiesCard;
