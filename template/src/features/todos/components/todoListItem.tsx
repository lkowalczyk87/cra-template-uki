import Box from '@material-ui/core/Box';
import React, { FC } from 'react';
import { Todo } from '../models';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AdjustIcon from '@material-ui/icons/Adjust';
import Typography from '@material-ui/core/Typography';
import NavigationLink from 'components/navigationLink';
import { ROUTES } from 'features/router';

interface InputProps {
  todo: Todo;
}

const TodoListItem: FC<InputProps> = ({ todo }) => {
  return (
    <NavigationLink to={ROUTES.todoDetails.replace(':id', todo.id)}>
      <Box mb={1} display='flex' alignItems='center'>
        {todo.completed ? (
          <CheckCircleIcon fontSize='small' htmlColor='#39800e' />
        ) : (
          <AdjustIcon fontSize='small' color='primary' />
        )}
        <Box paddingLeft={1}>
          <Typography variant='body1' component='h6'>
            {todo.title}
          </Typography>
        </Box>
      </Box>
    </NavigationLink>
  );
};

export default TodoListItem;
