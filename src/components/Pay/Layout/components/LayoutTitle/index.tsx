import style from './index.module.css';
import LayoutTitleExhibition from '../LayoutTitleExhibition';

function LayoutTitle() {
  return (
    <LayoutTitleExhibition>
      <div className={style['container-layout-title']}>
        Thank you for choosing LinkMed! Here are the billing details.
      </div>
    </LayoutTitleExhibition>
  );
}

export default LayoutTitle;
