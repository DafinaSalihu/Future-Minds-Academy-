
let rrafshi =  document.createElement("canvas");
    rrafshi.width = 512;
    rrafshi.height = 480;

    document.body.appendChild(rrafshi);

let ctx = rrafshi.getContext("2d");

letbgReady= false;
let bgImage = new Image();
bgImage.src = "images/background.png";

bgImage.onload = function(){
   bgReady=true;
}

let macaReady = false;
let maca = {};
    maca.x = 100;
    maca.y = 100;
    maca.width= 90;
let macaImage = new Image();
macaImage.src = "images/cat.png";
macaImage.onload = function(){
    macaReady = true;
}

letmiuReady = false;
let miu = {};
miu.x
let miuImage = new Image();
miuImage.src = "images/mouse.png";
miuImage.onload = function(){
    ctx.drawImage(miuImage, 100, 300);
}

var keysDown = {};

document.addEventListener("keydown", 
    function(e){
        keysDown[e.key] = true;
        console.log("Key pressed: " + e.key);
});

document.addEventListener("keyup", function(e){ keysDown = {}; });
let macaSpeed = 5;
let update = function(){
    if("ArrowRight" in keysDown){
        if(maca.x > 512){
            maca.x = 0;
        }
        maca.x +=macaSpeed;
    }
    if("ArrowDown" in keysDown){
        maca.y +=macaSpeed;
        if(maca.y > 480){
            maca.y = -64;
        }
       
    }

    if("ArrowUp" in keysDown){
        maca.y -=macaSpeed;
        if(maca.y < -64){
            maca.y = 480;
        }
       
    }

    if("ArrowLeft" in keysDown){
        if(maca.x < -20){
            maca.x = 512;
        }
        maca.x -=macaSpeed;
    }

    if(maca.x > miu.x){

    }
}

let reset = function(){
    miu.x= Math.floor(math.random()* 384)+0;
    miu.x= Math.floor(math.random()* 352)+0;

}
reset();


let render = function(){
    if(bgReady){ctx.drawImage(bgImage,0,0)}
    if(macaReady){ctx.drawImage(macaImage,maca.x,maca.y);}
    if(miuReady){ctx.drawImage(miuImage,miu.x,miu.y)}
    
    update();
}

setInterval(render, 100);


