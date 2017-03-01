function validateSum(){
    var input = document.getElementsByName('nuM')[0].value;
    var sum=0;
    var sumArray = input.split('');
    for(var i=0;i<sumArray.length;i++){
        if(parseInt(sumArray[i]))
            sum += parseInt(sumArray[i]);
    }
    document.getElementById('total').value = sum;
}
