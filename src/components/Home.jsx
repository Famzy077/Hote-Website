import { Carousel, Typography} from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import img from '../images/logo.png';
import landingImage from '../images/h1_hero.jpg';   
import landingImage3 from '../images/landingImage3.png'
import landingImage2 from '../images/landingImage2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from './general.module.css';
const Index= () => {

    const [scroll, setScroll] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    // const [date, setDate] = useState("03-24-2025")

    const handleNav= () => {
      setIsOpen(!isOpen);
    }
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    }
    useEffect(() => {
      console.log("Nav state changed:", isOpen ? "Open" : "Closed");
    }, [isOpen])
    useEffect(() => {
      if (scroll > 100) {
        document.querySelector('.header')?.classList.add('bg-white');
        document.querySelector('.header')?.classList.add('opacity-90');
      } else {
        document.querySelector('.header')?.classList.remove('bg-white');
        document.querySelector('.header')?.classList.add('opacity-90');
      }
      window.addEventListener('scroll', handleScroll);

      return () => {
       window.removeEventListener('scroll', handleScroll);
      }
    }, [scroll]);
  return (
    <div>
      <header className='header flex justify-between py-8 text-white h-[3rem] place-items-center w-[100%] bg-gray-200'>
            <div className="logo text-center w-[100%] flex justify-between">
              <Link className='logoImg' href="#"><img src={img} width={130} height={130} alt='logoIcon'/></Link>
              <div onClick={handleNav} className={`nav-icon text-3xl cursor-pointer ${style.toggleColor} ${isOpen ? style.open : ''}`}>{isOpen ? `✖`: '☰'}</div>
            </div>
            <nav className='nav w-[100%] text-black'>
              <ul className='flex justify-start gap-2 text-xl'>
                <li><Link href='/blog/blog'>Home</Link></li>
                <li><Link href='/'>Blog</Link></li>
                <li><Link href='/'>Shop</Link></li>
                <li><Link href='/blog/blog'>Contact</Link></li>
                <li><Link href='/blog/blog'>FAQs</Link></li>
              </ul>
            </nav>
            <div className={`miniSreen w-[100%] absolute bg-black top-16 p-10 left-0 h-[50vh] ${isOpen ? 'open' : ''}`}>
              <div><Link href='/blog/blog' className='font-semibold text-2xl text_nav'>Home </Link><FontAwesomeIcon className='ml-7 cursor-pointer arror_icon font-semibold text-2xl'  icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>Blog </Link><FontAwesomeIcon className='ml-7 cursor-pointer font-semibold text-2xl arror_icon text-gray-400' icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>Shop </Link><FontAwesomeIcon className='ml-7 font-semibold text-2xl cursor-pointer arror_icon text-gray-400'  icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>COntact </Link><FontAwesomeIcon className='ml-7 font-semibold text-2xl cursor-pointer arror_icon text-gray-400'  icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>FAQs </Link><FontAwesomeIcon className='ml-7 font-semibold text-2xl cursor-pointer arror_icon text-gray-400'  icon={faArrowRight} /></div>
              <div>
                <button className='bg-blue-gray-400 text-gray-400'>Get Started</button>
              </div>
            </div>
        </header>
        {/* <section className='mainSection'>
            <main className='mainSectionContent border-2 border-red-500'>
                <div className='border-2 '>
                    <h1>Top Hotel In The City</h1>
                    <p>Hotel & Resourt</p>
                </div>
            </main> */}
        {/* </section> */}
          <section>
            <Carousel className="">
              <div className="relative h-full w-full">
                <img
                  src={landingImage}
                  alt="image 1"
                  className="h-[93vh] w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold uppercase"
                    >
                      Top Hotel in the City
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      Hotel & Resort
                    </Typography>
                    {/* <div className="flex justify-center gap-2 border-4 border-lime-300 p-4">
                      <Button size="lg" color="white" className="p-10 cursor-pointer">
                        Explore
                      </Button>
                      <Button size="lg" color="white" variant="text">
                        Gallery
                      </Button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src={landingImage3}
                  alt="image 2"
                  className="h-[93vh] w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                  <div className="pl-12 md:pl-20 lg:pl-32">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl text-center font-semibold"
                    >
                      Latest Hotel in the world
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80 text-center"
                    >
                      Hotel & Resort
                    </Typography>
                    {/* <div className="flex gap-2 text-center justify-center">
                      <Button size="lg" color="white">
                        Explore
                      </Button>
                      <Button size="lg" color="white" variant="text">
                        Gallery
                      </Button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src={landingImage2}
                  alt="image 3"
                  className="h-[93vh] w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                  <div className="pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      Enjoy The Beauty of Nature during your vacation
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                        Hotel & Resort
                    </Typography>
                    {/* <div className="flex gap-2">
                      <Button size="lg" color="white" className="border-2">
                        Explore
                      </Button>
                      <Button size="lg" color="white" variant="text">
                        Gallery
                      </Button>
                    </div> */}
                  </div>
                </div>
              </div>
            </Carousel>
      </section>
      <div className="border-2 border-l-indigo-200 m-24">
        <form action="" className="flex h-32 shadow-2xl shadow-blue-400 mx-[50px]">
          <div className="">
            <label htmlFor="check">Check In Date:</label>
            <input type="date"  value/> <br />
          </div>
          <div>
            <label htmlFor="check">Check Out Date:</label>
            <input type="date" value className="border-1 p-10"/> <br />
          </div>
          <div>
            <label htmlFor="Adult">Adults:</label>
            <select name="_" id="_">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label htmlFor="child">Childreen:</label>
            <select name="_" id="_">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label htmlFor="child">Rooms:</label>
            <select name="_" id="_">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <input type="submit" value='Book Now' />
          </div>
        </form>
      </div>

      
    </div>

  );
}
export default Index;
// https://themewagon.github.io/marian/