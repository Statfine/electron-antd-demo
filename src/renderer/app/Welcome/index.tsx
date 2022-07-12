import { useNavigate } from 'react-router-dom';

import icon from '../../../../assets/icon.png';
import '../../App.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleJump = () => navigate('/dashboard');

  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>Hello </h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <p onClick={handleJump}>Dashboard</p>
      </div>
    </div>
  );
};

export default Welcome;
