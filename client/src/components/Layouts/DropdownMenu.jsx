import React from "react";

const DropdownMenu = () => {
  const handleLangChange = (lng) => {
    i18n.changeLanguage(lng);
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="flex_betwen transition_normal">
        <div
          onClick={handleClick}
          className="flex items-center cursor-pointer text-gray-100"
        >
          <p className={`${color}`}>
            {i18n.language === "uz"
              ? "O'zbekcha"
              : i18n.language === "en"
              ? "English"
              : i18n.language === "ru"
              ? "Русский"
              : null}
          </p>
          <MdOutlineKeyboardArrowDown className={`${color} text-xl`} />
        </div>
      </div>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menu.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleLangChange(item.lng)}
          >
            <div className="flex items-center justify-between">{item.name}</div>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default DropdownMenu;
