import { PureComponent } from "react";


export default class compareOf extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        let { c1, itemId } = this.props;
        console.log("props of compare Of ", this.props)
        return (
            <>
                {itemId && c1.images ?
                    <div>
                        <img alt="comimg"
                            src={c1.images[itemId]}
                            style={{ width: "205px", height: "150px" }}
                        />
                    </div>
                    : ""}
                <div>
                    {itemId && c1.titles ?
                        <span className="c1title">{c1.titles[itemId].title}</span>
                        : ""}
                </div>
                <div>
                    {itemId && c1.titles ?
                        <div>
                            <span className="price1">&#8377; {c1.productPricingSummary[itemId].finalPrice}</span>
                            <strike className="price2">&#8377; {c1.productPricingSummary[itemId].price}</strike>
                            <span className="price3">{c1.productPricingSummary[itemId].totalDiscount} %</span>
                        </div>
                        : ""}
                </div>

            </>

        )
    }
}