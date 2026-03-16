import { useState } from "react"

function List({ items = [] }) {

    const totalItems = items.length
    const totalCalories = items.reduce((sum, item) => sum + item.calories, 0)


    // ----------------------------------
    const [sortType, setSortType] = useState("none")

    let sortedItems = [...items]

    if (sortType === "name") {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sortType === "calories") {
        sortedItems.sort((a, b) => a.calories - b.calories)
    }

    if (sortType === "lowCal") {
        sortedItems = sortedItems.filter((item) => item.calories < 100)
    }

    // ----------------------------------
    const listItems = sortedItems.map((item) => (
        <li key={item.id} style={{ color: item.calories < 100 ? "green" : "black" }}>
            {item.name}: &nbsp;{item.calories}
        </li>
    ))



    return (
        <>
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Calories: {totalCalories}</h3>

            <button onClick={() => setSortType("name")}>Sort by Name</button>
            <button onClick={() => setSortType("calories")}>Sort by Calories</button>
            <button onClick={() => setSortType("lowCal")}>Show Low Calories Only</button>
            <ol>{listItems}</ol>
        </>
    )
}

export default List