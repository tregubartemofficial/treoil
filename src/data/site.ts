export const site = {
  name: "TREOIL",
  legalName: "Треойл",
  url: "https://treoil.vn.ua",
  description:
    "Оливи, мастила та технічні рідини Texaco, Unil, Prista, Orlen для бізнесу. Доставка Новою Поштою по всій Україні, на об'єкт — у Вінниці та області.",
  phones: [
    { display: "063 734 11 69", href: "tel:+380637341169", e164: "+380637341169" },
    { display: "067 723 04 65", href: "tel:+380677230465", e164: "+380677230465" },
  ],
  email: "tregub.vin@gmail.com",
  address: {
    street: "вул. Максимовича, 10",
    city: "Вінниця",
    region: "Вінницька область",
    country: "UA",
  },
  // Google Maps place (CID 12149340194436113738). For a direct "write a review" dialog,
  // replace reviewUrl with https://search.google.com/local/writereview?placeid=<PLACE_ID>
  // or the short "Ask for reviews" link from Google Business Profile.
  placeUrl: "https://www.google.com/maps?cid=12149340194436113738",
  reviewUrl: "https://www.google.com/maps?cid=12149340194436113738",
  geo: { lat: 49.2382312, lng: 28.4276062 },
  mapsUrl:
    "https://www.google.com/maps/place/%D0%A2%D1%80%D0%B5%D0%BE%D0%B9%D0%BB/@49.2381933,28.4279183,17z/data=!4m6!3m5!1s0x472d5da73e9773dd:0xa89b208970bd654a!8m2!3d49.2382312!4d28.4276062",
  brands: ["Texaco", "Unil", "Prista Oil", "Orlen Oil"],
} as const;
