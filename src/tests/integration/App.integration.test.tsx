import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../../App";

describe("App integration tests", () => {
  test("adds a new item to the list", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Item.../i);
    const addButton = screen.getByRole("button", { name: /Add/i });

    await user.type(input, "Toothbrush");
    await user.click(addButton);

    const addedItem = screen.getByText(/Toothbrush/i);
    expect(addedItem).toBeInTheDocument();
  });

  test("marks an item as packed", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Item.../i);
    const addButton = screen.getByRole("button", { name: /Add/i });

    await user.type(input, "Tent");
    await user.click(addButton);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    const packedItem = screen.getByText(/Tent/i);
    expect(packedItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes an item from the list", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Item.../i);
    const addButton = screen.getByRole("button", { name: /Add/i });

    await user.type(input, "Map");
    await user.click(addButton);

    const deleteButton = screen.getByRole("button", { name: /❌/i });
    await user.click(deleteButton);

    await waitFor(() => {
      const deletedItem = screen.queryByText(/Map/i);
      expect(deletedItem).toBeNull();
    });
  });

  test("updates stats correctly after adding and packing items", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Item.../i);
    const addButton = screen.getByRole("button", { name: /Add/i });

    await user.type(input, "Backpack");
    await user.click(addButton);

    await user.type(input, "Water bottle");
    await user.click(addButton);

    const initialStats = screen.getByText(
      /You have 2 items on your list, and you already packed 0/i
    );
    expect(initialStats).toBeInTheDocument();

    const firstCheckbox = screen.getAllByRole("checkbox")[0];
    await user.click(firstCheckbox);

    const updatedStats = screen.getByText(
      /You have 2 items on your list, and you already packed 1/i
    );
    expect(updatedStats).toBeInTheDocument();
  });

  test("clears all items from the list when clicking Clear List", async () => {
    render(<App />);

    jest.spyOn(window, "confirm").mockImplementation(() => true);

    const input = screen.getByPlaceholderText(/Item.../i);
    const addButton = screen.getByRole("button", { name: /Add/i });
    const clearButton = screen.getByRole("button", { name: /Clear list/i });

    await user.type(input, "Backpack");
    await user.click(addButton);

    await user.type(input, "Water bottle");
    await user.click(addButton);

    const item1 = screen.getByText(/Backpack/i);
    const item2 = screen.getByText(/Water bottle/i);
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();

    await user.click(clearButton);

    await waitFor(() => {
      const clearedItem1 = screen.queryByText(/Backpack/i);
      const clearedItem2 = screen.queryByText(/Water bottle/i);
      expect(clearedItem1).toBeNull();
      expect(clearedItem2).toBeNull();
    });

    const emptyListMessage = screen.getByText(
      /Start adding some items to your packing list/i
    );
    expect(emptyListMessage).toBeInTheDocument();

    jest.spyOn(window, "confirm").mockRestore();
  });
});
