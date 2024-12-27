import React, { FC } from 'react';
import style from './index.module.css';

interface FormExhibitionProps {
  children: React.ReactNode;
}

const FormExhibition: FC<FormExhibitionProps> = ({ children }) => {
  return <div className={style['container']}>{children}</div>;
};

export default FormExhibition;
