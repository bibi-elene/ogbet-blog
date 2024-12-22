import {
  FaUser,
  FaCog,
  FaGamepad,
  FaDice,
  FaMoneyCheck,
  FaGift,
  FaCrown,
  FaLifeRing,
  FaFileAlt,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

export const PageOptions = [
  { name: "My Account", href: "/my-account", icon: <FaUser /> },
  { name: "Settings", href: "/settings", icon: <FaCog /> },
  { name: "Live Games", href: "/live-games", icon: <FaGamepad /> },
  { name: "Slots", href: "/slots", icon: <FaDice /> },
  { name: "Table Games", href: "/table-games", icon: <FaGamepad /> },
  { name: "Transactions", href: "/transactions", icon: <FaMoneyCheck /> },
  { name: "Bonuses & Promotions", href: "/bonuses", icon: <FaGift /> },
  { name: "VIP Program", href: "/vip-program", icon: <FaCrown /> },
  { name: "Support", href: "/support", icon: <FaLifeRing /> },
  { name: "Terms & Conditions", href: "/terms", icon: <FaFileAlt /> },
  { name: "Privacy Policy", href: "/privacy-policy", icon: <FaShieldAlt /> },
  {
    name: "Responsible Gaming",
    href: "/responsible-gaming",
    icon: <FaUserShield />,
  },
];
