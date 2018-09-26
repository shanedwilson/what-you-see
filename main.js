const famous = [
  {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio:
      "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },

  {
    title: "Cult Leader",
    name: "Jim Jones",
    bio:
      "James Warren Jones was an American religious cult leader who initiated and was responsible for a mass suicide and mass murder in Jonestown, Guyana.",
    image:
      "https://www.biography.com/.image/t_share/MTIwNjA4NjM0MDc0MjY5MTk2/jim-jones-10367607-1-402.jpg",
    lifespan: {
      birth: 1931,
      death: 1978
    }
  }
];

const inputField = document.getElementById("input-field");
const inputForm = document.getElementById("form");
let bioId;
let cardId;
let className = "give-border";

const printToDom = (stringToPrint, divId) => {
  let selecectedDiv = document.getElementById(divId);
  selecectedDiv.innerHTML += stringToPrint;
};

const createFamousCards = () => {
  let famousCard = "";
  for (i = 0; i < famous.length; i++) {
    let cardIndex = famous.indexOf(famous[i]);
    if (cardIndex % 2 === 0) {
      famousCard = `<div id="${i}" class="full-card">
                    <div class="odd card col-sm-12" style="width: 18rem;">
                    <div class="card-header text-center">${famous[i].title}: ${
        famous[i].name
      }</div>
                    <img class="card-img-top" src="${famous[i].image}" alt="${
        famous[i].name
      }">
                    <div class="card-body">
                    <p class="card-text" id='bio${i}'>${famous[i].bio}</p>
                    </div>
                    <div class="card-footer text-muted text-center">${
                      famous[i].lifespan.birth
                    }-${famous[i].lifespan.death}</div>
                </div>
            </div>`;
    } else {
      famousCard = `<div id="${i}" class="full-card">
                    <div class="even card col-sm-12" style="width: 18rem;">
                    <div class="card-header text-center">${famous[i].title}: ${
        famous[i].name
      }</div>
                    <img class="card-img-top" src="${famous[i].image}" alt="${
        famous[i].name
      }">
                    <div class="card-body">
                    <p class="card-text" id='bio${i}'>${famous[i].bio}</p>
                    </div>
                    <div class="card-footer text-muted text-center">${
                      famous[i].lifespan.birth
                    }-${famous[i].lifespan.death}</div>
                </div>
            </div>`;
    }
    printToDom(famousCard, "card-div");
  }
};

const cardClick = () => {
  let cards = document.getElementsByClassName("full-card");
  for (i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener("click", e => {
      let cardClicked = e.currentTarget;
      cardId = e.currentTarget.id;
      bioId = document.getElementById("bio" + cardId);
      cardClicked.classList.toggle(className);
      if (cardClicked.classList.contains(className)) {
        inputField.focus();
        inputField.addEventListener("keyup", function() {
          bioId.innerHTML = event.target.value;
        });
      }
    });
  }
};

const textBlur = () => {
  inputForm.addEventListener("submit", function(event) {
    inputField.blur();
    inputField.value = "";
    let bioCards = document.getElementsByClassName("full-card");
    for (let i = 0; i < bioCards.length; i++) {
      let bioCard = bioCards[i];
      bioCard.classList.remove("give-border");
    }
    event.preventDefault();
  });
};

createFamousCards();
cardClick();
textBlur();
