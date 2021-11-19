import { Box } from '@mui/system';
import React from 'react';
import AddPlant from '../components/AddPlant';

import MainLayout from '../layouts/MainLayout';

const AddPage: React.FC = () => {
  console.log('detail page');
  return (
    <MainLayout>
      <Box
        p={8}
        sx={{
          justifyContent: 'center',
        }}
      >
        <AddPlant />
      </Box>
    </MainLayout>
  );
};

export default AddPage;
