import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
	HomeOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
// import { Outlet, useNavigate } from 'react-router-dom'
// import RoutexHome from './components/Home'
import routes from './router'
import { useNavigate , useRoutes } from 'react-router-dom'
const { Header, Sider, Content } = Layout;


const Application: React.FC = () => {
  const navigator = useNavigate() // Hooks编程路由导航的写法
	const element = useRoutes(routes)
  const [collapsed, setCollapsed] = useState(false);
	
	const [menus] = useState([
		{
			key: '1',
			icon: <HomeOutlined />,
			label: 'Main demo',
			path: '/home'
		},
		{
			key: '2',
			icon: <VideoCameraOutlined />,
			label: 'nav 2',
		},
		{
			key: '3',
			icon: <UploadOutlined />,
			label: 'nav 3',
		},
	]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
	// let history: NavigateFunction = null;
	// useEffect(() => {
	// 	history = useNavigate()
	// 	return () => {}
	// }, [])

	function selectMenu (index: string, item?: MenuInfo) {
		switch (index) {
			case '1':
				navigator('/home', {
					replace: false
				})
				break;
			case '2':
			default:
				break;
		}
	}
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
					<h3 style={{ textAlign: 'center'}}>React Demo</h3>
				</div>
        <Menu
          theme="dark"
          mode="inline"
					style={{
						height: '100vh'
					}}
          defaultSelectedKeys={['1']}
					onClick={ (item) => {
						console.log(item.key)
						selectMenu(item.key)
					}}
          items={menus}
        />
      </Sider>
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