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
      productOwner: null,
      team: null,
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
  const onSubmit = async ({ name, description, productOwner, team, image}) => {
    const project = {
      name,
      description,
      productOwner: productOwner.id,
      team: team.id,
      image
    }

    await doRequest(project);
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
                name="productOwner"
                label={"Assigne PO*"}
                getOptionLabel={(option) => (`${option.user.name} ${option.user.surname}`)}
                rules={{ required: "Required" }}
                url='/api/v1/owners'
              />

              <FormAutocomplete
                name="team"
                label={"Assigne team*"}
                getOptionLabel={(option) => option.name}
                rules={{ required: "Required" }}
                url='/api/v1/teams'
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