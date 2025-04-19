const placeContainer2 = document.querySelector(".place-container2");
const placeDetails2 = document.querySelector("#place-details"); // Select the place details container
const url2 = "data/places.json"; // URL to the JSON file

async function placeData() {
  try {
    const response = await fetch(url2); // Fetch the JSON file

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json(); // Parse the JSON data
    const places = data.places; // Extract the places array from the data

    displayPlaces(places); // Call the function to display places
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error); // Log any errors
  }
}

placeData(); // Call the function to fetch data




function displayPlaces(places) {
  placeContainer2.innerHTML = ""; // Clear the container before displaying new data

  places.forEach((place) => {
    const placeItem = document.createElement("div"); // Create a new div for each place
    placeItem.classList.add("place-card"); // Add class to the div

    placeItem.innerHTML = `
      <img src="${place.imageURL}" alt="${place.name}" loading="lazy">

      <div>
        <p>${place.location}</p>
        <h3>${place.name}</h3>
        <a href="#">Details ➡</a>
      </div>
    `;

    placeItem.addEventListener("click", () => {
      placeDetails2.innerHTML = `

        <span class="close">✖</span>

        <section>
            <h1>${place.name}</h1>
            <p>${place.description}</p>
        </section>
      `;

      document.querySelector(".close").addEventListener("click", () => {
          placeDetails2.close(); // Clear the details when the close button is clicked
      });
  
      placeDetails2.showModal(); // Show the modal with place details

    });

    placeContainer2.appendChild(placeItem); // Append the div to the container
});

}
