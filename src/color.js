export const Color = (priority) => {
  let r = 230 - Math.round(priority * 230 / 10);
  let g = 230 - Math.round(priority * 86 / 10);
  let b = 230 - Math.round(priority * 46 / 10);
  return {r,g,b};
};
