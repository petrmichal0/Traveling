import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from "../../../components/Form";

describe("Form component", () => {
  test("submits form and calls onAddItems", async () => {
    const onAddItems = jest.fn();
    render(<Form onAddItems={onAddItems} />);

    const input = screen.getByPlaceholderText(/Item.../i);
    const addButton = screen.getByRole("button", { name: /Add/i });

    await user.type(input, "Tent");
    await user.click(addButton);

    expect(onAddItems).toHaveBeenCalledWith({
      description: "Tent",
      quantity: 1,
      packed: false,
      id: expect.any(Number),
    });

    expect(input).toHaveValue("");
  });
});
