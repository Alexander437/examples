import Costs from "./components/Costs/Costs.jsx";
import NewCost from "./components/NewCost/NewCost.jsx";
import {useState} from "react";

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2021, 2, 12),
        description: "Холодильник",
        amount: 999.99
    },
    {
        id: 'c2',
        date: new Date(2021, 2, 12),
        description: "Компьютер",
        amount: 999.99
    }
]

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  // return React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h1", {}, "Привет, мир"),
  //     React.createElement(Costs, {Costs: Costs})
  // );

    const addCostHandler = (cost) => {
      // setCosts([cost, ...costs]); - можут получать неактуальные состояния
      setCosts(prevCosts => {
          return [cost, ...prevCosts];
      });
    }
  return (
    <>
        <NewCost onAddCost={addCostHandler} />
        <Costs costs={costs} />
    </>
  )
}

export default App
