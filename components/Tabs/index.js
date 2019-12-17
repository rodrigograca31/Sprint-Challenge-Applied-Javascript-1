// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
	.then((response) => {
		console.log(response.data.topics);

		response.data.topics.forEach(topic => {
			document.querySelector(".topics").append(Topic(topic));
		});
	}).catch((errors) => {
		console.log("errors");
		console.log(errors);
	});


Topic = (topicName) => {
	const topic = document.createElement("div");
	
	topic.classList.add("tab");

	topic.innerText = topicName;

	topic.addEventListener("click", (event) => {
		console.log("click");
		console.log(event.currentTarget.innerText.toLowerCase());
		console.log(document.querySelectorAll(".card:not([data-topic='javascript'])"));
		console.log(document.querySelectorAll(".card:not([data-topic='" + event.currentTarget.innerText.toLowerCase() + "'])"));
		
		document.querySelectorAll(".card").forEach((item) => {
			item.style.display = ""
		});
		document.querySelectorAll(".card:not([data-topic='" + event.currentTarget.innerText.toLowerCase() + "'])").forEach((item) => {
			item.style.display = "none"
		});
		
	})

	return topic;
}

