import { Radio, RadioChangeEvent } from 'antd';
import style from './index.module.css';
import { PayModeConfig } from './index.config.ts';
import classNames from 'classnames';

interface PayModeProps {
  payMode?: number;
  setPayMode: (e: RadioChangeEvent) => void;
}

interface PayModeItem {
  value: number;
  lable: string;
  icon: string;
}

function PayModeCard({
  item,
  payMode,
  setPayMode,
}: {
  item: PayModeItem;
  payMode: number;
  setPayMode: (e: RadioChangeEvent) => void;
}) {
  return (
    <div
      className={classNames(style['container-pay-mode-card'], [
        payMode === item.value && style['active'],
      ])}
      key={item.value}
      onClick={() =>
        setPayMode({ target: { value: item.value } } as RadioChangeEvent)
      }
    >
      <Radio.Group
        value={payMode}
        onChange={setPayMode}
        style={{ width: '100%' }}
      >
        <Radio value={item.value}>{item.lable}</Radio>
      </Radio.Group>
      <img src={item.icon} alt="" />
    </div>
  );
}

function PayMode({ payMode = 2, setPayMode }: PayModeProps) {
  return (
    <div className={style['container-pay']}>
      <div className={style['container-pay-mode']}>
        {PayModeConfig.map((item) => {
          return (
            <PayModeCard
              key={item.value}
              item={item}
              payMode={payMode}
              setPayMode={setPayMode}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PayMode;
