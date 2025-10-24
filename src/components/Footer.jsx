import Facebook from '../assets/images/ic_facebook.svg'
import Instagram from '../assets/images/ic_instagram.svg'
import Linkedin from '../assets/images/ic_linkedin.svg'
import Github from '../assets/images/ic_github.svg'
import Youtube from '../assets/images/ic_youtube.svg'

const Footer = () => {
  const socialLinks = [
    {
      'label': 'facebook',
      'link': 'https://www.facebook.com/arigit.roy.7/',
      'icon': Facebook
    },
    {
      'label': 'instagram',
      'link': 'https://www.instagram.com/codewithcc/',
      'icon': Instagram
    },
    {
      'label': 'linkedin',
      'link': 'https://www.linkedin.com/in/codewithcc/',
      'icon': Linkedin
    },
    {
      'label': 'github',
      'link': 'https://github.com/codewithcc',
      'icon': Github
    },
    {
      'label': 'youtube',
      'link': 'https://www.youtube.com/channel/UCVWCrS84CE1746jq0AAJ-pQ',
      'icon': Youtube
    },
  ]

  return(
    <footer className='flex flex-col justify-center items-center gap-8 cursor-default lg:flex-row lg:justify-between lg:gap-0 bg-black text-yellow-300 py-16 lg:px-20'>
      <div className='flex justify-center items-center gap-8 lg:gap-12'>
        {
          socialLinks.map(
            (item) => (
              <img
                className='w-6 h-6 cursor-pointer transition-all ease-linear duration-150 hover:scale-125'
                src={item.icon}
                alt={item.label}
                onClick={() => {window.open(item.link, '_blank')}} />
            )
          )
        }
      </div>
      <p>&copy; {new Date().getFullYear()} Code with Cc, Inc. All rights reserved.</p>
    </footer>
  )
}

export default Footer