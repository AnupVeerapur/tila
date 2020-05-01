import React, { Component, useState, version } from "react";
import { Checkbox, Row, Col, Select } from 'antd';
import actions from "../redux/action";
import { connect } from "react-redux";
import CompareOf from "../components/compareOf";
import { CloseCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import SelectBox from "../components/selectBox";

const { onFetchItem, onAddItem, onDeleteItem } = actions;

// Expects - redux for listing object
// Caters other components and passes props such as data and redux methods
class CompareList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsInDisplay: [],
            updatedDDData: [],
            countSel: 0,
            showOnlyDiff: false,
        }
    }

    componentDidMount() {
        this.props.onFetchItem();
    }



    onDDChange = (value) => {
        console.log("On change of value : ", value)

        let tempDispArr = this.state.itemsInDisplay;
        tempDispArr.push(value);

        this.setState({
            [value]: true,
            itemsInDisplay: tempDispArr,
            countSel: this.state.countSel + 1
        })

        let payload = {
            value: value,
            arr: this.props.listOfDDItemsData
        }
        this.props.onAddItem(payload)
    }

    handleCloseItem = (e, closeId) => {

        let tempDispArr = this.state.itemsInDisplay;
        let indx = tempDispArr.indexOf(closeId);
        tempDispArr.splice(indx, 1);

        this.setState({
            [closeId]: false,
            itemsInDisplay: tempDispArr,
            countSel: this.state.countSel - 1
        })
        let payload = {
            value: closeId,
            arr: this.props.listOfDDItemsData
        }
        this.props.onDeleteItem(payload)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.listOfDDItemsData != nextProps.listOfDDItemsData) {
            this.setState({
                updatedDDData: nextProps.listOfDDItemsData,
            })
        }
    }

    showDifferences = (e) => {
        this.setState({
            showOnlyDiff: e.target.checked
        })
    }

    checkKey = (item, ind) => {
        console.log(item, ind)
        if (this.state.showOnlyDiff) {
            let cnt = 0;
            let temp = item.values[this.state.itemsInDisplay[0]];
            this.state.itemsInDisplay.map((items) => {
                if (temp === item.values[items]) {
                    cnt++;
                }
            })
            if (cnt == this.state.itemsInDisplay.length) {
                return false;
            }
        }
        return true;

    }

    render() {
        let { listOfTotalItemsData, compareListData, featureListData, listOfDDItemsData } = this.props;
        let { itemsInDisplay, countSel } = this.state;
        return (
            <div className="baseClass">
                <Row>
                    <Col span={4}>
                        <div>
                            <div className="pageHead">Compare Items</div>
                            <div >
                                <span>{countSel}  items selected </span>
                            </div>
                            <div className="checkText">
                                {countSel > 1 ?
                                    <Checkbox onChange={this.showDifferences}>
                                        Show only differences
                                        </Checkbox> : ""}
                            </div>
                        </div>
                    </Col>
                    {itemsInDisplay && itemsInDisplay.map(item =>
                        <Col span={5} >
                            <div>
                                <div>
                                    <CompareOf c1={compareListData} itemId={item} />
                                    <CloseCircleOutlined
                                        className="closeCompare"
                                        onClick={(e) => this.handleCloseItem(e, item)}
                                    />
                                </div>
                            </div>
                        </Col>
                    )}
                    {listOfDDItemsData && listOfDDItemsData.map(item =>
                        <Col key={this.state.countSel + "_" + item} span={5}>
                            <div>
                                <div className="imgPlaceholder" />
                                <div>Add a product</div>
                                <SelectBox
                                    onDDChange={this.onDDChange}
                                />
                            </div>
                        </Col>
                    )}
                </Row>
                <Row>
                    <div style={{ width: "100%" }}>
                        {featureListData ?
                            featureListData.map(disp =>
                                <div key={disp}>
                                    <div className="featureTitle">{disp.title}</div>
                                    {disp.features.map((item, ind) =>
                                        <div>
                                            {this.checkKey(item, ind) ?
                                                <Row>
                                                    <Col span={4} className="featureHeaderFont">
                                                        {item.featureName}
                                                    </Col>
                                                    {itemsInDisplay && itemsInDisplay.map((x) =>
                                                        <Col span={5} className="">
                                                            {item.values[x]}
                                                        </Col>
                                                    )}
                                                </Row> : ""}
                                        </div>
                                    )
                                    }
                                </div>
                            )
                            : ""
                        }
                    </div>
                </Row>
            </div >
        )

    }
}

const mapStateToProps = state => {
    return {
        compareListData: state.compareList,
        featureListData: state.featureList,
        listOfTotalItemsData: state.listOfTotalItems,
        listOfDDItemsData: state.listOfDDItems.value,
    };
};


export default connect(
    mapStateToProps, { onFetchItem, onAddItem, onDeleteItem }
)(CompareList);
