/// from data.js
var tableData = data;

// Get a reference to the table body

function generateTable(data){

var tbody = d3.select("tbody");

//clear out the existing data on the front end
tbody.html("");

// Console.log the UFO data from data.js
console.log(tableData);

// Step 1: Loop Through `data` and console.log each UFO report object
data.forEach(function(UFOreport){
	console.log(UFOreport);
// Step 2:  Use d3 to append one table row `tr` for each UFO report object
	var row = tbody.append("tr");

// Step 3:  Use `Object.entries` to console.log each UFO report value
	Object.entries(UFOreport).forEach(function([key, value]){
		console.log(key,value);
		// Step 4: Use d3 to append 1 cell per UFO report value (weekday, date, high, low)
		var cell = row.append("td");
		// Step 5: Use d3 to update each cell's text with
		cell.text(value);

	});
})};

generateTable(data);


function handleClick(){

	d3.event.preventDefault();


	var inputValue  = d3.select("#datetime").property("value");

	console.log(inputValue);


	var filter = tableData.filter(UFOreport => UFOreport.datetime === inputValue);

	if (inputValue.length === 0) {
		generateTable(data);

	} else {
		generateTable(filter);
		};

	};

// // filter the dataset 
d3.selectAll('#filter-btn').on("click",handleClick);




