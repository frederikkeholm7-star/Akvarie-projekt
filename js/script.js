"use strict";

const selectedFish = document.querySelector(".fisk");
const textbox = document.querySelector(".textbox");

selectedFish.addEventListener("click", function () {
        textbox.style.display = "block";
});

const fisk = [
    {
        id: "klovnfisk",
        sounds: {
            intro:"sound/nemo/nemo-intro.m4a",
            alder:"sound/nemo/nemo-alder.m4a",
            levested:"sound/nemo/nemo-levested.m4a",
            spiser:"sound/nemo/nemo-spiser.m4a",
            vaegt:"sound/nemo/nemo-vaegt.m4a",
            superkraft:"sound/nemo/nemo-superkraft.m4a",
            outro:"sound/nemo/nemo-outro.m4a"
        }
    },
    {
        id: "Orangeplettet-kirurg",
        sounds: {
            intro:"sound/orangeplettede-kirurgfisk/intro.wav",
            alder:"sound/orangeplettede-kirurgfisk/alder.wav",
            levested:"sound/orangeplettede-kirurgfisk/levested.wav",
            spiser:"#",
            vaegt:"sound/orangeplettede-kirurgfisk/vaegt.wav",
            superkraft:"sound/orangeplettede-kirurgfisk/superkraft.wav",
            outro:"sound/orangeplettede-kirurgfisk/outro.wav"
        }
    },
    {
        id: "Banggai-kardinalfisk",
        sounds: {
            intro:"sound/banggai-kardinalfisk/banggai-kardinalfisk-intro.m4a",
            alder:"sound/banggai-kardinalfisk/baggai-alder.m4a",
            levested:"sound/banggai-kardinalfisk/banggai-levested.m4a",
            spiser:"sound/banggai-kardinalfisk/banggai-spiser.m4a",
            vaegt:"sound/banggai-kardinalfisk/banggai-vaegt.m4a",
            superkraft:"sound/banggai-kardinalfisk/banggai-superkraft.m4a",
            outro:"sound/banggai-kardinalfisk/banggai-outro.m4a"
        }
    },
{
        id: "sommerfuglcichlide",
        sounds: {
            intro:"sound/sommerfuglcichlide/intro.wav",
            alder:"sound/sommerfuglcichlide/alder.wav",
            levested:"sound/sommerfuglcichlide/levested.wav",
            spiser:"sound/sommerfuglcichlide/spiser.wav",
            vaegt:"sound/sommerfuglcichlide/vaegt.wav",
            superkraft:"sound/sommerfuglcichlide/superkraft",
            outro:"sound/sommerfuglcichlide/outro.wav"
        }
    },
{
        id: "Kuglefisk",
        sounds: {
            intro:"sound/kuglefisk/kuglefisk-intro.m4a",
            alder:"sound/kuglefisk/kuglefisk-alder.m4a",
            levested:"sound/kuglefisk/kuglefisk-levested.m4a",
            spiser:"sound/kuglefisk/kuglefisk-spiser.m4a",
            vaegt:"sound/kuglefisk/kuglefisk-vaegt.m4a",
            superkraft:"sound/kuglefisk/kuglefisk-superkraft.m4a",
            outro:"sound/kuglefisk/kuglefisk-outro.m4a"
        }
    },
{
        id: "Raevefisk",
        sounds: {
            intro:"sound/raevefisk/rævefisk-intro.m4a",
            alder:"#",
            levested:"#",
            spiser:"#",
            vaegt:"#",
            superkraft:"#"
        }
    },
{
        id: "Sortbundet-kirurg",
        sounds: {
            intro:"sound/sortbaandet-kirurgfisk/sortbaandet-kirurgfisk-intro.m4a",
            alder:"sound/sortbaandet-kirurgfisk/sortbaandet-kirurgfisk-alder.m4a",
            levested:"sound/sortbaandet-kirurgfisk/sortbaandet-kirurgfisk-levested.m4a",
            spiser:"sound/sortbaandet-kirurgfisk/sortbaandet-kirurgfisk-spiser.m4a",
            vaegt:"sound/sortbaandet-kirurgfisk/sortbaandet-kirurgfisk-vaegt.m4a",
            superkraft:"sound/sortbaandet-kirurgfisk/sortbaandet-kirurgfisk-superkraft.m4a"
        }
    },
{
        id: "Skildpadde",
        sounds: {
            intro:"sound/skildpadde/skildpadde-intro.m4a",
            alder:"sound/skildpadde/skildpadde-alder.m4a",
            levested:"sound/skildpadde/skildpadde-levested.m4a",
            spiser:"sound/skildpadde/skildpadde-spiser.m4a",
            vaegt:"sound/skildpadde/skildpadde-vaegt.m4a",
            superkraft:"sound/skildpadde/skildpadde-superkraft.m4a"
        }
    },
{
        id: "#",
        sounds: {
            intro:"#",
            alder:"#",
            levested:"#",
            spiser:"#",
            vaegt:"#",
            superkraft:"#"
        }
    },
{
        id: "#",
        sounds: {
            intro:"#",
            alder:"#",
            levested:"#",
            spiser:"#",
            vaegt:"#",
            superkraft:"#"
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

document.querySelector("#Raevefisk").addEventListener("click", function () {
    this.classList.add("swim-forward");

    setTimeout(function () {
        document.querySelector(".textbox").style.display = "block";
    }, 1500);
});

//Informationsbox til Banggaifisk\\
const banggaiInfo = document.querySelector("#banggai-info");
const banggaiFish = document.querySelector("#Banggai-kardinalfisk");
const banggaiTextbox = banggaiInfo.querySelector(".textbox");
const banggaiParentBox = banggaiInfo.querySelector(".parent-box");

banggaiFish.addEventListener("click", function () {
    this.classList.add("swim-forward");

    setTimeout(function () {
        // Skjul de andre fisks informationsbokse
        document.querySelectorAll(".Informationsbox").forEach(function (box) {
            box.hidden = true;
        });

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
function playSound(fiskId, lydType) {
    // 1. Finder den specifikke fisk i arrayet hvor id matcher
    const valgtFisk = fisk.find(f => f.id === fiskId);

    // 2. Tjekker om fisken og lyden findes, før den afspilles
    if (valgtFisk && valgtFisk.sounds && valgtFisk.sounds[lydType]) {
        const audio = new Audio(valgtFisk.sounds[lydType]);
        audio.play().catch(error => {
            console.log();
        });
    } else {
        console.log();
    }
}



const alleFisk = document.querySelectorAll(".fisk");

alleFisk.forEach(fiskElement => {
    fiskElement.addEventListener("click", function () {
        const fiskId = this.id; 

        // 1. Stopper svømning, flytter og forstørrer fisken via CSS-klassen
        this.classList.add("swim-forward");

        // 2. Afspiller introlyden
        playSound(fiskId, "intro");

        // 3. Viser infoboksen efter et lille øjeblik
        setTimeout(() => {
            const textbox = document.querySelector(".textbox");
            if (textbox) {
                textbox.style.display = "block";
                backButton.style.display = "block";
            }
        }, 1000);
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
    const valgtFisk = fisk.find(f => f.id === fiskId);

    // 3. Tjeker om fisken og lyden findes, og afspiller den nye lyd
    if (valgtFisk && valgtFisk.sounds && valgtFisk.sounds[lydType]) {
        currentAudio = new Audio(valgtFisk.sounds[lydType]);
        currentAudio.play().catch(error => {
            console.log("Fejl ved afspilning:", error);
        });
    }
}

//Tilbage knappen\\
const backButton = document.querySelector("#back-button");

backButton.addEventListener("click", function () {
    const infoBoxes = document.querySelectorAll(".textbox, .parent-box");
    
    infoBoxes.forEach(function(box){
        box.style.display= "none"
        backButton.style.display = "none";
    });

    
    
    alleFisk.forEach(function (fiskElement){
        fiskElement.classList.remove("swim-forward");
    })
});