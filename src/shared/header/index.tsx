import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { isEmpty } from "lodash";
import useUser from "@/hooks/user/useUser";
import { useTranslation } from "next-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { getUser, user } = useUser();
  const { t } = useTranslation("landing_page");
  useEffect(() => {
    getUser();
  }, []);
  return (
    <header
      data-testid="header"
      className="h-22 fixed top-0 z-10 w-full bg-light-white bg-opacity-60 p-2 shadow-amber-50 dark:bg-dark-gray"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image
              src={"/static/dica.png"}
              width={331}
              height={137}
              className="h-17 w-40 bg-transparent"
              alt="dica_logo"
            />
          </div>
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={toggle}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full ${
            isOpen ? "block" : "hidden"
          } md:flex md:w-auto md:order-1 md:items-start ml-auto`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href={"/landing-page"}>
                <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  {t("home")}
                </div>
              </Link>
            </li>
            {isEmpty(user) ? (
              <>
                <li>
                  <Link href={"/auth/login"}>
                    <div className="bg-gray-50 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      {t("login")}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={"/auth/register"}>
                    <div className="bg-gray-50 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      {t("register")}
                    </div>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link href={"/home"}>
                  <div className="bg-gray-50 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    {t("my_health")}
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
