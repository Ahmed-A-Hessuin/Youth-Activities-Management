import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Link, useNavigate } from "react-router-dom";






export default function SplitButton() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [data, setData] = useState([])
  const [menu, SetMenu] = useState("جميع الانشطه")
  const [id, setId] = useState('')
  const fetchData = async () => {
    const response = await fetch("https://actitvityv1.onrender.com/categories");
    const data = await response.json();
    setData(data.result)
    console.log(data)

  }
  useEffect(() => {
    fetchData()
  }, [])
  function goToDetails(_id) {
    // alert(_id)
    navigate({ pathname: `/details`, search: `?_id=${_id}` });
    // window.location.reload(false)
  }

  const handleClick = () => {
    console.info(`You clicked ${menu}`);
    if (menu === "جميع الانشطه") {
      navigate('/home')
    } else {
      goToDetails(id);
    }
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setId(data[index]._id)
    SetMenu(data[index].title_ar);
    setOpen(false);

  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            background: "transparent",
          }}
          onClick={handleClick}
        >
          {menu}
        </Button>

        <Button
          size="large"
          sx={{ fontSize: "32px", background: "transparent" }}
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
          backgroundColor: "transparent",
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper
              sx={
                {
                  // backgroundColor: "transparent",
                }
              }
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {data.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option.title_ar}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
