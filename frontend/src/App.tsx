import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Community from './pages/Community';
import Generate from './pages/Generate';
import Home from './pages/Home';
import Loading from './pages/Loading';
import MyGeneration from './pages/MyGeneration';
import Plans from './pages/Plans';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Result from './pages/Result';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/community" element={<Community />} />
          <Route path="/my-generation" element={<MyGeneration />} />
          <Route path="/result/:projectId" element={<Result />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path='/loading' element={<Loading />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
