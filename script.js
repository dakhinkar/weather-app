
const API_KEY = '9a6d5124604e4735ad550445221504'; // API Key required to fetch deatils 
const API = 'https://api.weatherapi.com/v1/current.json?key='; // Weather API URL
let position = 'kolkata';   // location default we can changed it as per required

// Month array

const months = ['JAN','Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


// On Page reload
window.addEventListener('load', ()=>{
    position = 'kolkata';
    getWeatherInfo();
});


// By using Rearching location
function setLocation(){
    position = document.getElementById('timezone-select').value;
    getWeatherInfo();
}


function getWeatherInfo(){
   
    //  Weather info
    let humidity = document.getElementById("humidity"); 
    let pressure = document.getElementById('pressure');
    let windSpeed = document.getElementById('wind-speed'); 
    let temp = document.getElementById('temp-c');

    //  Date & time Section
    let time = document.getElementById('time');
    let month = document.getElementById('month');
    let date = document.getElementById('date');
    let year = document.getElementById('year');

    // Timezone section 
    let timezone = document.getElementsByClassName('location');
    let country = document.getElementsByClassName('country');

    //  Create URL for specific location defalut it set to Kolkata / Asia
    let url =  API + API_KEY+ '&q=' +position;

    // API Call 
    fetch(url).then(response => response.json()).then(data => {
      
        console.log(data);

        //  set Weather info 
        humidity.innerText = data.current.humidity;
        pressure.innerText = data.current.pressure_mb + ' mb';
        windSpeed.innerText = data.current.wind_kph + ' kph';
        temp.innerText = data.current.temp_c + ' C';

        // set Local date & time 
        let timeString = data.location.localtime.split(' ');
        time.innerText = timeString[1];
        let dateString = timeString[0].split('-');
        month.innerText = months[dateString[1]%12 -1].toUpperCase();
        date.innerText = dateString[2];
        year.innerText = dateString[0] + ', ';

        // set Timezone 
        timezone[0].innerText = data.location.tz_id;
        country[0].innerText = data.location.country;

    });
}



// TimeZone initialization
var tzStrings = [
    {"label" : "Select Location", "value": "none"},
    {"label":"International Date Line West","value":"Etc/GMT+12"},
    {"label":"Midway Island, Samoa","value":"Pacific/Midway"},
    {"label":"Hawaii","value":"Pacific/Honolulu"},
    {"label":"Alaska","value":"US/Alaska"},
    {"label":"Pacific Time (US & Canada)","value":"America/Los_Angeles"},
    {"label":"Tijuana, Baja California","value":"America/Tijuana"},
    {"label":"Arizona","value":"US/Arizona"},
    {"label":"Chihuahua, La Paz, Mazatlan","value":"America/Chihuahua"},
    {"label":"Mountain Time (US & Canada)","value":"US/Mountain"},
    {"label":"Central America","value":"America/Managua"},
    {"label":"Central Time (US & Canada)","value":"US/Central"},
    {"label":"Guadalajara, Mexico City, Monterrey","value":"America/Mexico_City"},
    {"label":"Saskatchewan","value":"Canada/Saskatchewan"},
    {"label":"Bogota, Lima, Quito, Rio Branco","value":"America/Bogota"},
    {"label":"Eastern Time (US & Canada)","value":"US/Eastern"},
    {"label":"Indiana (East)","value":"US/East-Indiana"},
    {"label":"Atlantic Time (Canada)","value":"Canada/Atlantic"},
    {"label":"Caracas, La Paz","value":"America/Caracas"},
    {"label":"Manaus","value":"America/Manaus"},
    {"label":"Santiago","value":"America/Santiago"},
    {"label":"Newfoundland","value":"Canada/Newfoundland"},
    {"label":"Brasilia","value":"America/Sao_Paulo"},
    {"label":"Buenos Aires, Georgetown","value":"America/Argentina/Buenos_Aires"},
    {"label":"Greenland","value":"America/Godthab"},
    {"label":"Montevideo","value":"America/Montevideo"},
    {"label":"Mid-Atlantic","value":"America/Noronha"},
    {"label":"Cape Verde Is.","value":"Atlantic/Cape_Verde"},
    {"label":"Azores","value":"Atlantic/Azores"},
    {"label":"Casablanca, Monrovia, Reykjavik","value":"Africa/Casablanca"},
    {"label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London","value":"Etc/Greenwich"},
    {"label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","value":"Europe/Amsterdam"},
    {"label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague","value":"Europe/Belgrade"},
    {"label":"Brussels, Copenhagen, Madrid, Paris","value":"Europe/Brussels"},
    {"label":"Sarajevo, Skopje, Warsaw, Zagreb","value":"Europe/Sarajevo"},
    {"label":"West Central Africa","value":"Africa/Lagos"},
    {"label":"Amman","value":"Asia/Amman"},
    {"label":"Athens, Bucharest, Istanbul","value":"Europe/Athens"},
    {"label":"Beirut","value":"Asia/Beirut"},
    {"label":"Cairo","value":"Africa/Cairo"},
    {"label":"Harare, Pretoria","value":"Africa/Harare"},
    {"label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","value":"Europe/Helsinki"},
    {"label":"Jerusalem","value":"Asia/Jerusalem"},
    {"label":"Minsk","value":"Europe/Minsk"},
    {"label":"Windhoek","value":"Africa/Windhoek"},
    {"label":"Kuwait, Riyadh, Baghdad","value":"Asia/Kuwait"},
    {"label":"Moscow, St. Petersburg, Volgograd","value":"Europe/Moscow"},
    {"label":"Nairobi","value":"Africa/Nairobi"},
    {"label":"Tbilisi","value":"Asia/Tbilisi"},
    {"label":"Tehran","value":"Asia/Tehran"},
    {"label":"Abu Dhabi, Muscat","value":"Asia/Muscat"},
    {"label":"Baku","value":"Asia/Baku"},
    {"label":"Yerevan","value":"Asia/Yerevan"},
    {"label":"Kabul","value":"Asia/Kabul"},
    {"label":"Yekaterinburg","value":"Asia/Yekaterinburg"},
    {"label":"Islamabad, Karachi, Tashkent","value":"Asia/Karachi"},
    {"label":"Chennai, Kolkata, Mumbai, New Delhi","value":"Asia/Calcutta"},
    {"label":"Sri Jayawardenapura","value":"Asia/Calcutta"},
    {"label":"Kathmandu","value":"Asia/Katmandu"},
    {"label":"Almaty, Novosibirsk","value":"Asia/Almaty"},
    {"label":"Astana, Dhaka","value":"Asia/Dhaka"},
    {"label":"Yangon (Rangoon)","value":"Asia/Rangoon"},
    {"label":"Bangkok, Hanoi, Jakarta","value":"Asia/Bangkok"},
    {"label":"Krasnoyarsk","value":"Asia/Krasnoyarsk"},
    {"label":"Beijing, Chongqing, Hong Kong, Urumqi","value":"Asia/Hong_Kong"},
    {"label":"Kuala Lumpur, Singapore","value":"Asia/Kuala_Lumpur"},
    {"label":"Irkutsk, Ulaan Bataar","value":"Asia/Irkutsk"},
    {"label":"Perth","value":"Australia/Perth"},
    {"label":"Taipei","value":"Asia/Taipei"},
    {"label":"Osaka, Sapporo, Tokyo","value":"Asia/Tokyo"},
    {"label":"Seoul","value":"Asia/Seoul"},
    {"label":"Yakutsk","value":"Asia/Yakutsk"},
    {"label":"Adelaide","value":"Australia/Adelaide"},
    {"label":"Darwin","value":"Australia/Darwin"},
    {"label":"Brisbane","value":"Australia/Brisbane"},
    {"label":"Canberra, Melbourne, Sydney","value":"Australia/Canberra"},
    {"label":"Hobart","value":"Australia/Hobart"},
    {"label":"Guam, Port Moresby","value":"Pacific/Guam"},
    {"label":"Vladivostok","value":"Asia/Vladivostok"},
    {"label":"Magadan, Solomon Is., New Caledonia","value":"Asia/Magadan"},
    {"label":"Auckland, Wellington","value":"Pacific/Auckland"},
    {"label":"Fiji, Kamchatka, Marshall Is.","value":"Pacific/Fiji"},
    {"label":"Nuku'alofa","value":"Pacific/Tongatapu"}
];


function timezoneSelect(){
    var options = [],
    select = document.getElementById('timezone-select');

    for(var i =0; i<tzStrings.length; i++){
        var tz = tzStrings[i],
        option= document.createElement('option');
        option.value = tz.value;
        option.appendChild(document.createTextNode(tz.label));
        select.appendChild(option);
    }
    return select;
}


timezoneSelect();



