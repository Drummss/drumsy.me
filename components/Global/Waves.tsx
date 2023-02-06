import { useState } from 'react';
import { useAnimationFrame, useReducedMotion } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/react';

import { useViewportDimentions } from '../../hooks/useViewportDimentions';
import { Prng } from '../../lib/prng';
import { lerpHex } from '../../lib/utils';

const Waves = ({
  waveDensity,
  waveCount,
  startColour,
  endColour,
  showPointIndexes,
}: {
  waveDensity: number;
  waveCount: number;
  startColour: string;
  endColour: string;
  showPointIndexes?: boolean;
}) => {
  const viewportDimentions = useViewportDimentions();
  const [timestamp, setTimestamp] = useState(0);
  const reduceMotion = useReducedMotion();

  useAnimationFrame((timestamp) => {
    if (reduceMotion) return;
    setTimestamp(timestamp);
  });

  const wavesPoints = Array.from({ length: waveCount }, (wave, waveIndex) => {
    const prng = new Prng(42 * (waveIndex + 1));

    const padding = viewportDimentions.height * 0.2;
    const waveHeight = (viewportDimentions.height - padding) / waveCount;
    const waveBaseHeight = waveHeight * waveIndex + padding * 0.85;

    const pointCount = Math.ceil(
      viewportDimentions.width / (1000 / waveDensity)
    );
    const finalPointCount = Math.max(
      2,
      pointCount + (pointCount % 2 == 0 ? 0 : 1)
    );

    return Array.from({ length: finalPointCount + 1 }, (a, pointIndex) => {
      const offsetDirection = pointIndex % 2 == 0 ? 1 : -1;
      const pointPadding = waveHeight * 0.4;
      const pointOffset =
        prng.nextFloat() * (waveHeight - pointPadding) * offsetDirection;

      const pointAngleOffset = (360 / finalPointCount) * pointIndex;
      const waveAngleOffset = (360 / waveCount) * waveIndex;
      const animationHeight = waveHeight * 0.12;
      const timing = timestamp / 2400;
      const pointAnimationOffset =
        Math.sin(timing + pointAngleOffset + waveAngleOffset) * animationHeight;

      return [
        (viewportDimentions.width / finalPointCount) * pointIndex,
        waveBaseHeight - pointOffset - pointAnimationOffset,
      ];
    });
  });

  return (
    <svg
      viewBox={`0 0 ${viewportDimentions.width} ${viewportDimentions.height}`}
      height='100%'
      width='100%'
      preserveAspectRatio='none'
    >
      <rect width='100%' height='100%' fill={startColour} />
      {wavesPoints.map((points, pointsIndex) => {
        // const colour = startColourInt + t * (endColourInt - startColourInt);

        const t = (1 / waveCount) * (pointsIndex + 1);
        const colour = lerpHex(startColour, endColour, t);

        // console.log(
        //   `Wave #${
        //     pointsIndex + 1
        //   } Colour: mu(${t}), start(${startColour}), end(${endColour}), result(${colour})`
        // );

        return (
          <g key={colour}>
            <polygon
              fill={colour}
              points={`${points.map((e) => e.join(',')).join(' ')} ${
                viewportDimentions.width
              },${viewportDimentions.height} 0,${viewportDimentions.height}`}
            />
            {showPointIndexes &&
              points.map((point, i) => (
                <text
                  fontWeight={600}
                  x={Math.max(
                    8,
                    Math.min(viewportDimentions.width - 18, point[0])
                  )}
                  y={point[1] - 10}
                  fill={useColorModeValue('#a8a8a8', '#4b4b4b')}
                >
                  {i + 1}
                </text>
              ))}
          </g>
        );
      })}
    </svg>
  );
};

export default Waves;
