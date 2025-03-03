import React from 'react';
import { CssBaseline } from '@mui/material';
import AppTheme from '../shared-theme/AppTheme';
import VerificationForm from './VerificationForm';

const VerificationPage: React.FC = (props) => {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <VerificationForm />
    </AppTheme>
  );
};

export default VerificationPage;