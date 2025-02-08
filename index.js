fetch("data.json")
    .then(response => response.json())
    .then(data => {
        window.animalTables = {
            bigCatsTable: new AnimalTable("bigCatsTable", data.bigCats),
            dogsTable: new AnimalTable("dogsTable", data.dogs),
            bigFishTable: new AnimalTable("bigFishTable", data.bigFish)
        };
    });

class AnimalTable {
    constructor(tableId, data) {
        this.tableId = tableId;
        this.data = data;
        this.renderTable();
    }

    renderTable() {
        let tbody = document.querySelector(`#${this.tableId} tbody`);
        tbody.innerHTML = "";
        this.data.forEach((animal, index) => {
            let row = `<tr>
                <td>${animal.name}</td>
                <td>${animal.size}</td>
                <td>${animal.location}</td>
                <td><img class='animal-image' src='./images/${animal.image}' alt='${animal.name}' onerror="this.onerror=null;this.src='./images/default.jpg';"></td>
                <td>
                    <button class='btn btn-warning' onclick='editAnimal("${this.tableId}", ${index})'>Edit</button>
                    <button class='btn btn-danger' onclick='deleteAnimal("${this.tableId}", ${index})'>Delete</button>
                </td>
            </tr>`;
            tbody.innerHTML += row;
        });
    }

    addAnimal(animal) {
        this.data.push(animal);
        this.renderTable();
    }

    editAnimal(index) {
        let animal = this.data[index];
        let name = prompt("Edit Name:", animal.name);
        let size = prompt("Edit Size:", animal.size);
        let location = prompt("Edit Location:", animal.location);
        let image = prompt("Edit Image Filename (e.g., tiger.jpg):", animal.image);
        if (name && size && location && image) {
            this.data[index] = { name, size, location, image };
            this.renderTable();
        }
    }

    deleteAnimal(index) {
        this.data.splice(index, 1);
        this.renderTable();
    }
}

function addAnimal(tableId) {
    let name = prompt("Enter animal name:");
    let size = prompt("Enter size:");
    let location = prompt("Enter location:");
    let image = prompt("Enter image filename (e.g., tiger.jpg):");
    if (!name || !size || !location || !image) {
        alert("All fields are required!");
        return;
    }
    let newAnimal = { name, size, location, image };
    window.animalTables[tableId].addAnimal(newAnimal);
}

function editAnimal(tableId, index) {
    window.animalTables[tableId].editAnimal(index);
}

function deleteAnimal(tableId, index) {
    window.animalTables[tableId].deleteAnimal(index);
}

function sortTable(tableId, field) {
    window.animalTables[tableId].data.sort((a, b) => a[field].localeCompare(b[field], undefined, { numeric: true }));
    window.animalTables[tableId].renderTable();
}
