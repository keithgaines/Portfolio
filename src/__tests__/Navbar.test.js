import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders navbar with external links", () => {
  render(<App />);

  const linkedin = screen.getByRole("link", {
    name: /linkedin/i
  });

  const github = screen.getByRole("link", {
    name: /github/i
  });

  expect(linkedin).toHaveAttribute("href", expect.stringContaining("linkedin"));
  expect(github).toHaveAttribute("href", expect.stringContaining("github"));
});