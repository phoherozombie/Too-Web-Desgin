CREATE TABLE Movie (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(255) NOT NULL,
    genre NVARCHAR(100) NOT NULL,
    director NVARCHAR(255) NOT NULL,
    cast NVARCHAR(MAX) NOT NULL,
    duration INT NOT NULL,
    releaseDate DATETIME NOT NULL,
    language NVARCHAR(50) NOT NULL,
    rating NVARCHAR(10) NOT NULL,
    synopsis NVARCHAR(MAX) NOT NULL
);

CREATE TABLE Theater (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    location NVARCHAR(255) NOT NULL,
    numberOfScreens INT NOT NULL
);

CREATE TABLE Screen (
    id INT IDENTITY(1,1) PRIMARY KEY,
    theaterId INT NOT NULL,
    screenNumber INT NOT NULL,
    capacity INT NOT NULL,
    type NVARCHAR(50) NOT NULL,
    FOREIGN KEY (theaterId) REFERENCES Theater(id)
);

CREATE TABLE Showtime (
    id INT IDENTITY(1,1) PRIMARY KEY,
    movieId INT NOT NULL,
    screenId INT NOT NULL,
    startTime DATETIME NOT NULL,
    endTime DATETIME NOT NULL,
    FOREIGN KEY (movieId) REFERENCES Movie(id),
    FOREIGN KEY (screenId) REFERENCES Screen(id)
);

CREATE TABLE Customer (
    id INT IDENTITY(1,1) PRIMARY KEY,
    firstName NVARCHAR(255) NOT NULL,
    lastName NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL UNIQUE,
    phone NVARCHAR(50) NOT NULL,
    address NVARCHAR(255) NOT NULL
);

CREATE TABLE Seat (
    id INT IDENTITY(1,1) PRIMARY KEY,
    screenId INT NOT NULL,
    seatNumber NVARCHAR(10) NOT NULL,
    rowNumber INT NOT NULL,
    class NVARCHAR(50) NOT NULL,
    FOREIGN KEY (screenId) REFERENCES Screen(id)
);

CREATE TABLE Ticket (
    id INT IDENTITY(1,1) PRIMARY KEY,
    customerId INT NOT NULL,
    showtimeId INT NOT NULL,
    seatId INT NOT NULL,
    price FLOAT NOT NULL,
    purchaseDateTime DATETIME NOT NULL,
    FOREIGN KEY (customerId) REFERENCES Customer(id),
    FOREIGN KEY (showtimeId) REFERENCES Showtime(id),
    FOREIGN KEY (seatId) REFERENCES Seat(id)
);

CREATE TABLE Transaction (
    id INT IDENTITY(1,1) PRIMARY KEY,
    customerId INT NOT NULL,
    ticketId INT NOT NULL,
    paymentMethod NVARCHAR(50) NOT NULL,
    transactionDateTime DATETIME NOT NULL,
    amount FLOAT NOT NULL,
    FOREIGN KEY (customerId) REFERENCES Customer(id),
    FOREIGN KEY (ticketId) REFERENCES Ticket(id)
);
