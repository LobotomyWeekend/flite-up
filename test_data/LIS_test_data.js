// Test Data for FLITEUP
// OriginId = 2 (LISBON)
// based on example API Response of Skyscanner 'Browse Routes'

var LIS_DATA = {
    "Routes": [
      { // Istanbul
        "OriginId": 2,
        "DestinationId": 3,
        "QuoteIds": [
          1,
          2
        ],
        "Price": 65,
        "QuoteDateTime": "2018-01-01T12:00:00"
      },
      { // Paris
        "OriginId": 2,
        "DestinationId": 4,
        "QuoteIds": [
          3,
          4
        ],
        "Price": 62,
        "QuoteDateTime": "2018-01-01T12:00:00"
      },
      { // Stockholm
        "OriginId": 2,
        "DestinationId": 5,
        "QuoteIds": [
          5,
          6
        ],
        "Price": 98,
        "QuoteDateTime": "2018-01-01T12:00:00"
      },
      { // Tallinn
        "OriginId": 2,
        "DestinationId": 6,
        "QuoteIds": [
          7,
          8
        ],
        "Price": 76,
        "QuoteDateTime": "2018-01-01T12:00:00"
      }
    ],
    "Quotes": [
      { // Istanbul 1
        "QuoteId": 1,
        "MinPrice": 65,
        "Direct": true,
        "OutboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 2,
          "DestinationId": 3,
          "DepartureDate": "2018-04-01T10:25:00"
        },
        "InboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 3,
          "DestinationId": 2,
          "DepartureDate": "2018-04-09T13:30:00"
        },
        "QuoteDateTime": "2018-01-01T12:00:00"
      },
      { // Istanbul 2
        "QuoteId": 2,
        "MinPrice": 78,
        "Direct": true,
        "OutboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 2,
          "DestinationId": 3,
          "DepartureDate": "2018-04-02T23:55:00"
        },
        "InboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 3,
          "DestinationId": 2,
          "DepartureDate": "2018-04-11T13:20:00"
        },
        "QuoteDateTime": "2018-01-01T12:00:00"
      },
      { // Paris 1
        "QuoteId": 3,
        "MinPrice": 62,
        "Direct": true,
        "OutboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 2,
          "DestinationId": 4,
          "DepartureDate": "2018-04-05T10:20:00"
        },
        "InboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 4,
          "DestinationId": 2,
          "DepartureDate": "2018-04-11T12:30:00"
        },
        "QuoteDateTime": "2018-01-01T12:00:00"
      },
      { // Paris 2
        "QuoteId": 4,
        "MinPrice": 68,
        "Direct": true,
        "OutboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 2,
          "DestinationId": 4,
          "DepartureDate": "2018-04-01T11:11:00"
        },
        "InboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 4,
          "DestinationId": 2,
          "DepartureDate": "2018-04-08T17:45:00"
        },
        "QuoteDateTime": "2018-01-01T12:00:00"
      },
      { // Stockholm 1
        "QuoteId": 5,
        "MinPrice": 98,
        "Direct": true,
        "OutboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 2,
          "DestinationId": 5,
          "DepartureDate": "2018-04-05T12:25:00"
        },
        "InboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 5,
          "DestinationId": 2,
          "DepartureDate": "2018-04-15T05:35:00"
        },
        "QuoteDateTime": "2018-01-01T12:00:00"
      },
      { // Stockholm 2
        "QuoteId": 6,
        "MinPrice": 101,
        "Direct": true,
        "OutboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 2,
          "DestinationId": 5,
          "DepartureDate": "2018-04-03T18:10:00"
        },
        "InboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 5,
          "DestinationId": 2,
          "DepartureDate": "2018-04-11T07:15:00"
        },
        "QuoteDateTime": "2018-01-01T12:00:00"
      },
      { // Tallinn 1
        "QuoteId": 7,
        "MinPrice": 76,
        "Direct": true,
        "OutboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 2,
          "DestinationId": 6,
          "DepartureDate": "2018-04-05T18:20:00"
        },
        "InboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 6,
          "DestinationId": 2,
          "DepartureDate": "2018-04-09T12:00:00"
        },
        "QuoteDateTime": "2018-01-01T12:00:00"
      },
      { // Tallinn 2
        "QuoteId": 8,
        "MinPrice": 92,
        "Direct": true,
        "OutboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 2,
          "DestinationId": 6,
          "DepartureDate": "2018-04-05T21:00:00"
        },
        "InboundLeg": {
          "CarrierIds": [
            420
          ],
          "OriginId": 6,
          "DestinationId": 2,
          "DepartureDate": "2018-04-12T12:00:00"
        },
        "QuoteDateTime": "2018-01-01T12:00:00"
      }
    ],
    "Places": [
      {
        "PlaceId": 1,
        "Name": "Glasgow",
        "Type": "City",
        "SkyscannerCode": "GLA"
      },
      {
        "PlaceId": 2,
        "Name": "Lisbon",
        "Type": "City",
        "SkyscannerCode": "LIS"
      },
      {
        "PlaceId": 3,
        "Name": "Istanbul",
        "Type": "City",
        "SkyscannerCode": "IST"
      },
      {
        "PlaceId": 4,
        "Name": "Paris",
        "Type": "City",
        "SkyscannerCode": "CDG"
      },
      {
        "PlaceId": 5,
        "Name": "Stockholm",
        "Type": "City",
        "SkyscannerCode": "ARN"
      },
      {
        "PlaceId": 6,
        "Name": "Tallinn",
        "Type": "City",
        "SkyscannerCode": "TLL"
      }
    ],
    "Carriers": [
      {
        "CarrierId": 420,
        "Name": "Fliteup Airlines"
      }
    ],
    "Currencies": [
      {
        "Code": "EUR",
        "Symbol": "€",
        "ThousandsSeparator": " ",
        "DecimalSeparator": ",",
        "SymbolOnLeft": false,
        "SpaceBetweenAmountAndSymbol": true,
        "RoundingCoefficient": 0,
        "DecimalDigits": 2
      }
    ]
  };