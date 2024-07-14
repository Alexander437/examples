import Costs from "./components/Costs/Costs.jsx";

function App() {

  const costs = [
      {
          date: new Date(2021, 2, 12),
          description: "Холодильник",
          amount: 999.99
      },
      {
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
  return (
    <>
        <Costs costs={costs} />
    </>
  )
}

export default App
