import React from 'react';
import TestimonialCarousel from './CustomizationSection';
import Dashboard from './Components/Dashboard';
import Footer from './footer';
import BlogCard from './Components/BlogCard';
import CallToAction from './Components/CallToAction';




function App() {
  return (
    <div>
          <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center min-w-screen">


       {/* header  */}
    

      <header className="w-full py-4 px-8 flex justify-center items-center ">
        <div className="flex justify-between items-center w-full max-w-screen-lg bg-gray-800 bg-opacity-50 p-4 rounded-xl">
          <div className="text-lg font-semibold">
            <img src='https://framerusercontent.com/images/sh08yhQRcgeLTg8MSig179cTQ8.png'alt="The image"/>
          </div>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="space-x-4">
            <button className="bg-transparent hover:bg-gray-700 py-2 px-4 rounded">Login</button>
            <button className="bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded">Get the template</button>
          </div>
        </div>
      </header>

      
      {/* home page  */}

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-10">
        <div className="mb-4 flex space-x-4 justify-between bg-gray-700 rounded-full">
          <div className='border border-wight  rounded-full'>
            <p className="bg-gray-700 py-2 px-4 rounded-full">Latest release</p>
          </div>
          <div>
            <p className="bg-gray-700 py-2 px-4 rounded-full">Introducing Pavyon's ChatGPT Plugin</p>
          </div>
        </div>
        <h1 className="text-7xl  mb-3 pt-4">
          Turn your big idea into  
        </h1>
        <h1 className="text-purple-400 text-7xl  mb-6">a stunning website</h1>
        <p className="text-lg ">
          Effortlessly create professional websites with lightning-fast results, 
        </p>
        <p className="text-lg mb-6">
        top-notch SEO, and performance. No coding required.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-lg text-lg">Get the template</button>
      </main>

      <div className="flex justify-between items-center w-full max-w-screen-lg bg-gray-800 bg-opacity-50 p-4 rounded my-8">
        <img src="https://framerusercontent.com/images/7cluiGa2zIXh4KaBoIiX4Wd7g.png"alt="The image" />
      </div>

      <p className="text-center font-inter text-base font-normal leading-7 mt-5 text-gray-300">Trusted by fast-growing companies worldwide</p>
      
      <div className="flex flex-wrap justify-center">
  <div className="w-1/2 md:w-1/4 lg:w-1/6 p-2">
    <img src="https://framerusercontent.com/images/b7Y3O7MuT7iGqIn9B8URsLPe9Zs.svg" alt="The image" className="w-full h-full object-cover rounded-lg"/>
  </div>
  <div className="w-1/2 md:w-1/4 lg:w-1/6 p-2">
    <img src="https://framerusercontent.com/images/2FqRvjIsBIFF4zz0B5qX5zjd9ho.svg" alt="The image" className="w-full h-full object-cover rounded-lg"/>
  </div>
  <div className="w-1/2 md:w-1/4 lg:w-1/6 p-2">
    <img src="https://framerusercontent.com/images/H0nYSP9UqjVanFxgROEITBt8c.svg" alt="The image" className="w-full h-full object-cover rounded-lg"/>
  </div>
  <div className="w-1/2 md:w-1/4 lg:w-1/6 p-2">
    <img src="https://framerusercontent.com/images/ImBGm7FEySu7sDDQIAnnolcQq4.svg" alt="The image" className="w-full h-full object-cover rounded-lg"/>
  </div>
  <div className="w-1/2 md:w-1/4 lg:w-1/6 p-2">
    <img src="https://framerusercontent.com/images/eboSRZ3S0bc7XvtDG9NJTZkNr8.svg" alt="The image" className="w-full h-full object-cover rounded-lg"/>
  </div>
  <div className="w-1/2 md:w-1/4 lg:w-1/6 p-2">
    <img src="https://framerusercontent.com/images/hLfweuYR0swEKeJaGTFJTXcJz4M.svg" alt="The image" className="w-full h-full object-cover rounded-lg"/>
  </div>
</div>



<div className="flex justify-between items-center w-full max-w-screen-lg bg-gray-800 bg-opacity-0 p-1 rounded">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6 bg-opacity-5 ">
                  <div className="flex items-center justify-center bg-gray-100  w-12 h-8 bg-opacity-5">
                 <img src="https://cdn.create.vista.com/api/media/small/440249754/stock-video-turquoise-pencil-and-gear-icon-isolated-on-blue-background-creative-development-blogging-or-copywriting-concept?videoStaticPreview=true&token=" alt="The image"  />
                  </div>
                  <p className="mt-4 text-gray-500 text-center">Craft a winning solution that not only draws in more customers but also secures bigger projects.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 bg-opacity-5">
                  <div className="flex items-center justify-center bg-gray-100 rounded-full w-16 h-16">
                    <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" preserveAspectRatio="none">
                      {/* Add your SVG content here */}
                    </svg>
                  </div>
                  <p className="mt-4 text-gray-500 text-center">Create a website that's lightning-fast, ultra-sleek, and mind-blowingly effective!</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 bg-opacity-5">
                  <div className="flex items-center justify-center bg-gray-100 rounded-full w-16 h-16">
                    <svg className="w-8 h-8 text-gray-700" viewBox="0 0 18 22" preserveAspectRatio="none">
                      {/* Add your SVG content here */}
                    </svg>
                  </div>
                  <p className="mt-4 text-gray-500 text-center">Make your site truly yours with effortless customization for your brand.</p>
                </div>
              </div>
    </div>


    {/* manik */}

    <div className="framer-1bg2imx" data-framer-name="Wrap" name="Wrap" style={{ 
      opacity: 1, 
      transform: 'perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)' 
    }}>
      <div className="absolute top-0 right-0 bottom-0 left-0" data-framer-background-image-wrapper="true">
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center p-4 rounded">
        <div className="relative w-full h-full rounded">
          <img
            src="https://framerusercontent.com/images/OYx7j0kTuXKuhy21dIzv4Sejz0Q.svg"
            className="w-full h-full rounded object-cover"
            alt="The image"
          />
        </div>
      </div>
    </div>

    </div>

    
    

    <div className="p-4 bg-gray-800 bg-opacity-0  rounded-md" data-framer-name="Title" name="Title">
        <div className="p-4  bg-gray-800 bg-opacity-0 rounded-md" data-framer-name="Wrap" name="Wrap ">
              <div className="flex justify-center items-center bg-opacity-0">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/80 text-center">
                  Effortlessly customize
                </h3>
              </div>
              <div className="flex justify-center items-center">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-200 via-purple-300 to-purple-400 text-center">
                  for your unique projects.
                </h3>
              </div>
          </div>

          <div className="flex flex-col justify-start flex-shrink-0">
            <p className="text-center text-base text-gray-700">
              Customization is key to making any project successful since every project has its unique requirements and challenges.
            </p>
          </div>
      </div>
      </div>



      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-40">
      <div className="container mx-auto px-40 py-16 flex flex-col-reverse  md:flex-row ">
        <div className="w-full md:w-1/2 flex-col items-center justify-center ">
          <div>
              <img
                className="rounded-lg shadow-lg"
                src="https://framerusercontent.com/images/s4rLWzYGkEswPUa4SOL9SvjO9rA.png?scale-down-to=512"
                alt="Screens with code"
              />
          </div>
          <div className='flex justify-left px-10'>
              <div className="w-full  px-4 py-12 pr-20">
                <h2 className="text-3xl font-bold mb-4">Starting to develop</h2>
                <p>Starting to develop a new idea is always the hardest part, but it's also very exciting.  </p>
                <p>Begin by brainstorming and listing all of your ideas on paper. Then prioritize them by feasibility and potential impact.</p>
              </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex-col items-center justify-center">
          <div className='py-8'>
              <img
                className="rounded-lg shadow-lg"
                src="https://framerusercontent.com/images/zK8JR7Yjii30gw94qWoYhI5AJUk.svg"
                alt="Screens with code"
              />
          </div>
          <div className='flex justify-left px-10 '>
              <div className="w-full  px-1 py-8 pr-20">
                <h2 className="text-3xl font-bold mb-4">Extensions</h2>
                <p>Innovation is key in the technology industry, and choosing the right tools can make or break your product. </p>
                <p>Choosing the best extensions largely depends on personal preferences but these suggestions.</p>
              </div>
          </div>
        </div>
    </div>
    </div>

    <div className='flex justify-between items-center w-full max-w-screen-lg bg-gray-800 bg-opacity-0 p-1 rounded px-12'>
      <div className='flex justify-between '>
          <div className="w-full text-xl font-bold px-1 ">
              <div>
                 <h2>Analytics that</h2>
              </div>
              <div>
                 <h1>will help you!</h1>
              </div>
          </div>
          <div classNamex="text-gray-400 flex align-middle">
                <div className='w-full pl-20'>
                  <p>In our data-driven world, it is essential to measure and analyze everything we can.</p>
                </div>
              <div className='w-full pl-20'>
                <p>By leveraging these different kinds of analytics effectively, companies might unlock new opportunities by identifying</p>
              </div>
          </div>
      </div>
      
    </div>
    <div className='flex justify-between items-center w-full max-w-screen-lg bg-gray-800 bg-opacity-0 p-1 rounded px-10'>
      <div className=' flex justify-between px-1  py-10'>
            <div className='border border-black rounded-lg '>
              <img src="https://framerusercontent.com/images/3uS8DUPZeyJ5GU35aRHJgFx594.png" alt="The image" />
            </div>
            <div className='border border-black rounded-lg  '>
              <img src="https://framerusercontent.com/images/XZv3jSCQ5RqwC9bnJNfup2aWB90.png" alt="The image" />
            </div>
            <div className='border border-black rounded-lg '>
              <img src="https://framerusercontent.com/images/i92vyn1xS1aIVks1HCJduxyc1I.png" alt="The image"/>
            </div>
          </div>
      </div>
      


      <div className='flex justify-between items-center w-full max-w-screen-lg bg-opacity-0 p-1 rounded px-10'>
      <div className="flex-row justify-between items-center py-4 px-8  text-white opacity-60">
      <div className=" ">
        <div className=' opacity text-5xl '>
          <h1 className='text-white p-3'>Effortlessly customize</h1>
          <h1 className='text-purple-400 p-3'>for your unique projects.</h1>
        </div>
        <p className=" text-gray-400 p-3">
          Customization is key to making any project successful since every project has its unique requirements and challenges.
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-center py-4 px-8 text-white">
  <div className="flex flex-row justify-between w-full">

    <div className="w-full lg:w-1/2 rounded-md shadow-md py-4 px-8 ">
      <h4>Dynamic Content Editor</h4>
      <p className="text-white">
        Seamlessly personalize all facets of your project's content through an intuitive editor, granting you the ability to effortlessly craft, adjust, and revise text, images, videos, and beyond.
      </p>
      <button className="text-purple-400 hover:bg-blue-700  font-bold py-2 px-4 rounded mt-4">
        Learn more
      </button>
    </div>

    <div className="w-full lg:w-1/2 rounded-md shadow-md py-4 px-8 ">
      <h4>Adaptive Layouts</h4>
      <p className="text-white">
        Seamlessly adjust the layout of your project to suit different screen sizes and devices, ensuring a consistent and optimal viewing experience for all users without manual tweaking.
      </p>
      <button className="text-purple-500 hover:bg-blue-700  font-bold py-2 px-4 rounded mt-4">
        Learn more
      </button>
    </div>
  </div>
  <div className="flex flex-row justify-between w-full">
    <div className="w-full lg:w-1/2 rounded-md shadow-md py-4 px-8">
      <h4>Modular Components</h4>
      <p className="text-white">
        Build your project like building blocks, utilizing modular components that can be easily rearranged, added, or removed, enabling you to swiftly adapt your design to changing project requirements.
      </p>
      <button className="text-purple-500 hover:bg-blue-700  font-bold py-2 px-4 rounded mt-4">
        Learn more
      </button>
    </div>
    <div className="w-full lg:w-1/2 rounded-md shadow-md py-4 px-8  ">
      <h4>Smart Suggestions</h4>
      <p className="text-white">
        Streamlined Customization: Streamline the process of adapting your project to excellence with automated recommendations, ensuring a seamless and efficient customization experience.
      </p>
      <button className="text-purple-500 hover:bg-blue-700  font-bold py-2 px-4 rounded mt-4">
        Learn more
      </button>
    </div>
  </div>
</div>
    </div>
      </div>
      
<TestimonialCarousel/>

<div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
  <Dashboard/>
  </div>
  
  <div className="bg-gray-900 min-h-screen p-10 text-white flex justify-center items-center">
      <div className="max-w-screen-lg w-full">
        <h1 className="text-4xl font-bold mb-10">Check out the blogs we have prepared for you</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BlogCard
            author="Savannah Nguyen"
            role="Software Engineer"
            date="April 22, 2024"
            title="Access secure and accurate information in research with API"
            avatarUrl="https://framerusercontent.com/images/2KZEdHHv1s7wntgMRZqwemGlVM.png"
            imageUrl="https://framerusercontent.com/images/jCZ7jjNYabUpD5a1Xva1h1lSt2k.png"
            link="./blog/access-secure-and-accurate-information-in-research-with-api"
          />
          <BlogCard
            author="Leslie Alexander"
            role="CEO"
            date="April 22, 2024"
            title="The rise that integrations add to your applications"
            avatarUrl="https://framerusercontent.com/images/2KZEdHHv1s7wntgMRZqwemGlVM.png"
            imageUrl="https://framerusercontent.com/images/29tSKhec1S9rWw1MJTjpB5F3zQ.png"
            link="./blog/access-secure-and-accurate-information-in-research-with-api"
          />
        </div>
      </div>
    </div>
  
 
 {/* --------------------------------------------- */}
 <div class="relative flex justify-center items-center">
      <div class="rounded-lg shadow-lg bg-gradient-to-r from-purple-700 to-indigo-500 w-40 h-40 flex justify-center items-center overflow-hidden">
        <div class="rounded-lg bg-white w-36 h-36 border border-gray-200"></div>
        <div className=" bg-gray-900 text-white flex items-center justify-center">
          <div className="w-52">
          <div className="w-full h-full rounded-inherit overflow-hidden">
          <img 
            src={`https://framerusercontent.com/images/SB7u6zmSgh2tDcaK9B0Zxe87W8.svg`} 
            alt={`the image`} 
            className="block w-full h-full rounded-inherit object-cover object-center" 
          />
        </div>
          </div>
        </div>
      </div>
    </div>

        <CallToAction/>

      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
