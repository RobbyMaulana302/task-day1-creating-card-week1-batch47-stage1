const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/f3f1943ba8196a341045", true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error Loading Data.");
    }
  };
  xhr.onerror = () => {
    reject("Network Error.");
  };
  xhr.send();
});

async function getAllTestimonials() {
  const response = await promise;
  let testimonialHTML = "";

  response.forEach((data) => {
    testimonialHTML += `
    <div class="testimonial">
        <img src="${data.image}" class="profile-testimonial" />
        <p class="quote">${data.quote}</p>
        <p class="author">- ${data.name}</p>
        <p class="author">${data.rating} <i class="fa-solid fa-star"></i></p>
    </div>
    `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

getAllTestimonials();

async function getFilteredTestimonial(rating) {
  const response = await promise;

  const testimonialFiltered = response.filter((data) => {
    return data.rating === rating;
  });

  let testimonialHTML = "";

  if (testimonialFiltered.length === 0) {
    testimonialHTML += "<h1>Data not found!</h1>";
  } else {
    testimonialFiltered.forEach((data) => {
      testimonialHTML += `
        <div class="testimonial">
            <img src="${data.image}" class="profile-testimonial" />
            <p class="quote">${data.quote}</p>
            <p class="author">- ${data.name}</p>
            <p class="author">${data.rating} <i class="fa-solid fa-star"></i></p>
        </div>
        `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}
