import React from 'react';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

createRoot(root).render(
  <div style={{ backgroundColor: 'red', height: '100vh', color: 'white', fontSize: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    Hello Mobile
  </div>
);

setTimeout(() => {
  const root = document.getElementById("root");
  root.style.display = "none";
  root.offsetHeight; // Force reflow
  root.style.display = "";
}, 100);
