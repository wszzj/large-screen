const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;
const pageWidth =
  clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth;
export default pageWidth;
