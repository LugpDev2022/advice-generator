import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { useAdvice } from "../src/hooks/useAdvice";

describe("<App />", () => {
  test("should match snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test("should show the spinner", () => {
    useAdvice.mockReturnValue({ loading: true });
    render(<App />);

    screen.debug();
  });
});
