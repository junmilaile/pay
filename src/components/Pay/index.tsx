import Layout from './Layout';
import style from './index.module.css';
import LayoutBody from './Layout/components/LayoutBody';
import { App } from 'antd';

function Pay() {
 

  return (
    <App>
      <div className={style['container-pay']}>
        <Layout>
          <LayoutBody />
        </Layout>
      
      </div>
    </App>
  );
}

export default Pay;
