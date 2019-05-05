/* <div>
    <section>
        <h3>Name</h3>
        <h4>Spice Level</h4>
        <p>purchased</p>
        <p>Color:</p>
        <button>Edit</button>
        <button>Delete</button>
    </section>
</div> */

function populatePage(chickenArray) {
    let newDiv = document.createElement("div")
    newDiv.innerHTML = chickenArray.map(makeGrid).join("")
    document.querySelector("#chicken-cards").append(newDiv)
}

const makeGrid = (item, index) => {
    let sold = `<p class="buy">Eat More Chicken</p>`
    if (item.purchased) {
        sold = `<p class="buy">Sold Out</p>`
    }

    let block = `
        <section id="card--${index}" style="border: 2px solid ${item.color}">
            <h3>#${index + 1} ${item.name}</h3>
            <h4>Spice Level: ${item.spicelevel}</h4>
            ${sold}
            <p> Color: ${item.color}</p>
            <button data-edit-id="${item.id}" onClick="handleEdit(this)">Edit</button>
            <button data-delete-id="${item.id}" onClick="handleDelete(this)">Delete</button>
        </section>
    `
    return block
}

getAllChickens()
    .then(
        (inventory) => {
            populatePage(inventory)
        }
    )

handleEdit = (chicken) => {
    let whichChicken = chicken.getAttribute("data-edit-id")
    console.log(whichChicken)
}

handleDelete = (chicken) => {
    let whichChicken = chicken.getAttribute("data-delete-id")
    console.log(whichChicken)
}