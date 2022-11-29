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
