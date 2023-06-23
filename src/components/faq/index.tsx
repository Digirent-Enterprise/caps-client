import React from "react";

import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/router";

import { questions } from "@/components/faq/constant";
import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";
import { convertUrlToTitle } from "@/utils/common";

const Component = () => {
  const router = useRouter();
  const currentPage = router.pathname;

  const _handleQuestionClick = (question: any) => {
    router.push(`/faq/${question.url}`);
  };

  return (
    <div className="bg-background-gray flex min-h-screen flex-col dark:bg-dark-gray-heavy">
      <div className="mb-10">
        <FaqHeader currentPage={convertUrlToTitle(currentPage)} />
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col gap-5">
            <section className="bg-background-gray flex flex-col rounded-xl border border-solid border-light-gray p-2 dark:border-dark-white dark:bg-dark-gray-heavy sm:p-3">
              {questions.map((question) => (
                <div
                  key={question.id}
                  onClick={() => _handleQuestionClick(question)}
                  className={`group/article flex flex-row justify-between gap-2 rounded-lg px-3 py-2 text-light-blue-hover no-underline transition duration-250 ease-linear hover:bg-light-button-green-hover hover:text-light-background-gray dark:text-dark-white dark:hover:text-dark-gray-heavy sm:py-3 ${
                    question.title === currentPage ? "current-page" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <h3 className="mr-2">{question.title}</h3>
                  </div>
                  <IconArrowRight size={16} className="self-center" />
                </div>
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
