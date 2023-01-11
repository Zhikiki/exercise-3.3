import { createRoot } from 'react-dom/client';
import MainViewMovies from './components/main-view/main-view';

// Import statement to indicate that you need to bundle './index.scss'
import './index.scss';

// Main component (will eventually use all the others)
// MainView component is imported and used on the page
const App = () => {
  return <MainViewMovies />;
};

// Finds the root of your app
const container = document.querySelector('#root');
const root = createRoot(container);

// Говорит РЕАКТУ воспроизводить апп в корневом элементе ДОМ (определен выше)
root.render(<App />);
