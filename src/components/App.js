import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  const totalItem = items.length;

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (items.length === 0) return;
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    console.log(confirmed);
    if (confirmed) setItems([]);
  }

  // const [step, setStep] = useState(0);
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats totalItem={totalItem} items={items} />
    </div>
  );
}

export default App;
