// import React from "react"
// import Video from "./Video"
// import image from "../ww.jpg";
// import {BrowserRouter, Route, Switch} from "react-router-dom";
// import ReactPlayer from "react-player"

// export default function Home() {
//   return (
//     <div>
//       <nav class="bg-gray-100">
//         <div class="px-6 mx-auto">
//           <div class="flex justify-between">
//             <div class="flex space-x-4">
//               {/* logo */}
//               <div>
//                 <a href="#" class="flex items-center py-5 px-2 text-green-600">
//                   <img
//                     src={image} 
//                     class="h-24 w-24 mr-1"
//                     alt="Responsive Image"
//                   />
//                   <span class="text-7xl font-bold font-Parisienne">
//                     Winnie Miiro
//                   </span>
//                 </a>
//               </div>
//             </div>

//             {/* <!--secondary nav --> */}
//             <div class="hidden md:flex items-center space-x-1">
//               <a href="" class="py-5 px-3 text-green-700 hover:text-green-900">
//                 Story
//               </a>
//               <a href="" class="py-5 px-3 text-green-700 hover:text-green-900">
//                 Mission
//               </a>
//               <a
//                 href=""
//                 class="py-3 px-3 rounded bg-yellow-400 text-yellow-900 hover:bg-yellow-300 transition duration-300"
//               >
//                 Contact
//               </a>
//             </div>
//             {/* <!--mobile button here --> */}
//             <div class="md:hidden flex items-center">
//               <button class="mobile-menu-button">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   class="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           {/* <!-- mobile menu --> */}
//           <div class="mobile-menu hidden">
//             <a
//               href=""
//               class="block py-5 px-3 text-gray-700 hover:text-gray-900"
//             >
//               Story
//             </a>
//             <a
//               href=""
//               class="block py-5 px-3 text-gray-700 hover:text-gray-900"
//             >
//               Mission
//             </a>
//             <a
//               href=""
//               class="block py-5 px-3 text-gray-700 hover:text-gray-900"
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//         <div></div>
//       </nav>

//       <div class="bg-gray-100 p-10">
//   <div class="flex justify-center items-center">
//   <Video embedId="rokGy0huYEA" />
//   </div>
// </div>

//       <div class="bg-gradient-to-r from-green-600 via green-900 to-black p-4 ">
//         <h1 class="font-Bitter text-gray-100 font-bold text-4xl md:text-4xl lg:text-5xl items-center py-8 px-8">
//           Certified Training
//         </h1>

//         {/* 
//   <!--   cards --> */}
//         <div class="font-Raleway flex justify-center items-center">
//           <div class="md:flex justify-between my-4 mx-6">
//             {/* <!--SaC --> */}
//             <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg mb-12 ml-4 mr-4">
//               <div class="shadow-inner flex justify-center items-center p-4">
//                 <img
//                   class="w-full"
//                   src="https://media.istockphoto.com/photos/back-of-muscular-woman-picture-id629828104?b=1&k=20&m=629828104&s=170667a&w=0&h=teNzfIqoL9jiXTJtZGl7wh8JDdnj0NCdxRbHXLFOs2k="
//                   alt="S&C"
//                 />
//               </div>
//               <div class="px-6 py-2 text-center">
//                 <div class="font-bold text-xl mb-2">
//                   Strength and Conditioning
//                 </div>
//                 <p class="text-gray-700">
//                   Strength for power & Conditioning for stamina.
//                 </p>
//               </div>
//             </div>

//             {/* <!--KbT --> */}
//             <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg mb-12 ml-4 mr-4">
//               <div class="shadow-inner flex justify-center items-center p-4">
//                 <img
//                   class="w-full"
//                   src="https://media.istockphoto.com/photos/kettlebell-training-in-gym-picture-id982369160?b=1&k=20&m=982369160&s=170667a&w=0&h=avNHi50kaH2ilvGfxHmdXLvweG9q0sF6b4WCUYDiLUw="
//                   alt="KB"
//                 />
//               </div>
//               <div class="px-6 py-2 text-center">
//                 <div class="font-bold text-xl mb-2">Kettlebell Training</div>
//                 <p class="text-gray-700">Build your power and endurance!</p>
//               </div>
//             </div>

//             {/* <!--EM --> */}
//             <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg mb-12 ml-4 mr-4">
//               <div class="shadow-inner flex justify-center items-center p-4">
//                 <img
//                   class="w-full"
//                   src="https://media.istockphoto.com/photos/pregnant-woman-black-and-white-picture-id121903265?b=1&k=20&m=121903265&s=170667a&w=0&h=ysA4trt12izfml2zaUothVDa6Bo_mn2AivoDItT-aks="
//                   alt="EM"
//                 />
//               </div>
//               <div class="px-6 py-2 text-center">
//                 <div class="font-bold text-xl mb-2">Expecting Mothers</div>
//                 <p class="text-gray-700">
//                   Workouts tailored to your special situation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <!--   section-4 Pricing --> */}

//       <div class="bg-gray-100 p-4">
//         <h1 class=" font-Bitter font-bold text-4xl md:text-4xl lg:text-5xl items-center py-8 px-8">
//           Pricing Plans
//         </h1>

//         {/* <!--priceCards --> */}
//         <div class="font-Raleway flex justify-center items-center">
//           <div class="lg:flex justify-between my-4 mx-8">
//             {/* <!--1 --> */}
//             <div class="rounded-lg shadow-lg overflow-hidden mb-4 ml-4 mr-4">
//               <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
//                 <div class="flex justify-center">
//                   <span class="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
//                     Team Plan
//                   </span>
//                 </div>
//                 <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">
//                   <span class="ml-1 mr-3 text-xl leading-8 font-medium text-gray-500 dark:text-gray-400">
//                     from
//                   </span>
//                   $10
//                   <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
//                     /month
//                   </span>
//                 </div>
//               </div>
//               <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
//                 <ul>
//                   <li class="mt-4 flex items-start">
//                     <div class="flex-shrink-0">
//                       <svg
//                         class="h-6 w-6 text-green-500"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M5 13l4 4L19 7"
//                         ></path>
//                       </svg>
//                     </div>
//                     <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
//                       $10/month per user
//                     </p>
//                   </li>
//                   <li class="mt-4 flex items-start">
//                     <div class="flex-shrink-0">
//                       <svg
//                         class="h-6 w-6 text-green-500"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M5 13l4 4L19 7"
//                         ></path>
//                       </svg>
//                     </div>
//                     <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
//                       Unlimited number of projects
//                     </p>
//                   </li>
//                   <li class="mt-4 flex items-start">
//                     <div class="flex-shrink-0">
//                       <svg
//                         class="h-6 w-6 text-green-500"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M5 13l4 4L19 7"
//                         ></path>
//                       </svg>
//                     </div>
//                     <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
//                       Cancel anytime
//                     </p>
//                   </li>
//                 </ul>
//                 <div class="mt-6 rounded-md shadow">
//                   <a
//                     href="#"
//                     class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
//                   >
//                     Start team plan
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* <!--2 --> */}
//             <div class="rounded-lg shadow-lg overflow-hidden mb-4 ml-4 mr-4">
//               <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
//                 <div class="flex justify-center">
//                   <span class="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
//                     Team Plan
//                   </span>
//                 </div>
//                 <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">
//                   <span class="ml-1 mr-3 text-xl leading-8 font-medium text-gray-500 dark:text-gray-400">
//                     from
//                   </span>
//                   $10
//                   <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
//                     /month
//                   </span>
//                 </div>
//               </div>
//               <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
//                 <ul>
//                   <li class="mt-4 flex items-start">
//                     <div class="flex-shrink-0">
//                       <svg
//                         class="h-6 w-6 text-green-500"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M5 13l4 4L19 7"
//                         ></path>
//                       </svg>
//                     </div>
//                     <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
//                       $10/month per user
//                     </p>
//                   </li>
//                   <li class="mt-4 flex items-start">
//                     <div class="flex-shrink-0">
//                       <svg
//                         class="h-6 w-6 text-green-500"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M5 13l4 4L19 7"
//                         ></path>
//                       </svg>
//                     </div>
//                     <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
//                       Unlimited number of projects
//                     </p>
//                   </li>
//                   <li class="mt-4 flex items-start">
//                     <div class="flex-shrink-0">
//                       <svg
//                         class="h-6 w-6 text-green-500"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M5 13l4 4L19 7"
//                         ></path>
//                       </svg>
//                     </div>
//                     <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
//                       Cancel anytime
//                     </p>
//                   </li>
//                 </ul>
//                 <div class="mt-6 rounded-md shadow">
//                   <a
//                     href="#"
//                     class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
//                   >
//                     Start team plan
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* <!--3 --> */}
//             <div class="rounded-lg shadow-lg overflow-hidden mb-4 ml-4 mr-4">
//               <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
//                 <div class="flex justify-center">
//                   <span class="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
//                     Team Plan
//                   </span>
//                 </div>
//                 <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">
//                   <span class="ml-1 mr-3 text-xl leading-8 font-medium text-gray-500 dark:text-gray-400">
//                     from
//                   </span>
//                   $10
//                   <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
//                     /month
//                   </span>
//                 </div>
//               </div>
//               <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
//                 <ul>
//                   <li class="mt-4 flex items-start">
//                     <div class="flex-shrink-0">
//                       <svg
//                         class="h-6 w-6 text-green-500"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M5 13l4 4L19 7"
//                         ></path>
//                       </svg>
//                     </div>
//                     <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
//                       $10/month per user
//                     </p>
//                   </li>
//                   <li class="mt-4 flex items-start">
//                     <div class="flex-shrink-0">
//                       <svg
//                         class="h-6 w-6 text-green-500"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M5 13l4 4L19 7"
//                         ></path>
//                       </svg>
//                     </div>
//                     <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
//                       Unlimited number of projects
//                     </p>
//                   </li>
//                   <li class="mt-4 flex items-start">
//                     <div class="flex-shrink-0">
//                       <svg
//                         class="h-6 w-6 text-green-500"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M5 13l4 4L19 7"
//                         ></path>
//                       </svg>
//                     </div>
//                     <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
//                       Cancel anytime
//                     </p>
//                   </li>
//                 </ul>
//                 <div class="mt-6 rounded-md shadow">
//                   <a
//                     href="#"
//                     class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
//                   >
//                     Start team plan
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!--   Footer --> */}
//         <div class="font-Raleway font-bold bg-gradient-to-r from-green-600 via green-900 to-black p-4">
//           <div>
//             <p>©Copyright 2021 Winnie Miiro LLC</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
