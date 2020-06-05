import React, { Component, useState, version } from "react";

import { connect } from "react-redux";
import { Layout, Menu, Breadcrumb, Input, Tabs } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import MidPanel from "./MidPanel";
import MidPanel2 from "./MidPanel2";
import MidPanel3 from "./MidPanel3";
import Link from 'next/link';


const { SubMenu } = Menu;
const TabPane = Tabs.TabPane;
const { Header, Content, Sider } = Layout;

const { Search } = Input;
// Expects - redux for listing object
// Caters other components and passes props such as data and redux methods
class demoPage extends Component {

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



    render() {

        let { activeKey } = this.state;
        const renderMidPanel = () => {
            if (activeKey == 1) {
                return <MidPanel />
            } else {
                return <MidPanel2 />
            }
        }

        return (
            <div className="baseClass">
                <Layout>
                    <Header className="header">
                        <div className="header-left-div">
                            <div className="logo">
                                <img alt="example" src="/logo.jpg" />
                            </div>
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ width: "25%" }}
                            />
                        </div>
                        <div className="header-right-div">
                            <span className="header-right-icon">
                                <NotificationOutlined style={{ fontSize: "20px" }} />
                            </span>
                            <span className="header-right-icon">
                                <LaptopOutlined style={{ fontSize: "20px" }} />
                            </span>
                            <span>
                                <img alt="example" className="header-usr-logo" src="/logo.png" />
                            </span>
                        </div>
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
                                        List - Clickable
                                    </Menu.Item>
                                    <Menu.Item key="2" onClick={this.openMidPanel}>
                                        Calendar - Clickable
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
                            <Tabs defaultActiveKey="1" >
                                <TabPane tab="Status" key="1">

                                    <Content
                                        className="site-layout-background"
                                        style={{
                                            margin: 0,
                                            minHeight: "70vh",
                                            maxHeight: "100vh",
                                        }}
                                    >
                                        {renderMidPanel()}
                                    </Content>
                                </TabPane>
                                <TabPane tab="Request History" key="2">
                                    <MidPanel3 />
                                </TabPane>
                            </Tabs>
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
)(demoPage);
