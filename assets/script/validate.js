function validatePNum(sPNum)
{
  if (sPNum.length == 12){
    sPNum=sPNum.substring(2,12); 
  }

  
  var numbers = sPNum.match(/^(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)$/);
  var checkSum = 0;
  var d = new Date();
  if (!isDate(sPNum.substring(0,2),sPNum.substring(2,4),sPNum.substring(4,6))) {
    alert("Datum " + sPNum.substring(0,6) + " är fel.");
    return false;
  }

  if (numbers == null) { return false; }

  var n;
  for (var i = 1; i <= 10; i++)
  {
    n=parseInt(numbers[i]);
    if (i % 2 == 0) {
      checkSum+=n;
    } else {
      checkSum+=(n*2)%9+Math.floor(n/9)*9
    }
  }

  if (checkSum%10==0) { return true;}
  return false;
}

function getYear(y) { return (y < 1000) ? y + 1900 : y; }

function isDate(year, month, day)
{
  month = month - 1;
  var tmpDate = new Date(year,month,day);
  if (( tmpDate.getYear() ==year) &&
  (month == tmpDate.getMonth()) &&
  (day == tmpDate.getDate()) )
    return true;
  else
    return false;
}