import './Costs.css'
import CostItem from "./CostItem.jsx";
import Card from "../UI/Card.jsx";

function Costs(props) {
    const costs = props.costs

    return (
        <Card className="costs">
            <CostItem
                date={costs[0].date}
                description={costs[0].description}
                amount={costs[0].amount}
            />
            <CostItem
                date={costs[1].date}
                description={costs[1].description}
                amount={costs[1].amount}
            />
        </Card>
    )
}

export default Costs