import { FC } from 'react';

interface LayoutHeaderExhibitionProps {
  children: JSX.Element;
}

const LayoutHeaderExhibition: FC<LayoutHeaderExhibitionProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default LayoutHeaderExhibition;
