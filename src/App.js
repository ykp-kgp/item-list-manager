import React, { useState } from 'react';

const hackerRankLogo = "https://imgs.search.brave.com/7-Loc-_sK27Y6IrjIwsK32d-otEyImyaeclFI_ncATw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQwL0hh/Y2tlclJhbmtfSWNv/bi0xMDAwcHgucG5n/LzUxMnB4LUhhY2tl/clJhbmtfSWNvbi0x/MDAwcHgucG5n";

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#39424E',
          padding: '10px 20px',
          borderBottom: '1px solid #ccc',
        }}
      >
        <img
          src={hackerRankLogo}
          alt="HackerRank Logo"
          style={{ width: '40px', height: '40px', marginRight: '10px' }}
        />
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#28A745' }}>
          Item List Manager
        </h1>
      </header>

      <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'left', marginBottom: '20px' }}>Item List</h2>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            value={inputValue}
            placeholder="Enter item"
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <button
            onClick={handleAddItem}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Add Item
          </button>
        </div>

        <ul style={{ listStyleType: 'none', padding: '0', marginTop: '20px', width: '100%' }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginBottom: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemListManager;
