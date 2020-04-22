import React, { Component, useState, version } from "react";
import {
    Table, Tag, Form, Input, InputNumber, Popconfirm, Row, Col, Dropdown,
    Progress, DatePicker, Select, Slider, Popover, Button, Modal, Badge
} from 'antd';
import actions from "../redux/action";
import { connect } from "react-redux";
import { MenuOutlined } from '@ant-design/icons';


const { } = actions;

// Main release listing page
// Expects - redux for listing object
// Caters other components and passes props such as data and redux methods
class CompareList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Hi main page
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
)(CompareList);
