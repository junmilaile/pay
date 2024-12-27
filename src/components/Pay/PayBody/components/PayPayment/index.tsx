import PayBodyContentExhibition from '../../../Layout/components/PayBodyContentExhibition';
import style from './index.module.css';
import PayMode from './components/PayMode';
import PayForm from './components/PayForm';
import PayMeassge from './components/PayMeassge';
import React from 'react';

function PayPayment() {
  const [payMode, setPayMode] = React.useState<number>(2);

  return (
    <PayBodyContentExhibition>
      <div className={style['container-pay-payment']}>
        <PayMode
          payMode={payMode}
          setPayMode={(e) => setPayMode(Number(e.target.value))}
        />
        <PayForm payMode={payMode} />
        <PayMeassge />
      </div>
    </PayBodyContentExhibition>
  );
}

export default PayPayment;
