let dataBlog = []
let tech = []

for (let k = 0; k < tech.length; k++) {
    const element = tech[k];
    
}

function addBlog(event) {
    event.preventDefault();

    let technology = []

    let title = document.getElementById("input-title").value
    let startDate = document.getElementById("input-start-date").value
    let endDate = document.getElementById("input-end-date").value
    let description = document.getElementById("input-description").value
    let image = document.getElementById("input-image").files
    let checkbox = document.getElementsByName("technology")

    for (let index = 0; index < checkbox.length; index++) {       
        if (checkbox[index].checked) {
            technology.push(checkbox[index].value);
        }
    }

    image = URL.createObjectURL(image[0])
    console.log(image);

    let blog = {
        title,
        startDate,
        endDate,
        description,
        technology,
        image
    }
    
    tech.push(blog.technology)
    dataBlog.push(blog)
    console.log(dataBlog);
    console.log(tech);
    renderBlog(event);

}

function renderBlog(event) {
    event.preventDefault()

    document.getElementById("content").innerHTML = ""
    
    for (let index = 0; index < dataBlog.length; index++) {
        let tech = ''

        for (let k = 0; k < dataBlog[index].technology.length; k++) {
            tech += `<img src="assets/images/${dataBlog[index].technology[k]}.png" alt=""></img>`
        }
        
        document.getElementById("content").innerHTML += 
        `
            <div class="project-card">
                <div class="project-card-image">
                    <img src="${dataBlog[index].image}" alt="blog_image">
                </div>
                <div class="project-card-title">
                    <h2>${dataBlog[index].title}</h2>
                    <p>Durasi: ${dataBlog[index].startDate} to ${dataBlog[index].endDate}</p>
                </div>
                <div class="project-card-description">
                    <p>${dataBlog[index].description}</p>
                </div>
                <div class="project-technology">
                ${tech}
                </div>
                <div class="project-card-button">
                    <button>edit</button>
                    <Button>delete</Button>
                </div>
            </div>
        `
    }
}
