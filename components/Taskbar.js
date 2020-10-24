import {
  Flex,
  Center,
  useColorMode,
  useColorModeValue,
  Image,
  Box,
} from "@chakra-ui/core";
import Startbtn from "../components/Startbtn";

const Taskbar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#00102A", "#F8F8F8");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  const btn = "#304FFF";
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");
  return (
    <Flex
      justifyContent="space-between"
      width={"100vw"}
      bg={"#bfbfbf"}
      border={"2px"}
      borderColor={"#ffffff"}
      position="absolute"
      bottom="0"
    >
      <Center>
        <Startbtn></Startbtn>
      </Center>
      <Center>
        <Box pr={1} cursor="pointer">
          <Image
            boxSize={30}
            objectFit="cover"
            src={"./assets/light.png"}
            onClick={toggleColorMode}
          ></Image>
        </Box>
      </Center>
    </Flex>
  );
};

export default Taskbar;
