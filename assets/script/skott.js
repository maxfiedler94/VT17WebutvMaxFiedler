function yearCheck(number){
	var numb = parseInt(number);

	if (((numb % 4 == 0) && (numb % 100 != 0)) || (numb % 400 == 0)){
		return true;
	} else {
		return false;
	}
}