import md5 from "js-md5";
import { EXTRA_ROWS, IMAGE_SIZE } from "./common";

export const generateEmail = (host) => {
  return Math.random()
    .toString(36)
    .substring(7) + host
};

export const gravatarUrl = (email, size) => {
  return `http://www.gravatar.com/avatar/${md5(email)}?d=identicon&s=${size}`;
};

export const calculateNumberOfImages = () => {
  const width = window.root.offsetWidth + window.scrollX;
  const height = window.innerHeight + window.scrollY;

  const imagesPerRow = Math.floor(width / IMAGE_SIZE);
  const imageRows = Math.floor(height / IMAGE_SIZE) + EXTRA_ROWS;

  return imagesPerRow * imageRows;
};
