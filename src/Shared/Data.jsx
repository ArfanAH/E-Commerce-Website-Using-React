import { FaTshirt, FaShoePrints, FaMobileAlt, FaLaptop, FaHatCowboy, FaShoppingBasket } from 'react-icons/fa'; 
import { GiSunglasses } from 'react-icons/gi';
import { MdBook } from 'react-icons/md'; // Book icon
import { AiFillHome } from 'react-icons/ai'; // Home icon
import { BiHealth } from 'react-icons/bi'; // Health icon
import { IoGameController } from 'react-icons/io5'; // Games icon
import { GiSoccerBall } from 'react-icons/gi'; // Sports icon
import { FaCar } from 'react-icons/fa'; // Automotive icon
import { MdEngineering } from 'react-icons/md'; 

// Product List
export const ProductList = [
  {
    id: 1,
    name: 'Bags'
  },
  {
    id: 2,
    name: 'Shoes'
  },
  {
    id: 3,
    name: 'Watches'
  },
  {
    id: 4,
    name: 'Sunglasses'
  },
  {
    id: 5,
    name: 'Hats'
  },
  {
    id: 6,
    name: 'Mobiles'
  },
  {
    id: 7,
    name: 'Laptops'
  },
  {
    id: 8,
    name: 'Headphones'
  },
  {
    id: 9,
    name: 'Cameras'
  },
  {
    id: 10,
    name: 'Grocery'
  },
];

// Category List
export const CategoryList = [
  {
    id: 1,
    name: 'Electronics',
    icon: <FaMobileAlt />  // Mobile icon
  },
  {
    id: 2,
    name: 'Clothing',
    icon: <FaTshirt />  // T-shirt icon
  },
  {
    id: 3,
    name: 'Books',
    icon: <MdBook />  // Book icon
  },
  {
    id: 4,
    name: 'Home & Kitchen',
    icon: <AiFillHome />  // Home icon
  },
  {
    id: 5,
    name: 'Beauty & Personal',
    icon: <FaHatCowboy />  // Placeholder icon, replace as needed
  },
  {
    id: 6,
    name: 'Health & Household',
    icon: <BiHealth />  // Health icon
  },
  {
    id: 7,
    name: 'Toys & Games',
    icon: <IoGameController />  // Games icon
  },
  {
    id: 8,
    name: 'Sports & Outdoors',
    icon: <GiSoccerBall />  // Sports icon
  },
  {
    id: 9,
    name: 'Automotive',
    icon: <FaCar />  // Automotive icon
  },
  {
    id: 10,
    name: 'Industrial & Scientific',
    icon: <MdEngineering />  // Industrial icon
  }
];
