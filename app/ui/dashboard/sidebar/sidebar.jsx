import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();
  return (
    <div className="flex flex-col items-center justify-between h-full bg-gray-800 text-white">
      <div className="flex flex-col items-center p-4">
        <Image
          className="rounded-full"
          src={user.img || "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className="text-center mt-2">
          <span className="text-sm">{user.username}</span>
          <span className="text-xs">Administrator</span>
        </div>
      </div>
      <ul className="flex flex-col items-start space-y-2">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-sm font-semibold mb-1">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await signOut();
        }}
      >
        <button className="flex items-center text-sm text-gray-300 hover:text-white">
          <MdLogout className="mr-1" />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
