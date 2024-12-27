import style from '../../index.module.css';
import { Button } from 'antd';

function PayPal() {
  return (
    <div className={style['container-pay']}>
      <div className={style['container-pay-title']}>Pay with PayPal</div>
      <div className={style['container-pay-content']}>
        You will be redirected to the PayPal website. Once you have completed
        the payment, you will be redirected back to LinkMed to complete the
        checkout process.
      </div>
      <div className={style['container-pay-button']}>
        <Button
          block
          style={{
            fontWeight: 700,
            height: 48,
            fontSize: 16,
            backgroundColor: '#04B8CC',
          }}
          type="primary"
          htmlType="submit"
        >
          Pay ＄598.00
        </Button>
      </div>
    </div>
  );
}

export default PayPal;
