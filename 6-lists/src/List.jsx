function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  // SORT
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); ALPHABETICAL
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); REVERSE ALPHABETICAL
  // fruits.sort((a, b) => a.calories - b.calories) ASCENDING NUMERIC
  // fruits.sort((a, b) => b.calories - a.calories) // DESCENDING NUMERIC

  // FILTER
  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);

  // LIST ALL FRUITS
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));

  // LIST LOW CAL FRUITS
  const lowCalList = lowCalFruits.map((lowCalFruit) => (
    <li key={lowCalFruit.id}>
      {lowCalFruit.name}: &nbsp;
      {lowCalFruit.calories}
    </li>
  ));

  // LIST HIGH CAL FRUITS
  const highCalList = highCalFruits.map((highCalFruit) => (
    <li key={highCalFruit.id}>
      {highCalFruit.name}: &nbsp;
      {highCalFruit.calories}
    </li>
  ));

  return (
    <>
      <h2>List All Fruits</h2>
      <ol>{listItems}</ol>

      <h2>List Low Cal Fruits</h2>
      <ol>{lowCalList}</ol>

      <h2>List High Cal Fruits</h2>
      <ol>{highCalList}</ol>
    </>
  );
}

export default List;
