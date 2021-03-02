import Button from '@material-ui/core/Button';
import { useAppDispatch } from 'features/redux/hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../internalizationSlice';

const ChangeLanguageButton = () => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pl' : 'en';
    dispatch(setLanguage(newLanguage));
  };

  return (
    <Button variant='contained' color='primary' onClick={handleChangeLanguage}>
      {t('change-language')}
    </Button>
  );
};

export default ChangeLanguageButton;
