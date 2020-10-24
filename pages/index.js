import {
  Button,
  Heading,
  useColorMode,
  useColorModeValue,
  Image,
  VStack,
  Text,
  Box,
  Center,
  Container,
  Flex,
} from "@chakra-ui/core";
import Layout from "../components/Layout"
import Desktop from "../components/Desktop"

const Index = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#00102A", "#F8F8F8");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  const btn = "#304FFF";
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");
  return (
      <Layout>
          <Desktop></Desktop>
      </Layout>
  );
};

export default Index;
