const sortDates = function(arr) {
	//output: sorted array with most-recent dates first


	//1. sort by year
		// use a regex that looks for 4 digits in a row
		// use the year itself to sort
		// put the entire date into the sorted
		// determine a method for finding the right index in which to place it
		// that automatically pushes other dates left or right
		// maybe an object of arrays, sorted by year?
	//2. then by month
	//3. then by day
		//3a. use a regex that looks for either 1 or 2 digits in a row

	let output = arr.slice();
	let obj = {};
	arr.forEach(date=>{
		!obj[date.match(/\d{4}/)[0] ]? obj[date.match(/\d{4}/)[0]] = [date]: obj[date.match(/\d{4}/)[0]].push(date);
	})
	console.log(obj);
}
const datesArr = ['Oct 7, 2009', 'Nov 10, 2009','Apr 30, 3000', 'Jan 10, 2009', 'Oct 22, 2009','Mar 8, 1500'];
console.log( sortDates(datesArr) )