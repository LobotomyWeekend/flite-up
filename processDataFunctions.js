function combosToDestination(common_destination){
// Function that takes quotes in common_destinations and evaluates all of the combinations of flights
// Produces an array of  ALL combinations, each element contains an object:
//      > Average Cost
//      > Time Difference
//          > Start
//          > End
//      > Relavent Flight Information


    // increment variable
    var count = 0;
    // return value to contain all combiations of flights to single destination
    var Combos = [];

    // loop over flights from start_0
    for (var i = 0; i < common_destination[0].length; i++){
        // loop over flights from start_1
        for (var j = 0; j < common_destination[1].length; j++){
            // Find average Price
            averagePrice = 0.5*(common_destination[0][i].MinPrice + common_destination[1][j].MinPrice);
            // Difference in Arrival Time
            var d1 = new Date(common_destination[0][i].OutboundLeg.DepartureDate);
            var d2 = new Date(common_destination[1][j].OutboundLeg.DepartureDate);
            var d_diff_out = d2 - d1;
            var d_diff_out_hours = Math.abs(Math.floor(d_diff_out / 60e3 / 60));
            // Difference in Departure Time
            var d3 = new Date(common_destination[0][i].InboundLeg.DepartureDate);
            var d4 = new Date(common_destination[1][j].InboundLeg.DepartureDate);
            var d_diff_in = d3 - d4;
            var d_diff_in_hours = Math.abs(Math.floor(d_diff_in / 60e3 / 60));
            // Put comparison in object
            var combo = {
                flight_1: {
                    OriginId: common_destination[0][i].OutboundLeg.OriginId,
                    DestinationId: common_destination[0][i].OutboundLeg.DestinationId,
                    OutboundDate: d1,
                    InboundDate: d3,
                    Price: common_destination[0][i].MinPrice
                },
                flight_2: {
                    OriginId: common_destination[1][j].OutboundLeg.OriginId,
                    DestinationId: common_destination[1][j].OutboundLeg.DestinationId,
                    OutboundDate: d2,
                    InboundDate: d4,
                    Price: common_destination[1][j].MinPrice
                },
                comparison: {
                    AveragePrice: averagePrice,
                    HoursDifference_out: d_diff_out_hours,
                    HoursDifference_in: d_diff_in_hours
                }
            }
            // Add single comparison to return value
            Combos.push(combo);
            count++;
        }
    }
    // Sort array price low -> high
    Combos.sort(function(a, b){
        return a.comparison.AveragePrice - b.comparison.AveragePrice;
    });

    return Combos;
}