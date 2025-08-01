import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HashRouter, Route, Routes} from 'react-router';
import {BookDisplay, BookDisplayDemo} from "./book-display/book-display.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/widgets/book" element={<BookDisplay text={'Test'} maxPages={2} />} />
              <Route path="/widgets/demo/book" element={<BookDisplayDemo />} />
          </Routes>
      </HashRouter>,
  </StrictMode>,
)
