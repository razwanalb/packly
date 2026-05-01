import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TrackOrder from './pages/TrackOrder';
import HelpCenter from './pages/HelpCenter';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="help-center" element={<HelpCenter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
