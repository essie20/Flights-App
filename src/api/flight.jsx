import axios from 'axios';

const access_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMmVjNWZkM2FiMzUxOTdlMDIyZWFmNTU1MjlhNzU4ZWVhNmI5ZDM0MjBiNGFmNzUzN2ZmOTRlMTZkMzNmZGQ1MDg2NGMyNjc2MjBmYjg1YzEiLCJpYXQiOjE2NzUxOTc2NjMsIm5iZiI6MTY3NTE5NzY2MywiZXhwIjoxNzA2NzMzNjYzLCJzdWIiOiIxOTg5OCIsInNjb3BlcyI6W119.ppbcpfOlGr-65pyZz-fgJrFwrsZYIhg2dgIFBTClqY50ChcRssc-9ZfeF-yIVTM0m2Cq2zpqCASrjdV-BvImbQ'

const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://app.goflightlabs.com',
  timeout: 5000
});

const fake_result = [
  {
      "id": "Best",
      "name": "Best",
      "items": [
          {
              "id": "12126-2303011730--32317-0-12409-2303021215",
              "price": {
                  "raw": 625.77,
                  "formatted": "626 €"
              },
              "legs": [
                  {
                      "id": "12126-2303011730--32317-0-12409-2303021215",
                      "origin": {
                          "id": "HEL",
                          "name": "Helsinki Vantaa",
                          "displayCode": "HEL",
                          "city": "Helsinki",
                          "isHighlighted": false
                      },
                      "destination": {
                          "id": "ICN",
                          "name": "Seoul Incheon Int'l",
                          "displayCode": "ICN",
                          "city": "Seoul",
                          "isHighlighted": false
                      },
                      "durationInMinutes": 705,
                      "stopCount": 0,
                      "isSmallestStops": false,
                      "departure": "2023-03-01T17:30:00",
                      "arrival": "2023-03-02T12:15:00",
                      "timeDeltaInDays": 1,
                      "carriers": {
                          "marketing": [
                              {
                                  "id": -32317,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AY.png",
                                  "name": "Finnair"
                              }
                          ],
                          "operationType": "fully_operated"
                      },
                      "segments": [
                          {
                              "id": "12126-12409-2303011730-2303021215--32317",
                              "origin": {
                                  "flightPlaceId": "HEL",
                                  "parent": {
                                      "flightPlaceId": "HELS",
                                      "name": "Helsinki",
                                      "type": "City"
                                  },
                                  "name": "Helsinki Vantaa",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ICN",
                                  "parent": {
                                      "flightPlaceId": "SELA",
                                      "name": "Seoul",
                                      "type": "City"
                                  },
                                  "name": "Seoul Incheon Int'l",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T17:30:00",
                              "arrival": "2023-03-02T12:15:00",
                              "durationInMinutes": 705,
                              "flightNumber": "41",
                              "marketingCarrier": {
                                  "id": -32317,
                                  "name": "Finnair",
                                  "alternateId": "AY",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -32317,
                                  "name": "Finnair",
                                  "alternateId": "AY",
                                  "allianceId": 0
                              }
                          }
                      ]
                  }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                  "isChangeAllowed": false,
                  "isPartiallyChangeable": false,
                  "isCancellationAllowed": false,
                  "isPartiallyRefundable": false
              },
              "eco": {
                  "ecoContenderDelta": 48.007137
              },
              "tags": [
                  "shortest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.679163,
              "pricingOptions": [
                  {
                      "agentIds": [
                          "finn"
                      ],
                      "amount": 625.77,
                      "bookingProposition": "PBOOK"
                  }
              ],
              "deeplink": "https://www.skyscanner.net/transport/flights/hel/icn/230301/config/12126-2303011730--32317-0-12409-2303021215?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27538638&originentityid=27542027&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
          },
          {
              "id": "12126-2303011840--31734-1-12409-2303021820",
              "price": {
                  "raw": 671.18,
                  "formatted": "672 €"
              },
              "legs": [
                  {
                      "id": "12126-2303011840--31734-1-12409-2303021820",
                      "origin": {
                          "id": "HEL",
                          "name": "Helsinki Vantaa",
                          "displayCode": "HEL",
                          "city": "Helsinki",
                          "isHighlighted": false
                      },
                      "destination": {
                          "id": "ICN",
                          "name": "Seoul Incheon Int'l",
                          "displayCode": "ICN",
                          "city": "Seoul",
                          "isHighlighted": false
                      },
                      "durationInMinutes": 1000,
                      "stopCount": 1,
                      "isSmallestStops": false,
                      "departure": "2023-03-01T18:40:00",
                      "arrival": "2023-03-02T18:20:00",
                      "timeDeltaInDays": 1,
                      "carriers": {
                          "marketing": [
                              {
                                  "id": -31734,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/TK.png",
                                  "name": "Turkish Airlines"
                              }
                          ],
                          "operationType": "fully_operated"
                      },
                      "segments": [
                          {
                              "id": "12126-12585-2303011840-2303012335--31734",
                              "origin": {
                                  "flightPlaceId": "HEL",
                                  "parent": {
                                      "flightPlaceId": "HELS",
                                      "name": "Helsinki",
                                      "type": "City"
                                  },
                                  "name": "Helsinki Vantaa",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T18:40:00",
                              "arrival": "2023-03-01T23:35:00",
                              "durationInMinutes": 235,
                              "flightNumber": "1764",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          },
                          {
                              "id": "12585-12409-2303020225-2303021820--31734",
                              "origin": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ICN",
                                  "parent": {
                                      "flightPlaceId": "SELA",
                                      "name": "Seoul",
                                      "type": "City"
                                  },
                                  "name": "Seoul Incheon Int'l",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-02T02:25:00",
                              "arrival": "2023-03-02T18:20:00",
                              "durationInMinutes": 595,
                              "flightNumber": "90",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          }
                      ]
                  }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                  "isChangeAllowed": false,
                  "isPartiallyChangeable": false,
                  "isCancellationAllowed": false,
                  "isPartiallyRefundable": false
              },
              "tags": [
                  "second_shortest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.446415,
              "pricingOptions": [
                  {
                      "agentIds": [
                          "ctuk"
                      ],
                      "amount": 671.18,
                      "bookingProposition": "PBOOK"
                  }
              ],
              "deeplink": "https://www.skyscanner.net/transport/flights/hel/icn/230301/config/12126-2303011840--31734-1-12409-2303021820?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27538638&originentityid=27542027&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
          },
          {
              "id": "12126-2303011450--31901,-31734-2-12409-2303021820",
              "price": {
                  "raw": 550.48,
                  "formatted": "551 €"
              },
              "legs": [
                  {
                      "id": "12126-2303011450--31901,-31734-2-12409-2303021820",
                      "origin": {
                          "id": "HEL",
                          "name": "Helsinki Vantaa",
                          "displayCode": "HEL",
                          "city": "Helsinki",
                          "isHighlighted": false
                      },
                      "destination": {
                          "id": "ICN",
                          "name": "Seoul Incheon Int'l",
                          "displayCode": "ICN",
                          "city": "Seoul",
                          "isHighlighted": false
                      },
                      "durationInMinutes": 1230,
                      "stopCount": 2,
                      "isSmallestStops": false,
                      "departure": "2023-03-01T14:50:00",
                      "arrival": "2023-03-02T18:20:00",
                      "timeDeltaInDays": 1,
                      "carriers": {
                          "marketing": [
                              {
                                  "id": -31901,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/SK.png",
                                  "name": "Scandinavian Airlines"
                              },
                              {
                                  "id": -31734,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/TK.png",
                                  "name": "Turkish Airlines"
                              }
                          ],
                          "operationType": "fully_operated"
                      },
                      "segments": [
                          {
                              "id": "12126-9547-2303011450-2303011455--31901",
                              "origin": {
                                  "flightPlaceId": "HEL",
                                  "parent": {
                                      "flightPlaceId": "HELS",
                                      "name": "Helsinki",
                                      "type": "City"
                                  },
                                  "name": "Helsinki Vantaa",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ARN",
                                  "parent": {
                                      "flightPlaceId": "STOC",
                                      "name": "Stockholm",
                                      "type": "City"
                                  },
                                  "name": "Stockholm Arlanda",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T14:50:00",
                              "arrival": "2023-03-01T14:55:00",
                              "durationInMinutes": 65,
                              "flightNumber": "709",
                              "marketingCarrier": {
                                  "id": -31901,
                                  "name": "Scandinavian Airlines",
                                  "alternateId": "SK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31901,
                                  "name": "Scandinavian Airlines",
                                  "alternateId": "SK",
                                  "allianceId": 0
                              }
                          },
                          {
                              "id": "9547-12585-2303011800-2303012340--31734",
                              "origin": {
                                  "flightPlaceId": "ARN",
                                  "parent": {
                                      "flightPlaceId": "STOC",
                                      "name": "Stockholm",
                                      "type": "City"
                                  },
                                  "name": "Stockholm Arlanda",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T18:00:00",
                              "arrival": "2023-03-01T23:40:00",
                              "durationInMinutes": 220,
                              "flightNumber": "1796",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          },
                          {
                              "id": "12585-12409-2303020225-2303021820--31734",
                              "origin": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ICN",
                                  "parent": {
                                      "flightPlaceId": "SELA",
                                      "name": "Seoul",
                                      "type": "City"
                                  },
                                  "name": "Seoul Incheon Int'l",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-02T02:25:00",
                              "arrival": "2023-03-02T18:20:00",
                              "durationInMinutes": 595,
                              "flightNumber": "90",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          }
                      ]
                  }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": true,
              "farePolicy": {
                  "isChangeAllowed": false,
                  "isPartiallyChangeable": false,
                  "isCancellationAllowed": false,
                  "isPartiallyRefundable": false
              },
              "tags": [
                  "second_cheapest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.402289,
              "pricingOptions": [
                  {
                      "agentIds": [
                          "ctuk"
                      ],
                      "amount": 550.48,
                      "bookingProposition": "PBOOK"
                  }
              ],
              "deeplink": "https://www.skyscanner.net/transport/flights/hel/icn/230301/config/12126-2303011450--31901,-31734-2-12409-2303021820?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27538638&originentityid=27542027&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
          }
      ]
  },
  {
      "id": "Cheapest",
      "name": "Cheapest",
      "items": [
          {
              "id": "12126-2303010915--32013,-31734-2-12409-2303021820",
              "price": {
                  "raw": 539.2,
                  "formatted": "540 €"
              },
              "legs": [
                  {
                      "id": "12126-2303010915--32013,-31734-2-12409-2303021820",
                      "origin": {
                          "id": "HEL",
                          "name": "Helsinki Vantaa",
                          "displayCode": "HEL",
                          "city": "Helsinki",
                          "isHighlighted": false
                      },
                      "destination": {
                          "id": "ICN",
                          "name": "Seoul Incheon Int'l",
                          "displayCode": "ICN",
                          "city": "Seoul",
                          "isHighlighted": false
                      },
                      "durationInMinutes": 1565,
                      "stopCount": 2,
                      "isSmallestStops": false,
                      "departure": "2023-03-01T09:15:00",
                      "arrival": "2023-03-02T18:20:00",
                      "timeDeltaInDays": 1,
                      "carriers": {
                          "marketing": [
                              {
                                  "id": -32013,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/DY.png",
                                  "name": "Norwegian"
                              },
                              {
                                  "id": -31734,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/TK.png",
                                  "name": "Turkish Airlines"
                              }
                          ],
                          "operating": [
                              {
                                  "id": -30685,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/D8.png",
                                  "name": "Norwegian Air Sweden"
                              },
                              {
                                  "id": -31734,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/TK.png",
                                  "name": "Turkish Airlines"
                              }
                          ],
                          "operationType": "partially_operated"
                      },
                      "segments": [
                          {
                              "id": "12126-9547-2303010915-2303010915--32013",
                              "origin": {
                                  "flightPlaceId": "HEL",
                                  "parent": {
                                      "flightPlaceId": "HELS",
                                      "name": "Helsinki",
                                      "type": "City"
                                  },
                                  "name": "Helsinki Vantaa",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ARN",
                                  "parent": {
                                      "flightPlaceId": "STOC",
                                      "name": "Stockholm",
                                      "type": "City"
                                  },
                                  "name": "Stockholm Arlanda",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T09:15:00",
                              "arrival": "2023-03-01T09:15:00",
                              "durationInMinutes": 60,
                              "flightNumber": "4282",
                              "marketingCarrier": {
                                  "id": -32013,
                                  "name": "Norwegian",
                                  "alternateId": "DY",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -30685,
                                  "name": "Norwegian Air Sweden",
                                  "alternateId": "D8",
                                  "allianceId": 0
                              }
                          },
                          {
                              "id": "9547-12585-2303011800-2303012340--31734",
                              "origin": {
                                  "flightPlaceId": "ARN",
                                  "parent": {
                                      "flightPlaceId": "STOC",
                                      "name": "Stockholm",
                                      "type": "City"
                                  },
                                  "name": "Stockholm Arlanda",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T18:00:00",
                              "arrival": "2023-03-01T23:40:00",
                              "durationInMinutes": 220,
                              "flightNumber": "1796",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          },
                          {
                              "id": "12585-12409-2303020225-2303021820--31734",
                              "origin": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ICN",
                                  "parent": {
                                      "flightPlaceId": "SELA",
                                      "name": "Seoul",
                                      "type": "City"
                                  },
                                  "name": "Seoul Incheon Int'l",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-02T02:25:00",
                              "arrival": "2023-03-02T18:20:00",
                              "durationInMinutes": 595,
                              "flightNumber": "90",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          }
                      ]
                  }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": true,
              "farePolicy": {
                  "isChangeAllowed": false,
                  "isPartiallyChangeable": false,
                  "isCancellationAllowed": false,
                  "isPartiallyRefundable": false
              },
              "tags": [
                  "cheapest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 1,
              "pricingOptions": [
                  {
                      "agentIds": [
                          "ctuk"
                      ],
                      "amount": 539.2,
                      "bookingProposition": "PBOOK"
                  }
              ],
              "deeplink": "https://www.skyscanner.net/transport/flights/hel/icn/230301/config/12126-2303010915--32013,-31734-2-12409-2303021820?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27538638&originentityid=27542027&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
          },
          {
              "id": "12126-2303011450--31901,-31734-2-12409-2303021820",
              "price": {
                  "raw": 550.48,
                  "formatted": "551 €"
              },
              "legs": [
                  {
                      "id": "12126-2303011450--31901,-31734-2-12409-2303021820",
                      "origin": {
                          "id": "HEL",
                          "name": "Helsinki Vantaa",
                          "displayCode": "HEL",
                          "city": "Helsinki",
                          "isHighlighted": false
                      },
                      "destination": {
                          "id": "ICN",
                          "name": "Seoul Incheon Int'l",
                          "displayCode": "ICN",
                          "city": "Seoul",
                          "isHighlighted": false
                      },
                      "durationInMinutes": 1230,
                      "stopCount": 2,
                      "isSmallestStops": false,
                      "departure": "2023-03-01T14:50:00",
                      "arrival": "2023-03-02T18:20:00",
                      "timeDeltaInDays": 1,
                      "carriers": {
                          "marketing": [
                              {
                                  "id": -31901,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/SK.png",
                                  "name": "Scandinavian Airlines"
                              },
                              {
                                  "id": -31734,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/TK.png",
                                  "name": "Turkish Airlines"
                              }
                          ],
                          "operationType": "fully_operated"
                      },
                      "segments": [
                          {
                              "id": "12126-9547-2303011450-2303011455--31901",
                              "origin": {
                                  "flightPlaceId": "HEL",
                                  "parent": {
                                      "flightPlaceId": "HELS",
                                      "name": "Helsinki",
                                      "type": "City"
                                  },
                                  "name": "Helsinki Vantaa",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ARN",
                                  "parent": {
                                      "flightPlaceId": "STOC",
                                      "name": "Stockholm",
                                      "type": "City"
                                  },
                                  "name": "Stockholm Arlanda",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T14:50:00",
                              "arrival": "2023-03-01T14:55:00",
                              "durationInMinutes": 65,
                              "flightNumber": "709",
                              "marketingCarrier": {
                                  "id": -31901,
                                  "name": "Scandinavian Airlines",
                                  "alternateId": "SK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31901,
                                  "name": "Scandinavian Airlines",
                                  "alternateId": "SK",
                                  "allianceId": 0
                              }
                          },
                          {
                              "id": "9547-12585-2303011800-2303012340--31734",
                              "origin": {
                                  "flightPlaceId": "ARN",
                                  "parent": {
                                      "flightPlaceId": "STOC",
                                      "name": "Stockholm",
                                      "type": "City"
                                  },
                                  "name": "Stockholm Arlanda",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T18:00:00",
                              "arrival": "2023-03-01T23:40:00",
                              "durationInMinutes": 220,
                              "flightNumber": "1796",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          },
                          {
                              "id": "12585-12409-2303020225-2303021820--31734",
                              "origin": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ICN",
                                  "parent": {
                                      "flightPlaceId": "SELA",
                                      "name": "Seoul",
                                      "type": "City"
                                  },
                                  "name": "Seoul Incheon Int'l",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-02T02:25:00",
                              "arrival": "2023-03-02T18:20:00",
                              "durationInMinutes": 595,
                              "flightNumber": "90",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          }
                      ]
                  }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": true,
              "farePolicy": {
                  "isChangeAllowed": false,
                  "isPartiallyChangeable": false,
                  "isCancellationAllowed": false,
                  "isPartiallyRefundable": false
              },
              "tags": [
                  "second_cheapest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.9682727,
              "pricingOptions": [
                  {
                      "agentIds": [
                          "ctuk"
                      ],
                      "amount": 550.48,
                      "bookingProposition": "PBOOK"
                  }
              ],
              "deeplink": "https://www.skyscanner.net/transport/flights/hel/icn/230301/config/12126-2303011450--31901,-31734-2-12409-2303021820?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27538638&originentityid=27542027&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
          },
          {
              "id": "12126-2303011225--31734-1-12409-2303021820",
              "price": {
                  "raw": 568.53,
                  "formatted": "569 €"
              },
              "legs": [
                  {
                      "id": "12126-2303011225--31734-1-12409-2303021820",
                      "origin": {
                          "id": "HEL",
                          "name": "Helsinki Vantaa",
                          "displayCode": "HEL",
                          "city": "Helsinki",
                          "isHighlighted": false
                      },
                      "destination": {
                          "id": "ICN",
                          "name": "Seoul Incheon Int'l",
                          "displayCode": "ICN",
                          "city": "Seoul",
                          "isHighlighted": false
                      },
                      "durationInMinutes": 1375,
                      "stopCount": 1,
                      "isSmallestStops": false,
                      "departure": "2023-03-01T12:25:00",
                      "arrival": "2023-03-02T18:20:00",
                      "timeDeltaInDays": 1,
                      "carriers": {
                          "marketing": [
                              {
                                  "id": -31734,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/TK.png",
                                  "name": "Turkish Airlines"
                              }
                          ],
                          "operationType": "fully_operated"
                      },
                      "segments": [
                          {
                              "id": "12126-12585-2303011225-2303011715--31734",
                              "origin": {
                                  "flightPlaceId": "HEL",
                                  "parent": {
                                      "flightPlaceId": "HELS",
                                      "name": "Helsinki",
                                      "type": "City"
                                  },
                                  "name": "Helsinki Vantaa",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T12:25:00",
                              "arrival": "2023-03-01T17:15:00",
                              "durationInMinutes": 230,
                              "flightNumber": "1762",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          },
                          {
                              "id": "12585-12409-2303020225-2303021820--31734",
                              "origin": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ICN",
                                  "parent": {
                                      "flightPlaceId": "SELA",
                                      "name": "Seoul",
                                      "type": "City"
                                  },
                                  "name": "Seoul Incheon Int'l",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-02T02:25:00",
                              "arrival": "2023-03-02T18:20:00",
                              "durationInMinutes": 595,
                              "flightNumber": "90",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          }
                      ]
                  }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                  "isChangeAllowed": false,
                  "isPartiallyChangeable": false,
                  "isCancellationAllowed": false,
                  "isPartiallyRefundable": false
              },
              "tags": [
                  "third_cheapest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.9175034,
              "pricingOptions": [
                  {
                      "agentIds": [
                          "ctuk"
                      ],
                      "amount": 568.53,
                      "bookingProposition": "PBOOK"
                  }
              ],
              "deeplink": "https://www.skyscanner.net/transport/flights/hel/icn/230301/config/12126-2303011225--31734-1-12409-2303021820?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27538638&originentityid=27542027&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
          }
      ]
  },
  {
      "id": "Fastest",
      "name": "Fastest",
      "items": [
          {
              "id": "12126-2303011730--32317-0-12409-2303021215",
              "price": {
                  "raw": 625.77,
                  "formatted": "626 €"
              },
              "legs": [
                  {
                      "id": "12126-2303011730--32317-0-12409-2303021215",
                      "origin": {
                          "id": "HEL",
                          "name": "Helsinki Vantaa",
                          "displayCode": "HEL",
                          "city": "Helsinki",
                          "isHighlighted": false
                      },
                      "destination": {
                          "id": "ICN",
                          "name": "Seoul Incheon Int'l",
                          "displayCode": "ICN",
                          "city": "Seoul",
                          "isHighlighted": false
                      },
                      "durationInMinutes": 705,
                      "stopCount": 0,
                      "isSmallestStops": false,
                      "departure": "2023-03-01T17:30:00",
                      "arrival": "2023-03-02T12:15:00",
                      "timeDeltaInDays": 1,
                      "carriers": {
                          "marketing": [
                              {
                                  "id": -32317,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AY.png",
                                  "name": "Finnair"
                              }
                          ],
                          "operationType": "fully_operated"
                      },
                      "segments": [
                          {
                              "id": "12126-12409-2303011730-2303021215--32317",
                              "origin": {
                                  "flightPlaceId": "HEL",
                                  "parent": {
                                      "flightPlaceId": "HELS",
                                      "name": "Helsinki",
                                      "type": "City"
                                  },
                                  "name": "Helsinki Vantaa",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ICN",
                                  "parent": {
                                      "flightPlaceId": "SELA",
                                      "name": "Seoul",
                                      "type": "City"
                                  },
                                  "name": "Seoul Incheon Int'l",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T17:30:00",
                              "arrival": "2023-03-02T12:15:00",
                              "durationInMinutes": 705,
                              "flightNumber": "41",
                              "marketingCarrier": {
                                  "id": -32317,
                                  "name": "Finnair",
                                  "alternateId": "AY",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -32317,
                                  "name": "Finnair",
                                  "alternateId": "AY",
                                  "allianceId": 0
                              }
                          }
                      ]
                  }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                  "isChangeAllowed": false,
                  "isPartiallyChangeable": false,
                  "isCancellationAllowed": false,
                  "isPartiallyRefundable": false
              },
              "eco": {
                  "ecoContenderDelta": 48.007137
              },
              "tags": [
                  "shortest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 1,
              "pricingOptions": [
                  {
                      "agentIds": [
                          "finn"
                      ],
                      "amount": 625.77,
                      "bookingProposition": "PBOOK"
                  }
              ],
              "deeplink": "https://www.skyscanner.net/transport/flights/hel/icn/230301/config/12126-2303011730--32317-0-12409-2303021215?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27538638&originentityid=27542027&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
          },
          {
              "id": "12126-2303011840--31734-1-12409-2303021820",
              "price": {
                  "raw": 671.18,
                  "formatted": "672 €"
              },
              "legs": [
                  {
                      "id": "12126-2303011840--31734-1-12409-2303021820",
                      "origin": {
                          "id": "HEL",
                          "name": "Helsinki Vantaa",
                          "displayCode": "HEL",
                          "city": "Helsinki",
                          "isHighlighted": false
                      },
                      "destination": {
                          "id": "ICN",
                          "name": "Seoul Incheon Int'l",
                          "displayCode": "ICN",
                          "city": "Seoul",
                          "isHighlighted": false
                      },
                      "durationInMinutes": 1000,
                      "stopCount": 1,
                      "isSmallestStops": false,
                      "departure": "2023-03-01T18:40:00",
                      "arrival": "2023-03-02T18:20:00",
                      "timeDeltaInDays": 1,
                      "carriers": {
                          "marketing": [
                              {
                                  "id": -31734,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/TK.png",
                                  "name": "Turkish Airlines"
                              }
                          ],
                          "operationType": "fully_operated"
                      },
                      "segments": [
                          {
                              "id": "12126-12585-2303011840-2303012335--31734",
                              "origin": {
                                  "flightPlaceId": "HEL",
                                  "parent": {
                                      "flightPlaceId": "HELS",
                                      "name": "Helsinki",
                                      "type": "City"
                                  },
                                  "name": "Helsinki Vantaa",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T18:40:00",
                              "arrival": "2023-03-01T23:35:00",
                              "durationInMinutes": 235,
                              "flightNumber": "1764",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          },
                          {
                              "id": "12585-12409-2303020225-2303021820--31734",
                              "origin": {
                                  "flightPlaceId": "IST",
                                  "parent": {
                                      "flightPlaceId": "ISTA",
                                      "name": "Istanbul",
                                      "type": "City"
                                  },
                                  "name": "Istanbul",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ICN",
                                  "parent": {
                                      "flightPlaceId": "SELA",
                                      "name": "Seoul",
                                      "type": "City"
                                  },
                                  "name": "Seoul Incheon Int'l",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-02T02:25:00",
                              "arrival": "2023-03-02T18:20:00",
                              "durationInMinutes": 595,
                              "flightNumber": "90",
                              "marketingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31734,
                                  "name": "Turkish Airlines",
                                  "alternateId": "TK",
                                  "allianceId": 0
                              }
                          }
                      ]
                  }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                  "isChangeAllowed": false,
                  "isPartiallyChangeable": false,
                  "isCancellationAllowed": false,
                  "isPartiallyRefundable": false
              },
              "tags": [
                  "second_shortest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.6569767,
              "pricingOptions": [
                  {
                      "agentIds": [
                          "ctuk"
                      ],
                      "amount": 671.18,
                      "bookingProposition": "PBOOK"
                  }
              ],
              "deeplink": "https://www.skyscanner.net/transport/flights/hel/icn/230301/config/12126-2303011840--31734-1-12409-2303021820?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27538638&originentityid=27542027&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
          },
          {
              "id": "12126-2303011600--31939-1-12409-2303021655",
              "price": {
                  "raw": 834.75,
                  "formatted": "835 €"
              },
              "legs": [
                  {
                      "id": "12126-2303011600--31939-1-12409-2303021655",
                      "origin": {
                          "id": "HEL",
                          "name": "Helsinki Vantaa",
                          "displayCode": "HEL",
                          "city": "Helsinki",
                          "isHighlighted": false
                      },
                      "destination": {
                          "id": "ICN",
                          "name": "Seoul Incheon Int'l",
                          "displayCode": "ICN",
                          "city": "Seoul",
                          "isHighlighted": false
                      },
                      "durationInMinutes": 1075,
                      "stopCount": 1,
                      "isSmallestStops": false,
                      "departure": "2023-03-01T16:00:00",
                      "arrival": "2023-03-02T16:55:00",
                      "timeDeltaInDays": 1,
                      "carriers": {
                          "marketing": [
                              {
                                  "id": -31939,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/QR.png",
                                  "name": "Qatar Airways"
                              }
                          ],
                          "operating": [
                              {
                                  "id": -32317,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AY.png",
                                  "name": "Finnair"
                              }
                          ],
                          "operationType": "partially_operated"
                      },
                      "segments": [
                          {
                              "id": "12126-11089-2303011600-2303012345--31939",
                              "origin": {
                                  "flightPlaceId": "HEL",
                                  "parent": {
                                      "flightPlaceId": "HELS",
                                      "name": "Helsinki",
                                      "type": "City"
                                  },
                                  "name": "Helsinki Vantaa",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "DOH",
                                  "parent": {
                                      "flightPlaceId": "DOHA",
                                      "name": "Doha",
                                      "type": "City"
                                  },
                                  "name": "Hamad International",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T16:00:00",
                              "arrival": "2023-03-01T23:45:00",
                              "durationInMinutes": 405,
                              "flightNumber": "6121",
                              "marketingCarrier": {
                                  "id": -31939,
                                  "name": "Qatar Airways",
                                  "alternateId": "QR",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -32317,
                                  "name": "Finnair",
                                  "alternateId": "AY",
                                  "allianceId": 0
                              }
                          },
                          {
                              "id": "11089-12409-2303020215-2303021655--31939",
                              "origin": {
                                  "flightPlaceId": "DOH",
                                  "parent": {
                                      "flightPlaceId": "DOHA",
                                      "name": "Doha",
                                      "type": "City"
                                  },
                                  "name": "Hamad International",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ICN",
                                  "parent": {
                                      "flightPlaceId": "SELA",
                                      "name": "Seoul",
                                      "type": "City"
                                  },
                                  "name": "Seoul Incheon Int'l",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-02T02:15:00",
                              "arrival": "2023-03-02T16:55:00",
                              "durationInMinutes": 520,
                              "flightNumber": "858",
                              "marketingCarrier": {
                                  "id": -31939,
                                  "name": "Qatar Airways",
                                  "alternateId": "QR",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -31939,
                                  "name": "Qatar Airways",
                                  "alternateId": "QR",
                                  "allianceId": 0
                              }
                          }
                      ]
                  }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                  "isChangeAllowed": false,
                  "isPartiallyChangeable": false,
                  "isCancellationAllowed": false,
                  "isPartiallyRefundable": false
              },
              "tags": [
                  "third_shortest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.5697675,
              "pricingOptions": [
                  {
                      "agentIds": [
                          "ctuk"
                      ],
                      "amount": 834.75,
                      "bookingProposition": "PBOOK"
                  }
              ],
              "deeplink": "https://www.skyscanner.net/transport/flights/hel/icn/230301/config/12126-2303011600--31939-1-12409-2303021655?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27538638&originentityid=27542027&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
          }
      ]
  },
  {
      "id": "Direct",
      "name": "Direct",
      "items": [
          {
              "id": "12126-2303011730--32317-0-12409-2303021215",
              "price": {
                  "raw": 625.77,
                  "formatted": "626 €"
              },
              "legs": [
                  {
                      "id": "12126-2303011730--32317-0-12409-2303021215",
                      "origin": {
                          "id": "HEL",
                          "name": "Helsinki Vantaa",
                          "displayCode": "HEL",
                          "city": "Helsinki",
                          "isHighlighted": false
                      },
                      "destination": {
                          "id": "ICN",
                          "name": "Seoul Incheon Int'l",
                          "displayCode": "ICN",
                          "city": "Seoul",
                          "isHighlighted": false
                      },
                      "durationInMinutes": 705,
                      "stopCount": 0,
                      "isSmallestStops": false,
                      "departure": "2023-03-01T17:30:00",
                      "arrival": "2023-03-02T12:15:00",
                      "timeDeltaInDays": 1,
                      "carriers": {
                          "marketing": [
                              {
                                  "id": -32317,
                                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AY.png",
                                  "name": "Finnair"
                              }
                          ],
                          "operationType": "fully_operated"
                      },
                      "segments": [
                          {
                              "id": "12126-12409-2303011730-2303021215--32317",
                              "origin": {
                                  "flightPlaceId": "HEL",
                                  "parent": {
                                      "flightPlaceId": "HELS",
                                      "name": "Helsinki",
                                      "type": "City"
                                  },
                                  "name": "Helsinki Vantaa",
                                  "type": "Airport"
                              },
                              "destination": {
                                  "flightPlaceId": "ICN",
                                  "parent": {
                                      "flightPlaceId": "SELA",
                                      "name": "Seoul",
                                      "type": "City"
                                  },
                                  "name": "Seoul Incheon Int'l",
                                  "type": "Airport"
                              },
                              "departure": "2023-03-01T17:30:00",
                              "arrival": "2023-03-02T12:15:00",
                              "durationInMinutes": 705,
                              "flightNumber": "41",
                              "marketingCarrier": {
                                  "id": -32317,
                                  "name": "Finnair",
                                  "alternateId": "AY",
                                  "allianceId": 0
                              },
                              "operatingCarrier": {
                                  "id": -32317,
                                  "name": "Finnair",
                                  "alternateId": "AY",
                                  "allianceId": 0
                              }
                          }
                      ]
                  }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                  "isChangeAllowed": false,
                  "isPartiallyChangeable": false,
                  "isCancellationAllowed": false,
                  "isPartiallyRefundable": false
              },
              "eco": {
                  "ecoContenderDelta": 48.007137
              },
              "tags": [
                  "shortest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.679163,
              "pricingOptions": [
                  {
                      "agentIds": [
                          "finn"
                      ],
                      "amount": 625.77,
                      "bookingProposition": "PBOOK"
                  }
              ],
              "deeplink": "https://www.skyscanner.net/transport/flights/hel/icn/230301/config/12126-2303011730--32317-0-12409-2303021215?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27538638&originentityid=27542027&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
          }
      ]
  }
]

export async function getDepartures(origin, destination, departureDate, passengers) {
  // const res = await instance.get('/search-best-flights', {
  //     params: {
  //       access_key: access_key,
  //       adults: passengers,
  //       origin: origin,
  //       destination: destination,
  //       departureDate: departureDate
  //     }
  //   })
  // console.log('data', res.data.data.buckets)
  // return res.data.data.buckets
  console.log(fake_result)
  return fake_result
}
