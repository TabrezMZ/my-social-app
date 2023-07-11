import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 'vhvsbP_52',
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "Tech enthusiast. Innovations. Geek. 🤓",
    website: "https://adarshbalika.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dogvmq3s7/image/upload/v1688277178/iShare/atbwnvlcabmkhqem1r2k.png",
    profileBackground:
      "https://res.cloudinary.com/dogvmq3s7/image/upload/v1688277340/iShare/qlexx8eovrlvvunpmbtt.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'd3Bie_250',
    firstName: "Vishal",
    lastName: "Rawat",
    username: "thevishal",
    password: "vishalRawat123",
    profileAvatar: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 's20Bie_32',
    firstName: "Navneet",
    lastName: "Kumar",
    username: "navneetkumar",
    password: "navneetKumar123",
    bio: " Lover of words. Books. 📚",
    website: "https://www.amazon.in/Books",
    profileAvatar:
      "https://res.cloudinary.com/dogvmq3s7/image/upload/v1686487408/samples/people/kitchen-bar.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 's2d3Bieol_0',
    firstName: "Surya",
    lastName: "Shah",
    username: "shahsurya",
    password: "suryaShah123",
    bio: "Fitness addict. Healthy lifestyle. 💪",
    website: "https://www.healthline.com/",
    profileAvatar:
      "https://res.cloudinary.com/dogvmq3s7/image/upload/v1686487410/samples/people/smiling-man.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 's2Biewe_9',
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamSoni123",
    bio: "Wanderlust. Adventure seeker. ✈️",
    website: "https://adventure.com/",
    profileAvatar:
      "https://res.cloudinary.com/dogvmq3s7/image/upload/v1686487412/samples/people/boy-snow-hoodie.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "s2d3Bie-8",
    firstName: "John",
    lastName: "William",
    username: "johnwilliam",
    email: "johnwilliam03@gmail.com",
    password: "john123@03",
    bio: "Senior Software Developer at Google",
    website: "https://johnwilliam.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659911/tech-social/man3_a5om95.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1688279203/tech-social/pexels-photo-531880.jpeg_sxh99n.jpg",
    createdAt: "2022-03-12T10:35:21+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "e6a9Gqs-u",
    firstName: "Lina",
    lastName: "Abott",
    username: "linaabott",
    email: "linaabott56@gmail.com",
    password: "lina453@56",
    bio: "Backend Developer at Amazon",
    website: "https://linaabott.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659986/tech-social/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter_b9hnrt.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1688279203/tech-social/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827_xd3axv.jpg",
    createdAt: "2022-01-11T10:25:07+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  }
];
