import React from 'react';
import { Flex, Row, Col, Form, Input, Select, Button } from 'antd';

function Card() {
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
          <Form.Item
            label="Card Number"
            name="cardNumber"
            required
            rules={[
              {
                required: true,
                pattern: /^.{13,16}$/,
                message: 'The credit card number is invalid',
              },
            ]}
          >
            <Input placeholder="Please enter the card number" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Exp Date" required>
            <Flex gap={8}>
              <Form.Item
                name="expiredMonth"
                rules={[
                  { required: true, message: 'Please select Month Year' },
                ]}
                noStyle
              >
                {/* <SelectMonth /> */}
                <Input placeholder="MM" />
              </Form.Item>
              <Form.Item
                name="expiredYear"
                rules={[{ required: true, message: '' }]}
                noStyle
              >
                {/* <SelectYear /> */}
                <Input placeholder="YY" />
              </Form.Item>
            </Flex>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="CVV Code"
            name="securityCode"
            rules={[{ required: true }]}
          >
            <Input placeholder="Please enter the CVV code" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Name on Card" required>
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
            label="Street Address"
            name="address"
            rules={[{ required: true }]}
          >
            {/* <GooglePlacesAutoComplete
              placeholder="Eg 3 Stripes Street"
              onSelect={(res) => {
                form.setFieldsValue({
                  address: res.street,
                  city: res.city,
                  state: res.state,
                  zipCode: res.zipCode,
                });
              }}
            /> */}
            <Input placeholder="Please enter the street address" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true }]}
          >
            <Select placeholder="Please select country" options={[]}></Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="City" name="city" rules={[{ required: true }]}>
            <Input placeholder="Please enter the city" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="State" name="state" rules={[{ required: true }]}>
            <Select
              placeholder="Please select an state"
              //   options={stateList}
              options={[]}
            ></Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Zip Code"
            name="zipCode"
            rules={[{ required: true }]}
          >
            <Input placeholder="Please enter the zip code" />
          </Form.Item>
        </Col>
      </Row>
      <Button
        block
        type="primary"
        size="large"
        htmlType="submit"
        style={{
          fontWeight: 700,
          height: 48,
          fontSize: 16,
        }}
      >
        Pay ＄{598.0}
      </Button>
    </Form>
  );
}

export default Card;
