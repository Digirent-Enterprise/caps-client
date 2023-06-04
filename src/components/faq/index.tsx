import React, { useContext } from "react";

import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/router";

import { questions } from "@/components/faq/constant";
import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";

const Component = () => {
  const router = useRouter();
  const currentPage = router.pathname;

  const _handleQuestionClick = (question: any) => {
    router.push(`/faq/${question.url}`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="mb-10">
        <FaqHeader currentPage={currentPage} />
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col gap-5">
            <section className="flex flex-col rounded-xl border border-solid  bg-white p-2 sm:p-3">
              {questions.map((question) => (
                <div
                  key={question.id}
                  onClick={() => _handleQuestionClick(question)}
                  className={`group/article flex flex-row justify-between gap-2 rounded-lg px-3 py-2 text-black no-underline transition duration-250 ease-linear hover:bg-gray-300 hover:text-primary sm:py-3 ${
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
