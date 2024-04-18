import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';

const container = document.getElementById('root'); // Get the container
const root = createRoot(container); // Create a root
root.render(<App />); // Use the root to render
