import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress benign Vite WebSocket and HMR connection errors/warnings in dev environments
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const reasonStr = event.reason ? String(event.reason.message || event.reason) : '';
    if (
      reasonStr.toLowerCase().includes('websocket') ||
      reasonStr.toLowerCase().includes('vite')
    ) {
      console.warn('Suppressed benign Vite WebSocket unhandled rejection:', event.reason);
      event.preventDefault();
      event.stopPropagation();
    }
  }, { capture: true });

  window.addEventListener('error', (event) => {
    const msgStr = event.message ? String(event.message) : '';
    if (
      msgStr.toLowerCase().includes('websocket') ||
      msgStr.toLowerCase().includes('vite')
    ) {
      console.warn('Suppressed benign Vite WebSocket error:', event.message);
      event.preventDefault();
      event.stopPropagation();
    }
  }, { capture: true });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
