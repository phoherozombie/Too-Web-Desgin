const { response } = require("express");

const apiURL ='https://6719c67a7fc4c5ff8f4e7175.mockapi.io/api/hotels';

function getHotels(callback) {
  fetch(apiURL)//send recommend GET to API to get data from hotel.
  .then(response => response.json())//covert json object. 
  .then(data => callback(null, data))// deal with result and error. 
  .catch(error => callback(error, null))//when deal with result is fail.

}
function displayHotels(error, data){
  if (error) {
    console.error('Lỗi khi lấy dữ liệu khách sạn: ', error);
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
      
    })
  }
}
function showAddForm() {
  document.getElementById('addHotelForm').style.display = 'block';
  document.getElementById('editHotelForm').style.display= 'none';

}
function submitAddHotel() {
  const newHotel = {
    name: document.getElementById('addHotelName').value,
    price: document.getElementById('addHotelPrice').value
  }
};
fetch(apiURL, {
  method: 'POST', 
  headers: {
    'Content-Type':'application/json'
  },
  body: JSON.stringify(newHotel)
})
  .then(response => response.json())
  .then (()=> {
    getHotels(displayHotels);
    document.getElementById('addHotelForm').style.display = 'none';
    document.getElementById('addHotelName').value = '';
    document.getElementById('addHotelPrice').value = '';

  })
  .catch(error => console.error('Loi khi them khach san: '. error));
  //Display form for editing 
  function showEditForm(hotelId, hotelName, hotelPrice) {
    document.getElementById('editHotelForm').style.display = 'block';
    document.getElementById('addHotelForm').style.display = 'none';
    document.getElementById('editHotelId').value = hotelId;
    document.getElementById('editHotelName').value = hotelName;
    document.getElementById('editHotelPrice').value = hotelPrice;
  }
  //function for updating hotel information 

  function submitEditHotel() {
    const hotelId = document.getElementById('editHotelId').value;
    const updatedHotel = {
      name: document.getElementById('editHotelName').value,
      price: document.getElementById('editHotelPrice').value

    };
    fetch(`${apiURL}/${hotelId}`, {
      method: 'PUT', 
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(updatedHotel)
    })
    .then(response => response.json())
    .then(() => {
        getHotels(displayHotels);
        document.getElementById('editHotelForm').style.display = 'none';
    })
    .catch(error => console.error('Lỗi khi cập nhật khách sạn:', error));
  }
  function deleteHotel(hotelId) {
    fetch(`${apiURL}/${hotelId}`, {
      method: 'DELETE'
    })
      .then(() => getHotels(displayHotels))
      .catch(error => console.error('Loi khi xoa khach san:', error));
  }



getHotels(displayHotels);
