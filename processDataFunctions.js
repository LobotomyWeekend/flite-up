function combosToDestination(common_destination){
// Function that takes quotes in common_destinations and evaluates all of the combinations of flights
// Produces an array of  ALL combinations, each element contains an object:
//      > Average Cost
//      > Price as % of Average Cost
//      > Time Differences
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

            // Total time Earliest Arrival to Latest Departure
            var total_time = Math.max(d3,d4) - Math.min(d1,d2);
            var total_time_in_hours = Math.abs(Math.floor(total_time / 60e3 / 60));

            // Put comparison in object
            var combo = {
                flight_1: {
                    // Location Information
                    OriginId: common_destination[0][i].OutboundLeg.OriginId,
                    OriginName: getPlaceName(Places, common_destination[0][i].OutboundLeg.OriginId),
                    DestinationId: common_destination[0][i].OutboundLeg.DestinationId,
                    DestinationName: getPlaceName(Places, common_destination[0][i].OutboundLeg.DestinationId),
                    // Price Information
                    Price: common_destination[0][i].MinPrice,
                    PriceVsAverage: Math.floor(100 * (common_destination[0][i].MinPrice / averagePrice)),

                    // Date/Time Information
                    OutboundDate: d1,
                    InboundDate: d3,
                    // wait times for origin 1
                    Wait_Start: isWaitValid(d2-d1),
                    Wait_End: isWaitValid(d3-d4),
                    Wait_Total: isWaitValid(d2-d1) + isWaitValid(d3-d4),
                },
                flight_2: {
                    // Location Information
                    OriginId: common_destination[1][j].OutboundLeg.OriginId,
                    OriginName: getPlaceName(Places, common_destination[1][j].OutboundLeg.OriginId),
                    DestinationId: common_destination[1][j].OutboundLeg.DestinationId,
                    DestinationName: getPlaceName(Places, common_destination[1][j].OutboundLeg.OriginId),

                    // Price Information
                    Price: common_destination[1][j].MinPrice,
                    PriceVsAverage: Math.floor(100 * (common_destination[1][j].MinPrice / averagePrice)),

                    // Date/Time Information
                    OutboundDate: d2,
                    InboundDate: d4,
                    // wait times for origin 2
                    Wait_Start: isWaitValid(d1-d2),
                    Wait_End: isWaitValid(d4-d3),
                    Wait_Total: isWaitValid(d1-d2) + isWaitValid(d4-d3)
                },
                comparison: {
                    // Price Information
                    AveragePrice: averagePrice,

                    // Date/Time Information
                    TotalTime: total_time_in_hours,
                    HoursDifference_out: d_diff_out_hours,
                    HoursDifference_in: d_diff_in_hours,
                    CommonStartDate: Math.max(d1,d2),
                    CommonEndDate: Math.min(d3,d4)
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

function isWaitValid(wait){
    return Math.abs(Math.floor(wait / 60e3 / 60))
}

function getPlaceName(Places, PlaceId){
    for (var l = 0; l < Places.length; l++){
        if (PlaceId == Places[l].PlaceId){
            return Places[l].Name;
        }
    }
}

function commonDateString(Start, End){
    // Function Takes two dates in ISO format and returns a string in
    // one of the following forms:
    //      01 - 11 Apr
    //      30 Mar - 05 Apr
    
        // Convert Dates to Strings
        startDateFull = String(new Date(Start));
        endDateFull = String(new Date(End));
        // Extract DAYS    
        startDay = startDateFull.slice(8,11);
        endDay = endDateFull.slice(8,11);
        // Extract MONTHS    
        startMonth = startDateFull.substr(4,4);
        endMonth = endDateFull.substr(4,4);
        // Check Whether Holiday over two months
        if (startMonth == endMonth){
            dateString = startDay + "- " + endDay + endMonth;
        } else {
            dateString = startDay + startMonth + " - " + endDay + endMonth;
        }
        return dateString;
    }