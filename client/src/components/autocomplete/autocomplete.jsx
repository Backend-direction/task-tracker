import { useState } from 'react';

import AutocompleteMui from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const options = ['Option 1', 'Option 2'];

export default function Autocomplete({ label }) {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <AutocompleteMui
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={options}
      sx={{ width: '100%', mt: 3 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  )
}