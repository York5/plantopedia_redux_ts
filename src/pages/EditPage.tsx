import { Box } from '@mui/system';
import React from 'react';
import EditPlant from '../components/EditPlant';
import MainLayout from '../layouts/MainLayout';

const EditPage: React.FC = () => {
  return (
    <MainLayout>
      <Box
        p={8}
        sx={{
          justifyContent: 'center',
        }}
      >
        <EditPlant />
      </Box>
    </MainLayout>
  );
};

export default EditPage;
