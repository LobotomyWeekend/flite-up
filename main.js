// Prototype Algorithm for Fliteup

/* Simulated Inputs:
    Origin 1: Glasgow
    Origin 2: Lisbon
    Max Price: £100
    Date Min: 01/04/2018
    Date Max: 15/04/2018
*/

// Declare variables
var common_destination = [];
var Combos = [];
var cheapest_combos = [];
var Places = GLA_DATA.Places;

// Loop over destinations
for (var i = 0; i < GLA_DATA.Routes.length; i++){
    // Find all flights to the same destination
    common_destination = quotesToDestination(GLA_DATA, LIS_DATA, i);
    // Find all COMBINATIONS of flights to the same destination
    combos_fixed_destination = combosToDestination(common_destination);
    // Extract the cheapest quotes
    cheapest_combos[i] = combos_fixed_destination[0];
    // Sort array price low -> high
    cheapest_combos.sort(function(a, b){
        return a.comparison.AveragePrice - b.comparison.AveragePrice;
    });
}

// Loop over cheapest quotes
for (var i = 0; i < cheapest_combos.length; i ++){
    // Console log flight information
    displayDestinationName(cheapest_combos[i], Places);
    displayCheapestQuote(cheapest_combos[i]);        
}