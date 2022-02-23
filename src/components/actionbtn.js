import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const blink = keyframes`
  from { opacity: 1; }
  to { opacity: 0.7; }
`;

const BlinkedBtn = styled('button')({
  backgroundColor: 'red',
  width: 100,
  height: 30,
  animation: `${blink} 1s ease-in-out infinite`,
});

export default function ActionButton() {
  return <BlinkedBtn />;
}