let images = [
  "./images/product1.jpg",
  "./images/product2.jpg",
  "./images/product3.jpg",
  "./images/product4.jpg",
  "./images/product5.jpg",
];

let currentIndex = 0;

var currentImage = document.getElementById("slider_img");
var smallImage = document.getElementsByClassName("small_image");


function rightArrow() {
  
    if(currentIndex === images.length - 1) {
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
  
    currentImage.src = images[currentIndex];
}

function leftArrow() {

    if(currentIndex === 0){
        currentIndex = images.length - 1;
    }
    else{
        currentIndex--;
    }

    currentImage.src = images[currentIndex];
}


// Smmall Images change function



smallImage[0].onclick = function(){
    currentImage.src = smallImage[0].src;
}

smallImage[1].onclick = function(){
    currentImage.src = smallImage[1].src;
}

smallImage[2].onclick = function(){
    currentImage.src = smallImage[2].src;
}

smallImage[3].onclick = function(){
    currentImage.src = smallImage[3].src;
}

smallImage[4].onclick = function(){
    currentImage.src = smallImage[4].src;
}

