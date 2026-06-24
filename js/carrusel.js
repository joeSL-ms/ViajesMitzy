
const slides = [
    {
        img: "imagenes/paises/MachuPicchu.jpg",
        title: "Perú Machu Picchu",
        alt: "Perú Machu Picchu"
    },
    {
        img: "imagenes/paises/colombia-cartagena.jpg",
        title: "Colombia Cartagena",
        alt: "Colombia Cartagena"
    },
    {
        img: "imagenes/paises/Buenos-Aires.jpg",
        title: "Argentina Buenos Aires",
        alt: "Argentina Buenos Aires"
    },
    {
        img: "imagenes/paises/Cancun.jpg",
        title: "México Cancún",
        alt: "México Cancún"
    },
    {
        img: "imagenes/paises/RioJaneiro.jpg",
        title: "Brasil Río de Janeiro",
        alt: "Brasil Río de Janeiro"
    },
        {
        img: "imagenes/paises/Roma.jpg",
        title: "Italia Roma",
        alt: "Italia Roma"
    }
];

let current = 1;

const slideElements = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");

function updateCarousel() {
    const total = slides.length;

    const leftIndex = (current - 1 + total) % total;
    const centerIndex = current % total;
    const rightIndex = (current + 1) % total;

    const indexes = [leftIndex, centerIndex, rightIndex];

    slideElements.forEach((slide, i) => {
        const img = slide.querySelector("img");
        const title = slide.querySelector(".slide-title");

        img.src = slides[indexes[i]].img;
        img.alt = slides[indexes[i]].alt;
        title.textContent = slides[indexes[i]].title;

        slide.classList.remove("side", "main");
        if (i === 1) {
            slide.classList.add("main");
        } else {
            slide.classList.add("side");
        }
    });
}

prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateCarousel();
});

updateCarousel();
