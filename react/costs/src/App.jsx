import Costs from "./components/Costs/Costs.jsx";
import NewCost from "./components/NewCost/NewCost.jsx";

function App() {

  const costs = [
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

  // return React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h1", {}, "Привет, мир"),
  //     React.createElement(Costs, {Costs: Costs})
  // );

    const addCostHandler = (cost) => {
      console.log(cost);
      console.log('App component');
    }
  return (
    <>
        <NewCost onAddCost={addCostHandler} />
        <Costs costs={costs} />
    </>
  )
}

export default App
