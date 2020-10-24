import styled from "styled-components";

const Btn = styled.div`
  cursor: pointer;
  bottom: 0;
  width: 100%;
  height: 35px;
  background: rgb(195, 198, 205);
  border-top: 3px solid rgb(222, 235, 243);
  border-left: 3px solid rgb(222, 235, 243);
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: space-between;
  &:active {
    border-top: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid rgb(222, 235, 243);
    border-bottom: 3px solid rgb(222, 235, 243);
  }
`;

const Ico = styled.img`
  width: 1.5em;
  object-fit: contain;
`;

const Text = styled.p`
  font-family: 'windows';
  font-size: 1em;
`;

const Startbtn = (props) => {
  return (
    <Btn>
      <Ico src={"./assets/windows.png"}></Ico>
      <Text>Start</Text>
    </Btn>
  );
};

export default Startbtn;
