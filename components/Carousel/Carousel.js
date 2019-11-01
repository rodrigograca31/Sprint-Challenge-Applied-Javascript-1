/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

Carousel = () => {
	const carousel = document.createElement("div");

	const leftButton = document.createElement("div");
	const rightButton = document.createElement("div");

	const img1 = document.createElement("img");
	const img2 = document.createElement("img");
	const img3 = document.createElement("img");
	const img4 = document.createElement("img");

	carousel.classList.add("carousel");
	img1.classList.add("active");
	leftButton.classList.add("left-button");
	rightButton.classList.add("right-button");

	leftButton.innerText = " < ";
	rightButton.innerText = " > ";

	img1.src = "./assets/carousel/mountains.jpeg";
	img2.src = "./assets/carousel/computer.jpeg";
	img3.src = "./assets/carousel/trees.jpeg";
	img4.src = "./assets/carousel/turntable.jpeg";

	img1.classList.add("active");

	carousel.append(leftButton, img1, img2, img3, img4, rightButton);

	rightButton.addEventListener("click", (event) => {
		console.log("click");
		const currActive = carousel.querySelector(".active");
		console.log(currActive.nextSibling);
		console.log(currActive);

		if (currActive.nextSibling != null) {
			if (currActive.nextSibling.tagName != "DIV") {
				currActive.nextSibling.classList.add("active")
				TweenLite.to([currActive, currActive.nextSibling], 2, {
					right: "100%", onComplete: () => {
						currActive.classList.remove("active")
						currActive.style.right = "";
						currActive.nextSibling.style.right = "";
					}
				});
			} else {
				currActive.classList.remove("active");
				carousel.querySelector("img").classList.add("active");
			}
		}
	});

	leftButton.addEventListener("click", (event) => {
		console.log("click");
		const currActive = carousel.querySelector(".active");
		console.log(currActive.previousSibling);
		console.log(currActive);

		if (currActive.previousSibling != null) {
			if (currActive.previousSibling.tagName != "DIV") {
				currActive.previousSibling.classList.add("active")
				currActive.style.right = "100%"
				currActive.previousSibling.style.right = "100%"
				TweenLite.to([currActive, currActive.previousSibling], 2, {
					right: "0%", onComplete: () => {
						currActive.classList.remove("active")
						currActive.style.left = "";
						currActive.previousSibling.style.left = "";
					}
				});
			} else {
				currActive.classList.remove("active");
				carousel.querySelectorAll("img")[3].classList.add("active");
			}
		}
	});

	// no animation code for left btn
	// leftButton.addEventListener("click", (event) => {
	// 	console.log("click");
	// 	const currActive = carousel.querySelector(".active");
	// 	console.log(currActive.previousSibling);
	// 	console.log(currActive);

	// 	if (currActive.previousSibling != null) {
	// 		currActive.classList.remove("active")

	// 		if (currActive.previousSibling.tagName != "DIV") {
	// 			currActive.previousSibling.classList.add("active")
	// 		} else {
	// 			carousel.querySelectorAll("img")[3].classList.add("active");
	// 		}
	// 	}
	// });
	
	return carousel;
}

document.querySelector(".carousel-container").append(Carousel());