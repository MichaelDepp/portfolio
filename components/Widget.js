const { Center, Box, Image, Text } = require("@chakra-ui/core");

const Widget = (props) => {
  return (
    <Box w={80} h={"auto"}>
      <Center>
        <Image
          boxSize={60}
          objectFit="cover"
          src={props.ico}
          alt="Michael's Computer"
        ></Image>
      </Center>
      <Text textAlign="center" fontSize={"0.785em"}>
        {props.name}
      </Text>
    </Box>
  );
};

export default Widget;
