# HallBooking

Heroku URL: https://hallbooking10.herokuapp.com

Postman Docs : 
###Creating a Room 
API : http://localhost:4000/createaRoom
```
request.body : 
{
        "roomID": "LP",
        "roomName": "Little Paradise",
        "seatsAvailable": "50",
        "amenities": [
            "A/C",
            "Drinking-water",
            "Free-Parking",
            "WIFI"
        ],
        "priceperhour": "750",
        "bookingDetails": [
            {
                "customerName": "Ashish Mehra",
                "reservationDate": "2022-12-02T00:00:00.000Z",
                "startTime": "2022-12-02T09:30",
                "endTime": "2022-12-02T14:00",
                "roomID": "LP",
                "status": "Booking confirmed"
            }
        ]
 }
```
` returns : "Room has been created successfully"`

###Book a Room
API : http://localhost:4000/bookaRoom
```
request.body:{
 "customerName": "Leela Banu",
 "reservationDate": "2022-12-04T00:00:00.000Z",
 "startTime": "2022-12-04T09:30",
 "endTime": "2022-12-04T16:00",
 "roomID": "PA"
}
```
`returns : "{
    "message": "Booking confirmed"
}"`

###Get All Rooms with Booking Info
API : http://localhost:4000/getAllRooms
```
response: [
    {
        "roomID": "LP",
        "roomName": "Little Paradise",
        "seatsAvailable": "50",
        "amenities": [
            "A/C",
            "Drinking-water",
            "Free-Parking",
            "WIFI"
        ],
        "priceperhour": "750",
        "bookingDetails": [
            {
                "customerName": "Ashish Mehra",
                "reservationDate": "2022-12-02T00:00:00.000Z",
                "startTime": "2022-12-02T09:30",
                "endTime": "2022-12-02T14:00",
                "roomID": "LP",
                "status": "Booking confirmed"
            }
        ]
    },
    {
        "roomID": "PA",
        "roomName": "Paradise",
        "seatsAvailable": "100",
        "amenities": [
            "A/C",
            "Drinking-water",
            "Free-Parking",
            "WIFI",
            "Vending Machine",
            "Projector",
            "Dolby 5.1"
        ],
        "priceperhour": "1500",
        "bookingDetails": [
            {
                "customerName": "Swathi Mishra",
                "reservationDate": "2022-12-03T00:00:00.000Z",
                "startTime": "2022-12-03T10:30",
                "endTime": "2022-12-03T16:00",
                "roomID": "PA",
                "status": "Booking confirmed"
            }
        ]
    },
    {
        "roomID": "PS",
        "roomName": "Paradise Suite",
        "seatsAvailable": "150",
        "amenities": [
            "A/C",
            "Drinking-water",
            "Free-Parking",
            "WIFI",
            "Vending Machine",
            "Projector",
            "Dolby 5.1",
            null,
            "Dolby 7.1",
            "Free-Catering",
            "Wide-Stage"
        ],
        "priceperhour": "2500",
        "bookingDetails": [
            {
                "customerName": "Deepa Das",
                "reservationDate": "2022-12-04T00:00:00.000Z",
                "startTime": "2022-12-04T10:30",
                "endTime": "2022-12-04T13:00",
                "roomID": "PS",
                "status": "Booking confirmed"
            }
        ]
    }
]
````
####List Customer Booking Info
API : http://localhost:4000/listCustomers
```
response: [
    [
        {
            "customerName": "Ashish Mehra",
            "reservationDate": "2022-12-02T00:00:00.000Z",
            "startTime": "2022-12-02T09:30",
            "endTime": "2022-12-02T14:00",
            "roomID": "LP",
            "status": "Booking confirmed"
        },
        {
            "roomName": "Little Paradise"
        }
    ],
    [
        {
            "customerName": "Swathi Mishra",
            "reservationDate": "2022-12-03T00:00:00.000Z",
            "startTime": "2022-12-03T10:30",
            "endTime": "2022-12-03T16:00",
            "roomID": "PA",
            "status": "Booking confirmed"
        },
        {
            "roomName": "Paradise"
        }
    ],
    [
        {
            "customerName": "Deepa Das",
            "reservationDate": "2022-12-04T00:00:00.000Z",
            "startTime": "2022-12-04T10:30",
            "endTime": "2022-12-04T13:00",
            "roomID": "PS",
            "status": "Booking confirmed"
        },
        {
            "roomName": "Paradise Suite"
        }
    ]
]
```
