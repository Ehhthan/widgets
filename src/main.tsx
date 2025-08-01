import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './common.css'
import {HashRouter, Route, Routes} from 'react-router';
import {BookComponent, BookDisplayDemo} from "./book-display/book-component.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/book-display" element={<BookComponent text={'Test'} maxPages={2} />} />
              <Route path="/demo/book-display" element={<BookDisplayDemo />} />
          </Routes>
      </HashRouter>
  </StrictMode>
)
