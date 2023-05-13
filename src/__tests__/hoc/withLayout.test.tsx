import React from "react";

import { render } from "@testing-library/react";

import withLayout from "@/hoc/withLayout";

const DummyComponent = () => <div>Dummy Component</div>;

describe("withLayout HOC", () => {
  // const MockComponent = () => <div>Mock Component</div>;
  // const WrappedComponent = withLayout(MockComponent);
  //
  // it("renders the Header, WrappedComponent, and Footer", () => {
  //   const { getByTestId } = render(<WrappedComponent />);
  //   expect(getByTestId("header")).toBeInTheDocument();
  //   expect(getByTestId("wrapped-component")).toBeInTheDocument();
  //   expect(getByTestId("footer")).toBeInTheDocument();
  // });
  //
  // it("should set the displayName of the wrapped component", () => {
  //   const WithLayout = withLayout(DummyComponent);
  //   expect(WithLayout.displayName).toEqual("withLayout(DummyComponent)");
  // });
});
