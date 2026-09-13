
const LAMBDA_URL = 'YOUR-LAMBDA-URL';
// if correct it should be similar to https://somethingsomething.execute-api.us-east-1.amazonaws.com/prod/petcuddleotron

async function getServerStatus() {
    const response = await fetch(LAMBDA_URL + "?action=ip");
    const data = await response.json();

    const statusSquare = document.getElementById("status-square");
    const statusText = document.getElementById("status-text");
    const serverIP = document.getElementById("server-ip");

    if (data.ip) {
        statusSquare.style.backgroundColor = "green";
        statusText.textContent = "Online";
        serverIP.textContent = data.ip;
    } else {
        statusSquare.style.backgroundColor = "red";
        statusText.textContent = "Offline";
        serverIP.textContent = "—";
    }
}

async function startServer() {
    await fetch(LAMBDA_URL + "?action=start", {
        method: "POST"
    });

    getServerStatus();
}

async function stopServer() {
    await fetch(LAMBDA_URL + "?action=stop", {
        method: "POST"
    });

    getServerStatus();
}

document.getElementById("startButton")
.addEventListener("click", startServer);

document.getElementById("stopButton")
.addEventListener("click", stopServer);

getServerStatus();
