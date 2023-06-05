import React from "react";

import { ToastContainer } from "react-toastify";

const Component = React.memo(() => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
});

Component.displayName = "ToastContainer";

export default Component;
