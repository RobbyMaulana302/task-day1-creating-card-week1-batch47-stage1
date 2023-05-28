const testimonialData = [
  {
    name: "Monkey D Luffy",
    quote: "Gomu Gomu No - Gutling Gun",
    image:
      "https://static.wikia.nocookie.net/onepiecetreasurecruiseglobal/images/a/a2/C0727.png/revision/latest?cb=20161024095713",
    rating: 1,
  },
  {
    name: "Roronoa Zoro",
    quote: "Santoryu - tatsumaki",
    image:
      "https://c4.wallpaperflare.com/wallpaper/332/915/762/one-piece-roronoa-zoro-hd-wallpaper-preview.jpg",
    rating: 2,
  },
  {
    name: "Vinsmoke Sanji",
    quote: "Ifrit Jambe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DW7ekARhjyVGAueAOYi-7ehjpfU_zJDnDw&usqp=CAU",
    rating: 3,
  },
  {
    name: "Tony Tony Chopper",
    quote: "Cotton Candy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGqyglidp9gKS2SSZrDkHeBGaSGJ6xXPgxA&usqp=CAU",
    rating: 4,
  },
  {
    name: "Franky",
    quote: "SUUUUPEER",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIsMhQUZx7sXXEZheTtLML0I6Gr5KWXQygA&usqp=CAU",
    rating: 5,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach((data) => {
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

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const filteredTestimonial = testimonialData.filter((data) => {
    return data.rating === rating;
  });

  if (filteredTestimonial.length === 0) {
    testimonialHTML += "<h1>Data not found!</h1>";
  } else {
    filteredTestimonial.forEach((data) => {
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
