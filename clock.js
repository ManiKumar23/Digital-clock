function clock(){
    
    var dateTime = new Date();
    var hours = dateTime.getHours('hours');
    var minutes = dateTime.getMinutes('minutes');
    var seconds = dateTime.getSeconds('seconds');
    var period = document.getElementById('period');

    if(hours >= 12){
        period.innerHTML = 'PM'
    }else{
        period.innerHTML = 'AM'
    }

    if(hours > 12){
        hours = hours -12
    }
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;

    
}
setInterval(clock, 1000)



function Makediv(){    
    //var container=document.createElement('div');
    //container.className="grid-item"
    //container.id="dynamic-block";
    //document.getElementById('grid-container1').appendChild(container);
    
    let data =document.getElementsByClassName('grid-message') 
    var wakevalue=document.getElementById("wakeUpTimeSelector");
    var value=wakevalue.options[wakevalue.selectedIndex].text;
   data[0].innerHTML="wake up time :" + value; 
    console.log(data)
    console.log(wakevalue);
    console.log(value)
    var lunchvalue=document.getElementById("setLunchTime");
    var value=lunchvalue.options[lunchvalue.selectedIndex].text;
    data[1].innerHTML="lunch time :" + value;
    
    var napvalue=document.getElementById("setNapTime");
    var value=napvalue.options[napvalue.selectedIndex].text;
    data[2].innerHTML="Nap time :" + value;

}

function settime(){
    var a=document.getElementById('wakeUpTimeSelector').value;
    var hours=new Date().getHours();

    if(a==hours){
        document.getElementById('img-container').style.backgroundImage="url(C:/Users/manik/Downloads/download.jpg)";
        document.getElementById("text-container").innerHTML="Grab Some Healthy Breakfast"
         
    
    }

    var b=document.getElementById('setLunchTime').value;
    var hours=new Date().getHours();

    if(b==hours){
        document.getElementById('img-container').style.backgroundImage="url(C:/Users/manik/Downloads/Component%2031%20%E2%80%93%201/Component%2031%20%E2%80%93%201@2x.png)";
        document.getElementById("text-container").innerHTML="Lets Have Some Lunch"
    }

    var c=document.getElementById('setNapTime').value;
    var hours=new Date().getHours();

    if(c==hours){
        document.getElementById('img-container').style.backgroundImage="url(C:/Users/manik/Downloads/lunch_image/lunch_image@2x.png)";
        document.getElementById("text-container").innerHTML="Stop Yawning, Get Some Tea... Its Just Evening "
    }


    Makediv();


    
}

