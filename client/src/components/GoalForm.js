import React, { useState } from 'react';
import { Select, Modal, Form, Input, DatePicker, Button } from 'antd';

const GoalForm = ({ onClose, goal }) => {
  const [form] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (values) => {
    
    setIsSubmitted(true);
    // onClose();
  };

  const handleClose = () => {
    onClose();
    setIsSubmitted(false); 
  };

  return (
    <Modal
      visible={true}
      title={`Goal: ${goal.title}`} 
      onCancel={handleClose}
      footer={null} 
    >
      <Form form={form} onFinish={handleFormSubmit}>
        <Form.Item label="Goal Amount" name="amount">
          <Input type="number" min={0} />
        </Form.Item>

        <Form.Item label="Target Date" name="targetDate">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item
            name="reminder"
            label="Reminder Interval"
            rules={[{ required: true, message: "Please select a duration" }]}
          >
            <Select placeholder="Select a duration">
              <Select.Option value="daily">Daily</Select.Option>
              <Select.Option value="weekly">Weekly</Select.Option>
              <Select.Option value="monthly">Monthly</Select.Option>
            </Select>
          </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={isSubmitted ? 'submitted' : ''}>
            {isSubmitted ? 'Submitted' : 'Save Goal'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default GoalForm;



