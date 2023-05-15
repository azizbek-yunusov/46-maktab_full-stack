import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FiPlus } from "react-icons/fi";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { BiExport } from "react-icons/bi";
import TableBody from "./TableBody";
import { HelmetTitle } from "../../utils";
import { MoreMenu, NotData, SearchInput, TableButton } from "../Helpers";
import { useTranslation } from "react-i18next";
import { Layout } from "../Layouts";
// import GridList from "./GridList";
import {
  deleteReview,
  getAllReviews,
  selectedDeleteReview,
} from "../../redux/review";

const ReviewsList = () => {
  const { i18n } = useTranslation();
  let { t } = useTranslation(["product"]);
  const { isLoading, reviews } = useSelector((state) => state.review);
  const { brands } = useSelector((state) => state.brand);
  const { categories } = useSelector((state) => state.category);
  const { access_token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const isXl = useMediaQuery("(min-width: 1245px)");
  const [selectedReviewIds, setSelectedReviewIds] = useState([]);
  const [isTable, setIsTable] = useState(false);
  const [isFilter, setIsFilter] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredReviews = reviews.filter((value) => {
    const searchName = value.comment;
    return searchName.toLowerCase().includes(term.toLowerCase());
  });
  const handleSelectAll = (event) => {
    let newSelectedReviewIds;

    if (event.target.checked) {
      newSelectedReviewIds = reviews.map((rev) => rev._id);
    } else {
      newSelectedReviewIds = [];
    }

    setSelectedReviewIds(newSelectedReviewIds);
  };

  const handleSelectOne = (event, _id) => {
    const selectedIndex = selectedReviewIds.indexOf(_id);
    let newSelectedReviewIds = [];

    if (selectedIndex === -1) {
      newSelectedReviewIds = newSelectedReviewIds.concat(
        selectedReviewIds,
        _id
      );
    } else if (selectedIndex === 0) {
      newSelectedReviewIds = newSelectedReviewIds.concat(
        selectedReviewIds.slice(1)
      );
    } else if (selectedIndex === selectedReviewIds.length - 1) {
      newSelectedReviewIds = newSelectedReviewIds.concat(
        selectedReviewIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedReviewIds = newSelectedReviewIds.concat(
        selectedReviewIds.slice(0, selectedIndex),
        selectedReviewIds.slice(selectedIndex + 1)
      );
    }

    setSelectedReviewIds(newSelectedReviewIds);
  };

  const handleSelectedDelete = async () => {
    try {
      const selectedIds = {
        selected: selectedReviewIds,
      };
      await dispatch(selectedDeleteReview({ access_token, selectedIds }));
      dispatch(getAllReviews());
      setSelectedReviewIds([]);
      toast.success(t("review-selected-deleted"));
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteReview = async (id) => {
    try {
      await dispatch(deleteReview({ access_token, id }));
      toast.success(t("delete-review"));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dispatch(getAllReviews(access_token));
  }, [dispatch]);

  console.log(reviews);
  return (
    <main>
      <HelmetTitle title={t("all-reviews")} />
      <Layout>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div className="bg-white relative dark:bg-[#2e2d4a] rounded-lg overflow-hidden my-6 border border-gray-200 dark:border-gray-600">
            <h1 className="p-5 text-gray-600 dark:text-gray-200 text-xl font-semibold">
              {t("search-filter")}
            </h1>
            <MoreMenu
              isFilter={isFilter}
              setIsFilter={setIsFilter}
              fetch={getAllReviews}
            />
            {isFilter && (
              <div className="grid grid-cols-3 gap-x-5 pb-6 mb-3 px-5 border-b border-b-gray-200 dark:border-b-gray-600">
                <FormControl size="medium" sx={{}}>
                  <InputLabel _id="demo-simple-select-label">
                    {t("select-status")}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    _id="demo-simple-select"
                    // value={"all"}
                    // onChange={(e) => setCategory(e.target.value)}
                    label={t("select-status")}
                  >
                    <MenuItem value={"all"}>{t("all")}</MenuItem>
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
                    <MenuItem value={"all"}>{t("all")}</MenuItem>
                    {brands.map((item) => (
                      <MenuItem key={item._id} value={item.slug}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl size="medium" sx={{}}>
                  <InputLabel _id="demo-simple-select-label">
                    {t("sorting")}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    _id="demo-simple-select"
                    // value={"all"}
                    // onChange={(e) => setCategory(e.target.value)}
                    label={t("sorting")}
                  >
                    <MenuItem value={"all"}>{t("all")}</MenuItem>
                    <MenuItem value={"user"}>reviews</MenuItem>
                    <MenuItem value={"admin"}>Admins</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}

            {selectedReviewIds.length ? (
              <div className="flex w-ful items-center justify-between py-[12.5px] px-4">
                <h1 className="font-semibold text_color">{`${
                  selectedReviewIds.length
                } ${t("selected")}`}</h1>
                <Button
                  variant="contained"
                  color="error"
                  size="medium"
                  onClick={() => handleSelectedDelete()}
                  sx={{
                    marginLeft: "15px",
                    borderRadius: "6px",
                    minWidth: "130px",
                  }}
                  startIcon={<MdDelete />}
                >
                  {t("delete")}
                </Button>
              </div>
            ) : (
              <div className="flex w-full items-center justify-between py-3 px-4">
                <FormControl size="small" sx={{ minWidth: "80px" }}>
                  <Select
                    labelId="demo-simple-select-label"
                    _id="demo-simple-select"
                    value={"10"}
                    sx={{ maxWidth: isXl ? "70px" : "80px" }}
                    // onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value={"10"}>10</MenuItem>
                    <MenuItem value={"20"}>20</MenuItem>
                    <MenuItem value={"30"}>30</MenuItem>
                    <MenuItem value={"50"}>50</MenuItem>
                  </Select>
                </FormControl>
                <SearchInput term={term} setTerm={setTerm} pl={t("search")} />
                <div className="flex items-center">
                  <TableButton isTable={isTable} setIsTable={setIsTable} />
                  <Button
                    disabled
                    variant="outlined"
                    size="medium"
                    sx={{
                      marginLeft: "25px",
                      borderRadius: "6px",
                    }}
                    startIcon={<BiExport />}
                  >
                    EXPORT
                  </Button>
                  {/* <Tooltip title={t("add-review")}>
                    <Button
                      variant="contained"
                      size="medium"
                      sx={{
                        marginLeft: "25px",
                      }}
                      startIcon={<FiPlus />}
                    >
                      {t("add-review")}
                    </Button>
                  </Tooltip> */}
                </div>
              </div>
            )}
            {reviews.length ? (
              <>
                {!isTable ? (
                  <TableBody
                    reviews={reviews}
                    handleSelectAll={handleSelectAll}
                    selectedReviewIds={selectedReviewIds}
                    filteredReviews={filteredReviews}
                    handleSelectOne={handleSelectOne}
                    handleDeleteReview={handleDeleteReview}
                  />
                ) : (
                  // <GridList
                  //   reviews={reviews}
                  //   handleSelectAll={handleSelectAll}
                  //   selectedReviewIds={selectedReviewIds}
                  //   filteredReviews={filteredReviews}
                  //   handleSelectOne={handleSelectOne}
                  //   handleDeleteReview={handleDeleteReview}
                  // />
                  <div className="">d</div>
                )}{" "}
              </>
            ) : (
              <NotData />
            )}
          </div>
        )}
      </Layout>
    </main>
  );
};

export default ReviewsList;
