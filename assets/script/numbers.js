
function validateSum(){
    var sumArray = document.getElementsByName('nuM');
    var sum=0;
    for(var i=0;i<sumArray.length;i++){
        if(parseInt(sumArray[i].value))
            sum += parseInt(sumArray[i].value);
    }
    document.getElementById('total').value = sum;
}
