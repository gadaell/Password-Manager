async function setFavcon() {
	const allEl = document.querySelectorAll(".favcon");
	console.log("allEl: ", allEl);

	const siteValues = [];

	allEl.forEach((i) => {
		const test = i.id;
		siteValues.push(test);
	});

	console.log("siteValues: ", siteValues);

	for (let i = 0; i < siteValues.length; i++) {
		try {
			const url = "https://favicongrabber.com/api/grab/" + siteValues[i];

			const response = await fetch(url);
			console.log("response: ", response);
			const data = await response.json();
			console.log("data: ", data);
			const source = data.icons[0].src;
			console.log("source: ", source);

			allEl[i].setAttribute("src", source);
		} catch (err) {
			allEl[i].setAttribute("src", "/assets/img/virtual guardian.png");
		}
	}
}

const bodyEl = document.querySelector("body");
bodyEl.onload = setFavcon;
