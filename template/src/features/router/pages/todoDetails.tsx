import React from 'react';
import TodoDetails from 'features/todos/components/todoDetails';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const TodoDetailsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('todo')}</title>
      </Helmet>
      <TodoDetails />
    </>
  );
};

export default TodoDetailsPage;
