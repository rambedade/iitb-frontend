class AnimalTable {
    constructor() {
      this.animalData = {
        "Big Cats": [
          { species: "Big Cats", name: "Tiger", size: "10 ft", location: "Asia", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXciid4uPb9ZBHvt8Gbiif9rcfJE_0T5W4lefoEWm9efDf5derlgXw6WxsPojRamz1_MX5tHP1GzCCuu7ZyY9lFnaSreTSq8baJL9lcKzrkQ6vePktcGGZhb6DD7dbuhcdS-luGPow?key=diMK_80ckKTiDYYhCkLD1Q" },
          { species: "Big Cats", name: "Lion", size: "8 ft", location: "Africa", image: "https://static.vecteezy.com/system/resources/thumbnails/026/975/383/small_2x/jaguar-in-nature-national-geography-wide-life-animals-ai-generated-photo.jpg" },
          { species: "Big Cats", name: "Leopard", size: "5 ft", location: "Africa and Asia", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9YnhOhLOUBOrly21g067vrClVuRvxpxPNZi0S1wLbf-YKX80ZvyU6ZMkuMHpaCgp0BzKsNiZMzCmABbitdQxLI4du4DSfBk80dCfQJJ44B9luuGmh_k9tJeyB76lDHC-iSe2x?key=diMK_80ckKTiDYYhCkLD1Q" },
          { species: "Big Cats", name: "Cheetah", size: "5 ft", location: "Africa", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfFXIxHrIWQdTIx_rKPWljaRGcGrhPF1gSDlBsLHNiOcZO2cN2pwU3XYRszg0u9HX-BqJxsSUGAVANgwkcBrY97IPljuyS5w6zgyvzI-ECgd98m2iqLySutA_S7u822xJ7qdh7BRg?key=diMK_80ckKTiDYYhCkLD1Q" },
          { species: "Big Cats", name: "Caracal", size: "3 ft", location: "Africa", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXe2p_ATYQ4z2warlizTrbKfNBfV7V7pOSPmo3jkYKU114Z6XWFsM2gZXq3aTWsS0x7if2qrHEggrlEMyOjr6buvb-OijTgAcvlaSX3vbF7HoloaIvk8g2mqc15n-EBUMq1Zis1_cg?key=diMK_80ckKTiDYYhCkLD1Q" },
          { species: "Big Cats", name: "Jaguar", size: "5 ft", location: "Amazon", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXePq-Bh9Lj0gUVWDSMM50mLjzZZRH9Ab-bWL0vhdN4EwiAwecH0V4TVtG-CFQfrkkZTI6t4RDoM1jpHgOFNXmfQCn0MCkZNvjG1EVptWLer0nYeXVgxGgcnYFgxDNdTEgIW0EtBiQ?key=diMK_80ckKTiDYYhCkLD1Q" }
        ],
        "Dogs": [
          { species: "Dog", name: "Rotwailer", size: "2 ft", location: "Germany", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXft3s3RGMGFvX4AzEZabvzkSoiT4CtWvb2DSAjAbIt6qseIsmrDBBgnhvrKOjL3VzWks_6nHPgpQXJjCrHkCP-csZKXHSpIHOMQR_0RHDjdGuEXnyGzr6pIm-TCs9VlaB8ESMoo?key=diMK_80ckKTiDYYhCkLD1Q" },
          { species: "Dog", name: "German Shepherd", size: "2 ft", location: "Germany", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXefj_BNan53aqyBY2n3GfYpE305WUqEslgck8wYIkO2pBBX10tiQgoylQwE-Sgt-UnyFYnvxC7jwO4R5qDh6a6GJ51xM71-1KeF3KxpW7SVHtNpL6JFR37kTnuZsYg8tS9t6Sx8Xg?key=diMK_80ckKTiDYYhCkLD1Q" },
          { species: "Dog", name: "Labrodar", size: "2", location: "UK", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXef8Bjgf3gbLJ_UWd29zQSAP8tg5iyimQ-PdeEy2JJY6XTmOwitFwRjhSdtiaztoBX718dZ3-e_msblakHi4cva_GMiMw_17UN8Tpi_wRVYhvArKyvlQ3iuyw-TiRslr3YbLkcI1g?key=diMK_80ckKTiDYYhCkLD1Q" },
          { species: "Dog", name: "Alabai", size: "4 ft", location: "Turkey", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfcvOdAwVRQ1BqsYydF-4zkOs6RKXqjL7wmdP4jJ-qS5jUWPaELnaZCijNdQ48RjFcHU-iUk8zg9u844Tn5kYrIqU-1jCJQn0S4zEYyPTizeLNEQmOUJG1EcdMkR7L4U2WSEfGZ_A?key=diMK_80ckKTiDYYhCkLD1Q" }
        ],
        "Big Fish": [
          { species: "Big Fish", name: "Humpback Whale", size: "15 ft", location: "Atlantic Ocean", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd8YrZJb2dyWzGSIT016PLjlJ7_WOZrTO9ReLD1bWn2sPt-wKpKx7l7awFC2RF_4Tm-RIjqO_1uISE_Q1PMdu7lR3M0kzA-cC-eF1OlLxEkMDWw_JeMQT-ykhrFcJdUH2MICRJCzQ?key=diMK_80ckKTiDYYhCkLD1Q" },
          { species: "Big Fish", name: "Killer Whale", size: "12 ft", location: "Atlantic Ocean", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf5uRGPuY-b1EhWGGLRVBZHbGdbXt7HqEZWC7BRlIhUlwI3f72-FqkjZ7cfuHjdU3a5UFyejWTS2ztbaj5-Eb0JKspLmkppe7pqcRtDfOfMvjLXVyG2GvywFexBdjyOKMr_Zc0G?key=diMK_80ckKTiDYYhCkLD1Q" },
          { species: "Big Fish", name: "Tiger Shark", size: "8 ft", location: "Ocean", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXflbJ0LWE5i_amruuBPJ7jBqTeCTcGc1Tubx5kWqYY0XqhJngTZyNA43W0kjLecF57XB1Y2Z6iB0Spnp-AD3Q2aZm18BJLDnhSwiEiklQiPHxTFDXs3Onw7vt1d3FVnVKm4vizt?key=diMK_80ckKTiDYYhCkLD1Q" },
          { species: "Big Fish", name: "Hammerhead Shark", size: "8 ft", location: "Ocean", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfDeAI-5lH_fIMehBbtyjeSqcT7MyHVH92QARUMw2ZJa_SSnr5sScCbrRmkrkbc90hL-1UlqTmGFrq-kqID4jhsnKfMNq1eXwAR0a0crxKwyJyyOOGSEcsLMWwuQmFDWZLg3sqh?key=diMK_80ckKTiDYYhCkLD1Q" }
        ]
      };

      this.renderTables();
      this.addEventListeners();
    }

    renderTables() {
      const container = document.getElementById("animal-tables");
      container.innerHTML = "";

      Object.keys(this.animalData).forEach((category) => {
        const tableDiv = document.createElement("div");
        tableDiv.className = "animal-table";

        const tableTitle = document.createElement("h2");
        tableTitle.textContent = `Category: ${category}`;
        tableDiv.appendChild(tableTitle);

        const animalList = document.createElement("div");
        animalList.className = "animal-list";

        this.animalData[category].forEach((animal, index) => {
          const animalCard = document.createElement("div");
          animalCard.className = "animal-card";

          const img = document.createElement("img");
          img.src = animal.image;
          img.alt = animal.name;

          const details = document.createElement("div");
          details.className = "animal-details";

          let nameClass = "";
          if (category === "Big Fish") {
            nameClass = "big-fish-name";
          } else if (category === "Dogs") {
            nameClass = "dogs-name";
          }

          details.innerHTML = ` 
            <p><strong>Species:</strong> ${animal.species}</p>
            <p><strong>Name:</strong> <span class="${nameClass}">${animal.name}</span></p>
            <p><strong>Size:</strong> ${animal.size}</p>
            <p><strong>Location:</strong> ${animal.location}</p>
          `;

          const actions = document.createElement("div");
          actions.className = "actions";

          const editBtn = document.createElement("button");
          editBtn.textContent = "Edit";
          editBtn.className = "btn";
          editBtn.onclick = () => this.editAnimal(category, index);

          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          deleteBtn.className = "btn btn-danger";
          deleteBtn.onclick = () => this.deleteAnimal(category, index);

          actions.appendChild(editBtn);
          actions.appendChild(deleteBtn);

          animalCard.appendChild(img);
          animalCard.appendChild(details);
          animalCard.appendChild(actions);
          animalList.appendChild(animalCard);
        });

        tableDiv.appendChild(animalList);
        container.appendChild(tableDiv);
      });
    }

    sortTable() {
      const sortBy = document.getElementById("sort-by").value;
      const sortedData = {};

      Object.keys(this.animalData).forEach((category) => {
        sortedData[category] = [...this.animalData[category]];
        if (sortBy === "name") {
          sortedData[category].sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "size") {
          sortedData[category].sort((a, b) => parseInt(a.size) - parseInt(b.size));
        } else if (sortBy === "location") {
          sortedData[category].sort((a, b) => a.location.localeCompare(b.location));
        }
      });

      Object.assign(this.animalData, sortedData);
      this.renderTables();
    }

    editAnimal(category, index) {
      const animal = this.animalData[category][index];
      document.getElementById("category").value = category;
      document.getElementById("species").value = animal.species;
      document.getElementById("name").value = animal.name;
      document.getElementById("size").value = animal.size;
      document.getElementById("location").value = animal.location;
      document.getElementById("image").value = animal.image;
      document.getElementById("edit-index").value = index; 
    }

    deleteAnimal(category, index) {
      this.animalData[category].splice(index, 1); 
      this.renderTables(); 
    }

    addEventListeners() {
      document.getElementById("sort-by").addEventListener("change", () => this.sortTable());

      document.getElementById("animal-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const index = document.getElementById("edit-index").value;
        const category = document.getElementById("category").value;
        const species = document.getElementById("species").value;
        const name = document.getElementById("name").value;
        const size = document.getElementById("size").value;
        const location = document.getElementById("location").value;
        const image = document.getElementById("image").value;

        if (index) {
          this.animalData[category][index] = { species, name, size, location, image };
        } else {
          this.animalData[category].push({ species, name, size, location, image });
        }

        this.renderTables();
        document.getElementById("animal-form").reset();
      });
    }
  }

  const animalTable = new AnimalTable();