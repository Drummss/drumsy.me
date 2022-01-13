import React from 'react';

import { Tooltip, As, Box, Link } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';

export interface Technology {
  icon: As<React.ReactNode>;
  label?: string;
  link: string;
}

export type TechIconProps = {
  technology: Technology;
  showTooltip?: boolean;
};

const TechIcon = (props: TechIconProps) => {
  const { technology } = props;

  return (
    <Tooltip label={technology.label} hasArrow>
      <Box cursor='pointer'>
        <Link
          href={technology.link}
          target='_blank'
          _focus={{ outline: 'none' }}
        >
          <Icon as={technology.icon} />
        </Link>
      </Box>
    </Tooltip>
  );
};

export default TechIcon;
