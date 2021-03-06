import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    //minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  backcolor: {
    backgroundColor: "#2196F3",
    '&:hover': { backgroundColor: "#2196F3" },
    color:"#fff",
  },
});

 function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { avatarSrc, title, subtitle, description, imgSrc} = props

  return (
    <Card className={classes.root}>
       <CardHeader
        avatar={
          <Avatar src={avatarSrc}/>
        }
        title={title}
        subheader={subtitle}
      />

      <CardActions>
        <Button className={classes.backcolor} size="small">More Info</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard