import "./CostList.css";
import CostItem from "./CostItem.jsx";

function CostList(props) {
    // Вариант 1
    // let costsContent = <p>В этом году расходов нет</p>
    // if (props.costs.length > 0) {
    //     costsContent = props.costs.map(cost =>
    //         <CostItem
    //             key={cost.id}  // для списков с компонентами в react
    //             date={cost.date}
    //             description={cost.description}
    //             amount={cost.amount}
    //         />)
    // }

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

    if (props.costs.length === 0) {
        return <h2 className="cost-list__fallback">В этом году расходов нет</h2>;
    }

    return (
        <ul className="cost-list">
            {props.costs.map(cost =>
            <CostItem
                key={cost.id}  // для списков с компонентами в react
                date={cost.date}
                description={cost.description}
                amount={cost.amount}
            />)}
        </ul>
    )
}

export default CostList