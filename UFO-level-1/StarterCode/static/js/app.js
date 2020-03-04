// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

  tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button =  d3.select("#filter-btn");


button.on("click", function() {
  tbody.text("");
  var input = d3.select("#datetime").property("value");
    console.log(input);
    var desiredDate = tableData.filter(function(theDate){
        return theDate.datetime === input
    });
    console.log(desiredDate);

    desiredDate.forEach(function(theDate) {
        var row = tbody.append("tr");
        Object.entries(theDate).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
          });
    });

});





