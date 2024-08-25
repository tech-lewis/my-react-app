import React, { useState } from 'react';
import {
  UploadOutlined,
	HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const ComponentAside: React.FC = ()=> {

	const [menus] = useState([
		{
			key: '1',
			icon: <HomeOutlined />,
			label: '项目面版',
			path: '/main'
		},
		{
			key: '2',
			icon: <UserOutlined />,
			label: '团队管理',
		},
		{
			key: '3',
			icon: <UploadOutlined />,
			label: 'nav 3',
		},
	]);

  return (
    <Sider trigger={null} collapsible>
    <div className="demo-logo-vertical">
      <h3 className={'app-name'}>React Demo</h3>
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
        // selectMenu(item.key)
      }}
      items={menus}
    />
    </Sider>
  )
}

export default ComponentAside;