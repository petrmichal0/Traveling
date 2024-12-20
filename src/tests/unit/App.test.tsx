import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

describe("App component", () => {
  test("renders all main components in the document", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: /Far away/i });
    const formHeading = screen.getByText("What do you need for your trip?");
    const input = screen.getByPlaceholderText(/Item.../i);
    const addButton = screen.getByRole("button", { name: /Add/i });
    const clearButton = screen.getByRole("button", { name: /Clear list/i });
    const quantitySelect = screen.getByText("1").closest("select");
    const sortSelect = screen
      .getByText("Sort by input order")
      .closest("select");
    const emptyListMessage = screen.getByText(
      "Start adding some items to your packing list"
    );

    expect(heading).toBeInTheDocument();
    expect(formHeading).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
    expect(quantitySelect).toBeInTheDocument();
    expect(sortSelect).toBeInTheDocument();
    expect(emptyListMessage).toBeInTheDocument();
  });
});
