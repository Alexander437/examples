import './Costs.css'
import Card from "../UI/Card.jsx";
import CostsFilter from "./CostsFilter.jsx";
import {useState} from "react";
import CostList from "./CostList.jsx";
import CostsDiagram from "./CostsDiagram.jsx";

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2022');

    const onChangeYear = (year) => {
        setSelectedYear(year);
    }
    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    })

    // Вариант 2
    // {filteredCosts.length === 0 && <p>В этом году расходов нет</p>}
    // {filteredCosts.length > 0 &&
    // filteredCosts.map(cost =>
    //     <CostItem
    //         key={cost.id}  // для списков с компонентами в react
    //         date={cost.date}
    //         description={cost.description}
    //         amount={cost.amount}
    //     />
    // )}

    // Вариант 3
    // {filteredCosts.length === 0 ? (
    //     <p>В этом году расходов нет</p>
    // ) : (
    //     filteredCosts.map(cost => <CostItem
    //         key={cost.id}  // для списков с компонентами в react
    //         date={cost.date}
    //         description={cost.description}
    //         amount={cost.amount}
    //     />)
    // )}

    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={onChangeYear}/>
            <CostsDiagram costs={filteredCosts} />
            <CostList costs={filteredCosts} />
        </Card>
    )
}

export default Costs