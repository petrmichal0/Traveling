import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { motion } from "framer-motion";

type Item = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

const pageTransition = {
  initial: { x: "-100vw" },
  animate: { x: 0 },
  transition: { duration: 1, delay: 0.5 },
};

function App() {
  const [items, setItems] = useState<Item[]>([]);

  function handleAddItem(item: Item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleCleanList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <motion.div className="app" {...pageTransition}>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onHandleCleanList={handleCleanList}
      />
      <Stats items={items} />
    </motion.div>
  );
}

export default App;
