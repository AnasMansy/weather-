window.addEventListener('load', ()=>{
    let long;
    let lat;
    let description= document.getElementById('description') ;
    let degree=document.getElementById('degree'); 
    let timezone = document.getElementById('timezone'); 
    let locationIcon = document.querySelector('.weather-icon');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lat=position.coords.latitude; 
    let key = 'bca9efb851f6e03fde1cb59678da8a17';
    let lang = 'en';
    let units = 'metric';
    let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}&units=${units}&lang=${lang}`;
            
             
            fetch(url)
            .then(res => res.json())
            .then(data => {

                console.log(data);
                const  icon  = data.current.weather[0].icon;
                degree.textContent=data.current.temp;
                description.textContent=data.current.weather[0].description;
                timezone.textContent = data.timezone;
                locationIcon.innerHTML = `<img src="icons/${icon}.png">;`
                })
        })
        
    }

})