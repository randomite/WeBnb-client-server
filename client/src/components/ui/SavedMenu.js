import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '30%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function SavedMenu(props) {
  const { classes, theme } = props;

  return (
      <Paper className="saved_menu">
        <div className="saved_menu_header">
          <strong>Saved List</strong>
          <a><strong>View Saved</strong></a>
        </div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <div className='list_name'>
                Formula 1
              </div>
              <div className='list_subtitle'>{4}
                Listings
              </div>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image="https://material-ui.com/static/images/cards/live-from-space.jpg"
            title="Live from space album cover"
          />
        </Card>
      </Paper>
    );
}

export default withStyles(styles, { withTheme: true })(SavedMenu);

const data = [
  {
    name: 'Formula1',
    items: 4,
    preview: 'https://material-ui.com/static/images/cards/live-from-space.jpg'
  }
]