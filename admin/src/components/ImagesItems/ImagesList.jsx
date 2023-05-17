import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { BiExport, BiSearch, BiTable } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HelmetTitle from "../../utils/HelmetTitle";
import { MoreMenu, NotData } from "../Helpers";
import { Layout } from "../Layouts";
import GridList from "./GridList";
import TableBody from "./TableBody";
import {
  deleteImage,
  getImages,
  selectedDeleteImage,
} from "../../redux/imageSlice";

const ImagesList = () => {
  let { t } = useTranslation(["dashboard"]);
  const { access_token } = useSelector((state) => state.auth);
  const { isLoading, images } = useSelector((state) => state.image);
  const dispatch = useDispatch();
  const isXl = useMediaQuery("(min-width: 1245px)");
  const [term, setTerm] = useState("");
  const [isTable, setIsTable] = useState(false);
  const [isFilter, setIsFilter] = useState(true);

  const [selectedImageIds, setSelectedImageIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const filteredImages = images;

  const handleSelectAll = (event) => {
    let newSelectedImageIds;

    if (event.target.checked) {
      newSelectedImageIds = images.map((image) => image._id);
    } else {
      newSelectedImageIds = [];
    }

    setSelectedImageIds(newSelectedImageIds);
  };

  const handleSelectOne = (event, _id) => {
    const selectedIndex = selectedImageIds.indexOf(_id);
    let newSelectedImageIds = [];

    if (selectedIndex === -1) {
      newSelectedImageIds = newSelectedImageIds.concat(selectedImageIds, _id);
    } else if (selectedIndex === 0) {
      newSelectedImageIds = newSelectedImageIds.concat(
        selectedImageIds.slice(1)
      );
    } else if (selectedIndex === selectedImageIds.length - 1) {
      newSelectedImageIds = newSelectedImageIds.concat(
        selectedImageIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedImageIds = newSelectedImageIds.concat(
        selectedImageIds.slice(0, selectedIndex),
        selectedImageIds.slice(selectedIndex + 1)
      );
    }

    setSelectedImageIds(newSelectedImageIds);
  };

  const handleDeleteImage = async (id) => {
    try {
      await dispatch(deleteImage({ access_token, id }));
      toast.success(t("image-delete"));
    } catch (err) {
      console.log();
    }
  };
  const handleSelectedDelete = async () => {
    try {
      const selectedIds = {
        selected: selectedImageIds,
      };
      await dispatch(selectedDeleteImage({ access_token, selectedIds }));
      dispatch(getImages());
      setSelectedImageIds([]);
      toast.success(t("image-selected-deleted"));
    } catch (err) {
      console.log();
    }
  };

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  console.log(images);
  return (
    <main>
      <HelmetTitle title={t("all-image")} />
      <Layout>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <section>
            <div className="relative bg-white dark:bg-[#2e2d4a] rounded-lg overflow-hidden my-6 border border-gray-300 dark:border-gray-600">
              <h1 className="p-5 text-gray-600 dark:text-gray-200 text-xl font-semibold">
                {t("search-filter")}
              </h1>
              <MoreMenu isFilter={isFilter} setIsFilter={setIsFilter} />
              {isFilter && (
                <div className="grid grid-cols-3 gap-x-5 pb-6 mb-3 px-5 border-b border-b-gray-200 dark:border-b-gray-600">
                  <FormControl size="medium" sx={{}}>
                    <InputLabel _id="demo-simple-select-label">
                      {t("select-category")}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      _id="demo-simple-select"
                      // value={"all"}
                      // onChange={(e) => setCategory(e.target.value)}
                      label={t("select-category")}
                    >
                      <MenuItem value={"all"}>All</MenuItem>
                      <MenuItem value={"user"}>images</MenuItem>
                      <MenuItem value={"admin"}>Admins</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="medium" sx={{}}>
                    <InputLabel _id="demo-simple-select-label">
                      {t("select-image")}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      _id="demo-simple-select"
                      // value={"all"}
                      // onChange={(e) => setCategory(e.target.value)}
                      label={t("select-image")}
                    >
                      <MenuItem value={"all"}>Date</MenuItem>
                      <MenuItem value={"user"}>Name</MenuItem>
                      <MenuItem value={"admin"}>Status</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="medium" sx={{}}>
                    <InputLabel _id="demo-simple-select-label">
                      {t("select-rating")}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      _id="demo-simple-select"
                      // value={"all"}
                      // onChange={(e) => setCategory(e.target.value)}
                      label={t("select-rating")}
                    >
                      <MenuItem value={"all"}>All</MenuItem>
                      <MenuItem value={"user"}>images</MenuItem>
                      <MenuItem value={"admin"}>Admins</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
              {selectedImageIds.length ? (
                <div className="flex w-ful items-center justify-between  py-[12.5px] px-4">
                  <h1 className="font-semibold text_color">{`(${
                    selectedImageIds.length
                  }) ${t("selected")}`}</h1>
                  <Button
                    variant="contained"
                    color="error"
                    size="medium"
                    onClick={() => handleSelectedDelete()}
                    sx={{
                      marginLeft: "15px",
                      minWidth: "130px",
                    }}
                    startIcon={<MdDelete />}
                  >
                    {t("delete")}
                  </Button>
                </div>
              ) : (
                <div className="flex w-full items-center justify-between py-3 px-4">
                  <FormControl
                    size="small"
                    sx={{ maxWidth: isXl ? "70px" : "80px" }}
                  >
                    <Select
                      labelId="demo-simple-select-label"
                      _id="demo-simple-select"
                      value={"10"}
                      // onChange={(e) => setCategory(e.target.value)}
                    >
                      <MenuItem value={"10"}>10</MenuItem>
                      <MenuItem value={"20"}>20</MenuItem>
                      <MenuItem value={"30"}>30</MenuItem>
                      <MenuItem value={"50"}>50</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: { lg: 500, xl: 500 } }}>
                    <TextField
                      size="small"
                      fullWidth
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BiSearch className="text-xl" />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t("search")}
                      variant="outlined"
                    />
                  </FormControl>
                  <div className="flex items-center">
                    <Link to={"/image/upload"}>
                      <Tooltip title={t("upload-image-title")}>
                        <Button
                          variant="contained"
                          size="medium"
                          sx={{
                            marginLeft: { lg: "10px", xl: "25px" },
                          }}
                          startIcon={<FiPlus />}
                        >
                          {t("upload-image")}
                        </Button>
                      </Tooltip>
                    </Link>
                  </div>
                </div>
              )}
              {images.length ? (
                <div>
                  {isTable ? (
                    <TableBody
                      images={images}
                      handleSelectAll={handleSelectAll}
                      selectedImageIds={selectedImageIds}
                      filteredImages={filteredImages}
                      handleSelectOne={handleSelectOne}
                      handleDeleteImage={handleDeleteImage}
                    />
                  ) : (
                    <GridList
                      images={images}
                      handleSelectAll={handleSelectAll}
                      selectedImageIds={selectedImageIds}
                      filteredImages={filteredImages}
                      handleSelectOne={handleSelectOne}
                      handleDeleteImage={handleDeleteImage}
                    />
                  )}
                </div>
              ) : (
                <NotData />
              )}
            </div>
          </section>
        )}
      </Layout>
    </main>
  );
};

export default ImagesList;
