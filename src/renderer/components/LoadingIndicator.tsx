import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = () => (
  <LoadingWrapper>
    <Spin />
  </LoadingWrapper>
);
