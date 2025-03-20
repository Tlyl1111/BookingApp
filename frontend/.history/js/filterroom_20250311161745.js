async function filterRooms(roomType) {
  try {
    const rooms = await contract.methods.getRooms().call();

    if (roomType === "") {
      renderRooms(rooms); // Hiển thị tất cả các phòng
    } else {
      const filteredRooms = rooms.filter((room) => room.roomType === roomType);
      renderRooms(filteredRooms); 
    }
  } catch (error) {
    console.error("Error fetching rooms:", error);
    document.getElementById("roomList").innerHTML =
      "<p style='color: red;'>Lỗi khi tải danh sách phòng.</p>";
  }
}

filterRooms("");
