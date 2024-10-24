const apiURL = 'https://6719c67a7fc4c5ff8f4e7175.mockapi.io/api/hotels'; 

// Lấy danh sách khách sạn (Read)
function getHotels(callback) {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

function displayHotels(error, data) {
    if (error) {
        console.error('Lỗi khi lấy dữ liệu khách sạn:', error);
    } else {
        const hotelTableBody = document.getElementById('hotelTableBody');
        hotelTableBody.innerHTML = '';
        data.forEach(hotel => {
            const row = `
                <tr>
                    <td>${hotel.id}</td>
                    <td>${hotel.name}</td>
                    <td>${hotel.price}</td>
                    <td>
                        <button class="btn btn-warning" onclick="showEditForm(${hotel.id}, '${hotel.name}', ${hotel.price})">Edit</button>
                        <button class="btn btn-danger" onclick="deleteHotel(${hotel.id})">Delete</button>
                    </td>
                </tr>`;
            hotelTableBody.innerHTML += row;
        });
    }
}

// Hiển thị form thêm khách sạn
function showAddForm() {
    document.getElementById('addHotelForm').style.display = 'block';
    document.getElementById('editHotelForm').style.display = 'none';
}

// Thêm khách sạn mới (Create)
function submitAddHotel() {
    const newHotel = {
        name: document.getElementById('addHotelName').value,
        price: document.getElementById('addHotelPrice').value
    };

    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newHotel)
    })
        .then(response => response.json())
        .then(() => {
            getHotels(displayHotels);
            // Ẩn form sau khi thêm
            document.getElementById('addHotelForm').style.display = 'none';
            document.getElementById('addHotelName').value = '';
            document.getElementById('addHotelPrice').value = '';
        })
        .catch(error => console.error('Lỗi khi thêm khách sạn:', error));
}

// Hiển thị form chỉnh sửa khách sạn với dữ liệu đã có
function showEditForm(hotelId, hotelName, hotelPrice) {
    document.getElementById('editHotelForm').style.display = 'block';
    document.getElementById('addHotelForm').style.display = 'none';
    document.getElementById('editHotelId').value = hotelId;
    document.getElementById('editHotelName').value = hotelName;
    document.getElementById('editHotelPrice').value = hotelPrice;
}

// Cập nhật khách sạn (Update)
function submitEditHotel() {
    const hotelId = document.getElementById('editHotelId').value;
    const updatedHotel = {
        name: document.getElementById('editHotelName').value,
        price: document.getElementById('editHotelPrice').value
    };

    fetch(`${apiURL}/${hotelId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedHotel)
    })
        .then(response => response.json())
        .then(() => {
            getHotels(displayHotels);
            // Ẩn form sau khi cập nhật
            document.getElementById('editHotelForm').style.display = 'none';
        })
        .catch(error => console.error('Lỗi khi cập nhật khách sạn:', error));
}

// Xóa khách sạn (Delete)
function deleteHotel(hotelId) {
    fetch(`${apiURL}/${hotelId}`, {
        method: 'DELETE'
    })
        .then(() => getHotels(displayHotels))
        .catch(error => console.error('Lỗi khi xóa khách sạn:', error));
}

// Gọi hàm để lấy và hiển thị danh sách khách sạn khi trang được tải
getHotels(displayHotels);
