let elemnts = ""
document.querySelector("#projects").innerHTML = "Loading.."
fetch("projects.json").then(response => response.json()).then(data => {
    for (let project = 0; project < Object.keys(data).length; project++){
        let title = Object.keys(data)[project]
            elemnts += `<div class="project">
                <h2 class="project-title">${title}</h2>
                ${data[title].icon? `<img class="project-icon" src="${data[title].icon}" />`: ""}
                <p class="project-desc">
                    ${data[title].desc}
                </p>
                <a
                    href="${data[title].link.url}"
                    class="projectlink"
                    target="_blank"
                    >${data[title].link.title}</a
                >
            </div>`
        }
    document.querySelector("#projects").innerHTML = elemnts
}).catch(error => document.querySelector("#projects").innerHTML = error)