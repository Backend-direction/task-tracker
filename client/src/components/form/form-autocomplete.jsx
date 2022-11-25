import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Autocomplete from "../autocomplete/autocomplete";

export const FormAutocomplete = ({ 
  name,
  rules,
  getOptionLabel,
  label,
  url,
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
        <Autocomplete  
          field={field}
          getOptionLabel={getOptionLabel}
          label={label}
          error={error}
          invalid={invalid}
          url={url}
        />
      )}
    />
  );
};