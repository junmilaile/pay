import React from 'react';
import { Descriptions } from 'antd';
import style from './index.module.css';
import type { DescriptionsProps } from 'antd/es/descriptions';
import PayBodyHeaderExhibition from '../../../Layout/components/PayBodyHeaderExhibition';

function PayDescriptions() {
  const items: DescriptionsProps['items'] = [
    {
      label: 'Product',
      children: 'LinkMed Subscription',
    },
    {
      label: 'Duration',
      children: '1 month',
    },
    {
      label: 'Price',
      children: '$50.00',
    },
    {
      label: 'Payment Method',
      children: 'Credit Card',
    },
  ];

  return (
    <PayBodyHeaderExhibition>
      <div className={style['container-pay-descriptions']}>
        <Descriptions column={2} items={items} bordered></Descriptions>
      </div>
    </PayBodyHeaderExhibition>
  );
}

export default PayDescriptions;
