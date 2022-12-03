import React from "react"
import { apple, bill, google } from "../assets"
import styles, { layout } from "../styles"

function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-full h-full relative z-10" />
        <div className="absolute z-[3] -left-1/2 bottom-60 w-1/2 h-1/3 rounded-full white__gradient" />
        <div className="absolute z-[2] -left-1/2 bottom-0 w-1/2 h-1/3 rounded-full blue__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce
          ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={google}
            alt="google"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={apple}
            alt="apple"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  )
}

export default Billing
