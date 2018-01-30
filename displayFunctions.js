function displayDestinationName(combo, DATA){
    // Display Destination Name
    for (var l = 0; l < DATA.Places.length; l++){
        if (combo.flight_1.DestinationId == DATA.Places[l].PlaceId){
            destination_name = DATA.Places[l].Name;
        }
    }
    console.log('Flight to : ' + destination_name);
}

function displayCheapestQuote(combos){
    console.log('Average Price: $' + combos[0].comparison.AveragePrice)
    console.log('Time Difference On Arrival : ' + combos[0].comparison.HoursDifference_in + ' Hours')
    console.log('Time Difference On Departure : ' + combos[0].comparison.HoursDifference_out + ' Hours')
}
