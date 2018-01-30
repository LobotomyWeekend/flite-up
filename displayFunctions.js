function displayDestinationName(combo, Places){
    // Display Destination Name
    for (var l = 0; l < Places.length; l++){
        if (combo.flight_1.DestinationId == Places[l].PlaceId){
            destination_name = Places[l].Name;
        }
    }
    console.log('Flight to : ' + destination_name);
}

function displayCheapestQuote(combos){
    console.log('Average Price: $' + combos.comparison.AveragePrice)
    console.log('Time Difference On Arrival : ' + combos.comparison.HoursDifference_in + ' Hours')
    console.log('Time Difference On Departure : ' + combos.comparison.HoursDifference_out + ' Hours')
}
