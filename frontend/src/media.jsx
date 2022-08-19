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
  mobileS: `only screen and (max-width: ${size.mobileS}) { ... }`,
  mobileM: `only screen and (min-width: ${size.mobileM}){ ... }`,
  mobileL: `only screen and (min-width: ${size.mobileL}){ ... }`,
  tablet: `only screen and (min-width: ${size.tablet}){ ... }`,
  laptop: `only screen and (min-width: ${size.laptop}){ ... }`,
  laptopL: `only screen and (min-width: ${size.laptopL}){ ... }`,
  desktopL: `only screen and (min-width: ${size.desktopL}){ ... }`,
};

const media = () => {
  return <div></div>;
};

export default media;
