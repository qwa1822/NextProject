import connectDb from "@/config/database";
import Property from "@/models/Property";

//  Get /api/properties
export const GET = async request => {
  try {
    await connectDb();

    const properties = await Property.find({});
    console.log(properties);
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went wrong", { status: 500 });
  }
};
