import { Card, CardMedia, Chip, Rating, Typography } from '@mui/material';

export default function MovieCard({ movie }) {
  return (
    <Card className="movie-card" sx={{ position: 'relative' }}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <Typography variant="h6">{movie.title}</Typography>
        <div className="meta-info">
          <Chip label={movie.release_date.split('-')[0]} />
          <Rating 
            value={movie.vote_average / 2} 
            precision={0.5} 
            readOnly 
          />
        </div>
      </div>
    </Card>
  );
}