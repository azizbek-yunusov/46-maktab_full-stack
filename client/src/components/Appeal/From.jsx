import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { appealUrl } from "../../utils/baseUrls";
import { toast } from "react-hot-toast";

const From = () => {
  const { t } = useTranslation(["home"]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [descr, setDescr] = useState("");
  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };
  const sendApealHandle = async (e) => {
    e.preventDefault();
    let appealData = {
      fullName: name,
      email,
      descr,
    };
    try {
      const response = await axios.post(appealUrl, appealData);
      if (response.status === 200) {
        toast.success(t("success"));
        setName("");
        setEmail("");
        setDescr("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex_col mt-10">
      <form onSubmit={sendApealHandle} className="text-left">
        <input
          className="rounded-xl w-full text-lg py-4 px-5 bg-white my-3"
          required
          placeholder="F.I.SH"
          type="text"
          value={name}
          onChange={handleChange(setName)}
        />
        <input
          className="rounded-xl w-full text-lg py-4 px-5 bg-white my-3"
          required
          placeholder={t("email")}
          type="email"
          value={email}
          onChange={handleChange(setEmail)}
        />
        <textarea
          rows={5}
          className="rounded-xl w-full text-lg py-4 px-5 bg-white my-3"
          required
          placeholder={t("murojat")}
          type="text"
          value={descr}
          onChange={handleChange(setDescr)}
        />
        <button
          type="submit"
          className="text-white mt-2 w-full bg-gray-900 hover:bg-black uppercase focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-16 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {t("send")}
        </button>
      </form>
    </div>
  );
};

export default From;
