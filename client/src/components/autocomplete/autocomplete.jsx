import React, { useState } from 'react';

import AutocompleteMui from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import useRequest from '../../hooks/use-request';

export default function Autocomplete({ label, getOptionLabel, field, invalid, error, url }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const { doRequest } = useRequest(
    {
      url,
      method: 'get',
      onError: (_err) => {
        setOptions([]);
      }
    },
  )

  async function  getOptions() {
    return await doRequest();
  }

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const options = await getOptions();

      if (active) {
        setOptions([...options]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);


  return (
    <AutocompleteMui
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={getOptionLabel}
      options={options}
      loading={loading}
      sx={{ width: '100%', mt: 3 }}
      onChange={(e, value) => field.onChange(value)}
      onInputChange={(_, data) => {
        if (data) field.onChange(data);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={invalid}
          helperText={error?.message}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
        }}
      />
      )}
    />
  )
}