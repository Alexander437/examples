import "./Diagram.css"
import DiagramBar from "./DiagramBar.jsx";

function Diagram(props) {
    const dataSetsValues = props.dataSets.map(dataSet => dataSet.value);
    const maxMouthCosts = Math.max(...dataSetsValues);

    return (
        <div className="diagram">
            {props.dataSets.map(dataSet =>
                <DiagramBar
                    key={dataSet.label}
                    value={dataSet.value}
                    maxValue={maxMouthCosts}
                    label={dataSet.label}
                />)}
        </div>
    )
}

export default Diagram;