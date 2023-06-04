import React from "react";

import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";

const Component: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="my-10">
        <FaqHeader />
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold">General Information</h2>
          <div className="rounded bg-white p-4 shadow">
            <h3 className="mb-2 text-xl font-bold">What is DICA?</h3>
            <p>
              DICA is designed to provide assistance and answer questions
              related to domain dengue.
            </p>

            <h3 className="my-2 text-xl font-bold">
              Getting Started with DICA
            </h3>
            <p>
              Simply type your question or concern in the chat window, and the
              chatbot will provide relevant information or direct you to the
              appropriate resource.
            </p>

            <h3 className="my-2 text-xl font-bold">
              Using DICA on Mobile Devices
            </h3>
            <p>
              Absolutely! The chatbot is fully responsive and can be accessed on
              any device, including mobile phones and tablets.
            </p>

            <h3 className="my-2 text-xl font-bold">Chatbot Updates</h3>
            <p>
              We continually update and improve the chatbot to ensure it
              provides accurate and up-to-date information. Updates are deployed
              regularly to enhance its functionality.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "GeneralInformation";
export default Component;
