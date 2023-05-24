let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-title").value;
  let startDate = new Date(document.getElementById("input-start-date").value);
  let endDate = new Date(document.getElementById("input-end-date").value);
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;
  let checkbox = document.getElementsByName("technology");

  console.log(startDate);

  if (title == "") {
    return alert("title can't null");
  } else if (startDate == "Invalid Date") {
    return alert("take your date in Start Date");
  } else if (endDate == "Invalid Date") {
    return alert("take your date in End Date");
  } else if (description == "") {
    return alert("Description can't null");
  }

  let technology = [];
  for (let index = 0; index < checkbox.length; index++) {
    if (checkbox[index].checked) {
      technology.push(checkbox[index].value);
    }
  }

  image = URL.createObjectURL(image[0]);

  let blog = {
    title,
    startDate,
    endDate,
    description,
    technology,
    image,
  };

  dataBlog.push(blog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("myForm").reset();
  document.getElementById("content").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    let tech = "";

    for (let k = 0; k < dataBlog[index].technology.length; k++) {
      tech += `<img src="assets/images/${dataBlog[index].technology[k]}.png" alt=""></img>`;
    }

    document.getElementById("content").innerHTML += `
        <a href="blog-detail.html">
          <div class="project-card">
                <div class="project-card-image">
                    <img src="${dataBlog[index].image}" alt="blog_image">
                </div>
                <div class="project-card-title">
                    <h2>${dataBlog[index].title}</h2>
                    <p>Durasi: ${getDistanceTime(
                      dataBlog[index].startDate,
                      dataBlog[index].endDate
                    )}</p>
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
        `;
  }
}

function getDistanceTime(startTime, endTime) {
  let distance = endTime - startTime;

  let milisecond = 1000;
  let secondInHours = 3600;
  let hoursInDays = 24;
  let daysInWeeks = 7;
  let daysInMonths = 30;
  let daysInYears = 365;

  let distanceYears = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays * daysInYears)
  );
  let distanceMonths = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays * daysInMonths)
  );
  let distanceWeeks = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays * daysInWeeks)
  );
  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  );

  if (distanceDay < 7) {
    return `${distanceDay} Days`;
  } else if (distanceDay < 30) {
    return `${distanceWeeks} Weeks`;
  } else if (distanceDay < 365) {
    return `${distanceMonths} Months`;
  } else {
    return `${distanceYears} Years`;
  }
}
