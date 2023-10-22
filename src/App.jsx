import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passaports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 10, packed: false },
  { id: 3, description: 'Shirts', quantity: 3, packed: true },
];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function HandleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🧳 Far Away 🏝️</h1>;
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {/* <Item /> */}
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>

      <div className="actions">
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have 5 items on your list, and you already packed 0 (0%)</em>
    </footer>
  );
}

export default App;
