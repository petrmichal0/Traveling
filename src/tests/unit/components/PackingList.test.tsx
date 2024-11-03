import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

import PackingList from "../../../components/PackingList";

const sampleItems = [
  { id: 1, description: "Shoes", quantity: 1, packed: false },
  { id: 2, description: "Socks", quantity: 2, packed: true },
];

describe("PackingList component", () => {
  test("renders items", () => {
    const onDeleteItem = jest.fn();
    const onToggleItem = jest.fn();
    const onHandleCleanList = jest.fn();

    render(
      <PackingList
        items={sampleItems}
        onDeleteItem={onDeleteItem}
        onToggleItem={onToggleItem}
        onHandleCleanList={onHandleCleanList}
      />
    );

    const shoesItem = screen.getByText(/Shoes/i);
    const socksItem = screen.getByText(/Socks/i);

    expect(shoesItem).toBeInTheDocument();
    expect(socksItem).toBeInTheDocument();
  });

  test("handles delete", async () => {
    const onDeleteItem = jest.fn();
    const onToggleItem = jest.fn();
    const onHandleCleanList = jest.fn();

    render(
      <PackingList
        items={sampleItems}
        onDeleteItem={onDeleteItem}
        onToggleItem={onToggleItem}
        onHandleCleanList={onHandleCleanList}
      />
    );

    const deleteButton = screen.getAllByRole("button", { name: /❌/i })[0];
    await user.click(deleteButton);
    expect(onDeleteItem).toHaveBeenCalledWith(1);
  });
});
