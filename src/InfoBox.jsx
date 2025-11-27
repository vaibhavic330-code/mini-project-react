import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css";

export default function InfoBox({ info }) {

  if (!info) {
    return <h3>No data available</h3>;
  }

  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1711305682236-de8d0ac5ff38?q=80&w=1171&auto=format&fit=crop";

    const HOT_URL ="";
    const COLD_URL ="";
    const RAIN_URL ="";
  return (
    <div className="InfoBox">
      <div className="cardContainer">

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80? RAIN_URL :(info.temp > 15)?HOT_URL:COLD_URL}
            title="Weather Image"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Temperature: {info.temp}°C
            </Typography>

            <Typography variant="h6">
              City: {info.city}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Feels like: {info.feelsLike}°C <br />
              Min: {info.tempMin}°C | Max: {info.tempMax}°C <br />
              Humidity: {info.humidity}%
            </Typography>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
