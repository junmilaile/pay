import React from 'react';
import { Row, Col, Flex, Input, Form, Select, Button } from 'antd';

function ECheck() {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      variant="filled"
      onFinish={(values) => {}}
    >
      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item label="Name on Account" required>
            <Flex gap={24}>
              <Form.Item
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: 'Please enter First Name and Last Name',
                  },
                ]}
                noStyle
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: '' }]}
                noStyle
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </Flex>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Routing Number"
            name="routingNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Please enter your bank routing number" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Account Number"
            name="accountNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Please enter bank account number" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Account Type"
            name="accountType"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Please select bank account type"
              options={[
                { label: 'Checking Account', value: 1 },
                { label: 'Savings Account', value: 2 },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Button
        block
        style={{
          fontWeight: 700,
          height: 48,
          fontSize: 16,
        }}
        type="primary"
        htmlType="submit"
      >
        Pay ＄598.00
      </Button>
    </Form>
  );
}

export default ECheck;
