import React, { ReactElement } from 'react';
import Header from '../components/Header';

type Props = {
  children?: JSX.Element;
};

const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
