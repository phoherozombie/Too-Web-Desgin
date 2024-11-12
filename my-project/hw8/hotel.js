const apiURL = 'https://6719c67a7fc4c5ff8f4e7175.mockapi.io/api/hotels';

// Function to fetch hotels (Read)
function getHotels(callback) {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

function displayHotels(error, data) {
    if (error) {
        console.error('Error fetching hotels:', error);
    } else {
        const hotelCards = document.getElementById('hotelCards');
        hotelCards.innerHTML = '';
        data.forEach(hotel => {
            const card = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${hotel.image || 'default.jpg'}" class="card-img-top" alt="Hotel Image">
                        <div class="card-body">
                            <h5 class="card-title">${hotel.name}</h5>
                            <p class="card-text">Price: $${hotel.price}</p>
                            <button class="btn btn-info" onclick="viewHotelDetails(${hotel.id})">View Details</button>
                            <button class="btn btn-warning" onclick="showEditForm(${hotel.id}, '${hotel.name}', ${hotel.price}, '${hotel.image || ''}')">Edit</button>
                            <button class="btn btn-danger" onclick="deleteHotel(${hotel.id})">Delete</button>
                        </div>
                    </div>
                </div>`;
            hotelCards.innerHTML += card;
        });
    }
}

// Show add hotel form
function showAddForm() {
    document.getElementById('addHotelForm').style.display = 'block';
    document.getElementById('editHotelForm').style.display = 'none';
}

// Add hotel (Create)
function submitAddHotel() {
    const newHotel = {
        name: document.getElementById('addHotelName').value,
        price: document.getElementById('addHotelPrice').value,
        image: document.getElementById('addHotelImage').files[0] ? URL.createObjectURL(document.getElementById('addHotelImage').files[0]) : 'default.jpg'
    };

    fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newHotel)
    })
        .then(response => response.json())
        .then(() => {
            getHotels(displayHotels);
            document.getElementById('addHotelForm').style.display = 'none';
        })
        .catch(error => console.error('Error adding hotel:', error));
}

// Show edit form with existing data
function showEditForm(hotelId, hotelName, hotelPrice, hotelImage) {
    document.getElementById('editHotelForm').style.display = 'block';
    document.getElementById('addHotelForm').style.display = 'none';
    document.getElementById('editHotelId').value = hotelId;
    document.getElementById('editHotelName').value = hotelName;
    document.getElementById('editHotelPrice').value = hotelPrice;
    document.getElementById('editHotelImage').files[0] = hotelImage;
}

// Edit hotel (Update)
function submitEditHotel() {
    const hotelId = document.getElementById('editHotelId').value;
    const updatedHotel = {
        name: document.getElementById('editHotelName').value,
        price: document.getElementById('editHotelPrice').value,
        image: document.getElementById('editHotelImage').files[0] ? URL.createObjectURL(document.getElementById('editHotelImage').files[0]) : 'default.jpg'
    };

    fetch(`${apiURL}/${hotelId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedHotel)
    })
        .then(response => response.json())
        .then(() => {
            getHotels(displayHotels);
            document.getElementById('editHotelForm').style.display = 'none';
        })
        .catch(error => console.error('Error updating hotel:', error));
}

// View hotel details page
function viewHotelDetails(hotelId) {
    window.location.href = `hotel_detail.html?id=${hotelId}`;
}

// Delete hotel (Delete)
function deleteHotel(hotelId) {
    fetch(`${apiURL}/${hotelId}`, { method: 'DELETE' })
        .then(() => getHotels(displayHotels))
        .catch(error => console.error('Error deleting hotel:', error));
}

// Search hotels by name
function searchHotels() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    getHotels((error, data) => {
        if (error) return console.error('Error searching hotels:', error);
        const filteredData = data.filter(hotel => hotel.name.toLowerCase().includes(query));
        displayHotels(null, filteredData);
    });
}

// Initial load
getHotels(displayHotels);
