import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox() {

  const INIT_URL = "https://plus.unsplash.com/premium_photo-1711305682236-de8d0ac5ff38?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let info = {
    city:"delhi",
    feeslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze"
  };

  return (
    <div className="InfoBox">
      <h1>Weather Info - {info.weather}</h1>
      <div className="cardContainer">

      
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INIT_URL}   // <-- FIXED
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Temperature: {info.temp}°C
          </Typography>
           {info.city}
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Feels like: {info.feeslike}°C <br />
            Min: {info.tempMin}°C | Max: {info.tempMax}°C <br />
            Humidity: {info.humidity}%
          </Typography>
        </CardContent>

      </Card>
      </div>
    </div>
  );
}
