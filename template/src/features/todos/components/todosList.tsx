import { makeStyles } from '@material-ui/core/styles';
import AnimHeight from 'components/animators/animHeight';
import { useAppSelector } from 'features/redux/hooks';
import React from 'react';
import { getAllTodosArray } from '../selectors';
import TodoListItem from './todoListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    height: 300,
    margin: '30px 0 10px 0',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: theme.palette.primary.light,
    },

    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.primary.dark,
    },
  },
}));

const TodosList = () => {
  const classes = useStyles();

  const todos = useAppSelector(getAllTodosArray);

  return (
    <AnimHeight>
      <div className={classes.root}>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </div>
    </AnimHeight>
  );
};

export default TodosList;
