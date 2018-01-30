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

for (var i = 0; i < GLA_DATA.Routes.length; i++){

    common_destination = quotesToDestination(GLA_DATA, LIS_DATA, i);

    combos_fixed_destination = combosToDestination(common_destination);

    displayDestinationName(combos_fixed_destination[0], GLA_DATA);
    displayCheapestQuote(combos_fixed_destination);

    Combos[i] = combos_fixed_destination;
    cheapest_combos[i] = combos_fixed_destination[0];

}