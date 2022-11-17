import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from '../form/form-input-text';
import { FormAutocomplete } from '../form/form-autocomplete';
import { FormInputImage } from '../form/form-input-image';
import useRequest from '../../hooks/use-request';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const managers = ['MacGonegel', 'Sirius Sneip'];

const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function CreateProjectDialog({ open, handleClose, addProject }) {
  const [snackbarMessage, setSnackbar] = React.useState('');

  const closeSnackbar= (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar('');
  };

  const methods = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      description: "",
      productOwner: "",
      team: "",
      image: null
    },
    shouldUnregister: false
  });

  const { doRequest } = useRequest(
    {
      url: '/api/v1/project',
      method: 'post',
      body: {},
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onSuccess: (project) => {
        addProject(project);
        handleClose();
      },
      onError: (err) => {
        setSnackbar(err);
      }
    },
  );

  const { handleSubmit } = methods;
  const onSubmit = async (data) => {
    await doRequest(data);
  };

  return (
    <>
    
      <Dialog open={open} onClose={handleClose}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit((data) => {
              onSubmit(data)
            })}
          >
            <DialogTitle>
              Create new project
            </DialogTitle>

            <DialogContent>
              <DialogContentText>
                Here you can create new project with all necessary info
              </DialogContentText>

              <FormInputImage 
                name="image"
              />

              <FormInputText
                name="name"
                label="Name*"
                rules={{ required: "Required" }}
              /> 

              <FormInputText
                name="description"
                label="Description*"
                rules={{ required: "Required" }}
              /> 

              <FormAutocomplete
                label={"Assigne PO*"}
                name="productOwner"
                options={managers}
                rules={{ required: "Required" }}
              />

              <FormAutocomplete
                label={"Assigne team*"}
                name="team"
                options={managers}
                rules={{ required: "Required" }}
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit(onSubmit)}>Create</Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
      <Snackbar open={!!snackbarMessage} autoHideDuration={6000} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  )
}