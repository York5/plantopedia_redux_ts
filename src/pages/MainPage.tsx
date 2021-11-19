import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PlantsList from '../components/PlantsList';
import MainLayout from '../layouts/MainLayout';

const MainPage: React.FC = () => {
  console.log('main page');
  return (
    <MainLayout>
      <Box
        p={8}
        sx={{
          justifyContent: 'center',
        }}
      >
        <PlantsList />
      </Box>
    </MainLayout>
  );
};

export default MainPage;
