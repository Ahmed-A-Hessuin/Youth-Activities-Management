
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import './nav.css'
import MenuIcon from "@mui/icons-material/Menu";
import { Home } from "@mui/icons-material";
import { Button, ClickAwayListener, MenuItem, MenuList, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import DropDown from './DropMenu'




const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%"
})
const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "& ::placeholder": {
    color: "red",
    opacity: 1.5,
    padding: 15
  },
  "&:hover": {
    backgroundColor: "transparent",
    "& ::placeholder": {
      color: "white",
      opacity: 1,
    },
  },

  marginRight: theme.spacing(4),

  width: "30%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
  },
}));
const Icons = styled(Box)(({ theme }) => ({

  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "0",
  width: "15%"
}));



export default function PrimarySearchAppBar(props) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const [lang, setLang] = useState('ar')
  const [data, setData] = useState([])
  const { t, i18n } = useTranslation();
  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <>
      {i18n.language === "en" && (
        <AppBar
          position="sticky"
          style={{ direction: "ltr" }}
          sx={{ background: "#294292", height: "70px" }}
        >
          <StyledToolbar>
            <Box sx={{ cursor: "pointer" }}>
              <Link to="home" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                      color: "white",
                      textDecoration: "none",
                    },
                  }}
                >
                  <span style={{ color: "#fff", fontWeight: "bold" }}>
                    {t("Thebes Academy")}
                  </span>


                </Typography>
                <Home sx={{ display: { xs: "block", md: "none" } }} style={{
                  fontSize: '50px', color: 'white',
                  border: '1px solid #42a5f5'
                }} />
              </Link>
            </Box>


            <Icons>
              {props.userData ? (
                <>
                  <Button
                    sx={{
                      fontSize: "18px",
                      color: "white",
                      backgroundColor: "white",
                      marginRight: "40px",

                    }}
                  >
                    <Link to={`profile/`}>
                      <i class="fa-solid fa-user"></i>
                    </Link>
                  </Button>
                  {/* <Link  className={`${style.nav_link} nav-link`} to="login">Logout</Link> */}
                  <Button
                    variant="contained"
                    sx={{
                      display: { lg: 'flex', sm: "none", md: "none", xs: 'none' },
                      background: "transparent",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "lightblue",
                        color: "navy",

                      },
                      fontSize: "16px",
                      padding: '9px 50px',
                    }}
                  >
                    <a onClick={props.logout}>{t("logOut")}</a>
                  </Button>

                  <Typography
                    sx={{ display: { lg: 'flex', sm: "none", md: "none", xs: 'none' } }}
                    xs={{ color: "white" }}
                  >
                    {i18n.language === "en" && (
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "lightblue",
                            color: "navy",
                          },
                          fontSize: "20px",
                          marginLeft: '10px',
                        }}
                        onClick={() => {
                          i18n.changeLanguage("ar");
                          navigate("/home");
                        }}
                      >
                        عربى
                      </Button>
                    )}
                    {i18n.language === "ar" && (
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          "&:hover": { backgroundColor: "lightblue" },
                          fontSize: "20px",
                          marginLeft: '10px',
                        }}
                        onClick={() => {
                          i18n.changeLanguage("en");
                          navigate("/homeEn");
                        }}
                      >
                        English
                      </Button>
                    )}
                  </Typography>
                  <Box sx={{ display: { lg: 'none' } }}>
                    <Icons
                      size="large"
                      aria-label="show more"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <MenuIcon
                        sx={{
                          cursor: "pointer",
                          fontSize: "40px",
                        }}
                        onClick={() => setOpen(!open)}
                      />

                      {open && (
                        <Paper
                          sx={{
                            position: "absolute",
                            top: "57px",
                            right: "50px",
                            width: "auto",
                            heigth: "300px",
                            overflow: "hidden",
                            borderRadius: "5px",
                          }}
                        >
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu">
                              <MenuItem onClick={handleClose}>
                                <Link
                                  onClick={props.logout}
                                  style={{
                                    textDecoration: "none",
                                    fontSize: "19px",
                                  }}
                                >
                                  {t("logOut")}
                                </Link>
                              </MenuItem>
                              <MenuItem>
                                {i18n.language === "en" && (
                                  <span
                                    style={{
                                      cursor: "pointer",
                                      color: "#0d6efd",
                                      fontSize: "20px",
                                    }}
                                    onClick={() => {
                                      i18n.changeLanguage("ar");
                                      navigate("/home");
                                      handleClose();
                                    }}
                                  >
                                    عربى
                                  </span>
                                )}
                                {i18n.language === "ar" && (
                                  <span
                                    style={{
                                      cursor: "pointer",
                                      color: "#0d6efd",
                                      fontSize: "16px",
                                    }}
                                    onClick={() => {
                                      i18n.changeLanguage("en");
                                      navigate("/homeEn");
                                      handleClose();
                                    }}
                                  >
                                    English
                                  </span>
                                )}
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      )}
                    </Icons>
                  </Box>
                </>
              ) : (
                <>
                  <Typography sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: "none" } }}>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          // padding: '0px 40px 0px 40px',
                          "&:hover": {
                            backgroundColor: "lightblue",
                            color: "navy",
                          },
                          fontSize: "20px",
                        }}
                      >
                        {t("Register")}
                      </Button>
                    </Link>
                  </Typography>
                  <Typography
                    sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: "none" } }}
                    xs={{ color: "white" }}
                  >
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "lightblue",
                            color: "navy",
                          },
                          fontSize: "20px",
                        }}
                      >
                        {t("Login")}
                      </Button>
                    </Link>
                  </Typography>
                  <Typography
                    sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: "none" } }}
                    xs={{ color: "white" }}
                  >
                    {i18n.language === "en" && (
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "lightblue",
                            color: "navy",
                          },
                          fontSize: "20px",
                        }}
                        onClick={() => {
                          i18n.changeLanguage("ar");
                          navigate("/home");
                        }}
                      >
                        عربى
                      </Button>
                    )}
                    {i18n.language === "ar" && (
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          "&:hover": { backgroundColor: "lightblue" },
                          fontSize: "20px",
                        }}
                        onClick={() => {
                          i18n.changeLanguage("en");
                          navigate("/homeEn");
                        }}
                      >
                        English
                      </Button>
                    )}
                  </Typography>
                  <Box sx={{ display: { lg: 'none' } }}>
                    <Icons
                      size="large"
                      aria-label="show more"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <MenuIcon
                        sx={{
                          cursor: "pointer",
                          fontSize: "40px",
                        }}
                        onClick={() => setOpen(!open)}
                      />

                      {open && (
                        <Paper
                          sx={{
                            position: "absolute",
                            top: "57px",
                            right: "50px",
                            width: "auto",
                            heigth: "300px",
                            overflow: "hidden",
                            borderRadius: "5px",
                          }}
                        >
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu">
                              <MenuItem onClick={handleClose}>
                                <Link
                                  to="/register"
                                  style={{
                                    textDecoration: "none",
                                    fontSize: "22px",
                                  }}
                                >
                                  {t("Register")}
                                </Link>
                              </MenuItem>

                              <MenuItem onClick={handleClose}>
                                <Link
                                  to="/login"
                                  style={{
                                    textDecoration: "none",
                                    fontSize: "22px",
                                  }}
                                >
                                  {t("Login")}
                                </Link>
                              </MenuItem>
                              <MenuItem>
                                {i18n.language === "en" && (
                                  <span
                                    style={{
                                      cursor: "pointer",
                                      color: "#0d6efd",
                                      fontSize: "20px",
                                    }}
                                    onClick={() => {
                                      i18n.changeLanguage("ar");
                                      navigate("/home");
                                      handleClose();
                                    }}
                                  >
                                    عربى
                                  </span>
                                )}
                                {i18n.language === "ar" && (
                                  <span
                                    style={{
                                      cursor: "pointer",
                                      color: "#0d6efd",
                                      fontSize: "16px",
                                    }}
                                    onClick={() => {
                                      i18n.changeLanguage("en");
                                      navigate("/homeEn");
                                      handleClose();
                                    }}
                                  >
                                    English
                                  </span>
                                )}
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      )}
                    </Icons>
                  </Box>
                </>
              )}
            </Icons>
          </StyledToolbar>
        </AppBar>
      )}
      {i18n.language === "ar" && (
        <AppBar
          position="sticky"
          style={{ direction: "rtl" }}
          sx={{ background: "#294292", height: "70px" }}
        >
          <StyledToolbar>
            <Box sx={{ cursor: "pointer" }}>
              <Link to="home" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                      color: "white",
                      textDecoration: "none",
                    },
                  }}
                >
                  <span style={{ color: "#fff", fontWeight: "bold" }}>
                    {t("Thebes Academy")}
                  </span>
                </Typography>
                <Home sx={{ display: { xs: "block", md: "none" } }} style={{
                  fontSize: '50px', color: 'white',
                  border: '1px solid #42a5f5'
                }} />
              </Link>
            </Box>
            <DropDown />

            <Icons>
              {props.userData ? (
                <>
                  <Button
                    sx={{
                      fontSize: "18px",
                      color: "white",
                      backgroundColor: "white",
                      marginRight: "40px",
                      marginLeft: "50px"

                    }}
                  >
                    <Link to={`profile/`}>
                      <i class="fa-solid fa-user"></i>
                    </Link>
                  </Button>
                  {/* <Link  className={`${style.nav_link} nav-link`} to="login">Logout</Link> */}
                  <Button
                    variant="contained"
                    sx={{
                      display: { lg: 'flex', sm: "none", md: "none", xs: 'none' },
                      background: "transparent",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "lightblue",
                        color: "navy",

                      },
                      fontSize: "16px",
                      padding: '9px 50px',
                      marginLeft: "20px",
                    }}
                  >
                    <a onClick={props.logout}>{t("logOut")}</a>
                  </Button>

                  <Typography
                    sx={{ display: { lg: 'flex', sm: "none", md: "none", xs: 'none' } }}
                    xs={{ color: "white" }}
                  >
                    {i18n.language === "en" && (
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "lightblue",
                            color: "navy",
                          },
                          fontSize: "20px",
                          marginLeft: '10px',
                        }}
                        onClick={() => {
                          i18n.changeLanguage("ar");
                          navigate("/home");
                        }}
                      >
                        عربى
                      </Button>
                    )}
                    {i18n.language === "ar" && (
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          "&:hover": { backgroundColor: "lightblue" },
                          fontSize: "20px",
                          marginLeft: '10px',
                        }}
                        onClick={() => {
                          i18n.changeLanguage("en");
                          navigate("/homeEn");
                        }}
                      >
                        English
                      </Button>
                    )}
                  </Typography>
                  <Box sx={{ display: { lg: 'none' } }}>
                    <Icons
                      size="large"
                      aria-label="show more"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <MenuIcon
                        sx={{
                          cursor: "pointer",
                          fontSize: "40px",
                        }}
                        onClick={() => setOpen(!open)}
                      />

                      {open && (
                        <Paper
                          sx={{
                            position: "absolute",
                            top: "57px",
                            left: "50px",
                            width: "auto",
                            heigth: "300px",
                            overflow: "hidden",
                            borderRadius: "5px",
                          }}
                        >
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu">
                              <MenuItem onClick={handleClose}>
                                <Link
                                  onClick={props.logout}
                                  style={{
                                    textDecoration: "none",
                                    fontSize: "19px",
                                  }}
                                >
                                  {t("logOut")}
                                </Link>
                              </MenuItem>
                              <MenuItem>
                                {i18n.language === "en" && (
                                  <span
                                    style={{
                                      cursor: "pointer",
                                      color: "#0d6efd",
                                      fontSize: "20px",
                                    }}
                                    onClick={() => {
                                      i18n.changeLanguage("ar");
                                      navigate("/home");
                                      handleClose();
                                    }}
                                  >
                                    عربى
                                  </span>
                                )}
                                {i18n.language === "ar" && (
                                  <span
                                    style={{
                                      cursor: "pointer",
                                      color: "#0d6efd",
                                      fontSize: "16px",
                                    }}
                                    onClick={() => {
                                      i18n.changeLanguage("en");
                                      navigate("/homeEn");
                                      handleClose();
                                    }}
                                  >
                                    English
                                  </span>
                                )}
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      )}
                    </Icons>
                  </Box>
                </>
              ) : (
                <>
                  <Typography sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: "none" } }}>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          // padding: '0px 40px 0px 40px',
                          "&:hover": {
                            backgroundColor: "lightblue",
                            color: "navy",
                          },
                          fontSize: "20px",
                        }}
                      >
                        {t("Register")}
                      </Button>
                    </Link>
                  </Typography>
                  <Typography
                    sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: "none" } }}
                    xs={{ color: "white" }}
                  >
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "lightblue",
                            color: "navy",
                          },
                          fontSize: "20px",
                        }}
                      >
                        {t("Login")}
                      </Button>
                    </Link>
                  </Typography>
                  <Typography
                    sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: "none" } }}
                    xs={{ color: "white" }}
                  >
                    {i18n.language === "en" && (
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "lightblue",
                            color: "navy",
                          },
                          fontSize: "20px",
                        }}
                        onClick={() => {
                          i18n.changeLanguage("ar");
                          navigate("/home");
                        }}
                      >
                        عربى
                      </Button>
                    )}
                    {i18n.language === "ar" && (
                      <Button
                        variant="contained"
                        sx={{
                          background: "transparent",
                          color: "white",
                          "&:hover": { backgroundColor: "lightblue" },
                          fontSize: "20px",
                        }}
                        onClick={() => {
                          i18n.changeLanguage("en");
                          navigate("/homeEn");
                        }}
                      >
                        English
                      </Button>
                    )}
                  </Typography>
                  <Box sx={{ display: { lg: 'none' } }}>
                    <Icons
                      size="large"
                      aria-label="show more"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <MenuIcon
                        sx={{
                          cursor: "pointer",
                          fontSize: "40px",
                        }}
                        onClick={() => setOpen(!open)}
                      />

                      {open && (
                        <Paper
                          sx={{
                            position: "absolute",
                            top: "57px",
                            left: "50px",
                            width: "auto",
                            heigth: "300px",
                            overflow: "hidden",
                            borderRadius: "5px",
                          }}
                        >
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu">
                              <MenuItem onClick={handleClose}>
                                <Link
                                  to="/register"
                                  style={{
                                    textDecoration: "none",
                                    fontSize: "22px",
                                  }}
                                >
                                  {t("Register")}
                                </Link>
                              </MenuItem>

                              <MenuItem onClick={handleClose}>
                                <Link
                                  to="/login"
                                  style={{
                                    textDecoration: "none",
                                    fontSize: "22px",
                                  }}
                                >
                                  {t("Login")}
                                </Link>
                              </MenuItem>
                              <MenuItem>
                                {i18n.language === "en" && (
                                  <span
                                    style={{
                                      cursor: "pointer",
                                      color: "#0d6efd",
                                      fontSize: "20px",
                                    }}
                                    onClick={() => {
                                      i18n.changeLanguage("ar");
                                      navigate("/home");
                                      handleClose();
                                    }}
                                  >
                                    عربى
                                  </span>
                                )}
                                {i18n.language === "ar" && (
                                  <span
                                    style={{
                                      cursor: "pointer",
                                      color: "#0d6efd",
                                      fontSize: "16px",
                                    }}
                                    onClick={() => {
                                      i18n.changeLanguage("en");
                                      navigate("/homeEn");
                                      handleClose();
                                    }}
                                  >
                                    English
                                  </span>
                                )}
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      )}
                    </Icons>
                  </Box>
                </>
              )}
            </Icons>
          </StyledToolbar>
        </AppBar>
      )}

    </>
  );
}
