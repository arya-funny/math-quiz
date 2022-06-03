function addUser(){
    var player1=document.getElementById("player1Input").value;
    var player2=document.getElementById("player2Input").value;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location="game_page.html";
}