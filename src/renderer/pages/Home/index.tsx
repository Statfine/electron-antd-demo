import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import * as Styled from './style';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/dashboard'), 3000);
  }, []);

  return (
    <Styled.Container>
      <Styled.Text>Welcome</Styled.Text>
    </Styled.Container>
  );
};

export default Home;
