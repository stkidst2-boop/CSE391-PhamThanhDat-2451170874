const images = [
    "https://placehold.co/800x400?text=Image+1",
    "https://placehold.co/800x400?text=Image+2",
    "https://placehold.co/800x400?text=Image+3",
    "https://placehold.co/800x400?text=Image+4",
    "https://placehold.co/800x400?text=Image+5",
    "https://placehold.co/800x400?text=Image+6",
    "https://placehold.co/800x400?text=Image+7",
    "https://placehold.co/800x400?text=Image+8",
    "https://placehold.co/800x400?text=Image+9"
];

const commands = [
    "Next Image",
    "Previous Image",
    "First Image",
    "Last Image",
    "Play Slideshow",
    "Stop Slideshow"
];

const galleryImage = document.querySelector("#galleryImage");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const commandPalette = document.querySelector("#commandPalette");
const commandInput = document.querySelector("#commandInput");
const commandList = document.querySelector("#commandList");
let currentIndex = 0;
let slideshow = null;

function renderImage() {
    galleryImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    renderImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderImage();
}

function toggleSlideshow() {
    if (slideshow) {
        clearInterval(slideshow);
        slideshow = null;
    }

    else {
        slideshow = setInterval(
            nextImage, 2000
        );
    }
}

prevBtn.addEventListener(
    "click",
    prevImage
);

nextBtn.addEventListener(
    "click",
    nextImage
);

function openPalette() {
    commandPalette
        .classList
        .remove("hidden");
    commandInput.focus();
    renderCommands(commands);
}

function closePalette() {
    commandPalette
        .classList
        .add("hidden");
}

function renderCommands(list) {
    commandList.innerHTML = "";
    list.forEach(command => {
        const li = document.createElement("li");
        li.textContent = command;
        li.addEventListener(
            "click",
            () => executeCommand(command)
        );
        commandList.append(li);
    });
}

function executeCommand(command) {
    switch (command) {
        case "Next Image":
            nextImage();
            break;

        case "Previous Image":
            prevImage();
            break;

        case "First Image":
            currentIndex = 0;
            renderImage();
            break;

        case "Last Image":
            currentIndex =
                images.length - 1;
            renderImage();
            break;

        case "Play Slideshow":
            if (!slideshow) {
                toggleSlideshow();
            }
            break;

        case "Stop Slideshow":
            if (slideshow) {
                toggleSlideshow();
            }
            break;
    }

    closePalette();
}

commandInput.addEventListener(
    "input",
    e => {
        const keyword = e.target.value.toLowerCase();
        const filtered = commands.filter(c => c.toLowerCase().includes(keyword));
        renderCommands(filtered);
    }
);

commandInput.addEventListener(
    "keydown",
    e => {
        if (e.key === "Enter") {
            const first = commandList.querySelector("li");
            if (first) {
                executeCommand(
                    first.textContent
                );
            }
        }
    }
);

document.addEventListener(
    "keydown",
    e => {
        if (
            e.ctrlKey
            &&
            e.key.toLowerCase() === "k"
        ) {

            e.preventDefault();
            openPalette();
            return;
        }

        if (e.key === "Escape") {
            closePalette();
        }

        if (
            commandPalette
                .classList
                .contains("hidden")
        ) {

            switch (e.key) {
                case "ArrowLeft":
                    prevImage();
                    break;

                case "ArrowRight":
                    nextImage();
                    break;

                case " ":
                    e.preventDefault();
                    toggleSlideshow();
                    break;
            }

            const number = parseInt(e.key);
            if (
                number >= 1 && number <= 9
            ) {
                currentIndex = number - 1;
                renderImage();
            }
        }
    }
);

renderImage();
