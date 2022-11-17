import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from '@mui/material/TextField';
import AutocompleteMui from '@mui/material/Autocomplete'

export const FormAutocomplete = ({ 
  name,
  rules,
  options,
  getOptionLabel,
  ...rest
 }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={null}
      render={({
        field: { ref, ...field },
        fieldState: { error, invalid }
      }) => (
        <AutocompleteMui
          {...field}
          freeSolo
          handleHomeEndKeys
          options={options}
          getOptionLabel={getOptionLabel}
          renderInput={(params) => (
            <TextField
              {...params}
              {...rest}
              inputRef={ref}
              error={invalid}
              helperText={error?.message}
            />
          )}
          sx={{ width: '100%', mt: 3 }}
          onChange={(e, value) => field.onChange(value)}
          onInputChange={(_, data) => {
            if (data) field.onChange(data);
          }}
        />
      )}
    />
  );
};