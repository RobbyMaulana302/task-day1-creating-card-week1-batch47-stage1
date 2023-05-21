let dataBlog = []

function addBlog(event) {
    event.preventDefault();

    let technology = []

    let title = document.getElementById("input-title").value
    let startDate = new Date(document.getElementById("input-start-date").value) 
    let endDate = new Date(document.getElementById("input-end-date").value) 
    let description = document.getElementById("input-description").value
    let image = document.getElementById("input-image").files
    let checkbox = document.getElementsByName("technology")
     
    if (title == '') {
        return alert("title can't null");
    } else if (startDate == 'Invalid Date') {
        return alert('take your date in Start Date')
    } else if (endDate == 'Invalid Date') {
        return alert('take your date in End Date')
    } else if ( description == '') {
        return alert("Description can't null")
    }
    
    let months = new Date(endDate - startDate)
    let durasi = months.getMonth()
    
    for (let index = 0; index < checkbox.length; index++) {       
        if (checkbox[index].checked) {
            technology.push(checkbox[index].value);
        }
    }

    image = URL.createObjectURL(image[0])


    let blog = {
        title,
        startDate,
        endDate,
        description,
        technology,
        image,
        durasi
    }
    dataBlog.push(blog)
    renderBlog(event)
}


function renderBlog(event) {
    event.preventDefault()

    document.getElementById("myForm").reset()

    document.getElementById("content").innerHTML = ""
    
    for (let index = 0; index < dataBlog.length; index++) {
        let tech = ''

        for (let k = 0; k < dataBlog[index].technology.length; k++) {
            tech += `<img src="assets/images/${dataBlog[index].technology[k]}.png" alt=""></img>`
        }
        
        document.getElementById("content").innerHTML += 
        `
        <a href="blog-detail.html">
            <div class="project-card">
                <div class="project-card-image">
                    <img src="${dataBlog[index].image}" alt="blog_image">
                </div>
                <div class="project-card-title">
                    <h2>${dataBlog[index].title}</h2>
                    <p>Durasi: ${dataBlog[index].durasi} Bulan</p>
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
        
        </a>
        `
    }
}

