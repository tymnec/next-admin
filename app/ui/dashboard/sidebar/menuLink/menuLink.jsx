import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path}>
      <a
        className={`flex items-center ${
          pathname === item.path ? "text-blue-500" : "text-gray-700"
        } 
          hover:text-blue-500 transition duration-300`}
      >
        {item.icon}
        <span className="ml-2">{item.title}</span>
      </a>
    </Link>
  );
};

export default MenuLink;
