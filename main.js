let galleryImgs = document.querySelectorAll(".gallery-img");
let navItem = document.querySelectorAll(".navbar-item");

const changeImg = (imgTopic) => {
	galleryImgs.forEach((img, i) => {
		img.style.opacity = "0";
		setTimeout(() => {
			img.src = `./images/${imgTopic}/${imgTopic}-${i + 1}.jpg`;
			img.style.opacity = "1";
		}, 1300);
	});
};

navItem[0].addEventListener("click", () => {
	if (!navItem[0].classList.contains("active")) {
		navItem.forEach((element) => {
			element.classList.remove("active");
		});
		navItem[0].classList.add("active");
		changeImg("scenery");
	}
});

navItem[1].addEventListener("click", () => {
	if (!navItem[1].classList.contains("active")) {
		navItem.forEach((element) => {
			element.classList.remove("active");
		});
		navItem[1].classList.add("active");
		changeImg("animal");
	}
});
