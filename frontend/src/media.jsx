import React from 'react';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktopL: '2560px',
};

export const device = {
  mobileS: `only screen and (min-width: ${size.mobileS}) { ... }`,
  mobileM: `only screen and (min-width: ${size.mobileM}){ ... }`,
  mobileL: `only screen and (max-width: ${size.mobileL}){ ... }`,
  tablet: `only screen and (max-width: ${size.tablet}){ ... }`,
  laptop: `only screen and (max-width: ${size.laptop}){ ... }`,
  laptopL: `only screen and (max-width: ${size.laptopL}){ ... }`,
  desktopL: `only screen and (max-width: ${size.desktopL}){ ... }`,
};

const media = () => {
  return <div></div>;
};

export default media;
