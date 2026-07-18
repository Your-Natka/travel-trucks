export const mapCamper = (camper) => ({
  id: camper.id,

  name: camper.name ?? "",

  price: Number(camper.price),

  location: camper.location ?? "",

  rating: camper.rating ?? 0,

  reviews: camper.reviews ?? [],

  description: camper.description ?? "",

  gallery: camper.gallery ?? [],

  transmission: camper.transmission ?? "",

  engine: camper.engine ?? "",

  AC: camper.AC ?? false,

  bathroom: camper.bathroom ?? false,

  kitchen: camper.kitchen ?? false,

  TV: camper.TV ?? false,

  radio: camper.radio ?? false,

  refrigerator: camper.refrigerator ?? false,

  microwave: camper.microwave ?? false,

  gas: camper.gas ?? false,

  water: camper.water ?? false,

  form: camper.form ?? "",

  length: camper.length ?? "",

  width: camper.width ?? "",

  height: camper.height ?? "",

  tank: camper.tank ?? "",

  consumption: camper.consumption ?? "",
});
