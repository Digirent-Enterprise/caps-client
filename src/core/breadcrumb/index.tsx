import React, { FC } from "react";

import Link from "next/link";
import { useTranslation } from "next-i18next";

const Component: FC<IBreadcrumbProps> = ({ items, currentPage }) => {
  const { t } = useTranslation("faq");
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link
                href={item.href}
                className="text-light-button-blue hover:text-light-button-blue-hover dark:text-dark-white dark:hover:text-light-button-blue-hover"
              >
                {t(item.label)}
              </Link>
            ) : (
              <span className="text-gray-500 dark:text-light-button-blue-hover">
                {currentPage ? t(currentPage) : t(item.label)}
              </span>
            )}
            {index < items.length - 1 && item.label && (
              <span className="mx-2 text-gray-400">&#8250;</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Component.displayName = "Breadcrumb";
export default Component;
