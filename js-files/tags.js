const projects = document.getElementsByClassName("project");

const tagTemplate = `<div class="tag text-tag gray"><h5>REPLACE</h5></div>`;

const pico8TagTemplate = `<div class="tag image-tag"><img src="../assets/pico8logo.png" alt="PICO-8"></div>`

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const projectTextElement = project.querySelector(".project_text");

    if (projectTextElement === null) {
        continue;
    }

    const tagsElement = projectTextElement.querySelector(".tags");

    if (tagsElement === null) {
        continue;
    }

    const tagsList = tagsElement.innerHTML.split(", ");
    tagsElement.innerHTML = "";

    for (let j = 0; j < tagsList.length; j++) {
        if (tagsList[j] === "Pico8") {
            tagsElement.innerHTML += pico8TagTemplate;
        } else {
            tagsElement.innerHTML += tagTemplate.replace("REPLACE", tagsList[j]);
        }
    }
}