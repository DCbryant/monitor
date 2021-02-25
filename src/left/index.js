import { Menu } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './index.css'

const { SubMenu } = Menu;

function Left() {
  return (
    <div className="left">
      <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            监控页
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            全局监控
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            服务监控
          </Menu.Item>
          <Menu.Item key="5" icon={<ContainerOutlined />}>
            用户行为
          </Menu.Item>
        </Menu>
    </div>
  );
}

export default Left;
