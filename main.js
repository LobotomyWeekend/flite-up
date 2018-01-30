// Prototype Algorithm for Fliteup

/* Simulated Inputs:
    Origin 1: Glasgow
    Origin 2: Lisbon
    Max Price: £100
    Date Min: 01/04/2018
    Date Max: 15/04/2018
*/

// Flights with same destination
var common_destination = [];

common_destination = quotesToDestination(GLA_DATA, LIS_DATA, 1);

// Combo 1 [0][0] + [1][0]

// Display Destination Name
console.log(GLA_DATA);
for (var l = 0; l < GLA_DATA.Places.length; l++){
    if (common_destination[0][0].OutboundLeg.DestinationId == GLA_DATA.Places[l].PlaceId){
        destination_name = GLA_DATA.Places[l].Name;
    }
}
console.log('Flights to : ' + destination_name);

// Find average Price
averagePrice = 0.5*(common_destination[0][0].MinPrice + common_destination[1][0].MinPrice);
console.log('$' + averagePrice + ' per person on average');

// Difference in Arrival Time
var d1 = new Date(common_destination[0][0].OutboundLeg.DepartureDate);
var d2 = new Date(common_destination[1][0].OutboundLeg.DepartureDate);
var d_diff_out = d2 - d1;
var d_diff_out_hours = Math.abs(Math.floor(d_diff_out / 60e3 / 60));
console.log(d_diff_out_hours + ' hours difference at arrival');

// Difference in Departure Time
var d3 = new Date(common_destination[0][0].InboundLeg.DepartureDate);
var d4 = new Date(common_destination[1][0].InboundLeg.DepartureDate);
var d_diff_in = d3 - d4;
var d_diff_in_hours = Math.abs(Math.floor(d_diff_in / 60e3 / 60));
console.log(d_diff_in_hours + ' hours difference at departure');

// Combo 2 [0][1] + [1][0]

// Combo 3 [0][0] + [1][1]

// Combo 3 [0][1] + [1][1]