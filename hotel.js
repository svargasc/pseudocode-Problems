const occupiedRooms = [];
const maxRooms = 20;
let requiredRooms = 2;
let checkHour = 12;

if (requiredRooms <= maxRooms && checkHour <= 12) { //I validate the time and the number of rooms
  let availableRoom = maxRooms - requiredRooms;
  if (availableRoom >= requiredRooms) {
    for (let i = 0; i < requiredRooms; i += 1) { //I go through the rooms that I request with a for loop, and finally I do a push
      occupiedRooms.push(i);
    }
    console.log(
      `Rooms selected with success, there are  ${occupiedRooms} available rooms left`
    );
    console.log(availableRoom);
  } else {
    console.log(`No rooms available`);
  }
} else if (checkHour > 12) {
  console.log(`Sorry the reservation must be made before 12`);
} else {
  console.log(`No rooms available`);
}