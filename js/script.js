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
            intro:"sound/banggai-kardinalfisk/banggai-kardinalfisk-intro-m4a",
            alder:"sound/banggai-kardinalfisk/baggai-alder.m4a",
            levested:"sound/banggai-kardinalfisk/banggai-levested.m4a",
            spiser:"sound/banggai-kardinalfisk/banggai-spiser.m4a",
            vaegt:"sound/banggai-kardinalfisk/banggai-vaegt.m4a",
            superkraft:"sound/banggai-kardinalfisk/banggai-superkraft.m4a",
            outro:"sound/banggai-kardinalfisk/banggai-outro.m4a"
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
        id: "kuglefisk",
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