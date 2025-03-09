import {
  Box,
  Button,
  Card,
  Divider,
  Grid2,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const items = [1, 1];

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  province: "",
  pincode: "",
  city: "",
};

const validationSchema = Yup.object({
  streetAddress: Yup.string().required("Street address Required"),
  province: Yup.string().required("province Required"),
  pincode: Yup.number().required("pincode Required"),
  city: Yup.string().required("city Required"),
});

const Cart = () => {
  const createOrderUsingSelectedAddress = () => {};
  const handleOpenAddressModel = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (value) => {

    console.log("form value", value);

  };

  return (
    <div>
      <main className="lg:flex">
        <section className="lg:w-[30% ] space-y-6 lg:min-h-screen pt-10">
          {items.map((item, index) => (
            <CartItem key={index} />
          ))}
          <Divider />

          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill details</p>
            <div className="flex justify-between text-gray-400">
              <p>Itm total</p>
              <p>5000 LKR</p>
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Delivery fee</p>
              <p>60 LKR</p>
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Tax</p>
              <p>47 LKR</p>
            </div>
          </div>
          <Divider />
          <div className="flex justify-between text-gray-400">
            <p>Total</p>
            <p>45646 LKR</p>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose delivery Address
            </h1>

            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1].map((item, index) => (
                <AddressCard
                  key={index}
                  showButton={true}
                  handleSelectAddress={createOrderUsingSelectedAddress}
                />
              ))}

              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Add New Address
                  </h1>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModel}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid2 container spacing={2}>
                <Grid2 item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    placeholder="Street Address"
                    name="streetAddress"
                    variant="outlined"
                    error={!ErrorMessage("street Address")}
                    // helperText={
                    //   <ErrorMessage>
                    //     {(msg) => <span>{msg}</span>}
                    //   </ErrorMessage>
                    // }
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    placeholder="province"
                    name="province"
                    variant="outlined"
                    error={!ErrorMessage("province")}
                    // helperText={
                    //   <ErrorMessage>
                    //     {(msg) => <span>{msg}</span>}
                    //   </ErrorMessage>
                    // }
                  />
                </Grid2>

                <Grid2 item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    placeholder="city"
                    name="city"
                    variant="outlined"
                    error={!ErrorMessage("city")}
                    // helperText={
                    //   <ErrorMessage>
                    //     {(msg) => <span>{msg}</span>}
                    //   </ErrorMessage>
                    // }
                  />
                </Grid2>

                <Grid2 item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    placeholder="Pin code"
                    name="pincode"
                    variant="outlined"
                    error={!ErrorMessage("Pin code")}
                    // helperText={
                    //   <ErrorMessage>
                    //     {(msg) => <span>{msg}</span>}
                    //   </ErrorMessage>
                    // }
                  />
                </Grid2>

                <Grid2 item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    color="primary"
                
                  >
                    Deliver Here
                  </Button>
                </Grid2>
              </Grid2>
            </Form>
          </Formik>
        
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
