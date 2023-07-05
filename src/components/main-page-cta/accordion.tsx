import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <h2 id={`accordion-collapse-heading-${index + 1}`} className="mb-0">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
              data-accordion-target={`#accordion-collapse-body-${index + 1}`}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-collapse-body-${index + 1}`}
              onClick={() => handleClick(index)}
            >
              <span>{item.title}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 rotate-180 shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index + 1}`}
            className={`${activeIndex === index ? "" : "hidden"}`}
            aria-labelledby={`accordion-collapse-heading-${index + 1}`}
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item.content}
              </p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Accordion;
