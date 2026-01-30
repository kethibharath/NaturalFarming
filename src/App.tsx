import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NaturalFarming from './pages/NaturalFarming';
import PrinciplesTechniques from './pages/PrinciplesTechniques';
import CropsPractices from './pages/CropsPractices';
import ResourcesLearning from './pages/ResourcesLearning';
import NewsWorkshops from './pages/NewsWorkshops';
import FarmerRegistration from './pages/FarmerRegistration';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/natural-farming" element={<NaturalFarming />} />
          <Route path="/principles-techniques" element={<PrinciplesTechniques />} />
          <Route path="/crops-practices" element={<CropsPractices />} />
          <Route path="/resources-learning" element={<ResourcesLearning />} />
          <Route path="/news-workshops" element={<NewsWorkshops />} />
          <Route path="/farmer-registration" element={<FarmerRegistration />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
