export const lightOrDark = (bgcolor) => {
  const r = parseInt(bgcolor.slice(0, 2), 16);
  const g = parseInt(bgcolor.slice(2, 4), 16);
  const b = parseInt(bgcolor.slice(4, 6), 16);
  const hsp = r * 0.3 + g * 0.6 + b * 0.1;
  if (hsp > 127.5) {
    return "black";
  } else {
    return "white";
  }
};
