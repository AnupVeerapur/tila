import React, { Component, useState, version } from "react";
import {
    Table, Tag, Form, Input, InputNumber, Popconfirm, Row, Col, Dropdown,
    Progress, DatePicker, Select, Slider, Popover, Button, Modal, Badge
} from 'antd';
import actions from "../redux/action";
import { connect } from "react-redux";
import { MenuOutlined } from '@ant-design/icons';


const { onFetchItem } = actions;

// Expects - redux for listing object
// Caters other components and passes props such as data and redux methods
class CompareList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onFetchItem();
    }

    render() {
        return (
            <>
                <div>
                    <Row>
                        <Col span={8}>
                            Compare items
                    </Col>
                        <Col span={8}>
                            <div>
                                <img alt="example"
                                    src="https://rukminim1.flixcart.com/image/1000/1000/jefzonk0/television/r/a/f/mi-l43m5-ai-original-imaf34hgjzc4xr62.jpeg?q=100"
                                    style={{ width: "250px", height: "150px" }}
                                />
                            </div>
                            <div>
                                HD reday led tv
                        </div>
                            <div>
                                Rs 100000 RS213421 8% off
                        </div>
                        </Col>
                        <Col span={8}>

                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        Display
                </Row>
                    <Row>
                        <Col span={8}>

                        </Col>
                        <Col span={8}>

                        </Col>
                        <Col span={8}>

                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        compareListData: state.compareList,
        featureListData: state.featureList
    };
};


export default connect(
    mapStateToProps, { onFetchItem }
)(CompareList);
