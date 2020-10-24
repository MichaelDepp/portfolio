import { VStack, Box } from "@chakra-ui/core";
import Widget from "../components/Widget";

const Desktop = (props) => {
  return (
    <Box pt={5} pl={3}>
      <Box mb={3}>
        <Widget name={"My Computer"} ico={"./assets/computer.png"} />
      </Box>
      <Box mb={3}>
        <Widget name={"Recyle Bin"} ico={"./assets/bin.png"} />
      </Box>
    </Box>
  );
};

export default Desktop;
