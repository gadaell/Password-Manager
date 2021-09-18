async function setFavcon() {
	try {
		const imgEl = document.querySelector("#favcon");
		const websiteEl = document.querySelector("#website-name").innerHTML;

		const url = "http://favicongrabber.com/api/grab/" + websiteEl;
		console.log(url);

		const response = await fetch(url);
		const data = await response.json();
		const source = data.icons[0].src;

		imgEl.setAttribute("src", source);
	} catch (err) {
		console.log(err);
		const imgEl = document.querySelector("#favcon");

		imgEl.setAttribute("src", "/assets/img/virtual guardian.png");
	}
}

setFavcon();
