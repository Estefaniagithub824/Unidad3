import cipher from './cifrado.js';

//Selectors
const txtMsg = document.getElementById("msg");
const count = document.getElementById("counter");
const offset = document.getElementById("offset");
const btnCipher = document.getElementById("cipher");
const btnDecipher = document.getElementById("decipher");
const lblMsgResult = document.getElementById("lblMsgResult");
const txtMsgResult = document.getElementById("msgResult");
const btnCopy = document.getElementById("copy");
const modalC = document.getElementsByClassName("modalContainer")[0];
const modal = document.getElementsByClassName("modal")[0];
const close = document.getElementById("close");

//EventListeners
/* Limit characters*/
txtMsg.addEventListener("keyup", () =>{
    count.innerHTML = txtMsg.value.length + "/280";
});

/* Function cipher*/
btnCipher.addEventListener("click",()=>{
    if(txtMsg.value == ""){
        alert("Ingresa tu mensaje secreto.");
    }else if(offset.value == ""){
        alert("No olvides ingresar tu clave secreta.");
    }else{
        lblMsgResult.innerHTML = "Su mensaje cifrado es ";
        let msgResult = cipher.encode(parseInt(offset.value),txtMsg.value);
        txtMsgResult.innerHTML = msgResult;
        openModal();
    }
});