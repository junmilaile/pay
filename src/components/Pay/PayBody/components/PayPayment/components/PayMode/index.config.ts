import Card from '@/components/Pay/assets/bill/card.png';
import Check from '@/components/Pay/assets/bill/eCheck.png';
import Google from '@/components/Pay/assets/bill/google.png';
import Paypal from '@/components/Pay/assets/bill/payPal.png';

export const PayModeConfig = [
  {
    lable: 'Credit Card',
    value: 2,
    icon: Card,
  },
  {
    lable: 'eCheck',
    value: 3,
    icon: Check,
  },
  {
    lable: 'Google Pay',
    value: 4,
    icon: Google,
  },
  {
    lable: 'PayPal',
    value: 1,
    icon: Paypal,
  },
];
