export const lerpHex = (
  startColour: string,
  endColour: string,
  time: number
): string => {
  const startColourInt = parseInt(startColour.replace('#', '0x'), 16);
  const endColourInt = parseInt(endColour.replace('#', '0x'), 16);

  const startRed = (startColourInt & 0xff0000) >> 16;
  const startGreen = (startColourInt & 0x00ff00) >> 8;
  const startBlue = startColourInt & 0x0000ff;
  const endRed = (endColourInt & 0xff0000) >> 16;
  const endGreen = (endColourInt & 0x00ff00) >> 8;
  const endBlue = endColourInt & 0x0000ff;
  const colourRed = startRed + time * (endRed - startRed);
  const colourGreen = startGreen + time * (endGreen - startGreen);
  const colourBlue = startBlue + time * (endBlue - startBlue);

  return `#${(
    (colourRed << 16) +
    (colourGreen << 8) +
    (colourBlue | 0)
  ).toString(16)}`;
};
