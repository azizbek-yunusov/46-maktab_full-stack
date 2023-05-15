import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const MoreMenu = ({ isFilter, setIsFilterm, fetch }) => {
  let { t } = useTranslation(["home"]);
  const dispatch = useDispatch();
  const { access_token } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };
  const isShowFilterPanel = () => {
    setIsFilter(!isFilter);
    setAnchorEl(null);
  };
  return (
    <div className="absolute top-3 right-3">
      <IconButton onClick={handleDropdownOpen}>
        <BiDotsVerticalRounded />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ "& .MuiMenu-paper": { width: 150, marginTop: 1 } }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={() => dispatch(fetch(access_token))}>{t("refresh")}</MenuItem>
        <MenuItem onClick={isShowFilterPanel}>{t("filter-bar")} </MenuItem>
      </Menu>
    </div>
  );
};

export default MoreMenu;
