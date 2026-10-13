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
            alder:"nemo-alder.m4a",
            levested:"nemo-levested.m4a",
            spiser:"nemo-spiser.m4a",
            vaegt:"nemo-vaegt.m4a",
            superkraft:"nemo-superkraft.m4a"
        }
    },
    {
        id: "Orangeplettet-kirurg",
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
        id: "Banggai-kardinalfisk",
        sounds: {
            intro:"banggai-kardinalfisk-intro-m4a",
            alder:"baggai-alder.m4a",
            levested:"banggai-levested.m4a",
            spiser:"banggai-spiser.m4a",
            vaegt:"banggai-vaegt.m4a",
            superkraft:"banggai-superkraft.m4a"
        }
    },
{
        id: "Sommerfuglecichlide",
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
