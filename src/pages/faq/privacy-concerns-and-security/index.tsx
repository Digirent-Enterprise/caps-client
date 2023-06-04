import React from "react";

import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";

const Component: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="my-10">
        <FaqHeader />
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold">
            Privacy Concerns and Security
          </h2>
          <div className="rounded bg-white p-4 shadow">
            <h3 className="mb-2 text-xl font-bold">
              Is my personal information secure?
            </h3>
            <p>
              Yes, we take the security and privacy of your personal information
              seriously. The chatbot is designed to handle data securely and
              adheres to strict privacy policies.
            </p>

            <h3 className="my-2 text-xl font-bold">
              How is my personal information protected?
            </h3>
            <p>
              We take your privacy seriously and employ various security
              measures to protect your personal information. We comply with
              applicable data protection laws and have a detailed privacy policy
              outlining how your data is collected, used, and stored.
            </p>

            <h3 className="my-2 text-xl font-bold">
              Is my chat history stored?
            </h3>
            <p>
              We retain your chat history for a limited time to improve the
              quality of our services and provide better assistance. However, we
              ensure that your chat history is treated with strict
              confidentiality and not shared with any third parties without your
              consent.
            </p>

            <h3 className="my-2 text-xl font-bold">
              Can I delete my personal data?
            </h3>
            <p>
              As per our privacy policy, you have the right to request the
              deletion of your personal data. Please contact our support team or
              refer to the privacy policy for more information on how to
              exercise this right.
            </p>

            <h3 className="my-2 text-xl font-bold">
              Is the chatbot compliant with data protection regulations?
            </h3>
            <p>
              Yes, the chatbot complies with relevant data protection
              regulations, such as GDPR and CCPA. We take the necessary measures
              to protect user data and provide transparency regarding data
              handling practices.
            </p>

            <h3 className="my-2 text-xl font-bold">
              What security measures are in place to prevent unauthorized
              access?
            </h3>
            <p>
              We employ robust security measures, including encryption, access
              controls, and regular security audits, to prevent unauthorized
              access and safeguard user data.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "PrivacyConcernsAndSecurity";
export default Component;
