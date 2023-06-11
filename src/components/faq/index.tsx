import React, { useState } from "react";

import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

import { questions } from "@/components/faq/constant";
import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";

const Component = () => {
  const [currentPage, setCurrentPage] = useState("");

  const _handleQuestionClick = (title: string) => {
    setCurrentPage(title);
  };

  return (
    <div className="flex min-h-screen bg-background-gray dark:bg-dark-blue flex-col">
      <div className="my-10">
        <FaqHeader />
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col gap-5">
            <section className="border-light-blue-hover dark:border-dark-white flex flex-col rounded-xl border border-solid bg-background-gray dark:bg-dark-blue p-2 sm:p-3">
              {questions.map((question) => (
                <Link
                  key={question.id}
                  href={`/faq/${question.url}`}
                  onClick={() => _handleQuestionClick(question.title)}
                  className="group/article text-light-blue-hover dark:text-dark-white flex flex-row justify-between gap-2 rounded-lg px-3 py-2 no-underline transition duration-250 ease-linear hover:bg-light-border-gray hover:text-light-background-gray dark:hover:text-dark-orange sm:py-3"
                >
                  <div className="flex items-center">
                    <h3 className="mr-2">{question.title}</h3>
                  </div>
                  <IconArrowRight size={16} className="self-center" />
                </Link>
              ))}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "FaqComponent";
export default Component;
