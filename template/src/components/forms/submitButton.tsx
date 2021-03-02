import Button from '@material-ui/core/Button';
import { FastField, FastFieldProps } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';

const SubmitButton = () => {
  const { t } = useTranslation();

  return (
    <FastField>
      {({ form }: FastFieldProps) => {
        return (
          <Button type='submit' disabled={!form.isValid || !form.dirty}>
            {t('save-changes')}
          </Button>
        );
      }}
    </FastField>
  );
};

export default SubmitButton;
