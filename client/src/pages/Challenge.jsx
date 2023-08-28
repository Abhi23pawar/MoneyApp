import React, { useState} from "react";
import { Button, Modal, Input, Form, Select, InputNumber, DatePicker, message, Progress, Menu, Dropdown } from "antd";

const ChallengePage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [challenges, setChallenges] = useState([]);  // Storing all challenges in an array
  const [selectedChallenge, setSelectedChallenge] = useState(null); // To identify which challenge's progress is being viewed
  const [createdChallenge, setCreatedChallenge] = useState(null);
  const [achievedAmount, setAchievedAmount] = useState(0);
  const [hasJoinedChallenge, setHasJoinedChallenge] = useState(false)
  const [form] = Form.useForm(); // Initialize the form
  

  const allCategories = [
    "House", "Car", "Investment", "Retirement", "Vacation", "Other Goal",
    "Housing budget", "Transportation budget", "Food budget", "Savings budget",
    "Utilities budget", "Entertainment budget", "Clothing budget", "Personal Care budget", "Miscellaneous budget"
  ];
  
  const rewardPoints = {
    daily: 10,
    weekly: 50,
    monthly: 250,
  };

  const handleCreateChallenge = async () => {
    try {
      const values = await form.validateFields();

      // Append the new challenge to the challenges array
      setChallenges(prevChallenges => [...prevChallenges, values]);
      setShowCreateModal(false);
      form.resetFields();
      message.success("Challenge created successfully");
    } catch (errorInfo) {
      console.error("Failed to submit form:", errorInfo);
      message.error("Error creating challenge");
    }
  };

  const handleJoinChallenge = (idx) => {
    setChallenges(prevChallenges => {
        const updatedChallenges = [...prevChallenges];
        updatedChallenges[idx].hasJoined = true;
        return updatedChallenges;
    });
    message.success("Challenge joined successfully");
};



  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://facebook.com">Share on Facebook</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com">Share on Twitter</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com">Share on LinkedIn</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com">Share on Instagram</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://whatsapp.com">Share on WhatsApp</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <h1>Points Achieved: {challenges.reduce((sum, challenge) => sum + (challenge.rewardPoints || 0), 0)}</h1>
      <h2>Challenges</h2>
      <Button onClick={() => setShowCreateModal(true)}>Create Challenge</Button>
     
      {challenges.map((challenge, idx) => (
    <div key={idx} style={{ marginTop: '20px', border: '1px solid #ddd', padding: '10px' }}>
        <h3>{challenge.name}</h3>
        
        {challenge.hasJoined ? (
            <Button disabled>Challenge Joined</Button>
        ) : (
            <Button onClick={() => handleJoinChallenge(idx)}>Join Challenge</Button>
        )}
        
        <Dropdown overlay={menu} style={{ marginLeft: '10px' }}>
            <Button>Invite Friend to Challenge</Button>
        </Dropdown>
        
        <Button style={{ marginLeft: '10px' }} onClick={() => { setSelectedChallenge(challenge); setShowProgressModal(true) }}>View Progress</Button>
    </div>
))}

<Modal
        title="Create Challenge"
        visible={showCreateModal}
        onCancel={() => setShowCreateModal(false)}
        onOk={handleCreateChallenge}
      >
        <Form form={form} layout="vertical">
          
        <Form.Item label="Challenge Name" name="name" rules={[{ required: true, message: 'Please input the challenge name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select the category!' }]}>
            <Select>
              {allCategories.map(category => <Select.Option key={category} value={category}>{category}</Select.Option>)}
            </Select>
          </Form.Item>

          <Form.Item
            name="amount"
            label="Amount"
            rules={[
              { required: true, message: "Please enter an amount" },
              { type: 'number', min: 0, message: "Amount should be a positive value!" }
            ]}
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item
            name="duration"
            label="Challenge Duration"
            rules={[{ required: true, message: "Please select a duration" }]}
          >
            <Select placeholder="Select a duration">
              <Select.Option value="daily">Daily</Select.Option>
              <Select.Option value="weekly">Weekly</Select.Option>
              <Select.Option value="monthly">Monthly</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="endDate"
            label="Challenge End Date"
            rules={[{ required: true, message: "Please select an end date" }]}
          >
            <DatePicker disabledDate={(current) => current && current < Date.now()} />
          </Form.Item>

          {form.getFieldValue("duration") && (
            <Form.Item
              name="rewardPoints"
              label="Reward Points"
              rules={[{ required: true, message: "Reward points are missing" }]}
            >
              <Input disabled value={rewardPoints[form.getFieldValue("duration")]} />
            </Form.Item>
          )}
        </Form>
      </Modal>

      {createdChallenge && (
        <Modal
          title={`${createdChallenge.name} Progress`}
          visible={showProgressModal}
          onCancel={() => setShowProgressModal(false)}
          onOk={() => setShowProgressModal(false)}
        >
          <h4>Name: {createdChallenge.name}</h4>
          <p>Type: {createdChallenge.type}</p>
          <p>Category: {createdChallenge.type === 'goals' ? createdChallenge.goalCategory : createdChallenge.budgetCategory}</p>
          <p>Target Amount: {createdChallenge.amount}</p>
          <p>Achieved Amount: {achievedAmount}</p>
          <Progress percent={Math.round((achievedAmount / createdChallenge.amount) * 100)} />
          <p>Challenge Duration: {createdChallenge.duration}</p>
          <p>End Date: {createdChallenge.endDate.format('DD/MM/YYYY')}</p>
        </Modal>
      )}



         {selectedChallenge && (
        <Modal
          title={`${selectedChallenge.name} Progress`}
          visible={showProgressModal}
          onCancel={() => setShowProgressModal(false)}
          onOk={() => setShowProgressModal(false)}
        >
          <h4>Name: {selectedChallenge.name}</h4>
          <p>Category: {selectedChallenge.category}</p>
          <p>Target Amount: {selectedChallenge.amount}</p>
          <Progress percent={Math.round((achievedAmount / selectedChallenge.amount) * 100)} />
          <p>Challenge Duration: {selectedChallenge.duration}</p>
          <p>End Date: {selectedChallenge.endDate.format('DD/MM/YYYY')}</p>
        </Modal>
      )}



    </div>
  );
};

export default ChallengePage;

