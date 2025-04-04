import React from 'react'
import { HeroParallax } from '@/components/ui/hero-parallax'
import POS from './Teaching.png'
import { LayoutGrid } from '@/components/ui/layout-grid';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { HoveredLink } from '@/components/ui/navbar-menu';
import { log } from 'console';

function Social() {
  const products = [
    {
      title: "2024-Teaching Junior",
      link: "",
      thumbnail:
        "/Teach2.png",
    },
    {
      title: "2024-Teaching Junior",
      link: "",
      thumbnail:
        "/Teaching.png",
    },
    {
      title: "2024-Teaching Junior",
      link: "",
      thumbnail:
        "/Teach2.png",
    },
    {
      title: "2024-Teaching Junior",
      link: "",
      thumbnail:
        "/Teach3.png",
    },



    {
      title: "2023-Volunteered Asia Pacific ABU Robocon",
      link: "https://web.facebook.com/photo.php?fbid=1028614918407243&set=pb.100037762346153.-2207520000&type=3",
      thumbnail:
        "/Vol5.png",
    },
    {
      title: "2023-Volunteered Asia Pacific ABU Robocon",
      link: "https://web.facebook.com/photo.php?fbid=1028614918407243&set=pb.100037762346153.-2207520000&type=3",
      thumbnail:
        "/Vol3.jpg",
    },
    {
      title: "2023-Volunteered Asia Pacific ABU Robocon",
      link: "https://web.facebook.com/photo.php?fbid=1028614918407243&set=pb.100037762346153.-2207520000&type=3",
      thumbnail:
        "/Vol1.png",
    },
    {
      title: "2023-Volunteered Asia Pacific ABU Robocon",
      link: "https://web.facebook.com/photo.php?fbid=1028614918407243&set=pb.100037762346153.-2207520000&type=3",
      thumbnail:
        "/Vol3.jpg",
    },
    {
      title: "2019-Volunteered Air and Tech shows",
      link: "https://web.facebook.com/nuthdariyamony/posts/pfbid02vxFJwjb8pygdYdoHDQhC1psJ1mFSyVefWiTurDvvHBT5DzHYxga4T31ANhSkBRfpl",
      thumbnail:
        "/ATS2.png",
    },



    //ATS
    {
      title: "2019-Volunteered Air and Tech shows",
      link: "https://web.facebook.com/nuthdariyamony/posts/pfbid02vxFJwjb8pygdYdoHDQhC1psJ1mFSyVefWiTurDvvHBT5DzHYxga4T31ANhSkBRfpl",
      thumbnail:
        "/ATS.png",
    },
    {
      title: "2019-Volunteered Air and Tech shows",
      link: "https://web.facebook.com/nuthdariyamony/posts/pfbid02vxFJwjb8pygdYdoHDQhC1psJ1mFSyVefWiTurDvvHBT5DzHYxga4T31ANhSkBRfpl",
      thumbnail:
        "/ATS2.png",
    },
    {
      title: "2020-Champion Debater",
      link: "https://web.facebook.com/moeys.gov.kh/videos/357311298844649",
      thumbnail:
        "/D4.png",
    },
    {
      title: "2020-Champion Debater",
      link: "https://web.facebook.com/moeys.gov.kh/videos/357311298844649",
      thumbnail:
        "/D3.png",
    },
    {
      title: "2020-Champion Debater",
      link: "https://web.facebook.com/moeys.gov.kh/videos/357311298844649",
      thumbnail:
        "/D1.png",
    },
  ];
  const year = new Date().getFullYear();
  return (
    <div className=' bg-black h-[300px]'>
      <div className="h-screen py-20 w-full bg-black">
        <HeroParallax products={products} />
        <div className=' bg-black'>
          <div className='bg-black text-white text-5xl font-medium
         h-[50vh]
         flex
         p-4
         items-center
         '>
            <div className='flex-grow just flex items-center flex-col gap-12 p-4'>
              <div className='flex w-full justify-around'>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-[30px]'>Keep In Touch</h1>
                  <div className='contactme flex gap-2'>
                    <HoveredLink href="/hobby"><svg className="w-8 hover:text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg></HoveredLink>
                    <HoveredLink href="/individual"><svg className="w-8 hover:text-purple-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></HoveredLink>
                    <HoveredLink href="/team"><svg className='w-8 hover:text-blue-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"></path></svg></HoveredLink>
                  </div>
                </div>
                <div>
                  <div className='text-[20px] flex gap-2 items-center'>
                    <HoveredLink href="/enterprise"><svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3584 9.38246C11.3857 9.78702 9.4418 10.6244 6.5266 11.8945C6.05321 12.0827 5.80524 12.2669 5.78266 12.4469C5.74451 12.7513 6.12561 12.8711 6.64458 13.0343C6.71517 13.0565 6.78832 13.0795 6.8633 13.1039C7.37388 13.2698 8.06071 13.464 8.41776 13.4717C8.74164 13.4787 9.10313 13.3452 9.50222 13.0711C12.226 11.2325 13.632 10.3032 13.7203 10.2832C13.7826 10.269 13.8689 10.2513 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9739 10.48C13.9361 10.641 12.4401 12.0318 11.666 12.7515C11.4351 12.9661 11.2101 13.1853 10.9833 13.4039C10.509 13.8611 10.1533 14.204 11.003 14.764C11.8644 15.3317 12.7323 15.8982 13.5724 16.4971C13.9867 16.7925 14.359 17.0579 14.8188 17.0156C15.0861 16.991 15.3621 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.3821 16.6352 8.80083C16.6484 8.6623 16.6318 8.485 16.6185 8.40717C16.6052 8.32934 16.5773 8.21844 16.4762 8.13635C16.3563 8.03913 16.1714 8.01863 16.0887 8.02009C15.7125 8.02672 15.1355 8.22737 12.3584 9.38246Z"></path></svg> </HoveredLink>
                    +855 81 26 81 66
                  </div>
                  <div className='text-[20px] flex gap-2 items-center'>
                    <HoveredLink href="/hobby">
                      <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>            </HoveredLink>
                    k.ouyorng@gmail.com</div>
                </div>
              </div>
              <div className='text-[15px]'>&copy;{year} by OUYORNG KHEANG </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social