// Function that returns a structure with all quotes to one destination
// Takes arguments: 2 API responses + 1 index value

function quotesToDestination(DATA_1, DATA_2, i){

    // extract first destinationId
    destination = GLA_DATA.Routes[i].DestinationId;

    // Find quotes from start location 1
    for(var j = 0; j < DATA_1.Quotes.length; j++){
        // check destination matches
        if (DATA_1.Quotes[j].OutboundLeg.DestinationId == destination){
            // add to end of return value
            common_destination.push(DATA_1.Quotes[j]);
        }
    }

    // Find quotes from start location 2
    for(var j = 0; j < DATA_2.Quotes.length; j++){
        // check destination matches
        if (DATA_2.Quotes[j].OutboundLeg.DestinationId == destination){
            // add to end of return value
            common_destination.push(DATA_2.Quotes[j]);
        }
    }

    return common_destination;
}