import { Form } from 'antd';
import FormExhibition from '../FormExhibition';

function CheckForm() {
  const data = {
    name: 'name',
    age: 'age',
    address: 'address',
  };

  return (
    <FormExhibition>
      <Form labelCol={{ span: 4 }} layout="horizontal" variant="filled">
        <Form.Item label="Name">{data.name}</Form.Item>
        <Form.Item label="Age">{data.age}</Form.Item>
        <Form.Item label="Address">{data.address}</Form.Item>
      </Form>
    </FormExhibition>
  );
}

export default CheckForm;
