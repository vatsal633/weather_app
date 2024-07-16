document.getElementsByClassName('search-btn')[0].addEventListener("click", () => {
        let city = document.getElementById("search").value
        getweather(city)
        document.getElementById("search").value = ""
})


async function getweather(city) {

        let apikey = "459421f6b513bdd67b57719d463d1d96";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;


        try {

                
                const response = await fetch(url);
                const data = await response.json();

                if(data.cod == 404){
                        alert("city was not fond or please enter correct value ")
                }
                else{

                        console.log(data)
                        let cityname = data.name
                        let Fahrenheit = (9/5)*data.main.temp + 32
                        let formated_temp = Fahrenheit.toFixed(2)
                        let timestamp = data.dt // get data from api in seconds
                        let date = new Date(timestamp*1000)// convert into miliseconds
                        let formattedDate = date.toLocaleString();//print date in proper formate
                        document.getElementById("cityname").textContent = cityname
                        document.getElementById("city").textContent = cityname
                        document.getElementById("country").textContent = data.sys.country
                        document.getElementById("cel-temp").textContent = data.main.temp + "°C"
                        document.getElementById("cel-fah").textContent = formated_temp + "°F"
                        document.getElementById("date").textContent = formattedDate
                        document.getElementById("humidity").textContent = data.main.humidity + "%"
                        document.getElementById("wind").textContent = data.wind.speed
                        document.getElementById("weather").textContent = data.weather[0].main
                }





        } catch (error) {
                console.log("facing some error while feaching weather")
        }


}
