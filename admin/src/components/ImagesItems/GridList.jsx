import { Button, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { BiEdit } from "react-icons/bi";
import { BsEye, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const GridList = ({
  images,
  handleSelectAll,
  filteredImages,
  handleSelectOne,
  handleDeleteImage,
}) => {
  let { t } = useTranslation(["dashboard"]);
  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {filteredImages.length ? (
        filteredImages
          .map((item, index) => (
            <div
              key={index}
              className="col-span-1 rounded-lg border border-gray-200 dark:border-gray-600 p-2"
            >
              <img
                src={item.image.url}
                className="h-44 w-full rounded-xl object-cover"
                alt=""
              />
              <h1 className="text_color text-lg">
                {t("category")}: {item.category}
              </h1>
              <div className="flex justify-end">
                <Link to={`/image/${item._id}`}>
                  <Tooltip title="Update Item">
                    <IconButton
                      fullWidth
                      variant="contained"
                      size="small"
                      sx={{
                        marginRight: "6px",
                      }}
                    >
                      <BiEdit />
                    </IconButton>
                  </Tooltip>
                </Link>
                <Tooltip title="Delete Item">
                  <IconButton
                    onClick={() => handleDeleteImage(item._id)}
                    variant="contained"
                    size="small"
                    color="error"
                  >
                    <BsTrash />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          ))
          .reverse()
      ) : (
        <div className="flex_center p-5">
          <h1 className="w-full">no data</h1>
        </div>
      )}
    </div>
  );
};

export default GridList;
