import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { FastField, FastFieldProps } from 'formik';
import React, { FC } from 'react';

interface InputProps {
  name: string;
  label: string;
}

const FormCheckbox: FC<InputProps> = ({ name, label }) => {
  return (
    <Box mb={2}>
      <FastField name={name}>
        {({ field }: FastFieldProps) => {
          return (
            <FormGroup>
              <FormControlLabel
                label={label}
                labelPlacement='end'
                checked={field.value}
                control={<Checkbox />}
                {...field}
              />
            </FormGroup>
          );
        }}
      </FastField>
    </Box>
  );
};

export default FormCheckbox;
