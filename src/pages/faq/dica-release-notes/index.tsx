import React from "react";

import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";

const Component: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="my-10">
        <FaqHeader />
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold">DICA - Release notes</h2>
          <div className="rounded bg-white p-4 shadow">
            <h3 className="mb-2 text-xl font-bold">
              Version 1.0.0 - Initial Release
            </h3>
            <ul className="list-inside list-disc">
              <li>Implemented the basic chatbot functionality</li>
              <li>
                Added support for answering domain-specific questions related to
                dengue
              </li>
              <li>Designed a user-friendly interface</li>
            </ul>

            <h3 className="my-4 text-xl font-bold">
              Version 1.1.0 - Enhanced Features
            </h3>
            <ul className="list-inside list-disc">
              <li>Improved natural language processing capabilities</li>
              <li>
                Expanded the knowledge base with more comprehensive information
              </li>
              <li>Added support for mobile devices and responsive design</li>
              <li>Fixed various bugs and performance issues</li>
            </ul>

            <h3 className="my-4 text-xl font-bold">
              Version 1.2.0 - Security and Privacy Enhancements
            </h3>
            <ul className="list-inside list-disc">
              <li>
                Implemented stronger encryption algorithms for data protection
              </li>
              <li>Enhanced user data privacy measures</li>
              <li>
                Updated the privacy policy to comply with the latest regulations
              </li>
            </ul>

            <h3 className="my-4 text-xl font-bold">
              Version 1.3.0 - Improved User Experience
            </h3>
            <ul className="list-inside list-disc">
              <li>Added typing indicators for a more interactive experience</li>
              <li>
                Implemented auto-suggestions to assist users in formulating
                queries
              </li>
              <li>Optimized performance for faster response times</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "ReleaseNotes";
export default Component;
