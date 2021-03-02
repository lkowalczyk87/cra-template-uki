import { makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
}));

interface InputProps {
  to: string;
}

const NavigationLink: FC<InputProps> = ({ to, children }) => {
  const classes = useStyles();

  return (
    <NavLink to={to} className={classes.root}>
      {children}
    </NavLink>
  );
};

export default NavigationLink;
