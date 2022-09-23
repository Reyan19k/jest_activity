// given a fixed point sorted array of distinct elements,
// return if there's an element who's value is equal 
// to its index position

/* we assume it's an array of numbers */
function indexMatch(arr) {
	if(arr == null || arr == undefined) {
		return false;
	}
	for(var i=0; i < arr.length; i++) {
		if( i == arr[i]) {
			return i;
		}
	}
	return false;
}

module.exports = {
	indexMatch: indexMatch
};