const apiBaseUrl = "http://localhost:3000"

const getAllChickens = () => {
    return fetch(`${apiBaseUrl}/chickens`)
        .then(response => response.json())
}

const getOneChicken = (id) => {
    return fetch(`${apiBaseUrl}/chickens/${id}`)
        .then(response => response.json())
        .then(persedResult => {
            console.log(persedResult)
        })
}

const updateChicken = (id, chickenObject) => {
    fetch(`${apiBaseUrl}/chickens/${id}`,
        {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(chickenObject)
        }
    )
        .then(response => response.json())
        .then(persedResult => {
            console.log(persedResult)
        })
}

const makeChicken = (chickenObject) => {
    fetch(`${apiBaseUrl}/chickens/`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(chickenObject)
        }
    )
        .then(response => response.json())
        .then(parsedResult => {
            console.log("new chicken", parsedResult)
        })
}

const deleteChicken = (id) => {
    fetch(`${apiBaseUrl}/chickens/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
        .then(response => response.json())
        .then(persedResult => {
            console.log("deleted", persedResult)
        })
}

// getAllChickens()
// getOneChicken(1)

const testChickenObject = {
    name: "Joe Thighsman",
    color: "red",
    gender: "male",
    spicelevel: 3
}

const newChickenObject = {
    name: "Cluck Taylor",
    color: "purple",
    gender: "female",
    spicelevel: 2
}

// updateChicken(1, testChickenObject)
// makeChicken(newChickenObject)
// deleteChicken(11)