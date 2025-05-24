import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OrderOnlinePage from './pages/OrderOnlinePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order-online" element={<OrderOnlinePage />} />
          <Route path="/contact" element={<HomePage />} /> {/* Contact is part of HomePage */}
          <Route path="*" element={<HomePage />} /> {/* Fallback route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
