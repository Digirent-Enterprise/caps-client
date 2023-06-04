import React from "react";

import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";

const Component: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="my-10">
        <FaqHeader />
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold">Account and Profile</h2>
          <div className="rounded bg-white p-4 shadow">
            <h3 className="mb-2 text-xl font-bold">Creating an Account</h3>
            <p>
              To create an account, click on the &quot;Register&quot; button and
              follow the instructions to provide the required information.
            </p>

            <h3 className="my-2 text-xl font-bold">Updating Your Profile</h3>
            <p>
              Yes, you can update your profile information by navigating to the
              &quot;Settings&quot; section and selecting the &quot;Account&quot;
              tab.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "AccountAndProfile";

export default Component;
