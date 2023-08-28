// ProfilePage.js

import React, { useState } from "react";
import { Form, Input, message } from "antd";

import { Navigate } from "react-router-dom";
import { isUserLoggedIn } from '../utils/authUtils';


const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Update Profile");

  // Form handling for updating profile
  const handleUpdateProfile = async (values) => {
    try {
      setLoading(true);
      // Simulate an update process (without backend connection)
      // Replace with actual API calls in a real scenario
      setTimeout(() => {
        setLoading(false);
        setButtonText("Profile Updated");
        message.success("Profile Updated Successfully");
      }, 1000); // Simulate a 1-second update process
    } catch (error) {
      setLoading(false);
      message.error("Unable to update profile");
    }
  };

  if (!isUserLoggedIn()) {
    // If the user is not logged in, redirect them to the login page
    return <Navigate to="/login" />;
  }
  

  // If the user is logged in, render the profile page

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <Form layout="vertical" onFinish={handleUpdateProfile}>
        <Form.Item label="Name" name="name">
          <Input type="text" required />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {buttonText}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ProfilePage;
