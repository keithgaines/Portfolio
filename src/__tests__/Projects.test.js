import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders project section with project titles", () => {
  render(<App />);

  expect(screen.getByText(/kanban web app/i)).toBeInTheDocument();
  expect(screen.getByText(/to do list/i)).toBeInTheDocument();
  expect(screen.getByText(/modern art gallery/i)).toBeInTheDocument();
});