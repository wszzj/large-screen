const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;
const pageWidth =
  clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth;

export const px = (n: number) => {
  return (n / 2420) * pageWidth;
};
