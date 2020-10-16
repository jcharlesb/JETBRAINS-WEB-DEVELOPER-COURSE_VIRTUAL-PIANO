let audio;

/*
 * ÉCOUTE DES ÉVÈNEMENTS AU CLAVIER
 * ajout des actions sur les bonnes touches du clavier quand elles sont enfoncées
 * et ajout d'un message dans la console en cas d'utilisation d'une mauvaise touche
 */
document.addEventListener("keypress", function (event) {
	if (event.code === "KeyA") {
		audio = new Audio("assets/white_keys/A.mp3");
		audio.play();
	} else if (event.code === "KeyS") {
		audio = new Audio("assets/white_keys/S.mp3");
		audio.play();
	} else if (event.code === "KeyD") {
		audio = new Audio("assets/white_keys/D.mp3");
		audio.play();
	} else if (event.code === "KeyF") {
		audio = new Audio("assets/white_keys/F.mp3");
		audio.play();
	} else if (event.code === "KeyG") {
		audio = new Audio("assets/white_keys/G.mp3");
		audio.play();
	} else if (event.code === "KeyH") {
		audio = new Audio("assets/white_keys/H.mp3");
		audio.play();
	} else if (event.code === "KeyJ") {
		audio = new Audio("assets/white_keys/J.mp3");
		audio.play();
	} else if (event.code === "KeyW") {
		audio = new Audio("assets/black_keys/W.mp3");
		audio.play();
	} else if (event.code === "KeyE") {
		audio = new Audio("assets/black_keys/E.mp3");
		audio.play();
	} else if (event.code === "KeyT") {
		audio = new Audio("assets/black_keys/T.mp3");
		audio.play();
	} else if (event.code === "KeyY") {
		audio = new Audio("assets/black_keys/Y.mp3");
		audio.play();
	} else if (event.code === "KeyU") {
		audio = new Audio("assets/black_keys/U.mp3");
		audio.play();
	} else {
		console.log("I can't play this key.");
	}
});