import { useContext, useEffect, useState } from "react";

import { isEmpty } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { useAuth } from "@/contexts/auth-context";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { user } = useAuth();
  const { t } = useTranslation("landing_page");

  return (
    <header
      data-testid="header"
      className="bg-opacity/60 fixed top-0 z-10 w-full bg-light-white p-2 shadow-amber-50 dark:bg-dark-gray"
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image
              src={"/static/dica.png"}
              width={331}
              height={137}
              className="w-40 bg-transparent"
              alt="dica_logo"
            />
          </div>
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={toggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full items-center justify-between ${
            isOpen ? "block" : "hidden"
          } ml-auto md:order-1 md:flex md:w-auto md:items-start`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
            <li>
              <Link href={"/"}>
                <div className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                  {t("home")}
                </div>
              </Link>
            </li>
            {isEmpty(user) ? (
              <>
                <li>
                  <Link href={"/auth/login"}>
                    <div className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                      {t("login")}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={"/auth/register"}>
                    <div className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                      {t("register")}
                    </div>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link href={"/chat"}>
                  <div className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                    {t("chat")}
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
