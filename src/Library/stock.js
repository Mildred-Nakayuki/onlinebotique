import DressOne from "../images/dresses/DressOne.jpg";
import DressTwo from "../images/dresses/DressTwo.jpg";
import DressThree from "../images/dresses/DressThree.jpg";
import DressFour from "../images/dresses/DressFour.jpg";
import DressFive from "../images/dresses/DressFive.jpg";
import DressSix from "../images/dresses/DressSix.jpg";
import DressSeven from "../images/dresses/DressSeven.jpg";
import DressEight from "../images/dresses/DressEight.jpg";
import BusinessSuits from "../images/formal/BusinessSuits.jpg";
import GreyBlazer from "../images/formal/GreyBlazer.jpg";
import OfficeUniform from "../images/formal/OfficeUniform.jpg";
import Waistcoat from "../images/formal/Waistcoat.jpg";
import WomenShirts from "../images/formal/WomenShirts.jpg";
import WorkWearDress from "../images/formal/WorkWearDress.jpg";
import Blackjean from "../images/jeans/BlackJean.jpg";
import Bluejean from "../images/jeans/BlueJean.jpg";
import Floraljean from "../images/jeans/FloralJean.jpg";
import Greenjean from "../images/jeans/GreenJean.jpg";
import Whitejean from "../images/jeans/whiteJean.jpg";
import BlackSkirt from "../images/skirts/BlackSkirt.jpg";
import BlueSkirt from "../images/skirts/BlueSkirt.jpg";
import CheckedSkirt from "../images/skirts/CheckedSkirt.jpg";
import GreySkirt from "../images/skirts/GreySkirt.jpg";
import LongSkirt from "../images/skirts/LongSkirt.jpg";
import MaroonSkirt from "../images/skirts/MaroonSkirt.jpg";
import BlueTop from "../images/tops/BlueTop.jpg";
import BrownTop from "../images/tops/BrownTop.jpg";
import FloralTop from "../images/tops/FloralTop.jpg";
import GreyTop from "../images/tops/GreyTop.jpg";
import Orange2Top from "../images/tops/Orange2Top.jpg";
import OrangeTop from "../images/tops/OrangeTop.jpg";
import PinkTop from "../images/tops/PinkTop.jpg";

const data = [
  {
    id: 1,
    category: "Dresses",
    product: "DressOne",
    image: DressOne,
    desc: "Red, Long, party wear",
    price: 100000,
  },
  {
    id: 2,
    category: "Dresses",
    product: "DressTwo",
    image: DressTwo,
    desc: "Peach, Long, party wear",
    price: 150000,
  },
  {
    id: 3,
    category: "Dresses",
    product: "DressThree",
    image: DressThree,
    desc: "Red, Long, party wear",
    price: 120000,
  },
  {
    id: 4,
    category: "Dresses",
    product: "DressFour",
    image: DressFour,
    desc: "Red, short, prom wear",
    price: 70000,
  },
  {
    id: 5,
    category: "Dresses",
    product: "DressFive",
    image: DressFive,
    desc: "Black, Short, party wear",
    price: 110000,
  },
  {
    id: 6,
    category: "Dresses",
    product: "DressSix",
    image: DressSix,
    desc: "Red&white, Long, Dinner wear",
    price: 170000,
  },
  {
    id: 7,
    category: "Dresses",
    product: "DressSeven",
    image: DressSeven,
    desc: "Blue, Short, office wear",
    price: 90000,
  },
  {
    id: 8,
    category: "Dresses",
    product: "DressEight",
    image: DressEight,
    desc: "Black, Short, casual wear",
    price: 30000,
  },
  ,
  {
    id: 9,
    category: "Formal",
    product: "BusinessSuits",
    image: BusinessSuits,
    desc: "Purple, Short, office wear",
    price: 300000,
  },
  {
    id: 10,
    category: "Formal",
    product: "GreyBlazer",
    image: GreyBlazer,
    desc: "Grey, Short, office wear",
    price: 100000,
  },
  {
    id: 11,
    category: "Formal",
    product: "OfficeUniform",
    image: OfficeUniform,
    desc: "Black striped, Long, office wear",
    price: 200000,
  },
  {
    id: 12,
    category: "Formal",
    product: "Waistcoat",
    image: Waistcoat,
    desc: "Black striped, Short, office wear",
    price: 200000,
  },
  {
    id: 13,
    category: "Formal",
    product: "WomenShirts",
    image: WomenShirts,
    desc: "Black & white, Short, office wear",
    price: 150000,
  },
  {
    id: 14,
    category: "Formal",
    product: "WorkWearDress",
    image: WorkWearDress,
    desc: "Blue & white, Short, office wear",
    price: 120000,
  },
  ,
  {
    id: 15,
    category: "jeans",
    product: "Blackjean",
    image: Blackjean,
    desc: "Black, Long, High waist",
    price: 35000,
  },
  {
    id: 16,
    category: "jeans",
    product: "Bluejean",
    image: Bluejean,
    desc: "Blue, Long, High waist",
    price: 35000,
  },
  {
    id: 17,
    category: "jeans",
    product: "Floraljean",
    image: Floraljean,
    desc: "Floral, Long, Low waist",
    price: 25000,
  },
  {
    id: 18,
    category: "jeans",
    product: "Greenjean",
    image: Greenjean,
    desc: "Green, Long, High waist",
    price: 30000,
  },
  {
    id: 19,
    category: "jeans",
    product: "Pairjean",
    image: Floraljean,
    desc: "Blue & Grey, Long, Low waist",
    price: 70000,
  },
  {
    id: 20,
    category: "jeans",
    product: "Whitejean",
    image: Whitejean,
    desc: "White, Long, Low waist",
    price: 20000,
  },
  ,
  {
    id: 21,
    category: "skirts",
    product: "BlackSkirt",
    image: BlackSkirt,
    desc: "Black, Short, Round",
    price: 25000,
  },
  {
    id: 22,
    category: "skirts",
    product: "BlueSkirt",
    image: BlueSkirt,
    desc: "Blue, Short, Tight",
    price: 35000,
  },
  {
    id: 23,
    category: "skirts",
    product: "CheckedSkirt",
    image: CheckedSkirt,
    desc: "Checked, Short, Tight",
    price: 35000,
  },
  {
    id: 24,
    category: "skirts",
    product: "GreySkirt",
    image: GreySkirt,
    desc: "Grey, Short, Tight",
    price: 30000,
  },
  {
    id: 25,
    category: "skirts",
    product: "LongSkirt",
    image: LongSkirt,
    desc: "Black, Long, Tight",
    price: 50000,
  },
  {
    id: 26,
    category: "skirts",
    product: "MaroonSkirt",
    image: MaroonSkirt,
    desc: "Maroon, Short, Tight",
    price: 32000,
  },
  ,
  {
    id: 27,
    category: "tops",
    product: "BlueTop",
    image: BlueTop,
    desc: "Blue, Long sleeved, Chiffon",
    price: 30000,
  },
  {
    id: 28,
    category: "tops",
    product: "BrownTop",
    image: BrownTop,
    desc: "Brown, Short sleeved, Chiffon",
    price: 30000,
  },
  {
    id: 29,
    category: "tops",
    product: "FloralTop",
    image: FloralTop,
    desc: "Floral, Short sleeved, Cotton",
    price: 42000,
  },
  {
    id: 30,
    category: "tops",
    product: "GreyTop",
    image: GreyTop,
    desc: "Grey, Short sleeved, Cotton",
    price: 25000,
  },
  {
    id: 31,
    category: "tops",
    product: "Orange2Top",
    image: Orange2Top,
    desc: "Orange, Short sleeved, Nylon",
    price: 35000,
  },
  {
    id: 32,
    category: "tops",
    product: "OrangeTop",
    image: OrangeTop,
    desc: "Orange, Short sleeved, Cotton",
    price: 35000,
  },
  {
    id: 33,
    category: "tops",
    product: "PinkTop",
    image: PinkTop,
    desc: "Pink, Long sleeved, Cotton",
    price: 55000,
  },
  ,
];

export default data;
