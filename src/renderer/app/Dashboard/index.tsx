/**
 * Dashboard
 */
import { useNavigate } from 'react-router-dom';
import { memo, useState } from 'react';
import { DatePicker, Button, Steps, Modal } from 'antd';

const { RangePicker } = DatePicker;
const { Step } = Steps;
const Dashboard = memo(() => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleJump = () => navigate(-1);
  return (
    <>
      <h1>Dashboard</h1>
      <Button type="primary" onClick={handleJump}>
        back
      </Button>
      <div>
        <RangePicker format="YYYY-MM-DD HH:mm:ss" />
        <DatePicker />
        <Button type="primary" onClick={showModal}>
          Primary Button
        </Button>
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step
            title="In Progress"
            subTitle="Left 00:00:08"
            description="This is a description."
          />
          <Step title="Waiting" description="This is a description." />
        </Steps>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </>
  );
});

export default Dashboard;
