import React, { Component, useState, version } from "react";
import { connect } from "react-redux";
import { Collapse, Button, Input, Avatar, Menu, Row, Col } from 'antd';
import {
    RightCircleOutlined, SearchOutlined, ArrowsAltOutlined, CloseCircleOutlined,
    MailOutlined, FileAddOutlined, UsergroupAddOutlined, InfoCircleOutlined, UserOutlined
} from '@ant-design/icons';
const { Panel } = Collapse

const { TextArea } = Input;
const { SubMenu } = Menu;
class DrawerContent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }


    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };


    render() {

        return (
            <div className="rightPanel-base">
                <div className="rp-header">
                    <div style={{ width: "10%", float: "left" }}>
                        <RightCircleOutlined className="rp-icons" />
                    </div>
                    <div style={{ minWidth: "60%", float: "left" }}>
                        <span >   Content for LP</span>
                    </div>
                    <div style={{ width: "10%", float: "left" }}>
                        <SearchOutlined className="rp-icons" />
                    </div>
                    <div style={{ width: "10%", float: "left" }}>
                        <ArrowsAltOutlined className="rp-icons" />
                    </div>
                    <div style={{ width: "10%", float: "right" }}>
                        <CloseCircleOutlined className="rp-icons" />
                    </div>
                </div>
                <div>
                    <Row>
                        <Col span={24}>
                            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                                <Menu.Item key="chat">
                                    <MailOutlined />
                                </Menu.Item>
                                <Menu.Item key="info" >
                                    <InfoCircleOutlined />
                                </Menu.Item>
                                <Menu.Item key="group" >
                                    <UsergroupAddOutlined />
                                </Menu.Item>
                                <Menu.Item key="attach">
                                    <FileAddOutlined />
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </div>
                <div>
                    <div className="container cl">
                        <Avatar size="small" icon={<UserOutlined />} />
                        <p>Hello. How are you today?</p>
                        <span className="time-right">11:00</span>
                    </div>
                    <div className="container darker cr">
                        <Avatar size="small" className="right" icon={<UserOutlined />} />
                        <p>Hey! I'm fine. Thanks for asking!</p>
                        <span className="time-left">11:01</span>
                    </div>
                    <div className="container cl">
                        <Avatar size="small" icon={<UserOutlined />} />
                        <p>Sweet! So, what do you wanna do today?</p>
                        <span className="time-right">11:02</span>
                    </div>
                    <div className="container darker cr">
                        <Avatar size="small" className="right" icon={<UserOutlined />} />
                        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                        <span className="time-left">11:05</span>
                    </div>
                </div>

                <div className="rp-footer">
                    <div className="footer-attach-box">
                        <span className="footer-attach-box-icon"><MailOutlined /></span>
                        <span className="footer-attach-box-icon"><InfoCircleOutlined /></span>
                        <span className="footer-attach-box-icon"><UsergroupAddOutlined /></span>
                        <span className="footer-attach-box-icon"><FileAddOutlined /></span>
                    </div>
                    <div className="input-l-box">
                        <TextArea rows={4} />
                    </div>
                    <div className="send-r-box">
                        <Button type="primary" className="sendBtn">Send</Button>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {

    };
};


export default connect(
    mapStateToProps, {}
)(DrawerContent);
