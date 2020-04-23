import React, { Component, useState, version } from "react";
import {
    Table, Tag, Form, Checkbox, InputNumber, Popconfirm, Row, Col, Dropdown,
    Progress, DatePicker, Select, Slider, Popover, Button, Modal, Badge
} from 'antd';
import actions from "../redux/action";
import { connect } from "react-redux";
import CompareOf from "../components/compareOf";
import { CloseCircleOutlined } from '@ant-design/icons';

const { onFetchItem } = actions;

// Expects - redux for listing object
// Caters other components and passes props such as data and redux methods
class CompareList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leftDropdown: true,
            rightDropdown: true,
            leftId: "",
            countSel: 0,
            rightId: "",
            showOnlyDiff: false
        }
    }

    componentDidMount() {
        this.props.onFetchItem();
    }

    showDifferences = (e) => {
        this.setState({
            showOnlyDiff: e.target.checked
        })
    }

    showLeftDropdown = () => {
        this.setState({
            leftDropdown: true,
            leftItem: "",
            countSel: this.state.countSel - 1
        })
    }
    showRightDropdown = () => {
        this.setState({
            rightDropdown: true,
            rightItem: "",
            countSel: this.state.countSel - 1
        })
    }

    handleLeftChange = (value) => {
        console.log("value of dropdown", value)
        this.setState({
            leftDropdown: false,
            leftItem: value,
            countSel: this.state.countSel + 1
        })
    }
    handleRightChange = (value) => {
        console.log("value of dropdown", value)
        this.setState({
            rightDropdown: false,
            rightItem: value,
            countSel: this.state.countSel + 1
        })
    }

    render() {

        let f1 = this.props.featureListData;
        let c1 = this.props.compareListData;
        let { rightItem, rightDropdown, leftDropdown, leftItem, countSel, showOnlyDiff } = this.state;
        return (
            <div className="baseClass">

                <div>
                    {c1 ?
                        <Row>
                            <Col span={8}>
                                <div>
                                    <div className="pageHead">Compare Items</div>
                                    <div >
                                        <span>{countSel}  items selected </span>
                                    </div>
                                    <div className="checkText">
                                        {countSel == 2 ?
                                            <Checkbox onChange={this.showDifferences}>
                                                Show only differences
                                        </Checkbox> : ""}
                                    </div>
                                </div>
                            </Col>
                            {/* Left Item */}
                            <Col span={8}>
                                <div>
                                    {c1.productPricingSummary && leftDropdown ?
                                        <div>
                                            <div className="imgPlaceholder" />
                                            <div>Add a product</div>
                                            <Select placeholder="Choose a product" className="selectSection" onChange={this.handleLeftChange}>
                                                {Object.keys(c1.productPricingSummary).map(item =>
                                                    <Option value={item}> {item} </Option>
                                                )}
                                            </Select>
                                        </div>
                                        :
                                        <div>
                                            <CompareOf c1={c1} itemId={leftItem} />
                                            <CloseCircleOutlined className="closeCompare" onClick={this.showLeftDropdown} />
                                        </div>
                                    }
                                </div>
                            </Col>
                            {/* Right Item */}
                            <Col span={8}>
                                <div>
                                    {c1.productPricingSummary && rightDropdown ?
                                        <div>
                                            <div className="imgPlaceholder" />
                                            <div>Add a product</div>
                                            <Select placeholder="Choose a product" className="selectSection" onChange={this.handleRightChange}>
                                                {Object.keys(c1.productPricingSummary).map(item =>
                                                    <Option value={item}> {item} </Option>
                                                )}
                                            </Select>
                                        </div>
                                        :
                                        <div>
                                            <CompareOf c1={c1} itemId={rightItem} />
                                            <CloseCircleOutlined className="closeCompare" onClick={this.showRightDropdown} />
                                        </div>
                                    }
                                </div>
                            </Col>
                        </Row>
                        : ""
                    }
                </div>
                <div>
                    {f1 ?
                        f1.map(disp =>
                            <div key={disp}>
                                <div className="featureTitle">{disp.title}</div>
                                {disp.features.map(item =>
                                    <div>
                                        {showOnlyDiff && (item.values[leftItem] == item.values[rightItem]) ? "" :
                                            <Row key={item}>
                                                <Col span={8} className="featureHeaderFont colRight leftPad">
                                                    {item.featureName}
                                                </Col>
                                                {/* if checkbox show only differences */}

                                                < Col span={8} className="colRight leftPad">
                                                    {item.values[leftItem]}
                                                </Col>
                                                <Col span={8} className="leftPad">
                                                    {item.values[rightItem]}
                                                </Col>
                                            </Row>
                                        }
                                    </div>
                                )
                                }
                            </div>
                        )
                        : ""
                    }
                </div>
            </div>
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
