"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiUserPlus, FiUser, FiUserCheck } from "react-icons/fi";

function Sidebar() {
  const pathname = usePathname();
  const selectedPath = pathname.split("/")[1];

  const sidebar_links = [
    {
      href: "/dashboard",
      label: "Dashboard",
      page: "dashboard",
      icon: <FiUserPlus />,
    },
    {
      href: "/transactions",
      label: "Transactions",
      page: "transactions",
      icon: <FiUserCheck />,
    },
    {
      href: "/boxes",
      label: "Donation Box",
      page: "boxes",
      icon: <FiUser />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar} // Add onClick handler to toggle sidebar visibility
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-50 w-64 h-screen transition-transform sm:translate-x-0 ${
          isOpen ? "" : "-translate-x-full" // Add conditional class to control sidebar visibility
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-between items-center my-5 ml-3">
            {/* <Image src={logo} width={150} height={150} alt="Ryseup logo" /> */}
            <h1 className="font-bold text-primary text-xl">DBOX</h1>
            <AiOutlineCloseCircle
              className="cursor-pointer sm:hidden text-gray-500"
              onClick={toggleSidebar}
            />
          </div>
          <ul className="space-y-2 font-medium">
            {sidebar_links?.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                    selectedPath === link.page ? "active-link " : ""
                  }`}
                >
                  {link.icon}
                  <span className="ms-3">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
