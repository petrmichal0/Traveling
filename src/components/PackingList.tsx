import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Item from "./Item";

type Item = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

type PackingListProps = {
  items: Item[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onHandleCleanList: () => void;
};

const itemAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onHandleCleanList,
}: PackingListProps) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        <AnimatePresence>
          {sortedItems.map((item) => (
            <motion.li key={item.id} {...itemAnimation}>
              <Item
                item={item}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onHandleCleanList}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
