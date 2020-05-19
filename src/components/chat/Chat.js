import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Message from '../message/Message';
import io from 'socket.io-client';

import { styles } from './styles';

class Chat extends Component {
  constructor() {
    super();
    this.socket = io('http://localhost:3000');
  }
  state = {
    myUserId: '1',
    chatMessages: [
      {
        id: 1,
        userId: '1',
        text: 'Hi Pete. What a sunny day!',
        date: Date.now(),
      },
      {
        id: 2,
        userId: '2',
        text: 'Hi there',
        date: Date.now(),
      },
      {
        id: 3,
        userId: '1',
        text: "What's Up",
        date: Date.now(),
      },
      {
        id: 4,
        userId: '2',
        text: 'Not bad, thanks!',
        date: Date.now(),
      },
      {
        id: 5,
        userId: '2',
        text: 'Not bad, thanks!',
        date: Date.now(),
      },
      {
        id: 6,
        userId: '1',
        text: 'Not bad, thanks!',
        date: Date.now(),
      },
      {
        id: 7,
        userId: '1',
        text: 'Not bad, thanks!',
        date: Date.now(),
      },
      {
        id: 8,
        userId: '2',
        text: 'Not bad, thanks!',
        date: Date.now(),
      },
    ],
    inputMessage: '',
  };

  handleInputMessage = (event) => {
    this.setState({ inputMessage: event.target.value });
  };

  sendMessage = () => {
    this.socket.emit('chat message', this.state.inputMessage);
    this.socket.on('chat message', (msg) => {
      this.setState({
        chatMessages: [...this.state.chatMessages, { id: 9, text: msg, userId: this.state.myUserId, date: Date.now() }],
        inputMessage: '',
      });
    });
  };

  render() {
    const { classes } = this.props;
    const renderMessages = this.state.chatMessages.map((message, index) => {
      const isMyMessage = this.state.myUserId === message.userId;
      return (
        <Grid item className={isMyMessage ? classes.myMessage : ''} key={index}>
          <Message message={message} isMyMessage={isMyMessage} />
        </Grid>
      );
    });

    return (
      <Fragment>
        <CssBaseline />
        <Container maxWidth='xl'>
          <Grid container>
            <Grid item container className={classes.center} xs={12}>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <Paper variant='outlined' className={classes.paper}>
                  <Grid item container direction='column'>
                    {renderMessages}
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>

            <Grid item container className={classes.center} xs={12}>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <Grid container item spacing={2} className={classes.center}>
                  <Grid item xs={10}>
                    <TextField
                      id='chat-input'
                      size='small'
                      placeholder='Enter message here...'
                      fullWidth
                      value={this.state.inputMessage}
                      onChange={this.handleInputMessage}
                      margin='normal'
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant='contained' onClick={this.sendMessage}>
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Chat);
