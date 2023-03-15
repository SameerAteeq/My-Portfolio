import React from 'react'
import css from "./wrapper.module.scss";

const ContentWrapper = ({children}) => {
  return (
    <div className={css.wrapper}>{children}</div>
  )
}

export default ContentWrapper