
function handleRoomClick(room) {
  const roomType = room.roomType;

  if (roomType === "Work Room") {
    showCompleteBookingForm(room);
  } else if (roomType === "Meeting Room") {
    showInitializeBookingForm(room);
  }
}

// Function to show the initialize booking form (Meeting Room)
function showInitializeBookingForm(room) {
  const formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = `
    <h3>Initialize Booking for ${room.name}</h3>
    <form id="initializeBookingForm">
      <label for="startTime">Start Time:</label><br />
      <input type="datetime-local" id="startTime" name="startTime"><br /><br />
      <label for="minutes">Duration (Minutes):</label><br />
      <input type="number" id="minutes" name="minutes"><br /><br />
      <button type="submit">Book</button>
    </form>
  `;

  // Handle form submission
  document
    .getElementById("initializeBookingForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const startTime = document.getElementById("startTime").value;
      const minutes = document.getElementById("minutes").value;
      initializeBooking(room.roomId, startTime, minutes);
    });
}

// Function to show the complete booking form (Work Room)
function showCompleteBookingForm(room) {
  const formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = `
    <h3>Complete Booking for ${room.name}</h3>
    <form id="completeBookingForm">
      <label for="bookingId">Booking ID:</label><br />
      <input type="number" id="bookingId" name="bookingId"><br /><br />
      <label for="seats">Seat IDs (comma separated):</label><br />
      <input type="text" id="seats" name="seats"><br /><br />
      <button type="submit">Complete Booking</button>
    </form>
  `;

  // Handle form submission
  document
    .getElementById("completeBookingForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const bookingId = document.getElementById("bookingId").value;
      const seats = document
        .getElementById("seats")
        .value.split(",")
        .map((seat) => parseInt(seat.trim()));
      completeBooking(room.roomId, bookingId, seats);
    });
}

// Function to call the smart contract method for initializing booking (Meeting Room)
async function initializeBooking(roomId, startTime, minutes) {
  try {
    const result = await contract.methods
      .initializeBooking(roomId, startTime, minutes)
      .send({
        from: accounts[0].address,
      });
    console.log("Booking initialized: ", result);
  } catch (error) {
    console.error("Error initializing booking: ", error);
  }
}

// Function to call the smart contract method for completing booking (Work Room)
async function completeBooking(roomId, bookingId, seatIds) {
  try {
    const result = await contract.methods
      .completeBooking(bookingId, seatIds)
      .send({
        from: accounts[0].address,
      });
    console.log("Booking completed: ", result);
  } catch (error) {
    console.error("Error completing booking: ", error);
  }
}
