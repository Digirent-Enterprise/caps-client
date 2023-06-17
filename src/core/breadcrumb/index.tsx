import React from "react";

import Link from "next/link";

const Component: React.FC<IBreadcrumbProps> = ({ items, currentPage }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link
                href={item.href}
                className="text-light-button-green hover:text-light-button-green-hover dark:text-dark-white dark:hover:text-dark-orange"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">
                {currentPage ? currentPage : item.label}
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
