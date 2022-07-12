import { useNavigate } from 'react-router-dom';

import icon from '../../../../assets/icon.png';

import * as Styled from './style';

const Welcome = () => {
  const navigate = useNavigate();

  const handleJump = () => navigate('/dashboard');

  return (
    <Styled.Container>
      <Styled.Content>
        <img width="200px" alt="icon" src={icon} />
      </Styled.Content>
      <h1>Hello Word</h1>
      <Styled.Content>
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Styled.Btn type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </Styled.Btn>
        </a>
        <Styled.Btn type="button" onClick={handleJump}>
          Dashboard
        </Styled.Btn>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Welcome;
