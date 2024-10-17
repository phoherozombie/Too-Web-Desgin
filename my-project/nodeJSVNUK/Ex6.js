//Function caculate Permimeter 
let area=document.getElementById("area");
let per=document.getElementById("permimeter")
let width=document.getElementById("width").value;
let length=document.getElementById("length").value;



console.log("Permimeter: "+ caculatePermimeter(width,length));
console.log("Area: "+caculateArea(width,length));

function caculate(){
    const caculatePermimeter= (width, length) => (width +length)*2;
// Function caculate Area
    const caculateArea = (width, length) => width*length;


area.innerHTML=caculateArea(width,length);
per.innerHTML=caculatePermimeter(width,length);
}

