import connectDb from "@/config/database";
import Property from "@/models/Property";

//  Get /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const property = await Property.findById(params.id);

    if (!property)
      return new Response("Property not Found", {
        status: 404,
      });
    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went wrong", { status: 500 });
  }
};
