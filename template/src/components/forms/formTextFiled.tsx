import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { FastField, FastFieldProps } from 'formik';
import React, { FC } from 'react';

interface InputProps {
  name: string;
  placeholder: string;
}

const FormTextField: FC<InputProps> = ({ name, placeholder }) => {
  return (
    <Box mb={1}>
      <FastField name={name}>
        {({ field, meta }: FastFieldProps) => {
          return (
            <Box height={52}>
              <TextField fullWidth placeholder={placeholder} {...field} />
              <Typography variant='body2' color='error'>
                {meta.error}
              </Typography>
            </Box>
          );
        }}
      </FastField>
    </Box>
  );
};

export default FormTextField;
