import React from 'react';
import { Helmet } from 'react-helmet';
import TodosCard from 'features/todos/components/todosCard';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('todos')}</title>
      </Helmet>
      <TodosCard />
    </>
  );
};

export default HomePage;
