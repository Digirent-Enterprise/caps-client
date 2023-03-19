import { render, screen } from "@testing-library/react";
import Footer from "@/components/partials/Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  test("renders a component", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Footer")).toBeInTheDocument();
  });
});
