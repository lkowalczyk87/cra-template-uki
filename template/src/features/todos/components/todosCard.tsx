import { CircularProgress } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CardWithHeader from 'components/cardWithHeader';
import ChangeLanguageButton from 'features/i18n/components/changeLanguageButton';
import { useAppDispatch, useAppSelector } from 'features/redux/hooks';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllTodosIsLoading } from '../selectors';
import { initTodos } from '../todosSlice';
import TodosList from './todosList';

const TodosCard = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(getAllTodosIsLoading);

  useEffect(() => {
    dispatch(initTodos());
  }, [dispatch]);

  return (
    <CardWithHeader title={t('todo-list')} action={<ChangeLanguageButton />}>
      <Box minHeight={45}>
        {isLoading ? <CircularProgress /> : <TodosList />}
      </Box>
    </CardWithHeader>
  );
};

export default TodosCard;
