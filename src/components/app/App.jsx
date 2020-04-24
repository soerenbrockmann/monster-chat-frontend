import React from 'react';
import Header from '../header/Header.jsx';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

import './App.css';

class App extends React.Component {
  state = {
    selectedImg: image1,
    title: '',
  };

  switchImage = () => {
    this.setState({ selectedImg: image2 });
  };

  toogleTitle = () => {
    if (this.state.title.trim().length < 1) {
      this.setState({ title: 'Monster Chat' });
    } else {
      this.setState({ title: '' });
    }
  };

  render() {
    return (
      <div className='App'>
        <Header
          title={this.state.title}
          iconUrl={this.state.selectedImg}
          switchImage={this.switchImage}
          toogleTitle={this.toogleTitle}
        />
      </div>
    );
  }
}

export default App;
