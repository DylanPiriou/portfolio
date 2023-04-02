import React from 'react';
import "./PageTitle.scss";

export default function PageTitle({ dataTitle }) {
  return (
    <div className="page-title">
        <h2>{dataTitle.word1}<span className="serif-font">&nbsp;{dataTitle.word2}</span></h2>
    </div>
  )
}
