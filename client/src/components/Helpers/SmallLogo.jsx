import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const SmallLogo = ({className}) => {
  let {t} = useTranslation(["home"])
  return (
    <Link to={"/"}>
      <div className="flex items-center">
        <img src="/favicons/uzb.png" className="h-14 mr-3 object-cover" alt="" />
        <div className="xl:text-lg text-xs font-semibold text-zinc-800 uppercase">
          <h1 className={className}>{t("school-address")}</h1>
          <h1 className={className}>{t("school-name")}</h1>
        </div>
      </div>
    </Link>
  )
}

export default SmallLogo