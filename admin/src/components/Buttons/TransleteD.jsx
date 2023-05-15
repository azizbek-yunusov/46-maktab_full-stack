import { Badge, Box, IconButton, Menu, MenuItem } from "@mui/material";
import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineTranslate } from "react-icons/md";

const TransleteD = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };
  const { i18n } = useTranslation();
  const handleLangChange = (value) => {
    i18n.changeLanguage(value);
    setAnchorEl(null);
  };
  const languages = [
    {
      name: "O'zbekcha",
      lng: "oz",
    },
    {
      name: "Ўзбекча",
      lng: "uz",
    },
    {
      name: "Русский",
      lng: "ru",
    },
  ];
  return (
    <div>
      <IconButton
        onClick={handleDropdownOpen}
        color="default"
        sx={{ marginX: 1 }}
        aria-label="translate"
      >
        <MdOutlineTranslate className="icon_color md:text-2xl text-xl" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ "& .MuiMenu-paper": { width: 130, marginTop: 1 } }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {languages.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleLangChange(item.lng)}
            selected={item.lng === localStorage.getItem("i18nextLng")}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default TransleteD;
