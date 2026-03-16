import PropTypes from 'prop-types'


function List({ items = [], category = "Category" }) {


  // SORT
  // items.sort((a, b) => a.name.localeCompare(b.name)); ALPHABETICAL
  // items.sort((a, b) => b.name.localeCompare(a.name)); REVERSE ALPHABETICAL
  // items.sort((a, b) => a.calories - b.calories) ASCENDING NUMERIC
  // items.sort((a, b) => b.calories - a.calories) // DESCENDING NUMERIC

  // FILTER
  const lowCalFoods = items.filter(food => food.calories < 100);
  const highCalFoods = items.filter((food) => food.calories > 100);

  // LIST ALL FRUITS
  const listItems = items.map((food) => (
    <li key={food.id}>
      {food.name}: &nbsp;
      <b>{food.calories}</b>
    </li>
  ));

  // LIST LOW CAL FRUITS
  const lowCalList = lowCalFoods.map((lowCalFood) => (
    <li key={lowCalFood.id}>
      {lowCalFood.name}: &nbsp;
      {lowCalFood.calories}
    </li>
  ));

  // LIST HIGH CAL FRUITS
  const highCalList = highCalFoods.map((highCalFood) => (
    <li key={highCalFood.id}>
      {highCalFood.name}: &nbsp;
      {highCalFood.calories}
    </li>
  ));

  return (
    <>
      <h1 className="list-category">{category}</h1>
      <h2 className="list-calorie-category">List All {category}</h2>
      <ol className="list-items">{listItems}</ol>

      <h2 className="list-calorie-category">List Low Cal {category}</h2>
      <ol className="list-items">{lowCalList}</ol>

      <h2 className="list-calorie-category">List High Cal {category}</h2>
      <ol className="list-items">{highCalList}</ol>
    </>
  );
}


List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  )


}

export default List;
