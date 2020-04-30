import React, { Component, useState, version } from "react";
import { Checkbox, Row, Col, Select } from 'antd';
import actions from "../redux/action";
import { connect } from "react-redux";
import CompareOf from "../components/compareOf";
import { CloseCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import SelectBox from "./selectBox";

const { onFetchItem, onAddItem } = actions;

// Expects - redux for listing object
// Caters other components and passes props such as data and redux methods
class CompareList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeId: "",
            itemsInDisplay: [],
            updatedDDData: [],
            countSel: 0
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
            activeId: value,
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

    handleCloseItem = (e, activeId) => {
        console.log("Active id to close : ", activeId)
        this.setState({
            [activeId]: false
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.listOfDDItemsData != nextProps.listOfDDItemsData) {
            this.setState({
                updatedDDData: nextProps.listOfDDItemsData,
            })
        }
    }


    render() {
        // console.log("DD List ------------------------>", this.props.listOfDDItemsData)
        console.log("DD state Display List", this.state.itemsInDisplay)
        // console.log("DD List listOfTotalItemsData", this.props.listOfTotalItemsData)
        let { listOfTotalItemsData, compareListData, featureListData, listOfDDItemsData } = this.props;
        let { activeId, itemsInDisplay, countSel } = this.state;
        let sendDDData = this.state.updatedDDData;
        console.log("featureListData Data ---------------------->", featureListData)
        return (
            <div className="baseClass">
                <Row>
                    <Col span={6}>
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
                        <Col span={4}>
                            <div>
                                <div>
                                    <CompareOf c1={compareListData} itemId={item} />
                                    <CloseCircleOutlined className="closeCompare" onClick={(e) => this.handleCloseItem(e, activeId)} />
                                </div>
                            </div>
                        </Col>
                    )}
                    {listOfDDItemsData && listOfDDItemsData.map(item =>
                        <Col key={item} span={4}>
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
                {/* <Row>
                    <Col span={6}>
                        ksldfjsdlfkjsdlkf
                    </Col>
                    <Col span={4}>
                        dfklsdjfklsdf
                    </Col>
                    <Col span={4}>
                        kfdsljfsdf
                    </Col>
                    <Col span={4}>
                        sdfsdfsdfdsffds
                    </Col>
                    <Col span={4}>
                        sdfdsfdsfsdfsdfsdfds
                    </Col>
                </Row> */}
                <Row>
                    <div style={{ width: "100%" }}>
                        {featureListData ?
                            featureListData.map(disp =>
                                <div key={disp}>
                                    <div className="featureTitle">{disp.title}</div>
                                    {disp.features.map(item =>
                                        <div>
                                            <Row>
                                                <Col span={6} className="featureHeaderFont">
                                                    {item.featureName}
                                                </Col>
                                                {itemsInDisplay && itemsInDisplay.map(x =>
                                                    <Col span={4} className="">
                                                        {item.values[x]}
                                                    </Col>
                                                )}
                                            </Row>
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
    mapStateToProps, { onFetchItem, onAddItem }
)(CompareList);
