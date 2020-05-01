import { Component } from "react";
import { connect } from "react-redux";
import { Select } from "antd";

class selectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    handleChange = (val) => {
        this.setState({
            ddValue: val
        })
        this.props.onDDChange(val);
    }



    render() {
        let { listOfSelItemsData, listOfDDItemsDataQQ } = this.props;
        let dropDownOptions = listOfDDItemsDataQQ.value;
        // console.log("List of drodown item in select", dropDownOptions)
        return (
            <div>
                {dropDownOptions ?
                    <Select
                        placeholder="Choose a product"
                        className="selectSection"
                        onChange={this.handleChange}
                    >
                        {dropDownOptions.map(item =>
                            <Option value={item}> {item} </Option>
                        )}
                    </Select >
                    : ""
                }
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        // ...state,
        listOfDDItemsDataQQ: state.listOfDDItems,
    }
}

export default connect(mapStateToProps, {

})(selectBox)