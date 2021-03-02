import Button from '@material-ui/core/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const GoBackButton = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Button variant='contained' color='primary' onClick={handleGoBack}>
      {t('back')}
    </Button>
  );
};

export default GoBackButton;
