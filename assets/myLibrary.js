const asyncPromise = async function () {
  try {
    let myRequest = await fetch("https://striveschool-api.herokuapp.com/books");
    console.log(myRequest);
    if (myRequest.ok) {
      let myJson = await myRequest.json();
      console.log(myJson);

      let rowReference = document.querySelector("#myLibraryContainer");
      myJson.forEach((card) => {
        rowReference.innerHTML += `
        <div class="card mt-5 mx-3" style="width: 18rem">
          <!-- <img src=${card.img} class="card-img-top" alt=${card.title} /> -->
          <div style="width: 262px; height: 200px; background-image: url(${card.img}); margin-top: 12px; background-size: cover"></div>
          <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${card.asin}</li>
            <li class="list-group-item">${card.category}</li>
            <li class="list-group-item">${card.price} €</li>
          </ul>
          <div class="card-body d-flex justify-content-center">
            <button type="button" class="btn btn-outline-secondary">Hide</button>
          </div>
        </div>
        `;
      });
    } else {
      console.log("UuPs... Something went wrong with our GET request!");
    }
  } catch (error) {
    console.log(error);
  }
};

asyncPromise();
