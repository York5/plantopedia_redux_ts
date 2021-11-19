import { Box } from '@mui/system';
import React from 'react';
import PlantsDetails from '../components/PlantsDetails';

import MainLayout from '../layouts/MainLayout';

const DetailPage: React.FC = () => {
  console.log('detail page');
  return (
    <MainLayout>
      <Box
        p={8}
        sx={{
          justifyContent: 'center',
        }}
      >
        <PlantsDetails />
      </Box>
    </MainLayout>
  );
};

export default DetailPage;
