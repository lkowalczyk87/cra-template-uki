import { createAction } from '@reduxjs/toolkit';
import { AppLanguage } from './models';

const featureName = 'internalization';

export const setLanguage = createAction<AppLanguage>(
  `${featureName}/setLanguage`
);
