import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

setTimeout(() => {
  const root = document.getElementById("root");
  root.style.display = "none";
  root.offsetHeight; // Force reflow
  root.style.display = "";
}, 100);
