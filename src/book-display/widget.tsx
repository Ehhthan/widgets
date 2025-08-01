import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../common.css'
import { BookComponent } from './book-component.tsx'

function init() {
	const rootEl = document.getElementById('minecraft-book');
	if (!rootEl) return;

	const text = rootEl.dataset.json || "{text:\"None\"}";

	createRoot(rootEl).render(
		<StrictMode>
			<BookComponent text={text} maxPages={2} />
		</StrictMode>,
	);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
