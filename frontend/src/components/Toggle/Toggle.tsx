import { HTMLAttributes, RefObject, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import style from 'style/components/Toggle.module.scss';
import React from 'react';

export const Toggle = React.forwardRef((props: HTMLAttributes<HTMLLabelElement>, ref: React.ForwardedRef<HTMLLabelElement>) => {
  const [id, setId] = useState('');

  useEffect(() => {
    setId(v4());
  }, []);

  return (
    <>
      <input type="checkbox" id={id} className={style.check} />
      <label htmlFor={id} {...props} ref={ref} className={style.label}>
        <span className={style.slider}></span>
      </label>
    </>
  );
});
