document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        console.log("The 'A' key is pressed");
        let audio = new Audio("music/A.mp3");
        audio.play();
    } else if (event.code === "KeyS") {
        console.log("The 'S' key is pressed");
        let audio = new Audio("music/D.mp3");
        audio.play();
    } else if (event.code === "KeyD") {
        console.log("The 'D' key is pressed");
        let audio = new Audio("music/F.mp3");
        audio.play();
    } else if (event.code === "KeyF") {
        console.log("The 'F' key is pressed");
        let audio = new Audio("music/G.mp3");
        audio.play();
    } else if (event.code === "KeyG") {
        console.log("The 'G' key is pressed");
        let audio = new Audio("music/H.mp3");
        audio.play();
    } else if (event.code === "KeyH") {
        console.log("The 'H' key is pressed");
        let audio = new Audio("music/J.mp3");
        audio.play();
    } else if (event.code === "KeyJ") {
        console.log("The 'J' key is pressed");
        let audio = new Audio("music/S.mp3");
        audio.play();
    } else if (event.code === "KeyW") {
        console.log("The 'W' key is pressed");
        let audio = new Audio("Sounds/W.mp3");
        audio.play();
    } else if (event.code === "KeyE") {
        console.log("The 'E' key is pressed");
        let audio = new Audio("Sounds/E.mp3");
        audio.play();
    } else if (event.code === "KeyT") {
        console.log("The 'T' key is pressed");
        let audio = new Audio("Sounds/T.mp3");
        audio.play();
    } else if (event.code === "KeyY") {
        console.log("The 'Y' key is pressed");
        let audio = new Audio("Sounds/Y.mp3");
        audio.play();
    } else if (event.code === "KeyU") {
        console.log("The 'U' key is pressed");
        let audio = new Audio("Sounds/U.mp3");
        audio.play();
    } else {
        console.log("Unbound key");
    }
 });


