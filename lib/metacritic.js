export async function getLatestDogs() {
  const LATEST_DOGS =
    "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10";

  const rawData = await fetch(LATEST_DOGS, {
    headers: {
      "x-api-key":
        "live_3ULUTrsojpYLcZ8STrUz2BBr2wS3x9fUcvJFFsyJShPBunIQ9oSaMKJCevYtaKwe",
    },
  });
  const json = await rawData.json();

  return json.map((item) => {
    const { id, url, breeds } = item;

    // Obtener información de la raza (primer elemento del array)
    const breed = breeds[0] || {};
    const {
      name = "Unknown Breed",
      temperament = "Friendly",
      life_span = "10-15 years",
      breed_group = "Mixed",
      bred_for = "Companion",
    } = breed;

    return {
      id,
      title: name,
      image: url,
      description: `${bred_for} - ${temperament}`,
      lifeSpan: life_span,
      breedGroup: breed_group,
    };
  });
}

export async function getDogDetails(dogId) {
  const DOG_DETAILS = `https://api.thedogapi.com/v1/images/${dogId}`;

  const rawData = await fetch(DOG_DETAILS, {
    headers: {
      "x-api-key":
        "live_3ULUTrsojpYLcZ8STrUz2BBr2wS3x9fUcvJFFsyJShPBunIQ9oSaMKJCevYtaKwe",
    },
  });
  const json = await rawData.json();

  const { id, url, breeds } = json;

  // Obtener información detallada de la raza
  const breed = breeds[0] || {};
  const {
    name = "Unknown Breed",
    temperament = "Friendly",
    life_span = "10-15 years",
    breed_group = "Mixed",
    bred_for = "Companion",
    height = {},
    weight = {},
  } = breed;

  // Crear reviews simuladas basadas en el temperamento
  const temperamentArray = temperament.split(", ");
  const reviews = temperamentArray.slice(0, 3).map((trait, index) => ({
    quote: `This breed is known for being ${trait.toLowerCase()}. Great companion!`,
    score: Math.floor(Math.random() * 3) + 8, // Score entre 8-10
    date: new Date().toISOString().split("T")[0],
    publicationName: `Dog Review ${index + 1}`,
    author: `Expert ${index + 1}`,
  }));

  return {
    img: url,
    title: name,
    slug: id,
    description: `${bred_for}. This breed typically lives ${life_span} and belongs to the ${breed_group} group. Height: ${height.metric || "Variable"} cm, Weight: ${weight.metric || "Variable"} kg`,
    score: Math.floor(Math.random() * 20) + 80, // Score entre 80-100 para perros
    reviews,
  };
}
