/**
 * Created by neiro on 01/04/2017.
 */

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/images/image2.png') {
        myImage.setAttribute ('src','images/image1.jpg');
    } else {
        myImage.setAttribute ('src','images/image2.png');
    }
};