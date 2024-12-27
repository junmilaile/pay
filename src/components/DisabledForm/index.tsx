import { Form, Input, Button } from 'antd';
import FormExhibition from '../FormExhibition';

function DisabledForm() {
  return (
    <FormExhibition>
      <Form
        labelCol={{ span: 4 }}
        layout="horizontal"
        variant="filled"
        disabled={true}
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Age" name="age">
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" block>
            提交
          </Button>
        </Form.Item>
      </Form>
    </FormExhibition>
  );
}

export default DisabledForm;
