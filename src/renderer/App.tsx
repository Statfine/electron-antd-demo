import { ConfigProvider, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import 'antd/dist/antd.less'; // antd样式
import App from './app/index';

import GlobalStyle from './style/globalStyle'; // 全局样式

dayjs.locale('zh-cn');
message.config({
  maxCount: 1,
});

const Application = () => {
  return (
    <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
      <App />
      <GlobalStyle />
    </ConfigProvider>
  );
};

export default Application;
