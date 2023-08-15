import './App.css';
import './card';
import Card from './card';
import React, { useEffect, useState } from 'react';


function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(items => setItems(items));
  }, []);

  return (
    <>
      <h1>Venta de Garage</h1>
      <div className="container">
        <div className="flex three">
          {items.map((item, key) => <Card key={key} item={item} />)}
        </div>
      </div>
    </>
  );
}

export default App;

const getItems = async () => {
  return fetch('static/items.json')
  .then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  });
}