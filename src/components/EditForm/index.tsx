import { Form, Input, Button, Drawer, Flex } from 'antd';
import FormExhibition from '../FormExhibition';
import { useState } from 'react';
import useRequest from '../../api/useRequest';
import { useEffect } from 'react';

function EditForm() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { setFieldsValue } = form;
  const resData = useRequest();
  useEffect(() => {
    resData.then((result) => {
      console.log('result', result);
      setFieldsValue(result[0]);
    });
  }, [resData, setFieldsValue]);

  const handleSubmit = (value: {
    name: string;
    age?: string;
    address: string;
  }) => {
    console.log('editSubmit', value);
  };
  return (
    <FormExhibition>
      <Drawer
        closable
        destroyOnClose
        title={<p>Loading Drawer</p>}
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        footer={
          <Flex justify="right" gap={16}>
            <Button type="primary" onClick={() => setOpen(false)}>
              取消
            </Button>
            <Button type="primary" onClick={form.submit}>
              确定
            </Button>
          </Flex>
        }
      >
        <Form
          form={form}
          labelCol={{ span: 4 }}
          layout="horizontal"
          variant="filled"
          onFinish={(value) =>
            typeof handleSubmit === 'function' && handleSubmit(value)
          }
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <Input disabled={Math.random() * 1 > 0.2} />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input />
          </Form.Item>
        </Form>
      </Drawer>
      <Button type="primary" onClick={() => setOpen(true)}>
        点击打开
      </Button>
    </FormExhibition>
  );
}

export default EditForm;
