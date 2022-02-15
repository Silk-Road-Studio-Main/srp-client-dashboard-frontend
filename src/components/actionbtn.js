import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatedBox = styled('div')({
  backgroundColor: 'pink',
  width: 30,
  height: 30,
  animation: `${spin} 1s infinite ease`,
});

export default function ActionBtn() {
  return (
    <>
      <RotatedBox />
      <Box
        sx={{
          backgroundColor: 'red',
          width: 30,
          height: 30,
          animation: `${spin} 1s infinite ease`,
        }}
      />
    </>
  );
}
