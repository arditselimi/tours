// import icons
import facebook from "./assets/icons/facebook.png";
import youtube from "./assets/icons/youtube.png";
import whatsapp from "./assets/icons/whatsapp.png";
import expertIcon from "./assets/icons/rating.png";
import hikingIcon from "./assets/icons/hiking.png";
import transIcon from "./assets/icons/fast-delivery.png";

// import images
import tour1 from "./assets/images/tour1.jpg";
import tour2 from "./assets/images/tour2.jpeg";
import tour3 from "./assets/images/tour3.jpeg";
import tour4 from "./assets/images/tour4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "Home",
  },

  {
    id: 2,
    href: "#services",
    text: "Services",
  },

  {
    id: 3,
    href: "#tours",
    text: "Tours",
  },

  {
    id: 4,
    href: "#about",
    text: "About",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://google.com",
    icon: facebook,
  },

  {
    id: 2,
    href: "https://google.com",
    icon: youtube,
  },

  {
    id: 3,
    href: "https://google.com",
    icon: whatsapp,
  },
];

export const services = [
  { id: 1, text: "Expert Tour Guide", icon: expertIcon },
  { id: 2, text: "Adventure Activities", icon: hikingIcon },
  { id: 1, text: "Transportation Exellence", icon: transIcon },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    heading: "Mystical Wonders of Machu Picchu Expedition",
    text: "Explore the ancient ruins of Machu Picchu, a UNESCO World Heritage site.Trek through the breathtaking landscapes of the Andes Mountains.Immerse yourself in the rich Inca history and culture.Experience traditional Peruvian cuisine and interact with local communities.",
    location: "Peru",
    days: 5,
    price: 1000,
  },
  {
    id: 2,
    image: tour2,
    heading: "The Grand Tour of Europe",
    text: "Explore the ancient ruins of Machu Picchu, a UNESCO World Heritage site.Trek through the breathtaking landscapes of the Andes Mountains.Immerse yourself in the rich Inca history and culture.Experience traditional Peruvian cuisine and interact with local communities.",
    location: "Paris",
    days: 3,
    price: 1200,
  },
  {
    id: 3,
    image: tour3,
    heading: "The Southeast Asia Adventure",
    text: "Explore the ancient ruins of Machu Picchu, a UNESCO World Heritage site.Trek through the breathtaking landscapes of the Andes Mountains.Immerse yourself in the rich Inca history and culture.Experience traditional Peruvian cuisine and interact with local communities.",
    location: "Bali",
    days: 6,
    price: 1500,
  },
  {
    id: 4,
    image: tour4,
    heading: "The South American Discovery",
    text: "Explore the ancient ruins of Machu Picchu, a UNESCO World Heritage site.Trek through the breathtaking landscapes of the Andes Mountains.Immerse yourself in the rich Inca history and culture.Experience traditional Peruvian cuisine and interact with local communities.",
    location: "Rio de Janerio",
    days: 3,
    price: 1200,
  },
];
