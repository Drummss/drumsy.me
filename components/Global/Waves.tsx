import { useColorModeValue } from '@chakra-ui/react';
import { useViewportDimentions } from '../../hooks/useViewportDimentions';
import { Prng } from '../../lib/prng';
import { lerpHex } from '../../lib/utils';

const generateWave = (pointCount: number) => {};

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
  if (!viewportDimentions) return <></>;

  const wavesPoints = Array.from({ length: waveCount }, (wave, i) => {
    const prng = new Prng(42 * (i + 1));

    const padding = viewportDimentions.height * 0.2;
    const waveHeight = (viewportDimentions.height - padding) / waveCount;
    const waveBaseHeight = waveHeight * i + padding * 0.85;

    const pointCount = Math.ceil(
      viewportDimentions.width / (1000 / waveDensity)
    );
    const finalPointCount = Math.max(
      2,
      pointCount + (pointCount % 2 == 0 ? 0 : 1)
    );

    return Array.from({ length: finalPointCount + 1 }, (a, i) => [
      (viewportDimentions.width / finalPointCount) * i,
      waveBaseHeight -
        prng.nextFloat() *
          (waveHeight - waveHeight * 0.35) *
          0.6 *
          (i % 2 == 0 ? 1 : -1),
    ]);
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

        const t = (1 / waveCount) * (pointsIndex + 1);
        const colour = lerpHex(startColour, endColour, t);

        return (
          <>
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
          </>
        );
      })}
    </svg>
  );
};

export default Waves;
