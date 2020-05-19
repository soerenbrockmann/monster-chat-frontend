import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

class Message extends Component {
  render() {
    const { classes, message, isMyMessage } = this.props;
    return (
      <Fragment>
        <Paper variant='elevation' className={`${classes.message} ${isMyMessage ? classes.myMessage : ''}`}>
          {message.text}
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Message);
