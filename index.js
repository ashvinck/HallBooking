import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

let rooms = [
    {
        "roomID": "LP",
        "roomName": "Little Paradise",
        "seatsAvailable": "50",
        "amenities": ["A/C", "Drinking-water", "Free-Parking", "WIFI"],
        "priceperhour": "750",
        "bookingDetails": [
            {
                "customerName": "Ashish Mehra",
                "reservationDate": new Date("2022-12-02"),
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
        "amenities": ["A/C", "Drinking-water", "Free-Parking", "WIFI", "Vending Machine", "Projector", "Dolby 5.1"],
        "priceperhour": "1500",
        "bookingDetails": [
            {
                "customerName": "Swathi Mishra",
                "reservationDate": new Date("2022-12-03"),
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
        "amenities": ["A/C", "Drinking-water", "Free-Parking", "WIFI", "Vending Machine", "Projector", "Dolby 5.1", , "Dolby 7.1", "Free-Catering", "Wide-Stage"],
        "priceperhour": "2500",
        "bookingDetails": [
            {
                "customerName": "Deepa Das",
                "reservationDate": new Date("2022-12-04"),
                "startTime": "2022-12-04T10:30",
                "endTime": "2022-12-04T13:00",
                "roomID": "PS",
                "status": "Booking confirmed"
            }
        ]
    }
]

app.get("/", function (request, response) {
    response.send("🙋‍♂️, Welcome to Hall Booking App");
});

// Create a Room
app.post("/createaRoom", function (request, response) {
    const { roomID, roomName, seatsAvailable, amenities, bookingDetails } = request.body;
    rooms.push({
        roomID, roomName, seatsAvailable, amenities, bookingDetails
    })
    response.send("Room has been created successfully")
});

// Book a Room
app.post("/bookaRoom", function (request, response) {
    let { customerName, reservationDate, startTime, endTime, roomID } = request.body;
    //TS- Timestamp in unix
    //converting input date-time to timestamp
    let startTS = Date.parse(startTime);
    let endTS = Date.parse(endTime);
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].roomID === roomID) {
            let tobeBooked = {
                customerName, reservationDate, startTime, endTime, roomID
            }
            let isBooked = null;
            isBooked = rooms[i].bookingDetails.every((booking) => {
                //converting already booked-date-time into timestamp
                //TS-Timestamp
                let startBookedTS = Date.parse(booking.startTime);
                let endBookedTS = Date.parse(booking.endTime);
                //booking should not be allowed for same start-time and between the hall booked timing hours!!
                return (booking.startTime !== startTime) && ((startTS > endBookedTS && endTS > endBookedTS)
                    || (startTS < startBookedTS && endTS < startBookedTS))
            })
            if (isBooked) {
                rooms[i].bookingDetails.push(tobeBooked)
                return response.status(200).send({ message: "Booking confirmed", rooms })
            }
            else {
                //throws an error if the booked date and timing hours coincide
                return response.status(400).send({ message: "Sorry! The room has been booked for the selected timeframe.Please select different Time slot" })
            }
        }
    }
});

// get All Rooms with Booking Data
app.get('/getAllRooms', function (request, response) {
    response.send(rooms)
})

// List Customer Data
app.get('/listCustomers', function (request, response) {
    const customers = rooms.map((room) => {
        return [...room.bookingDetails, { roomName: room.roomName }]
    })
    response.send(customers)
})

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
