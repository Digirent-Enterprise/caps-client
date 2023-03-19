import { render, screen } from "@testing-library/react";
import Header from "@/components/partials/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renders a component", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Header")).toBeInTheDocument();
  });
});
