import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'

const Socials = () => {

  const social = [
    {
      key: 1,
      link: 'https://www.linkedin.com/in/rakshit-gondwal-911223230/',
      child: (
        <>
          LinkedIn <FaLinkedinIn size={30} />
        </>
      ),
      download: false
    },
    {
      key: 2,
      link: 'https://twitter.com/RakshitGondwal',
      child: (
        <>
          Twitter <FiTwitter size={30} />
        </>
      ),
      download: false
    },
    {
      key: 3,
      link: 'https://github.com/rakshitgondwal',
      child: (
        <>
          Github <FiGithub size={30} />
        </>
      ),
      download: false
    },
    {
      key: 4,
      link: 'mailto:rakshitgondwal3@gmail.com',
      child: (
        <>
          Email <AiOutlineMail size={30} />
        </>
      ),
      download: false
    },
    {
      key: 5,
      link: '/RakshitGondwal.pdf',
      child: (
        <>
          Resume <HiOutlineDocumentText size={30} />
        </>
      ),
      download: true
    }
  ]


  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {social.map(({key, name, link, download, child}) => (
          <li key={key} className=' flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] bg-cyan-900 hover:hue-rotate-180 duration-1000 hover:rounded-md  '>
            <a href={link} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
              <>
              {child} 
              </>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials