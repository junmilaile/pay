import LayoutHeader from './components/LayoutHeader';
import style from './index.module.css';
import LayoutTitle from './components/LayoutTitle';
interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={style['container-layout']}>
      <LayoutHeader />
      <LayoutTitle />
      {children}
    </div>
  );
}

export default Layout;
