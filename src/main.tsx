import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select at invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing else!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
