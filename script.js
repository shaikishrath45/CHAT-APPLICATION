const socket = io();

let joined = false;

function sendMessage(){

    const username =
        document.getElementById("username").value;

    const message =
        document.getElementById("messageInput").value;

    if(username === ""){
        alert("Enter username first");
        return;
    }

    if(!joined){
        socket.emit("user joined", username);
        joined = true;
    }

    if(message !== ""){

        socket.emit("chat message", {
            user: username,
            text: message
        });

        document.getElementById("messageInput").value="";
    }
}

socket.on("chat message",(data)=>{

    const li=document.createElement("li");

    li.classList.add("message");

    li.innerHTML=
        `<span class="user">${data.user}</span><br>${data.text}`;

    document.getElementById("messages")
        .appendChild(li);
});

socket.on("user joined",(msg)=>{

    const li=document.createElement("li");

    li.classList.add("system");

    li.textContent=msg;

    document.getElementById("messages")
        .appendChild(li);
});