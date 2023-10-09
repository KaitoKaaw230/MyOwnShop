// let itemSrc = null;
// function drag(event){
//     itemSrc = event.target.src;
//     document.querySelector('.graphic').classList.add('drag');
// }
// function drop(event){
//     var img = document.createElement('img');
//     img.src = itemSrc;
//     document.querySelector('.graphic').innerHTML = '';
//     document.querySelector('.graphic').appendChild(img);
//     document.querySelector('.graphic').classList.remove('drag');
// }
// function allowDrop(event){
//     event.preventDefault();
// }

let itemSrc = null;
function drag(event){
    itemSrc = event.target.src;
    document.querySelector('.PicFrames1').classList.add('drag');
    document.querySelector('.PicFrames2').classList.add('drag');
}
function drop(event){
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.PicFrames1').innerHTML = '';
    document.querySelector('.PicFrames1').appendChild(img);
    document.querySelector('.PicFrames1').classList.remove('drag');
}
function allowDrop(event){
    event.preventDefault();
}

function drop2(event){
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.PicFrames2').innerHTML = '';
    document.querySelector('.PicFrames2').appendChild(img);
    document.querySelector('.PicFrames2').classList.remove('drag');
}
function allowDrop2(event){
    event.preventDefault();
}

function drop3(event){
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.PicFrames3').innerHTML = '';
    document.querySelector('.PicFrames3').appendChild(img);
    document.querySelector('.PicFrames3').classList.remove('drag');
}
function allowDrop3(event){
    event.preventDefault();
}

function drop4(event){
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.PicFrames4').innerHTML = '';
    document.querySelector('.PicFrames4').appendChild(img);
    document.querySelector('.PicFrames4').classList.remove('drag');
}
function allowDrop4(event){
    event.preventDefault();
}

function drop5(event){
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.PicFrames5').innerHTML = '';
    document.querySelector('.PicFrames5').appendChild(img);
    document.querySelector('.PicFrames5').classList.remove('drag');
}
function allowDrop5(event){
    event.preventDefault();
}

function drop6(event){
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.PicFrames6').innerHTML = '';
    document.querySelector('.PicFrames6').appendChild(img);
    document.querySelector('.PicFrames6').classList.remove('drag');
}
function allowDrop6(event){
    event.preventDefault();
}

function drop7(event){
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.PicFrames7').innerHTML = '';
    document.querySelector('.PicFrames7').appendChild(img);
    document.querySelector('.PicFrames7').classList.remove('drag');
}
function allowDrop7(event){
    event.preventDefault();
}

function drop8(event){
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.PicFrames8').innerHTML = '';
    document.querySelector('.PicFrames8').appendChild(img);
    document.querySelector('.PicFrames8').classList.remove('drag');
}
function allowDrop8(event){
    event.preventDefault();
}

function drop9(event){
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.PicFrames9').innerHTML = '';
    document.querySelector('.PicFrames9').appendChild(img);
    document.querySelector('.PicFrames9').classList.remove('drag');
}
function allowDrop9(event){
    event.preventDefault();
}