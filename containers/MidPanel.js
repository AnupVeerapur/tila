import React, { Component, useState, version } from "react";
import { connect } from "react-redux";
import { Collapse, Drawer, List, Menu, Space } from 'antd';
import DrawerContent1 from "./drawerContent1";
import DrawerContent2 from "./drawerContent2";
const { Panel } = Collapse
const data = [
    'Racing car sprays burning fuel into crowd.-Clickable',
    'Japanese princess to wed commoner.-Clickable',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
class MidPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            placement: 'left',
            typeOfPanel: ""
        }
    }

    componentDidMount() {

    }

    showDrawer = (item) => {
        this.setState({
            visible: true,
            typeOfPanel: item
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };


    callback(key) {
        console.log(key);
    }

    renderPropsType() {
        let { typeOfPanel } = this.state;
        switch (typeOfPanel) {
            case "Racing car sprays burning fuel into crowd.-Clickable":
                return <DrawerContent1 />
            case "Japanese princess to wed commoner.-Clickable":
                return <DrawerContent2 />
        }
    }

    render() {

        const text = `A dog is a type of domesticated animal.
                        Known for its loyalty and faithfulness,
                        it can be found as a welcome guest in many households across the world.`;

        const { placement, visible } = this.state;
        let { typeOfPanel } = this.state;

        return (
            <div className="baseClass">

                <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                    <Panel header="Landing page for new campaign" key="1" >
                        <List
                            size="large"
                            bordered
                            dataSource={data}
                            renderItem={item =>
                                <List.Item onClick={() => this.showDrawer(item)}>
                                    {item}
                                </List.Item>}
                        />
                    </Panel>
                    <Panel header="Dashboard for LP Performance" key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="Scorecard for strategy building" key="3" disabled>
                        <p>{text}</p>
                    </Panel>
                </Collapse>
                <div >
                    <Drawer
                        placement="right"
                        closable={false}
                        width="35%"

                        onClose={this.onClose}
                        visible={visible}
                        key={placement}
                    >
                        {this.renderPropsType()}
                    </Drawer>
                </div>
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
)(MidPanel);
