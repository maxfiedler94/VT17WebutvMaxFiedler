    
function setAmount(){
    console.log(document.getElementById("amount").value)
    if (document.getElementById("amount").value == 10) {
        document.getElementById("mandelmassa").innerHTML = 150;
        document.getElementById("sugar").innerHTML = 5;
        document.getElementById("eggwhites").innerHTML = 1;
        document.getElementById("butter").innerHTML = 150;
        document.getElementById("florsocker").innerHTML= 3;
        document.getElementById("eggyellow").innerHTML = 1;
        document.getElementById("chocolate").innerHTML = 250;

    }

    if (document.getElementById("amount").value == 20) {
        document.getElementById("mandelmassa").innerHTML = 300;
        document.getElementById("sugar").innerHTML = 10;
        document.getElementById("eggwhites").innerHTML = 2;
        document.getElementById("butter").innerHTML = 300;
        document.getElementById("florsocker").innerHTML= 6;
        document.getElementById("eggyellow").innerHTML = 2;
        document.getElementById("chocolate").innerHTML = 500;
    }
    if (document.getElementById("amount").value == 30) {
        document.getElementById("mandelmassa").innerHTML = 450;
        document.getElementById("sugar").innerHTML = 15;
        document.getElementById("eggwhites").innerHTML = 3;
        document.getElementById("butter").innerHTML = 450;
        document.getElementById("florsocker").innerHTML= 9;
        document.getElementById("eggyellow").innerHTML = 3;
        document.getElementById("chocolate").innerHTML = 750;
    }
    if (document.getElementById("amount").value == 40) {
        document.getElementById("mandelmassa").innerHTML = 600;
        document.getElementById("sugar").innerHTML = 20;
        document.getElementById("eggwhites").innerHTML = 4;
        document.getElementById("butter").innerHTML = 600;
        document.getElementById("florsocker").innerHTML= 12;
        document.getElementById("eggyellow").innerHTML = 4;
        document.getElementById("chocolate").innerHTML = 1000;
    }
    if (document.getElementById("amount").value == 50) {
        document.getElementById("mandelmassa").innerHTML = 750;
        document.getElementById("sugar").innerHTML = 25;
        document.getElementById("eggwhites").innerHTML = 5;
        document.getElementById("butter").innerHTML = 750;
        document.getElementById("florsocker").innerHTML= 15;
        document.getElementById("eggyellow").innerHTML = 5;
        document.getElementById("chocolate").innerHTML = 1250;
    }
}