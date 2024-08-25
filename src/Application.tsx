import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import ComponentAside from './components/componentAside'
// import { Outlet, useNavigate } from 'react-router-dom'
// import RoutexHome from './components/Home'
import routes from './router'
import { useRoutes } from 'react-router-dom'
const { Header, Content } = Layout;


const Application: React.FC = () => {
	const element = useRoutes(routes)
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
	// let history: NavigateFunction = null;
	// useEffect(() => {
	// 	history = useNavigate()
	// 	return () => {}
	// }, [])

  return (
    <Layout className='main-container'>
      <ComponentAside />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {element}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Application;