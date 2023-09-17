import React, { useState } from 'react';
import { Modal, Form, Input, DatePicker, Button } from 'antd';

const GoalForm = ({ onClose, goal }) => {
  const [form] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (values) => {
    // Call API to save goal data to the backend
    // You'll need to implement this part
    // After successful submission, you can call onClose() to close the form
    setIsSubmitted(true);
    // onClose(); // Uncomment this line if you want to close the form after submission
  };

  const handleClose = () => {
    onClose();
    setIsSubmitted(false); // Reset the submission state when the form is closed
  };

  return (
    <Modal
      visible={true} // Set to true to show the modal
      title={`Goal: ${goal.title}`} // Display the goal title from the parent component
      onCancel={handleClose}
      footer={null} // Remove the footer (including the close button)
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

        <Form.Item label="Reminder Interval" name="reminderInterval">
          <Input />
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



