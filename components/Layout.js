import { Box, useColorMode, useColorModeValue } from "@chakra-ui/core";
import Taskbar from "../components/Taskbar"

const Layout = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  const bg = useColorModeValue("#080808", "#008f8f");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  const btn = "#304FFF";
  return (
    <Box bg={bg} color={color} minHeight="100vh">
      {props.children}
      <Taskbar></Taskbar>
    </Box>
  );
};

export default Layout;
