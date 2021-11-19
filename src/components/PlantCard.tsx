import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { onePlantType } from '../actions/PlantsActionTypes';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DeletePlant, GetPlants } from '../actions/PlantsActions';
import { useNavigate } from 'react-router';

interface PlantCardProps {
  plant?: onePlantType;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleDeletePlant = (id: any) => {
    dispatch(DeletePlant(id));
    setTimeout(() => {
      dispatch(GetPlants());
    }, 500);
  };

  return (
    <Card sx={{ maxWidth: 345, height: 450, backgroundColor: '#658962' }}>
      <CardHeader title={plant?.name} subheader={`Type: ${plant?.type}`} />
      <Link to={`/plant/${plant?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia component="img" height="194" image={plant?.image} alt="Paella dish" />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {plant?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Link to={`/edit/${plant?.id}`}>
          <IconButton aria-label="add to favorites">
            <EditIcon />
          </IconButton>
        </Link>
        <IconButton aria-label="add to favorites" onClick={() => handleDeletePlant(plant?.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PlantCard;
