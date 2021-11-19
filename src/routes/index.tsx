import { Route, Routes } from 'react-router';
import AddPlant from '../components/AddPlant';
import ProductDetails from '../components/PlantsDetails';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import EditPage from '../pages/EditPage';
import MainPage from '../pages/MainPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/plant/:id" element={<DetailPage />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
};

export default AppRoutes;
