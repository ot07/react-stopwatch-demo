import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";

import DarkAndLightButton from "src/components/DarkAndLightButton";

const MockDarkAndLightButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DarkAndLightButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
  );
};

describe("Dark/Light Button", () => {
  it("should render light button when dark button is clicked once", () => {
    render(<MockDarkAndLightButton />);

    const darkAndLightButton = screen.getByRole("button", { name: "DARK" });
    fireEvent.click(darkAndLightButton);
    expect(darkAndLightButton).toHaveTextContent("LIGHT");
  });

  it("should render dark button when dark button is clicked twice", () => {
    render(<MockDarkAndLightButton />);

    const darkAndLightButton = screen.getByRole("button", { name: "DARK" });
    fireEvent.click(darkAndLightButton);
    fireEvent.click(darkAndLightButton);
    expect(darkAndLightButton).toHaveTextContent("DARK");
  });
});
