import React, { FC, HTMLAttributes } from 'react';

import useForm, { TUseFormProps } from '../../../hooks/useForm/useForm';

import FormContext from '../FormContext';

const FormProvider: FC<HTMLAttributes<HTMLFormElement> & TUseFormProps> = ({
  children,
  initialValues,
  onSubmit,
  validate,
  ...rest
}) => {
  const context = useForm({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <FormContext.Provider value={context}>
      <form onSubmit={context.handleSubmit} {...rest}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default FormProvider;
