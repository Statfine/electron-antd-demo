import { Card } from 'antd';

import icon from '../../../../assets/icon.png';

const Home = () => {
  return (
    <Card style={{ padding: '100px', background: 'transparent' }}>
      <img
        src={icon}
        style={{
          maxWidth: '160px',
          width: '100%',
          height: 'auto',
          margin: 'auto',
          display: 'block',
        }}
        alt="logo"
      />
      <p
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bolder',
          marginTop: 20,
        }}
      >
        欢迎使用我的系统
      </p>
    </Card>
  );
};

export default Home;
