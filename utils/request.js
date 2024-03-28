const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function fetchProperties() {
  try {
    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fecth Data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProperty(id) {
  try {
    // Handle the case where the domain is not avaliavble

    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fecth Data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
