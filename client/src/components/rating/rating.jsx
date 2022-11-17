import { useState } from "react";
import RatingMui from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const StyledRating = styled(RatingMui)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
  '& .MuiSvgIcon-root': {
    fill: '#ff3d47 !important'
  },
});

export default function Rating() {
  const [value, setValue] = useState(2);

  return (
    <StyledRating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  />
  )
} 