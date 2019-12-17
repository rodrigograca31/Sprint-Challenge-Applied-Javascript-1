// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
	.then((response) => {
		console.log(response.data);

		console.log(Object.keys(response.data.articles));
		
		Object.keys(response.data.articles).forEach((key) => {
			console.log(key);
			response.data.articles[key].forEach((article) => {
				document.querySelector(".cards-container").append(Card(article, key));
			})
		});
		

		// response.data.topics.forEach(topic => {
		// 	document.querySelector(".topics").append(Topic(topic));
		// });
	}).catch((errors) => {
		console.log("errors");
		console.log(errors);
	});


Card = (info, topic) => {
	const card = document.createElement("div");
	const headline = document.createElement("div");
	const authorInfo = document.createElement("div");
	const imgContainer = document.createElement("div");
	const img = document.createElement("img");
	const author = document.createElement("span");

	card.classList.add("card");
	card.setAttribute("data-topic", topic);
	headline.classList.add("headline");
	authorInfo.classList.add("author");
	imgContainer.classList.add("img-container");

	img.src = info.authorPhoto;
	headline.innerText = info.headline;
	author.innerText = `By: ${info.authorName}`;

	imgContainer.append(img);
	authorInfo.append(imgContainer, author);
	card.append(headline, authorInfo);

	return card;
}