import React from "react"
import { quotes } from "../assets"

function FeedbackCard({ content, name, title, img }) {
  return (
    <div className="felx justify-between flex-col px-10 py-12 rounded-md max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-white text-base my-10">
        Money is only a tool. It will take you wherever you wish, but it will not replace you as the
        driver.
      </p>
      <div className="flex flex-row">
        <img src={img} alt="img" className="w-12 h=12 roudned-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-white text-base">{name}</h4>
          <p className="font-poppins font-normal text-dimWhite text-base">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
