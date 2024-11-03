import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Item from "../../../components/Item";

const sampleItem = {
  id: 1,
  description: "Backpack",
  quantity: 1,
  packed: false,
};

describe("Item component", () => {
  test("renders item details", () => {
    render(
      <Item item={sampleItem} onDeleteItem={() => {}} onToggleItem={() => {}} />
    );

    const itemDetails = screen.getByText(/1 Backpack/i);
    expect(itemDetails).toBeInTheDocument();
  });

  test("calls onToggleItem when checkbox is clicked", async () => {
    const onToggleItem = jest.fn();

    render(
      <Item
        item={sampleItem}
        onDeleteItem={() => {}}
        onToggleItem={onToggleItem}
      />
    );

    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);
    expect(onToggleItem).toHaveBeenCalledWith(sampleItem.id);
  });

  test("calls onDeleteItem when delete button is clicked", async () => {
    const onDeleteItem = jest.fn();

    render(
      <Item
        item={sampleItem}
        onDeleteItem={onDeleteItem}
        onToggleItem={() => {}}
      />
    );

    const deleteButton = screen.getByRole("button", { name: /❌/i });

    await user.click(deleteButton);
    expect(onDeleteItem).toHaveBeenCalledWith(sampleItem.id);
  });
});
