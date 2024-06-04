import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
  CircularProgress
} from "@mui/material";
import { Formik } from "formik";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

const Form = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  submitButtonLabel,
  toggleButtonLabel,
  togglePageType,
  isLoading
}) => {
  const { palette } = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {fields.map((field, index) => {
              if (field.type === 'dropzone') {
                return (
                  <Box
                    key={index}
                    gridColumn="span 4"
                    border={`1px solid ${palette.neutral.medium}`}
                    borderRadius="5px"
                    p="1rem"
                  >
                    <Dropzone
                      acceptedFiles=".jpg,.jpeg,.png"
                      multiple={false}
                      onDrop={(acceptedFiles) =>
                        setFieldValue(field.name, acceptedFiles[0])
                      }
                    >
                      {({ getRootProps, getInputProps }) => (
                        <Box
                          {...getRootProps()}
                          border={`2px dashed ${palette.primary.main}`}
                          p="1rem"
                          sx={{ "&:hover": { cursor: "pointer" } }}
                        >
                          <input {...getInputProps()} />
                          {!values[field.name] ? (
                            <p>{field.placeholder}</p>
                          ) : (
                            <FlexBetween>
                              <Typography>{values[field.name].name}</Typography>
                            </FlexBetween>
                          )}
                        </Box>
                      )}
                    </Dropzone>
                  </Box>
                );
              } else {
                return (
                  <TextField
                    key={index}
                    label={field.label}
                    type={field.type}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values[field.name]}
                    name={field.name}
                    error={Boolean(touched[field.name]) && Boolean(errors[field.name])}
                    helperText={touched[field.name] && errors[field.name]}
                    sx={{ gridColumn: `span ${field.span || 4}` }}
                  />
                );
              }
            })}
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : submitButtonLabel}
            </Button>
            <Typography
              onClick={() => {
                togglePageType();
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              {toggleButtonLabel}
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['text', 'password', 'email', 'dropzone']).isRequired,
      span: PropTypes.number,
      placeholder: PropTypes.string
    })
  ).isRequired,
  submitButtonLabel: PropTypes.string.isRequired,
  toggleButtonLabel: PropTypes.string.isRequired,
  togglePageType: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

export default Form;
