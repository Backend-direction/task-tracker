import React, { useRef, useState, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import CardPreview from '../card-preview/card-preview';

export const FormInputImage = ({ name }) => {
  const { control } = useFormContext();
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)

  const imageElement = useRef();

 const showImage = (e) => {
  if (!e.target.files || e.target.files.length === 0) {
    setSelectedFile(undefined)
    return
  }

  setSelectedFile(e.target.files[0])
 }

 useEffect(() => {
    if (!selectedFile) {
        setPreview(null)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const imagePreview = () => {
    if(preview) {
      return (
        <img
          ref={imageElement} 
          src={preview}
          alt="screen"
          style={{ height: "215px", width: '400px', objectFit: 'contain'}} 
        />
      )
    } else {
      return (
        <Box 
          style={{ 
            width: "100%",
            height: '215px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }} 
        >
          No preview
        </Box>
      )
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <Box sx={{ position: 'relative', height: '215px'}}>
          <CardPreview src={preview} height='215' width='400' />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            sx={{ position: 'absolute', bottom: '10px', right: '10px'}}
          >
            <input 
              hidden 
              accept="image/*"
              type="file"
              onChange={(e) => {
                showImage(e);
                onChange(e.target.files[0]);
              }}
            />
            <PhotoCamera sx={{ fill: '#1976d2 !important'}}/>
          </IconButton>
        </Box>
      )}
    />
  );
};