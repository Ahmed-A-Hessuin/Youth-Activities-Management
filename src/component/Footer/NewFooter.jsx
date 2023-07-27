import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { TextField, styled } from "@mui/material";
import './footer.css'
import {
  MDBFooter,
  MDBContainer,

  MDBCol,
  MDBRow,

} from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
export default function NewFooter() {
  const StyledButton = styled(Button)({
    "&:hover": {
      backgroundColor: "#8171c0",
    },
  });
  const CssTextField = styled(TextField)({

    "& label.Mui-focused": {

      color: "white",
      fontWeight: "bold",
      fontSize: "20px"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6F7E8C",
      },
    },
  });
  const { t, i18n } = useTranslation();
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <StyledButton
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              paddingLeft: "0px",
              paddingRight: "0px",
              margin: "5px",
            }}
          >
            <LinkedInIcon />
          </StyledButton>
          <StyledButton
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              paddingLeft: "0px",
              paddingRight: "0px",
              margin: "5px",
            }}
          >
            <GoogleIcon />
          </StyledButton>
          <StyledButton
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              paddingLeft: "0px",
              paddingRight: "0px",
              margin: "5px",
            }}
          >
            <FacebookIcon />
          </StyledButton>
          <StyledButton
            variant="contained"
            sx={{ backgroundColor: "transparent", color: "white" }}
          >
            <GitHubIcon />
          </StyledButton>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center align-items-center ">
              <MDBCol size="auto">
                <p className="pt-2">
                  {i18n.language === "ar" && (
                    <strong>{t("Sign up for our newsletter")}</strong>
                  )}
                  {i18n.language === "en" && (
                    <strong>Sign up for our newsletter</strong>
                  )}
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <CssTextField
                  label="Email Address"
                  required
                  variant="outlined"
                  color="primary"
                  type="text"
                  InputLabelProps={{ className: 'textLabel' }}
                  sx={{ mb: 3, marginTop: "15px", color: "white" }}
                  fullWidth
                />
              </MDBCol>

              <MDBCol size="auto">
                <Button
                  variant="outlined"
                  color="primary"
                  type="submit"
                  sx={{
                    fontSize: "17px",
                    color: "white",
                    width: "300px",
                    background: "#294292",
                    marginBottom: "10px",
                    "&:hover": {
                      color: "#994292",
                    },
                  }}
                >
                  {t("Subscribe")}
                </Button>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="">
          <MDBRow className="d-flex justify-content-center align-items-center ">
            <MDBCol size="auto">
              {" "}
              <h5>العنوان</h5>
              <p>أول كورنيش النيل - خلف مستشفى النيل بدراوي ، القاهرة ، مصر</p>
            </MDBCol>
            <MDBCol size="auto">
              <h5>رقم التليفون</h5>
              <p>0552151021 - 21502051303</p>
            </MDBCol>
          </MDBRow>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol>
              <a href="#!" className="text-white">
                خريطة الموقع
              </a>
            </MDBCol>
            <MDBCol>


              <a href="#!" className="text-white">
                الجامعات المصرية
              </a>
            </MDBCol>

            <MDBCol>

              <a href="#!" className="text-white">
                بنك المعرفة المصري
              </a>
            </MDBCol>
            <MDBCol>


              <a href="#!" className="text-white">
                بوابة الحكومة المصرية
              </a>
            </MDBCol>
            <MDBCol>


              <a href="#!" className="text-white">
                ... المزيد
              </a>

            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        created by Developer{" "}
        <span className="text-white">
          <strong>Hamza Ramadan</strong>
        </span>{" "}
        | all rights reserved 2023 © 2020 Copyright
      </div>
    </MDBFooter>
  );
}
