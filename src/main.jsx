import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <div style={{ backgroundColor: 'red', height: '100vh' }}>
    Hello Mobile
  </div>
);

// 🩹 Force reflow to trigger initial paint on mobile
setTimeout(() => {
  document.body.style.display = 'none';
  void document.body.offsetHeight; // force reflow
  document.body.style.display = '';
}, 50);
