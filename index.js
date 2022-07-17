
console.log("Working");
const liveClock=()=>{
    let dateTime = new Date();
    let hour = dateTime.getHours();
    let min=dateTime.getMinutes();
    let secs=dateTime.getSeconds();
    let season=document.getElementsByClassName("season");
    let picture=document.getElementById("img");
    let text=document.getElementsByTagName("p");

    


    if(hour>=8 && hour<12){
        picture.src="Pics/Component 30 – 1.svg"
        text[0].innerHTML="GRAB SOME HEALTHY BREAKFAST!!!" 
        text[1].innerHTML="GOOD MORNING!! WAKE UP !!" 
    }
    
    if(hour>=12 && hour<16){
        picture.src="Pics/Component 31 – 1.svg"
        text[0].innerHTML="LET'S HAVE SOME LUNCH !!" 
        text[1].innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP" 
    }
    if(hour>=16 && hour<20){
        picture.src="Pics/lunch_image.png"
        text[0].innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!" 
        text[1].innerHTML="GOOD EVENING !!"  
    }
    if (hour>=20 && hour<24 || hour>=0 && hour<8){
        picture.src="Pics/Component 32 – 1.svg" 
        text[0].innerHTML="CLOSE YOUR EYES AND GO TO SLEEP" 
        text[1].innerHTML="GOOD NIGHT !!"  
    }

    
    if(hour>=12){
        season[0].innerHTML="PM";
    }
    else {
        season[0].innerHTML="AM";  
    }

    if(hour>12){
        hour=hour-12;
    }
    if(hour<10){
        hour="0"+hour;
    }

    if(min<10){
        min="0"+min;
    }

    if(secs<10){
        secs="0"+secs;
    }
    document.getElementsByClassName("timeText")[0].innerHTML=hour;
    document.getElementsByClassName("timeText")[1].innerHTML=min;
    document.getElementsByClassName("timeText")[2].innerHTML=secs;
}

setInterval(liveClock, 1);

function changeText() {

        let elementOne=document.getElementById("wake").value
        let elementTwo=document.getElementById("lunch").value
        let elementThree=document.getElementById("nap").value
        let elementFour=document.getElementById("night").value 

    document.getElementsByClassName("hello")[0].innerHTML=elementOne;
    document.getElementsByClassName("hello")[1].innerHTML=elementTwo;
    document.getElementsByClassName("hello")[2].innerHTML=elementThree;
    document.getElementsByClassName("hello")[3].innerHTML=elementFour; 

    document.getElementsByTagName("button")[0].innerHTML="Party time!"   
    
}









