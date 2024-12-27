import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './index.css';
import router from '@/config/router.config.ts';
import App from './App.tsx';

router();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#04B8CC',
          },
          Radio: {
            buttonSolidCheckedBg: '#04B8CC',
            buttonSolidCheckedActiveBg: '#04B8CC',
            buttonSolidCheckedHoverBg: '#04B8CC',
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
