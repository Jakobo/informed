import React, { useLayoutEffect } from 'react';
import asField from '../../HOC/asField';

const TextArea = ({ fieldApi, fieldState, ...props }) => {
  const { maskedValue } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const {
    onChange,
    onBlur,
    field,
    initialValue,
    forwardedRef,
    debug,
    ...rest
  } = props;


  // for debugging
  useLayoutEffect(
    () => {
      if (debug && forwardedRef) {
        forwardedRef.current.style.background = 'red';
        setTimeout(() => {
          forwardedRef.current.style.background = 'white';
        }, 500);
      }
    }
  );

  return (
    <textarea
      {...rest}
      name={field}
      ref={forwardedRef}
      value={!maskedValue ? '' : maskedValue}
      onChange={e => {
        setValue(e.target.value, e);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
      }}
    />
  );
};

export { TextArea as BasicTextArea };

export default asField(TextArea);
