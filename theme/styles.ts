import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode('#f0def2', '#241838')(props),
    },
  }),
};

export default styles;
