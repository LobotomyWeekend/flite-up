// Prototype Algorithm for Fliteup

/* Simulated Inputs:
    Origin 1: Glasgow
    Origin 2: Lisbon
    Max Price: £100
    Date Min: 01/04/2018
    Date Max: 15/04/2018
*/

// Results Data
DATA_1 = GLA_DATA;
DATA_2 = LIS_DATA;

// Declare variables
var common_destination = [];
var Combos = [];
var cheapest_combos = [];
var Places = DATA_1.Places;


function setup(){
    createCanvas(640,1080);
    background(140,96,136);

    // Loop over destinations
    for (var i = 0; i < DATA_1.Routes.length; i++){
        // Find all flights to the same destination
        common_destination = quotesToDestination(DATA_1, DATA_2, i);
        // Find all COMBINATIONS of flights to the same destination
        combos_fixed_destination = combosToDestination(common_destination);
        // Extract the cheapest quotes
        cheapest_combos[i] = combos_fixed_destination[0];
        // Sort array price low -> high
        cheapest_combos.sort(function(a, b){
            return a.comparison.AveragePrice - b.comparison.AveragePrice;
        });
    }
}

function draw(){
    
    // Results box sizing
    var boxSpacing = 10;
    var boxIndent = 10;
    var boxHeight = 150;
    var boxWidth = width-2*boxIndent;
    var boxFillet = 20;

    for (var i = 0; i < cheapest_combos.length; i++){
        // Extract Relavent Results Data
        result = cheapest_combos[i];

        // Vertical Offset of elements in adjacent boxes
        vertOffset =  i * (boxHeight + boxSpacing);

        // Draw Boxes
        fill(255);
        noStroke();
        
        rect(boxIndent, boxSpacing + vertOffset, 
            boxWidth, boxHeight, boxFillet);

        // Write Main Results
        // Destination Name
        fill(0);
        textSize(36);
        textStyle(BOLD);
        text(result.flight_1.DestinationName, 2*boxIndent, 5*boxSpacing + vertOffset);
        textStyle(NORMAL);
        // Average Price
        textSize(28);
        // Get Price as string
        price = "$" + String(result.comparison.AveragePrice);
        if (price.length == 3){
            text(price, 2*boxIndent, 8*boxSpacing + vertOffset);
        } else {
            text(price + "0", 2*boxIndent, 8*boxSpacing + vertOffset);
        }
        // Dates
        dateString = commonDateString(result.comparison.CommonStartDate, result.comparison.CommonEndDate);
        textSize(16);
        text(dateString, 2*boxIndent, 10*boxSpacing + vertOffset);

        // Origin Names
        textSize(18);
        text("From:", 25*boxIndent, 5*boxSpacing + vertOffset)
        textSize(28);
        text(result.flight_1.OriginName, 30*boxIndent, 5*boxSpacing + vertOffset);
        text(result.flight_2.OriginName, 50*boxIndent, 5*boxSpacing + vertOffset);
        // Different Prices
        price = "$" + String(result.flight_1.Price);
        text(price, 30*boxIndent, 8*boxSpacing + vertOffset);
        price = "$" + String(result.flight_2.Price);
        text(price, 50*boxIndent, 8*boxSpacing + vertOffset);        
           
        // Timeline
        var timelineLength = 300;
        var timelineFillet = 5;
        var timelineHeight = 10;
        fill(26,220,67);
        rect(30*boxIndent, 130 + vertOffset, timelineLength, timelineHeight, timelineFillet);

        waitPercentStart = (result.comparison.HoursDifference_in)/(result.comparison.TotalTime);
        waitPercentEnd = (result.comparison.HoursDifference_out)/(result.comparison.TotalTime);
        
        fill(150);
        rect(30*boxIndent, 130 + vertOffset,timelineLength*waitPercentStart, timelineHeight, timelineFillet);
        
        rect(30*boxIndent + (1-waitPercentEnd)*timelineLength, 130 + vertOffset, timelineLength*waitPercentEnd, timelineHeight, timelineFillet);
        

    }

}