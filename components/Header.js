import Link from 'next/link';

// const linkStyle = {
//     marginRight: 15
// }

// const Header = () => (
//     <div className='menuStyle'>
//         <Link href='/'>
//             <a style={linkStyle}>Home</a>
//         </Link>
//         <Link href='/about'>
//             <a style={linkStyle}>About</a>
//         </Link>
//     </div>
// )

// export default Header;

import React, { Component, useState, version } from "react";

import { connect } from "react-redux";
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import MidPanel from "../containers/MidPanel";
import MidPanel2 from "../containers/MidPanel2";


const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const { Search } = Input;
// Expects - redux for listing object
// Caters other components and passes props such as data and redux methods
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: 1
        }
    }

    componentDidMount() {

    }


    openMidPanel = (item) => {

        console.log("item-------------------", item.item.props.children)
        this.setState({
            activeKey: item.key
        })

    }




    renderMidPanel = () => {
        let { activeKey } = this.state;
        console.log("Active Key ::::::", activeKey)
        switch (activeKey) {
            case 1:
                console.log("switch", activeKey)
                return <MidPanel2 />

            case 2:
                console.log("switch 22 : ", activeKey)
                return <MidPanel />
        }
    };

    render() {


        const a = <MidPanel />
        return (
            <div className="baseClass">
                <Layout>
                    <Header className="header">
                        <div className="logo">
                            <img alt="example" src="/logo.jpg" style={{ width: "120px", height: "46px" }} />
                        </div>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="Project Status">
                                    <Menu.Item key="1" onClick={this.openMidPanel} >
                                        List
                                        {/* <Link to="/MidPanel" /> */}
                                        <Link href='/MidPanel'>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="2" onClick={this.openMidPanel}>
                                        Calendar
                                        <Link href="/MidPanel2" />
                                    </Menu.Item>
                                    <Menu.Item key="3">Timeline</Menu.Item>
                                    <Menu.Item key="4">Cards</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Performance">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Meetings">
                                    <Menu.Item key="9">option9</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" icon={<NotificationOutlined />} title="All Files">
                                    <Menu.Item key="10">option10</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: "80vh",
                                    maxHeight: "100vh",

                                }}
                            >
                                {/* {this.renderMidPanel()} */}

                                {/* <Link href='/'>
                                    <a style={linkStyle}>Home</a>
                                </Link>
                                <Link href='/about'>
                                    <a style={linkStyle}>About</a>
                                </Link> */}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div >
        )

    }
}

const mapStateToProps = state => {
    return {

    };
};


export default connect(
    mapStateToProps, {}
)(Header);
