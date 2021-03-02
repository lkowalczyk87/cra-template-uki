import React, { ReactNode } from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

interface InputProps {
  title: string;
  action?: ReactNode;
}

const CardWithHeader: React.FC<InputProps> = ({ title, action, children }) => {
  const classes = useStyle();

  return (
    <Card className={classes.root}>
      <Box p={2}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h5'>{title}</Typography>
          {action}
        </Box>
        {children}
      </Box>
    </Card>
  );
};

export default CardWithHeader;
