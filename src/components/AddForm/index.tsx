import { Form, Input, Button } from 'antd';
import FormExhibition from '../FormExhibition';

function AddForom() {
  const [form] = Form.useForm();
  const handleSubmit = async (value: {
    name: string;
    age: string;
    address: string;
  }) => {
    console.log('addSubmit', value);
  };

  return (
    <FormExhibition>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        layout="horizontal"
        variant="filled"
        onFinish={(value) =>
          typeof handleSubmit === 'function' && handleSubmit(value)
        }
      >
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Age" name="age" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, message: '请输入正确的手机号' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </FormExhibition>
  );
}

export default AddForom;
