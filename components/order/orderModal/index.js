import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import { useEthPrice } from "@components/hooks/useEthPrice";
import { Accordion, AccordionTab } from "primereact/accordion";

export default function OrderModal({
  selectedMerch,
  onPurchaseMerch,
  setMessage,
}) {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const { eth } = useEthPrice();
  const [visible, setVisible] = useState(true);

  const validate = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    if (data.confirmationEmail != data.email) {
      errors.confirmationEmail =
        "Confirmation email must match email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.confirmationEmail)
    ) {
      errors.confirmationEmail =
        "Invalid email address. E.g. example@email.com";
    }

    if (!data.accept) {
      errors.accept = "You need to agree to the terms and conditions.";
    }

    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    setShowMessage(true);
    onPurchaseMerch(data.email, (1 / eth.data) * selectedMerch.price);
    form.restart();
    setVisible(false);
    setMessage("Thank you for validating the purchase");
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <div className="form-demo">
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Input confirmed!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your proof of ownership is ready , you only have to confirm the
            transaction and the merch will be yours .
          </p>
        </div>
      </Dialog>

      <div>
        {visible && (
          <div className="card">
            <Form
              onSubmit={onSubmit}
              initialValues={{
                email: "",
                confirmationEmail: "",
                accept: false,
              }}
              validate={validate}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-fluid">
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span className="p-float-label p-input-icon-right">
                          <i className="pi pi-envelope" />
                          <InputText
                            id="email"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                          />
                          <label
                            htmlFor="email"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Email*
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />

                  <Field
                    name="confirmationEmail"
                    render={({ input, meta }) => (
                      <div className="field mb-4">
                        <span className="p-float-label p-input-icon-right">
                          <i className="pi pi-envelope" />
                          <InputText
                            id="confirmationEmail"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                          />
                          <label
                            htmlFor="confirmationEmail"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Confirmation Email*
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <div className="mb-3">
                    <Accordion>
                      <AccordionTab header="Agreement">
                        Dear sir or madam <br />
                        <br />
                        This transaction will be on the Ropsten test network .
                        It means that every Ether you will spend on this
                        transaction is fake Ether . So you won&apos;t loose any
                        money of your pocket . It&apos;s only for demo purposes
                        . If you want some more information on the Ropsten test
                        network , click on this{" "}
                        <a
                          href="https://ethereum.org/en/developers/docs/networks/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <u>link .</u>
                        </a>
                        <br />
                        <br />
                        Also we will use your email only for hashing purposes .
                        That means it won&apos;t be saved in a centralized
                        database. We need it for the creation of the zero
                        knowledge proof that you own this merch after your
                        finish paying the transaction . If you want to know more
                        about the zero knowledge proof , click on this{" "}
                        <a
                          href="https://www.youtube.com/watch?v=fOGdb1CTu5c"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <u>link .</u>
                        </a>
                        <br />
                        <br />
                        Every purchase will not be delivered , you will only get
                        the picture of the product that will be added to your
                        collection with a proof . Don&apos;t forget that this
                        website is for demo prupose .
                        <br />
                        <br />
                        Thank you for your time !
                        <br />
                        Firas Belhiba
                      </AccordionTab>
                    </Accordion>
                  </div>

                  <Field
                    name="accept"
                    type="checkbox"
                    render={({ input, meta }) => (
                      <div className="field-checkbox mb-4">
                        <Checkbox
                          inputId="accept"
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="accept"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          &nbsp; I agree to the terms and conditions*
                        </label>
                      </div>
                    )}
                  />

                  <Button
                    type="submit"
                    label="Submit"
                    className="mt-2"
                    style={{ backgroundColor: "black" }}
                  />
                </form>
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}
