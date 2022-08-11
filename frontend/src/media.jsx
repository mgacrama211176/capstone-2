import React from "react";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1920px",
  desktopL: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS}) { ... }`,
  mobileM: `(min-width: ${size.mobileM}) { ... }`,
  mobileL: `(min-width: ${size.mobileL}) { ... }`,
  tablet: `(min-width: ${size.tablet} and (max-width: 1023px)) { ... }`,
  laptop: `(min-width: ${size.laptop} and (max-width: 1439px)) { ... }`,
  laptopL: `(min-width: ${size.laptopL} and (max-width: 1919px)) { ... }`,
  desktop: `(min-width: ${size.desktop}) { ... }`,
  desktopL: `(min-width: ${size.desktopL}) { ... }`,
};

const media = () => {
  return <div></div>;
};

export default media;
