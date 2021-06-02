import { ButtonProps, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeButton = (props: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode == 'light' ? <MoonIcon/>:<SunIcon/>}
      aria-label='Color Mode Switch'
      onClick={toggleColorMode}
      {...props}
    />
  );
}

export default ColorModeButton;