const userName = prompt ("Prego, inserisca pure il suo nome");

const userSurname = prompt ("Adesso gentilmente, inserisca il suo cognome");

const userColor = prompt ("Mi dica anche qual é il suo colore preferito");

const userPsw = userName + userSurname + userColor + "21";

document.getElementById("password").innerHTML += (userPsw); 