import React, { Component, useState, version } from "react";
import { connect } from "react-redux";
import { Collapse, Button, Input, Avatar, Menu, Card, Row, Col } from 'antd';
import {
    RightCircleOutlined, SearchOutlined, ArrowsAltOutlined, CloseCircleOutlined,
    MailOutlined, FileAddOutlined, UsergroupAddOutlined, InfoCircleOutlined, UserOutlined
} from '@ant-design/icons';

const { Meta } = Card;
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
                    Images
                </div>
                <div>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
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
