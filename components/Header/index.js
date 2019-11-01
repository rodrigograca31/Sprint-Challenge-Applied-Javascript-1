// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
	var header = document.createElement("div");
	var date = document.createElement("span");
	var temp = document.createElement("span");
	var h1 = document.createElement("h1");

	header.classList.add("header");
	date.classList.add("date");
	temp.classList.add("temp");

	header.append(date, h1, temp)

	date.innerText = new Date().toDateString();
	h1.innerText = "Lambda Times";
	h1.temp = "20°";

	return header;
}


document.querySelector(".header-container").append(Header());
