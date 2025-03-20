Dưới đây là tài liệu API đã được chỉnh sửa, bỏ cặp dấu `` như bạn yêu cầu:

---

# Documentation

## 1. **File room.sol**

### **addRoom()**
- **Endpoint**: /addRoom
- **Method**: POST
- **Mô tả**: Thêm một phòng mới vào hệ thống.
- **Tham số yêu cầu**:
  - name: Tên của phòng (string).
  - location: Vị trí của phòng (string).
  - roomLength: Diện tích phòng (uint256).
  - pricePerHour: Giá thuê phòng theo giờ (uint256).
  - roomType: Loại phòng (string, ví dụ: "Work Room", "Meeting Room").
- **Response**: 
  - 200 OK - Phòng được thêm thành công.
  - 400 Bad Request - Thiếu tham số hoặc tham số không hợp lệ.

### **addSeatsToWorkRoom()**
- **Endpoint**: /addSeatsToWorkRoom
- **Method**: POST
- **Mô tả**: Thêm ghế vào phòng làm việc.
- **Tham số yêu cầu**:
  - roomId: ID của phòng (uint256).
  - seats: Mảng các ghế (seatId, row, col) (array of objects).
- **Response**:
  - 200 OK - Ghế đã được thêm thành công.
  - 404 Not Found - Phòng không tồn tại.
  - 400 Bad Request - Tham số ghế không hợp lệ hoặc phòng không phải là "Work Room".

### **addRoomBooking()**
- **Endpoint**: /addRoomBooking
- **Method**: POST
- **Mô tả**: Thêm một booking cho phòng.
- **Tham số yêu cầu**:
  - roomId: ID của phòng (uint256).
  - startTime: Thời gian bắt đầu đặt phòng (timestamp).
  - endTime: Thời gian kết thúc đặt phòng (timestamp).
- **Response**:
  - 200 OK - Booking đã được tạo thành công.
  - 400 Bad Request - Tham số không hợp lệ hoặc phòng không khả dụng.

### **addSeatBooking()**
- **Endpoint**: /addSeatBooking
- **Method**: POST
- **Mô tả**: Thêm một booking cho ghế trong phòng.
- **Tham số yêu cầu**:
  - roomId: ID của phòng (uint256).
  - seatId: ID của ghế (uint256).
  - startTime: Thời gian bắt đầu booking (timestamp).
  - endTime: Thời gian kết thúc booking (timestamp).
- **Response**:
  - 200 OK - Ghế đã được đặt thành công.
  - 404 Not Found - Phòng hoặc ghế không tồn tại.
  - 400 Bad Request - Tham số không hợp lệ hoặc ghế không khả dụng.

### **getRoomBookings()**
- **Endpoint**: /getRoomBookings
- **Method**: GET
- **Mô tả**: Lấy tất cả các booking cho một phòng cụ thể.
- **Tham số yêu cầu**:
  - roomId: ID của phòng (uint256).
- **Response**:
  - 200 OK - Trả về danh sách các booking.
  - 404 Not Found - Phòng không tồn tại.

### **getSeatBookings()**
- **Endpoint**: /getSeatBookings
- **Method**: GET
- **Mô tả**: Lấy tất cả các booking cho một ghế cụ thể trong phòng.
- **Tham số yêu cầu**:
  - roomId: ID của phòng (uint256).
  - seatId: ID của ghế (uint256).
- **Response**:
  - 200 OK - Trả về danh sách các booking.
  - 404 Not Found - Phòng hoặc ghế không tồn tại.

### **getRooms()**
- **Endpoint**: /getRooms
- **Method**: GET
- **Mô tả**: Lấy danh sách tất cả các phòng.
- **Response**:
  - 200 OK - Trả về danh sách các phòng.

### **getSeatsByRoom()**
- **Endpoint**: /getSeatsByRoom
- **Method**: GET
- **Mô tả**: Lấy danh sách ghế trong một phòng.
- **Tham số yêu cầu**:
  - roomId: ID của phòng (uint256).
- **Response**:
  - 200 OK - Trả về danh sách các ghế trong phòng.
  - 404 Not Found - Phòng không tồn tại.

### **checkTypeRoom()**
- **Endpoint**: /checkTypeRoom
- **Method**: GET
- **Mô tả**: Kiểm tra loại phòng có phải là "Meeting Room" không.
- **Tham số yêu cầu**:
  - roomId: ID của phòng (uint256).
- **Response**:
  - 200 OK - Trả về true nếu là phòng họp, false nếu không phải.
  - 404 Not Found - Phòng không tồn tại.

### **getRoomById()**
- **Endpoint**: /getRoomById
- **Method**: GET
- **Mô tả**: Lấy thông tin chi tiết của một phòng.
- **Tham số yêu cầu**:
  - roomId: ID của phòng (uint256).
- **Response**:
  - 200 OK - Trả về thông tin chi tiết của phòng.
  - 404 Not Found - Phòng không tồn tại.

## 2. File booking.sol

### **parseTimeToUint()**
- **Endpoint**: /parseTimeToUint
- **Method**: POST
- **Mô tả**: Chuyển đổi thời gian từ dạng chuỗi (năm, tháng, ngày, giờ, phút) sang timestamp.
- **Tham số yêu cầu**:
  - startTimestamp: Dạng chuỗi (năm, tháng, ngày, giờ, phút).
- **Response**:
  - 200 OK - Trả về timestamp.
  - 400 Bad Request - Tham số không hợp lệ.

### **convertMinutesToTime()**
- **Endpoint**: /convertMinutesToTime
- **Method**: POST
- **Mô tả**: Chuyển đổi số phút thành thời gian dưới dạng giờ và phút.
- **Tham số yêu cầu**:
  - minutes: Số phút cần chuyển đổi.
- **Response**:
  - 200 OK - Trả về thời gian dưới dạng giờ và phút.
  - 400 Bad Request - Tham số không hợp lệ.

### **initializeBooking()**
- **Endpoint**: /initializeBooking
- **Method**: POST
- **Mô tả**: Khởi tạo một booking cho phòng và ghế.
- **Tham số yêu cầu**:
  - roomId: ID của phòng (uint256).
  - startTimestamp: Thời gian bắt đầu đặt phòng (timestamp).
  - minutes: Số phút của booking.
- **Response**:
  - 200 OK - Trả về ID của booking mới.
  - 400 Bad Request - Tham số không hợp lệ hoặc phòng không khả dụng.

### **completeBooking()**
- **Endpoint**: /completeBooking
- **Method**: POST
- **Mô tả**: Hoàn thành một booking cho phòng và ghế.
- **Tham số yêu cầu**:
  - bookingId: ID của booking.
  - seatIds: Mảng các ID ghế cần đặt.
- **Response**:
  - 200 OK - Booking đã được hoàn thành.
  - 404 Not Found - Không tìm thấy booking.

### **checkRoomAvailability()**
- **Endpoint**: /checkRoomAvailability
- **Method**: GET
- **Mô tả**: Kiểm tra xem phòng có khả dụng trong khoảng thời gian cụ thể.
- **Tham số yêu cầu**:
  - roomId: ID của phòng.
  - startTime: Thời gian bắt đầu (timestamp).
  - endTime: Thời gian kết thúc (timestamp).
- **Response**:
  - 200 OK - Trả về true nếu phòng khả dụng, false nếu không khả dụng.

### **checkSeatAvailability()**
- **Endpoint**: /checkSeatAvailability
- **Method**: GET
- **Mô tả**: Kiểm tra xem ghế có khả dụng trong khoảng thời gian cụ thể.
- **Tham số yêu cầu**:
  - roomId: ID của phòng.
  - seatId: ID của ghế.
  - startTime: Thời gian bắt đầu (timestamp).
  - endTime: Thời gian kết thúc (timestamp).
- **Response**:
  - 200 OK - Trả về true nếu ghế khả dụng, false nếu ghế đã được đặt.

### **cancelBooking()**
- **Endpoint**: /cancelBooking
- **Method**: POST
- **Mô tả**: Hủy bỏ một booking đã được tạo.
- **Tham số yêu cầu**:
  - bookingId: ID của booking.
- **Response**:
  - 200 OK - Booking đã bị hủy thành công.
  - 404 Not Found - Không tìm thấy booking.

## 3. File dappworker.sol

### **getAllBookings()**
- **Endpoint**: /getAllBookings
- **Method**: GET
- **Mô tả**: Lấy danh sách tất cả các booking đã được tạo.
- **Response**:
  - 200 OK - Trả về tất cả các booking.
