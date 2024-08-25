import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import MenuConfig from '../../config'
import * as Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
interface MenuItem {
  key: string,
  label: string
  icon?: any,
  children?: MenuItem[]
}
const ComponentAside: React.FC = ()=> {
  const navigator = useNavigate() // Hooks编程路由导航的写法
  // const [name, setName] = useState('mark')
  // 动态创建Icon图标
  const IconElement = (props : {icon: string}) => {
    const {icon} = props
    const antIcon: {
      [key: string]: any
    } = Icon
    return React.createElement(antIcon[icon])
  }

  const selectMenu = (e: any) => {
    let data
    MenuConfig.forEach((item) => {
      // 找到当前的数据
      if (item.path === e.keyPath[e.keyPath.length - 1]) {
        data = item
        // 如果是有二级菜单
        if (e.keyPath.length > 1) {
          data = item.children?.find((child) => {
            return child.path === e.key
          })
        }
      }
    })
    // setTabsList({
    //   path: data.path,
    //   name: data.name,
    //   label: data.label
    // })
    console.log(data)
    // 页面跳转
    navigator(e.key)
  }
  const menus = MenuConfig.map(item => {
    const child: MenuItem = {
      key: item.path,
      label: item.label,
      icon: <IconElement icon={item.icon}/>
    }

    if (item.children) {
      child.children = item.children.map(item => {
        return {
          key: item.path,
          label: item.label,
        }
      })
    }

    return child
  })


  console.log(menus)
  console.log(useState)
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
      onClick= {selectMenu}
      items={menus}
    />
    </Sider>
  )
}

export default ComponentAside;