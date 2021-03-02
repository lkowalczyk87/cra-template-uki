import Box from '@material-ui/core/Box';
import CardWithHeader from 'components/cardWithHeader';
import GoBackButton from 'components/goBackButton';
import { ROUTES, TodoDetailsPageParams } from 'features/router';
import React, { useEffect } from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { useAppSelector } from 'features/redux/hooks';
import { getAllTodos } from '../selectors';
import FormTextField from 'components/forms/formTextFiled';
import FormCheckbox from 'components/forms/formCheckbox';
import SubmitButton from 'components/forms/submitButton';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { setTodo } from '../todosSlice';
import { Todo } from '../models';

const schema = (t: TFunction<string>) =>
  yup.object().shape({
    title: yup.string().required(t('required')),
  });

const TodoDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams<TodoDetailsPageParams>();
  const order = useAppSelector(getAllTodos)[id];
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (values: Todo) => {
    dispatch(setTodo(values));
  };

  useEffect(() => {
    if (order === undefined) {
      history.replace(ROUTES.home);
    }
  }, [order, history]);

  return (
    <CardWithHeader title={t('todo')} action={<GoBackButton />}>
      <Box mt={2.5}>
        <Formik
          validationSchema={schema(t)}
          initialValues={order}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {() => {
            return (
              <Form>
                <FormTextField name='title' placeholder={t('title')} />
                <FormCheckbox name='completed' label={t('completed')} />
                <SubmitButton />
              </Form>
            );
          }}
        </Formik>
      </Box>
    </CardWithHeader>
  );
};

export default TodoDetails;
