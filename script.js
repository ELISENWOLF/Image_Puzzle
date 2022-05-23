var msec=0;
var sec=0;
var min=0;
var d=0;
var e=0;
var z=0;
var check=true;
var clear=0;
var stopwatch=document.getElementById('display');//fetching the display elemnet
var message=document.getElementById('msg1');
function start(){                             //function is called when start button is called
    msec=addZeroMsec(msec+1);
    if(msec>99){
        sec=addZeroSec(sec+1);
        msec=addZeroMsec(0);
    }
    if(sec>59){
        sec=addZeroSec(0);
        msec=addZeroMsec(0);
        min=addZeroMin(min+1);
    }
    stopwatch.innerHTML=''+z+min+':'+e+sec+':'+d+msec;
}

function initiate(){
    if(check===true){
        check=false;
        clear=setInterval(start,10);
    }
}

/*function stop(){        //this fucntion is called when stop button  is clicked
    check=true;
    clearInterval(clear);
}*/


function addZeroMsec(time){
    var length= time.toString().length;
    if(length<2){
        d=0;
    }
    else{
        d='';
    }
    return time;
}

function addZeroSec(time){
    var length=time.toString().length;
    if(length<2){
        e=0;
    }
    else{
        e='';
    }
    return time;
}

function addZeroMin(time){
    var length=time.toString().length;
    if(length<2){
        z=0;
    }
    else{
        z='';
    }
    return time;
}
function reset(){ //refersh page
    location.reload();
}

function drag(box) {         //for draggin the image
    box.dataTransfer.setData("text", box.target.id);
    box.dataTransfer.setData("parent", box.path[1].id);
  }

  function drop(box) {  //for dropping the dragged image
    box.preventDefault();
    var data = box.dataTransfer.getData("text");
    var parent = box.dataTransfer.getData("parent");
    var parentDiv = document.getElementById(parent);
    var alreadyPresentImage = document.getElementById(box.path[0].id);
    var newImage = document.getElementById(data);

    var secondParentDiv = document.getElementById(box.path[1].id);
    parentDiv.removeChild(newImage);
    parentDiv.appendChild(alreadyPresentImage);
    secondParentDiv.appendChild(newImage);
  }

  function allowDrop(box) {
    box.preventDefault();
  }

  function checkforwin(){
    var id_no = document.querySelectorAll('.container>div>div');
    var count = 0;
    for(let i =0;i < 16; i++){
        if(id_no[i].id == `piece-${i+1}`){
           count++;
           //console.log(count);
           if(count == 16){
            check=true;
            clearInterval(clear);
            message.innerHTML='Puzzle completed';
           } 
        }
    }
  }
  document.addEventListener('dragend',checkforwin)
  