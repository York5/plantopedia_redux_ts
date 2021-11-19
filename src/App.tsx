import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootStore } from './Store';
import { GetPlants } from './actions/PlantsActions';

import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
