// Import Dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';

// Create react element
const element = React.createElement('p', { id: 'hello' }, 'Hello World today');

// Render application
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);
