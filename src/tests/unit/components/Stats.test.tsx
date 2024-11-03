import { render, screen } from "@testing-library/react";
import Stats from "../../../components/Stats";
import "@testing-library/jest-dom";

const items = [
  { id: 1, description: "Backpack", quantity: 1, packed: true },
  { id: 2, description: "Jacket", quantity: 1, packed: false },
];

describe("Stats component", () => {
  test("displays correct stats when items are present", () => {
    render(<Stats items={items} />);

    const statsText = screen.getByText(
      /You have 2 items on your list, and you already packed 1/i
    );

    expect(statsText).toBeInTheDocument();
  });

  test("displays placeholder text when no items are present", () => {
    render(<Stats items={[]} />);

    const placeholderText = screen.getByText(
      /Start adding some items to your packing list/i
    );

    expect(placeholderText).toBeInTheDocument();
  });
});
