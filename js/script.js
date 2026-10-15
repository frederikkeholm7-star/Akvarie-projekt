"use strict";

const textbox = document.querySelector(".textbox");


const fishItem = [
    {
        id: "clownfish",
        sounds: {
            intro:"sound/clownfish/intro.m4a",
            alder:"sound/clownfish/age.m4a",
            levested:"sound/clownfish/habitat.m4a",
            spiser:"sound/clownfish/diet.m4a",
            vaegt:"sound/clownfish/weight.m4a",
            superkraft:"sound/clownfish/superpower.m4a",
            outro:"sound/clownfish/outro.m4a"
        }
    },
    {
        id: "orange-shoulder-tang",
        sounds: {
            intro:"sound/orange-shoulder-tang/intro.wav",
            alder:"sound/orange-shoulder-tang/age.wav",
            levested:"sound/orange-shoulder-tang/age.wav",
            spiser:"#",
            vaegt:"sound/orange-shoulder-tang/weight.wav",
            superkraft:"sound/orange-shoulder-tang/superpower.wav",
            outro:"sound/orange-shoulder-tang/outro.wav"
        }
    },
    {
        id: "banggai-cardinalfish",
        sounds: {
            intro:"sound/banggai-cardinalfish/intro.m4a",
            alder:"sound/banggai-cardinalfish/age.m4a",
            levested:"sound/banggai-cardinalfish/habitat.m4a",
            spiser:"sound/banggai-cardinalfish/diet.m4a",
            vaegt:"sound/banggai-cardinalfish/weight.m4a",
            superkraft:"sound/banggai-cardinalfish/superpower.m4a",
            outro:"sound/banggai-cardinalfish/outro.m4a"
        }
    },
{
        id: "angel-fish",
        sounds: {
            intro:"sound/angel-fish/intro.wav",
            alder:"sound/angel-fish/age.wav",
            levested:"sound/angel-fish/habitat.wav",
            spiser:"sound/angel-fish/diet.wav",
            vaegt:"sound/angel-fish/weight.wav",
            superkraft:"sound/angel-fish/superpower.wav",
            outro:"sound/angel-fish/outro.wav"
        }
    },

{
        id: "angel-fish2",
        sounds: {
            intro:"sound/angel-fish/intro.wav",
            alder:"sound/angel-fish/age.wav",
            levested:"sound/angel-fish/habitat.wav",
            spiser:"sound/angel-fish/diet.wav",
            vaegt:"sound/angel-fish/weight.wav",
            superkraft:"sound/angel-fish/superpower.wav",
            outro:"sound/angel-fish/outro.wav"
        }
    },

{
        id: "pufferfish",
        sounds: {
            intro:"sound/banggai-cardinalfish/intro.m4a",
            alder:"sound/banggai-cardinalfish/age.m4a",
            levested:"sound/banggai-cardinalfish/habitat.m4a",
            spiser:"sound/banggai-cardinalfish/diet.m4a",
            vaegt:"sound/banggai-cardinalfish/weight.m4a",
            superkraft:"sound/banggai-cardinalfish/superpower.m4a",
            outro:"sound/banggai-cardinalfish/outro.m4a"
        }
    },
{
        id: "foxface-rabbitfish",
        sounds: {
            intro:"sound/foxface-rabbitfish/intro.m4a",
            alder:"sound/foxface-rabbitfish/age.m4a",
            levested:"sound/foxface-rabbitfish/habitat.m4a",
            spiser:"sound/foxface-rabbitfish/diet.m4a",
            vaegt:"sound/foxface-rabbitfish/weight.m4a",
            superkraft:"sound/foxface-rabbitfish/superpower.m4a",
            outro: "sound/foxface-rabbitfish/outro.m4a"
        }
    },
{
        id: "black-barred-surgeonfish",
        sounds: {
            intro:"sound/black-barred-surgeonfish/intro.m4a",
            alder:"sound/black-barred-surgeonfish/age.m4a",
            levested:"sound/black-barred-surgeonfish/habitat.m4a",
            spiser:"sound/black-barred-surgeonfish/diet.m4a",
            vaegt:"sound/black-barred-surgeonfish/weight.m4a",
            superkraft:"sound/black-barred-surgeonfish/superpower.m4a",
            outro: "sound/black-barred-surgeonfish/outro.m4a"
        }
    },
{
        id: "turtle",
        sounds: {
            intro:"sound/turtle/intro.m4a",
            alder:"sound/turtle/age.m4a",
            levested:"sound/turtle/habitat.m4a",
            spiser:"sound/turtle/diet.m4a",
            vaegt:"sound/turtle/weight.m4a",
            superkraft:"sound/turtle/superpower.m4a",
            outro: "sound/turtle/outro.m4a"
        }
    },
{
        id: "blue-tang",
        sounds: {
            intro:"sound/blue-tang/intro.m4a",
            alder:"sound/blue-tang/age.m4a",
            levested:"sound/blue-tang/habitat.m4a",
            spiser:"sound/blue-tang/diet.m4a",
            vaegt:"sound/blue-tang/weight.m4a",
            superkraft:"sound/blue-tang/superpower.m4a",
            outro: "sound/blue-tang/outro.m4a"
        }
    },
{
        id: "powder-blue-tang",
        sounds: {
            intro:"sound/powder-blue-tang/intro.m4a",
            alder:"sound/powder-blue-tang/age.m4a",
            levested:"sound/powder-blue-tang/habitat.m4a",
            spiser:"sound/powder-blue-tang/diet.m4a",
            vaegt:"sound/powder-blue-tang/weight.m4a",
            superkraft:"sound/powder-blue-tang/superpower.m4a",
            outro: "sound/powder-blue-tang/outro.m4a"
        }
    }];

//Informationsbox til Rævefisk\\
const parentButton = document.querySelector("#parent-button");
const parentBox = document.querySelector(".parent-box");

parentButton.addEventListener("click", function () {
    textbox.style.display = "none";
    parentBox.style.display = "block";
});

const childButton = document.querySelector("#child-button");

childButton.addEventListener("click", function () {
    parentBox.style.display = "none";
    textbox.style.display = "block";
});

document.querySelector("#foxface-rabbitfish").addEventListener("click", function () {
    this.classList.add("swim-forward");

    setTimeout(function () {
        document.querySelectorAll(".Informationsbox").forEach(function (box) {
            box.hidden = true;
        });

        textbox.closest(".Informationsbox").hidden = false;
        textbox.style.display = "block";
        parentBox.style.display = "none";
        backButton.style.display = "block";
    }, 1500);
});

//Informationsbox til Banggaifisk\\
const banggaiInfo = document.querySelector("#banggai-cardinalfish-info");
const banggaiFish = document.querySelector("#banggai-cardinalfish");
const banggaiTextbox = banggaiInfo.querySelector(".textbox");
const banggaiParentBox = banggaiInfo.querySelector(".parent-box");

banggaiFish.addEventListener("click", function () {
    this.classList.add("swim-forward");

    setTimeout(function () {
        // Skjul de andre fisks informationsbokse
            document.querySelectorAll(".Informationsbox").forEach(function (box) {
            box.hidden = true;
        });

        backButton.style.display = "block";

        // Vis Banggai-fiskens børneboks
        banggaiInfo.hidden = false;
        banggaiTextbox.style.display = "block";
        banggaiParentBox.style.display = "none";
    }, 1500);
});

banggaiInfo.querySelector("#parent-button").addEventListener("click", function () {
    banggaiTextbox.style.display = "none";
    banggaiParentBox.style.display = "block";
});

banggaiInfo.querySelector("#child-button").addEventListener("click", function () {
    banggaiParentBox.style.display = "none";
    banggaiTextbox.style.display = "block";
});

//Informationsbox til Sommerfuglecichlide\\
const sommerInfo = document.querySelector("#angel-fish-info");
const sommerFish = document.querySelectorAll("#angel-fish");

const sommerTextbox = sommerInfo.querySelector(".textbox");
const sommerParentBox = sommerInfo.querySelector(".parent-box");

sommerFish.forEach(function (fiskElement) {
    fiskElement.addEventListener("click", function () {
        this.classList.add("swim-forward");

        setTimeout(function () {
            document.querySelectorAll(".Informationsbox").forEach(function (box) {
                box.hidden = true;
            });

            sommerInfo.hidden = false;
            sommerTextbox.style.display = "block";
            sommerParentBox.style.display = "none";
            backButton.style.display = "block";
        }, 1500);
    });
});

sommerInfo.querySelector("#parent-button").addEventListener("click", function () {
    sommerTextbox.style.display = "none";
    sommerParentBox.style.display = "block";
});

sommerInfo.querySelector("#child-button").addEventListener("click", function () {
    sommerParentBox.style.display = "none";
    sommerTextbox.style.display = "block";
});

//Informationsbox til Orangeplettet-kirurg\\
const orangeInfo = document.querySelector("#orange-shoulder-info");
const orangeFish = document.querySelectorAll("img#orange-shoulder");

const orangeTextbox = orangeInfo.querySelector(".textbox");
const orangeParentBox = orangeInfo.querySelector(".parent-box");

orangeFish.forEach(function (fiskElement) {
    fiskElement.addEventListener("click", function () {
        this.classList.add("swim-forward");

        setTimeout(function () {
            document.querySelectorAll(".Informationsbox").forEach(function (box) {
                box.hidden = true;
            });

            orangeInfo.hidden = false;
            orangeTextbox.style.display = "block";
            orangeParentBox.style.display = "none";
            backButton.style.display = "block";
        }, 1500);
    });
});

orangeInfo.querySelector("#parent-button").addEventListener("click", function () {
    orangeTextbox.style.display = "none";
    orangeParentBox.style.display = "block";
});

orangeInfo.querySelector("#child-button").addEventListener("click", function () {
    orangeParentBox.style.display = "none";
    orangeTextbox.style.display = "block";
});


//Informationsbox til Sortbundet-Kirurg\\

const sortbundetInfo = document.querySelector("#black-barred-surgeonfish-info");
const sortbundetFish = document.querySelectorAll("img#black-barred-surgeonfish");

const sortbundetTextbox = sortbundetInfo.querySelector(".textbox");
const sortbundetParentBox = sortbundetInfo.querySelector(".parent-box");

sortbundetFish.forEach(function (fiskElement) {
    fiskElement.addEventListener("click", function () {
        this.classList.add("swim-forward");

        setTimeout(function () {
            document.querySelectorAll(".Informationsbox").forEach(function (box) {
                box.hidden = true;
            });

            sortbundetInfo.hidden = false;
            sortbundetTextbox.style.display = "block";
            sortbundetParentBox.style.display = "none";
            backButton.style.display = "block";
        }, 1500);
    });
});

sortbundetInfo.querySelector("#parent-button").addEventListener("click", function () {
    sortbundetTextbox.style.display = "none";
    sortbundetParentBox.style.display = "block";
});

sortbundetInfo.querySelector("#child-button").addEventListener("click", function () {
    sortbundetParentBox.style.display = "none";
    sortbundetTextbox.style.display = "block";
});

//Informationsbox til Clovnfish\\

const clownfishInfo = document.querySelector("#clownfish-info");
const clownfishFish = document.querySelectorAll("img#clownfish");

const clownfishTextbox = clownfishInfo.querySelector(".textbox");
const clownfishParentBox = clownfishInfo.querySelector(".parent-box");

clownfishFish.forEach(function (fiskElement) {
    fiskElement.addEventListener("click", function () {
        this.classList.add("swim-forward");

        setTimeout(function () {
            document.querySelectorAll(".Informationsbox").forEach(function (box) {
                box.hidden = true;
            });

            clownfishInfo.hidden = false;
            clownfishTextbox.style.display = "block";
            clownfishParentBox.style.display = "none";
            backButton.style.display = "block";
        }, 1500);
    });
});

clownfishInfo.querySelector("#parent-button").addEventListener("click", function () {
    clownfishTextbox.style.display = "none";
    clownfishParentBox.style.display = "block";
});

clownfishInfo.querySelector("#child-button").addEventListener("click", function () {
    clownfishParentBox.style.display = "none";
    clownfishTextbox.style.display = "block";
});


//Informationsbox til Kuglefisk\\
const pufferfishInfo = document.querySelector("#pufferfish-info");
const pufferfishFish = document.querySelectorAll("img#pufferfish");

const pufferfishTextbox = pufferfishInfo.querySelector(".textbox");
const pufferfishParentBox = pufferfishInfo.querySelector(".parent-box");

pufferfishFish.forEach(function (fiskElement) {
    fiskElement.addEventListener("click", function () {
        this.classList.add("swim-forward");

        setTimeout(function () {
            document.querySelectorAll(".Informationsbox").forEach(function (box) {
                box.hidden = true;
            });

            pufferfishInfo.hidden = false;
            pufferfishTextbox.style.display = "block";
            pufferfishParentBox.style.display = "none";
            backButton.style.display = "block";
        }, 1500);
    });
});

pufferfishInfo.querySelector("#parent-button").addEventListener("click", function () {
    pufferfishTextbox.style.display = "none";
    pufferfishParentBox.style.display = "block";
});

pufferfishInfo.querySelector("#child-button").addEventListener("click", function () {
    pufferfishParentBox.style.display = "none";
    pufferfishTextbox.style.display = "block";
});

//Informationsbox til Blå Kirurgfisk\\
const powderbluefiskInfo = document.querySelector("#powder-blue-tang-info");
const powderbluefiskFish = document.querySelectorAll("img#powder-blue-tang");

const powderbluefiskTextbox = powderbluefiskInfo.querySelector(".textbox");
const powderbluefiskParentBox = powderbluefiskInfo.querySelector(".parent-box");

powderbluefiskFish.forEach(function (fiskElement) {
    fiskElement.addEventListener("click", function () {
        this.classList.add("swim-forward");

        setTimeout(function () {
            document.querySelectorAll(".Informationsbox").forEach(function (box) {
                box.hidden = true;
            });

            powderbluefiskInfo.hidden = false;
            powderbluefiskTextbox.style.display = "block";
            powderbluefiskParentBox.style.display = "none";
            backButton.style.display = "block";
        }, 1500);
    });
});

powderbluefiskInfo.querySelector("#parent-button").addEventListener("click", function () {
    powderbluefiskTextbox.style.display = "none";
    powderbluefiskParentBox.style.display = "block";
});

powderbluefiskInfo.querySelector("#child-button").addEventListener("click", function () {
    powderbluefiskParentBox.style.display = "none";
    powderbluefiskTextbox.style.display = "block";
});



//Startside\\
const playButton = 
document.querySelector ("#play-button");

const startSide =
document.querySelector(".start-side");

playButton.addEventListener("click", function() {
    startSide.style.display = "none";
}
);

//funktion til afspille en gældende lyd fra arrayet
const alleFisk = document.querySelectorAll(".fish-item");

alleFisk.forEach(fiskElement => {
    fiskElement.addEventListener("click", function () {
        const fiskId = this.id; 

        // 1. Stopper svømning, flytter og forstørrer fisken via CSS-klassen
        this.classList.add("swim-forward");

        // 2. Afspiller introlyden
        playSound(fiskId, "intro");
    });
});

// Variabel til at holde styr på den lyd, der spiller lige nu
let currentAudio = null;

// Funktion til at afspille lyd (og stoppe den gamle først)
function playSound(fiskId, lydType) {
    // 1. Hvis der allerede er en lyd i gang, så stopper den og nulstiller den
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // 2. Finder den specifikke fisk i arrayet hvor id matcher
    const valgtFisk = fishItem.find(f => f.id === fiskId);

    // 3. Tjeker om fisken og lyden findes, og afspiller den nye lyd
    if (valgtFisk && valgtFisk.sounds && valgtFisk.sounds[lydType]) {
        currentAudio = new Audio(valgtFisk.sounds[lydType]);
        currentAudio.play().catch();
    }
}

//Tilbage knappen\\
const backButton = document.querySelector("#back-button");

backButton.addEventListener("click", function () {
    const infoBoxes = document.querySelectorAll(".textbox, .parent-box");
    
    infoBoxes.forEach(function(box){
        box.style.display= "none"
    });

    backButton.style.display = "none";

     
    
    alleFisk.forEach(function (fiskElement){
        fiskElement.classList.remove("swim-forward");
    })
});


//Lyd til "Hvor gammel" knappen\\
