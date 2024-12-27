import style from './index.module.css';
import Card from './components/Card';
import ECheck from './components/ECheck';
import Google from './components/Google';
import Paypal from './components/PayPal';
import React from 'react';

function PayForm({ payMode = 2 }: { payMode: number }) {
  const payModeElement = React.useMemo(() => {
    const payModeMap: { [key: number]: JSX.Element } = {
      2: <Card />,
      1: <Paypal />,
      4: <Google />,
      3: <ECheck />,
    };
    return payModeMap[payMode];
  }, [payMode]);

  return (
    <div className={style['container-pay-form']}>
      <div className={style['container-pay-form-header']}>
        <div className={style['container-pay-form-title']}>Payment Amount</div>
        <div className={style['container-pay-form-money']}>＄598.00</div>
      </div>
      <div className={style['container-pay-form-payment']}>
        {payModeElement}
      </div>
    </div>
  );
}

export default PayForm;
