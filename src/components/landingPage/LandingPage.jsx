import React from 'react';
import Monster from '../../assets/monster.png';
import Image from 'material-ui-image';
import { imageStyles } from './styles';

const LandingPage = () => {
  return <Image className='root' imageStyle={imageStyles} aspectRatio={3} src={Monster} />;
};

export default LandingPage;
