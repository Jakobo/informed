import React, { useContext, useMemo } from 'react';
import { FormRegisterContext, FormStateContext, FormApiContext } from '../Context';
import useFormApi from '../hooks/useFormApi';
import useFormState from '../hooks/useFormState';

const buildScopedFormApi = ( scope, formApi ) => {
  return {
    ...formApi,
    getValue: field => formApi.getValue(`${scope}.${field}`),
    getTouched: field => formApi.getTouched(`${scope}.${field}`),
    getError: field => formApi.getError(`${scope}.${field}`),
    setValue: (field, value) => formApi.setValue(`${scope}.${field}`, value),
    setTouched: (field, value) => formApi.setTouched(`${scope}.${field}`, value),
    setError: (field, value) => formApi.setError(`${scope}.${field}`, value),
  }; 
};

const buildScopedRegister = ( scope, formRegister ) => {

  const { register, deregister, setValue, setTouched, setError, update } = formRegister;

  return {
    register: ( field, ...args ) => register(`${scope}.${field}`, ...args),
    deregister: ( field, ...args ) => deregister(`${scope}.${field}`, ...args),
    update: ( field, ...args ) => update(`${scope}.${field}`, ...args),
    setValue: ( field, ...args ) => setValue(`${scope}.${field}`, ...args),
    setTouched: ( field, ...args ) => setTouched(`${scope}.${field}`, ...args),
    setError: ( field, ...args ) => setError(`${scope}.${field}`, ...args),
  }; 
};

const Scope = ({scope, children}) => {

  const formRegister = useContext(FormRegisterContext);
  const formApi = useFormApi();
  const formState = useFormState();

  // VERY important to memoize the builders!
  const scopedFormApi = useMemo(() => buildScopedFormApi(scope, formApi), [scope]);
  const scopedRegister = useMemo(() => buildScopedRegister(scope, formRegister), [scope]);

  scopedFormApi;

  return (
    <FormRegisterContext.Provider value={scopedRegister}>
      <FormApiContext.Provider value={scopedFormApi}>
        <FormStateContext.Provider value={formState}>
          {children}
        </FormStateContext.Provider>
      </FormApiContext.Provider>
    </FormRegisterContext.Provider>
  );

};

export default Scope;
