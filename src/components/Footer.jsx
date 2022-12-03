import React from "react"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constant"
import styles from "../styles"

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="logo" className="w-64 h-20 object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div className="flex flex-col ss:my-0 m-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-lg text-white">{link.title}</h4>
              <ul className="list-none mt-4">
                {link.links.map((item, index) => (
                  <li
                    className={`font-poppins font-normal text-base text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== link.links.length - 1 ? "mb-4" : ""
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-2 border-t-[#3f3f45]">
        <p className="font-poppins font-normal text-center text-lg text-white">
          Copyright © 2021 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((item, index) => (
            <img
              key={item.id}
              src={item.icon}
              alt="Social Media"
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
