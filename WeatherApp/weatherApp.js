const temp = document.querySelector(".temp");
const place = document.querySelector(".place");
const timeDate = document.querySelector(".timeDate");
const icon = document.querySelector(".icon");
const statas = document.querySelector(".status");

const region = document.getElementById("region");
const country = document.getElementById("country");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const windspeed = document.getElementById("windspeed");
const winddirection = document.getElementById("winddirection");
const humidity = document.getElementById("humidity");
const cloud = document.getElementById("cloud");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const container = document.querySelector(".container");

let plac = "pune";

const fecthWeather = async (plac) => {
  let url = `https://api.weatherapi.com/v1/current.json?key=7f711a03e4424a3e92b34931231109&q=${plac}`;

  const response = await fetch(url);
  const data = await response.json();

  const current = data.current;
  const location = data.location;
  const condition = current.condition;

  updateWeather(
    current.temp_c,
    location.name,
    location.localtime,
    condition.icon,
    condition.text,

    location.region,
    location.country,
    location.lat,
    location.lon,
    current.wind_kph,
    current.wind_dir,
    current.humidity,
    current.cloud
  );

  updateBg(condition.text);
};

const updateWeather = (t, l, td, i, s, r, c, lat, lon, ws, wd, h, clou) => {
  temp.innerText = t + "°";
  place.innerText = l;
  timeDate.innerText = td;
  icon.src = i;
  statas.innerText = s;
  region.innerText = r;
  country.innerText = c;
  latitude.innerText = lat;
  longitude.innerText = lon;
  windspeed.innerText = ws;
  winddirection.innerText = wd;
  humidity.innerText = h;
  cloud.innerText = clou;
};

const updateBg = (clo) => {
  let cl = String(clo).toLowerCase();
  console.log(cl);
  if (cl.includes("snow")) {
    container.style.backgroundImage = "url('Resources/snow.jpeg')";
    searchBtn.style.backgroundColor = "white";
  } else if (cl.includes("cloud")) {
    container.style.backgroundImage = "url('Resources/clouds.jpeg')";
    searchBtn.style.backgroundColor = "grey";
  } else if (cl.includes("sunny")) {
    container.style.backgroundImage = "url('Resources/sunny.jpg')";
    searchBtn.style.backgroundColor = "orange";
  } else if (cl.includes("mist") || cl.includes("fog")) {
    container.style.backgroundImage = "url('Resources/mist.jpeg')";
    searchBtn.style.backgroundColor = "lightblue";
  } else if (cl.includes("rain")) {
    container.style.backgroundImage = "url('Resources/rain.jpeg')";
    searchBtn.style.backgroundColor = "lightblue";
  } else if (cl.includes("heavy rain")) {
    container.style.backgroundImage = "url('Resources/rainy.jpg')";
  } else if (cl.includes("thunder")) {
    container.style.backgroundImage = "url('Resources/thunder.jpg')";
  } else {
    container.style.backgroundImage = "url('Resources/clear.jpeg')";
    searchBtn.style.backgroundColor = "lightblue";
  }
};

fecthWeather(plac);
searchBtn.addEventListener("click", () => {
  plac = searchInput.value;
  fecthWeather(plac);
});
