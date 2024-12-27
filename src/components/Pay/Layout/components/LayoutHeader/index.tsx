import style from './index.module.css';
import Logo from '@/components/Pay/assets/bill/logo.png';
import LayoutHeaderExhibition from '../LayoutHeaderExhibition';

function LayoutHeader() {
  return (
    <LayoutHeaderExhibition>
      <div className={style['container-layout-header']}>
        <img src={Logo} alt="" />
      </div>
    </LayoutHeaderExhibition>
  );
}

export default LayoutHeader;
