import List from "./List"

function App() {

  const foods = [
    { id: 1, name: "Chicken Breast", calories: 165 },
    { id: 2, name: "Egg", calories: 78 },
    { id: 3, name: "Rice", calories: 206 },
    { id: 4, name: "Broccoli", calories: 55 },
    { id: 5, name: "Salmon", calories: 208 },
    { id: 6, name: "Banana", calories: 105 },
  ]

  return (
    <>
      <List items={foods} />
    </>
  )
}

export default App
