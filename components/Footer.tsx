import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { SanityFooter } from '../types/schema'
import OpenSaucedLogo from "../public/openSauced-icon.png";

// icons
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
interface FooterProps{
    footer: SanityFooter[]

}

const footerContext = {
    pages: [
        {
            url: "https://app.termly.io/document/privacy-policy/5e303854-d262-468a-80ec-54b645d01c2e",
            text: "Privacy" 
        },
        {
            url: "https://app.termly.io/document/terms-of-use-for-saas/03e4e1c1-53ad-4fc4-b415-5c3f0e8c25ef",
            text: "Terms"
        },
        {
            url: "https://api.opensauced.pizza/docs#/Health%20check%20service/healthStatusWeb",
            text: "Status"
        }
    ],
    apps: [
        {
            url: "https://hot.opensauced.pizza",
            text: "hot.opensauced.pizza" ,
        },
        {
            url: "https://insights.opensauced.pizza",
            text: "insights.opensauced.pizza"
        }
    ],
    socials: [
        {
            url: "https://twitter.com/saucedopen",
            icon: <AiOutlineTwitter className="text-2xl hover:text-light-slate-10 text-light-slate-9" />
        },
        {
            url: "https://github.com/open-sauced",
            icon: <AiOutlineGithub className="text-2xl hover:text-light-slate-10  text-light-slate-9" /> },
        {
            url: "https://www.instagram.com/opensauced/",
            icon: <AiFillInstagram className="text-2xl hover:text-light-slate-10  text-light-slate-9" /> },
        {
            url: "https://www.youtube.com/opensauced",
            icon: <AiFillYoutube className="text-2xl hover:text-light-slate-10  text-light-slate-9" /> },
        {
            url: "https://discord.com/invite/U2peSNf23P",
            icon: <FaDiscord className="text-2xl hover:text-light-slate-10  text-light-slate-9" /> },
        {
            url: "https://dev.to/opensauced/",
            icon: <FaDev className="text-2xl hover:text-light-slate-10  text-light-slate-9" /> }
    ]
};

const Footer:FC<FooterProps> = ({footer}) =>  {

  return (
    <div className='w-full'>
        <footer className="px-6 tablet:px-16 w-full bg-light-slate-2 transition">
            <div className="font-medium desktop:border-t desktop:py-8 desktop:items-center desktop:justify-between desktop:gap-x-4 flex flex-col gap-y-4 desktop:flex-row py-2 w-full">
                <div className="text-center desktop:text-left justify-center gap-1 flex items-center">
                    <div className="w-6 h-6 relative !min-w-[24px] min-h-[24px]">
                        <Image layout="fill" alt="brand logo" src={OpenSaucedLogo} />
                    </div>
                    <span className="desktop:hidden font-bold text-light-slate-12 ">OpenSauced</span>
                    <p className="hidden !text-light-slate-9 lg:inline-block">
                        © 2022 <span className="hidden desktop:inline-block">OpenSauced</span>
                    </p>
                </div>
                <div className="flex flex-wrap gap-y-2 desktop:mr-auto desktop:text-sm text-light-slate-11 justify-center gap-x-4">
                    {
                        footerContext.apps.map( ({url, text}) => (
                            <a key={url} className="px-2 hover:text-light-slate-12 " target="_blank" href={url} rel="noopener noreferrer">
                                {text}
                            </a>

                        ))
                    }
                </div>
                <div className="flex justify-center gap-x-4 ">
                    <div className=" hidden desktop:flex items-center border-r pr-4   gap-x-4 text-light-slate-11 text-sm">
                        {
                            footerContext.pages.map( ({url, text}) => (
                                <a key={url} className="px-2 hover:text-light-slate-12" href={url} target="_blank" rel="noreferrer">
                                    {text}
                                </a>

                            ))
                        }
                    </div>
                    {
                        footerContext.socials?.map(({ url, icon }) => (
                            <a target="_blank" href={url} key={url} rel="noopener noreferrer">
                                {icon}
                            </a>
                        ))
                    }
                </div>
                <div className="flex tablet:justify-center desktop:hidden desktop:border-none desktop:order-2 border-t py-3 pb-4 mt-2 text-sm justify-between">
                    <p className="text-light-slate-9">
                    © 2022 <span className="hidden tablet:inline-block">Open sauced</span>
                    </p>
                    <div className="flex items-center gap-x-3 text-light-slate-11 text-sm">
                        {
                            footerContext.pages.map( ({url, text}) => (
                                <a key={text} className="px-2" href={url} target="_blank" rel="noreferrer">
                                    {text}
                                </a>

                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
