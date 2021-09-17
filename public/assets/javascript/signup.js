const signUpHandler = () => {
	const email = document.querySelector("#email").value;
	const userName = document.querySelector("#username").value;
	const password = document.querySelector("#password").value;
};

document.querySelector("#signup-btn").addEventListener("click", signUpHandler);
