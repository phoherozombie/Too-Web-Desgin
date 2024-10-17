// class MyClass {
//     #x = 0; 

//     #incX() {
//         this.#x++;
//         console.log(this.#x);

//     }
//     set #setX(x) {
//         this.#x=x;
//     }
//     get #getX() {
//         return this.#x;
//     }
//     const m = new MyClass();

//     m.incX();

// }

class MyClass {
    #x = 0;  // private

    // Method public để tăng giá trị #x
    incX() {
        this.#x++;
        console.log(this.#x);
    }

    // Setter và getter public
    set setX(x) {
        this.#x = x;  // Set #x
    }

    get getX() {
        return this.#x;  // Return #x
    }
}

// Lỗi 1: Không thể khởi tạo đối tượng bên trong lớp
// const m = new MyClass(); 
// Khởi tạo đối tượng bên ngoài lớp mới đúng
const m = new MyClass();

m.incX();  // Lỗi 2: Phương thức #incX là riêng tư, không thể gọi từ bên ngoài lớp
// Đã chuyển #incX thành phương thức công khai để sửa lỗi này
