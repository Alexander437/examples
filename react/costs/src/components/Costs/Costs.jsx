import './Costs.css'
import CostItem from "./CostItem.jsx";
import Card from "../UI/Card.jsx";
import CostsFilter from "./CostsFilter.jsx";
import {useState} from "react";

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2022');
    const costs = props.costs

    const onChangeYear = (year) => {
        console.log(year);
        setSelectedYear(year);
    }

    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={onChangeYear}/>
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