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