import React, { Component, useState, version } from "react";
import { connect } from "react-redux";
import { Carousel } from 'antd';

class MidPanel2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="baseClass">
                <div >
                    <h3>Autoplay Carousel</h3>
                    <Carousel autoplay>

                        <div><h3>Carousel Content 1</h3></div>
                        <div><h3>Carousel Content 2</h3></div>
                        <div><h3>Carousel Content 3</h3></div>
                        <div><h3>Carousel Content 4</h3></div>
                    </Carousel>
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
)(MidPanel2);
