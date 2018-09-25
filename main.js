const famous = [
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
          birth: 1747,
          death: 1797
        }
      },

      {
        title: "Cult Leader",
        name: "Jim Jones",
        bio: "James Warren Jones was an American religious cult leader who initiated and was responsible for a mass suicide and mass murder in Jonestown, Guyana.",
        image: "https://www.biography.com/.image/t_share/MTIwNjA4NjM0MDc0MjY5MTk2/jim-jones-10367607-1-402.jpg",
        lifespan: {
          birth: 1931,
          death: 1978
        }
      }
];

const printToDom = (stringToPrint, divId) => {
    const selecectedDiv = document.getElementById(divId);
    selecectedDiv.innerHTML += stringToPrint;
};

const createFamousCards = () => {
    let famousCard = '';
    for (i = 0; i < famous.length; i++) {
        cards = famous.indexOf(famous[i]);
        if(cards % 2 === 0) {
            famousCard = `<div class="even card m-1" style="width: 18rem;">
                <div class="card-header text-center">${famous[i].title}: ${famous[i].name}</div>
                <img class="card-img-top" src="${famous[i].image}" alt="${famous[i].name}">
                <div class="card-body">
                <p class="card-text">${famous[i].bio}</p>
                </div>
                <div class="card-footer text-muted text-center">${famous[i].lifespan.birth}-${famous[i].lifespan.death}</div>
            </div>`
        } else {
            famousCard = `<div class="odd card m-1" style="width: 18rem;">
                <div class="card-header text-center">${famous[i].title}: ${famous[i].name}</div>
                <img class="card-img-top" src="${famous[i].image}" alt="${famous[i].name}">
                <div class="card-body">
                <p class="card-text">${famous[i].bio}</p>
                </div>
                <div class="card-footer text-muted text-center">${famous[i].lifespan.birth}-${famous[i].lifespan.death}</div>
            </div>`    
        }
        printToDom(famousCard, 'card-div')
    }
};  

createFamousCards();


            