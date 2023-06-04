import React from "react";

import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";

const Component: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="my-10">
        <FaqHeader />
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold">Supported Features</h2>
          <div className="rounded bg-white p-4 shadow">
            <h3 className="mb-2 text-xl font-bold">
              Does the chatbot support natural language processing?
            </h3>
            <p>
              Yes, the chatbot is equipped with natural language processing
              capabilities, allowing it to understand and respond to user
              queries in a conversational manner.
            </p>

            <h3 className="my-2 text-xl font-bold">
              What languages does the chatbot support?
            </h3>
            <p>
              Currently, the chatbot supports multiple languages. You can
              interact with the chatbot in any language you want. In terms of
              website language, we currently support English and Vietnamese, but
              we will be working on adding more languages in the next release.
              Stay tuned!
            </p>

            <h3 className="my-2 text-xl font-bold">
              Key Features of Our Product
            </h3>
            <p>
              Our chatbot offers a range of features including Health Form,
              Personalized Dashboard, Personalized News, and many more. Each
              feature is designed to enhance user experience and provide
              specific functionalities.
            </p>

            <h3 className="my-2 text-xl font-bold">
              Can I request a new feature?
            </h3>
            <p>
              Absolutely! We value user feedback and actively consider feature
              requests. You can submit your feature request through the
              &quot;Contact&quot; page, and our team will review it.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "SupportedFeatures";
export default Component;
