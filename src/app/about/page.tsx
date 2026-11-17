"use client";

import Image from "next/image";
import { GitHub, Linkedin } from "react-feather";
import { useSyncExternalStore } from "react";

import Skills from "../../components/Skills";
import { Skeleton } from "@/components/ui/skeleton";

const subscribe = () => () => {};

export default function Page() {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const bulb = [
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="currentColor"
      stroke="currentColor"
      key="crypto.randomUUID()"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <style type="text/css">  </style>{" "}
        <g>
          {" "}
          <path
            className="st0"
            d="M360.266,43.188C333.656,16.531,296.656-0.016,256,0c-40.656-0.016-77.656,16.531-104.266,43.188 c-26.641,26.625-43.203,63.609-43.188,104.266c-0.016,34.641,12.016,66.656,32.078,91.797c5.906,7.438,11.016,13.609,15.094,18.906 c3.063,3.969,5.547,7.438,7.516,10.594c2.953,4.75,4.75,8.672,6.078,13.375c1.297,4.719,2.094,10.469,2.109,18.594 c0,5.469,0.609,10.797,2.141,16.031c1.141,3.906,2.844,7.781,5.25,11.344c3.547,5.375,8.813,9.891,14.594,12.563 c5.766,2.703,11.781,3.688,17.391,3.688h90.422c4.984,0,10.281-0.781,15.469-2.859c3.875-1.547,7.656-3.859,10.875-6.828 c4.875-4.438,8.297-10.141,10.281-15.953c2-5.844,2.75-11.828,2.75-17.984c0-7.219,0.641-12.578,1.688-16.969 c1.625-6.563,4-11.438,8.641-18.266c4.609-6.766,11.578-15.078,20.484-26.234c20.047-25.141,32.063-57.172,32.047-91.797 C403.469,106.797,386.906,69.813,360.266,43.188z M338.531,213.063c-5.672,7.094-10.781,13.297-15.516,19.406 c-3.531,4.594-6.859,9.156-9.906,14.031c-4.547,7.281-8.422,15.375-10.922,24.438s-3.625,18.859-3.625,29.781 c0,0.594-0.016,1.125-0.047,1.594h-85c-0.031-0.469-0.063-0.984-0.063-1.594c0-9.719-0.875-18.531-2.859-26.75 c-2.906-12.359-8.391-22.922-14.828-32.25c-6.484-9.406-13.813-18-22.266-28.656c-14.375-18.047-22.906-40.734-22.922-65.609 c0.016-29.172,11.766-55.391,30.891-74.547C200.609,53.797,226.813,42.031,256,42.031s55.406,11.766,74.547,30.875 c19.109,19.156,30.859,45.375,30.875,74.547C361.406,172.344,352.875,195.031,338.531,213.063z"
          ></path>{" "}
          <path
            className="st0"
            d="M256,512c17.406,0,31.531-14.109,31.531-31.531h-63.063C224.469,497.891,238.594,512,256,512z"
          ></path>{" "}
          <path
            className="st0"
            d="M310.047,369.375H201.969c-9.406,0-17.016,7.609-17.016,17c0,9.406,7.609,17.016,17.016,17.016h108.078 c9.391,0,17.016-7.609,17.016-17.016C327.063,376.984,319.438,369.375,310.047,369.375z"
          ></path>{" "}
          <path
            className="st0"
            d="M310.047,424.297H201.969c-9.406,0-17.016,7.609-17.016,17.016c0,9.391,7.609,17,17.016,17h108.078 c9.391,0,17.016-7.609,17.016-17C327.063,431.906,319.438,424.297,310.047,424.297z"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>,
  ];
  const puzzel = [
    <svg
      key="crypto.randomUUID()"
      fill="currentColor"
      viewBox="-3.2 -3.2 38.4 38.4"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      color="currentColor"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title></title>{" "}
        <g data-name="Layer 75" id="Layer_75">
          {" "}
          <path d="M23,28H18a1,1,0,0,1-1-1,3,3,0,0,0-6,0,1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1,3,3,0,0,0,0-6,1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H9.1a5,5,0,0,1,9.8,0H23a1,1,0,0,1,1,1v4.1a5,5,0,0,1,0,9.8V27A1,1,0,0,1,23,28Zm-4.1-2H22V22a1,1,0,0,1,1-1,3,3,0,0,0,0-6,1,1,0,0,1-1-1V10H18a1,1,0,0,1-1-1,3,3,0,0,0-6,0,1,1,0,0,1-1,1H6v3.1a5,5,0,0,1,0,9.8V26H9.1a5,5,0,0,1,9.8,0Z"></path>{" "}
          <path d="M26,18.15c-.46,2.16-5.94,2.36-9.46,2.36s-6.71-2.43-6.71-3.64h-1A4.17,4.17,0,0,1,9,18a4,4,0,0,1-4,4v5h5a4,4,0,0,1,8,0h5V22a4,4,0,0,0,3.1-1.5Z"></path>{" "}
        </g>{" "}
      </g>
    </svg>,
  ];

  const growth = [
    <svg
      key="crypto.randomUUID()"
      fill="currentColor"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      stroke="currentColor"
      color="currentColor"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M128,494.875H21.581c2.739-8.917,4.42-21.666-0.307-36.454c-4.762-14.882-1.041-27.776,9.958-34.483 c5.461-3.336,11.511-4.181,16.444-2.918c-4.463,8.627-8.627,22.741,0.051,37.76c9.532,16.529,25.813,19.004,34.671,19.004 c4.361,0,7.407-0.597,7.74-0.666c1.818-0.375,3.456-1.323,4.685-2.705c0.785-0.888,19.115-22.016,5.316-45.892 c-7.108-12.305-19.942-19.354-35.217-19.354c-0.939,0-1.801,0.026-2.569,0.068c-10.803-7.893-26.573-8.055-40.004,0.128 c-14.037,8.559-25.958,27.307-17.34,54.263c6.349,19.831-3.123,34.347-3.499,34.901c-0.188,0.265-0.222,0.58-0.367,0.862 c-0.256,0.461-0.461,0.939-0.623,1.459c-0.188,0.58-0.299,1.143-0.35,1.741C0.137,502.87,0,503.118,0,503.408 c0,0.265,0.128,0.478,0.154,0.734c0.043,0.563,0.162,1.092,0.324,1.63c0.171,0.563,0.35,1.092,0.623,1.596 c0.222,0.418,0.486,0.785,0.785,1.161c0.41,0.538,0.845,0.998,1.365,1.425c0.171,0.128,0.256,0.324,0.435,0.444 c0.256,0.179,0.546,0.256,0.819,0.401c0.393,0.213,0.759,0.418,1.178,0.572c0.734,0.256,1.485,0.393,2.244,0.444 c0.213,0.017,0.393,0.128,0.606,0.128H128c4.71,0,8.533-3.823,8.533-8.533S132.71,494.875,128,494.875z M64.316,426.241 c6.272-0.102,15.71,1.579,21.043,10.812c5.7,9.865,1.203,19.32-1.562,23.629c-0.435,0.017-0.896,0.034-1.399,0.034 c-6.323,0-14.899-1.818-19.891-10.47C56.815,440.398,61.449,430.696,64.316,426.241z"></path>{" "}
              <path d="M281.6,494.875h-93.867v-34.133h11.947c0.981,0,24.192-0.188,40.166-16.154C255.812,428.613,256,405.403,256,404.421 v-20.48c0-4.71-3.823-8.533-8.533-8.533h-20.48c-0.981,0-24.192,0.188-40.166,16.154c-7.859,7.868-11.887,17.468-13.961,25.327 c-1.587-1.69-3.166-3.319-4.693-4.847c-7.151-7.151-12.979-12.996-14.285-23.484c10.505-7.006,33.852-26.795,33.852-64.35 c0-47.394-37.265-66.569-38.852-67.371c-2.398-1.195-5.231-1.195-7.629,0c-1.587,0.802-38.852,19.977-38.852,67.371 c0,38.272,24.277,58.121,34.466,64.777c1.63,17.331,11.273,27.162,19.234,35.123c8.141,8.141,14.566,14.566,14.566,28.1v42.667 h-8.533c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533H281.6c4.719,0,8.533-3.823,8.533-8.533 S286.319,494.875,281.6,494.875z M187.733,431.762c0-0.171,0.265-17.246,11.153-28.134s27.955-11.153,28.1-11.153h11.947v11.913 c0,0.171-0.265,17.246-11.153,28.134c-10.803,10.803-27.691,11.145-28.126,11.153h-11.921V431.762z M145.075,373.957 c-7.953-5.504-25.609-20.966-25.609-49.749c0-28.885,17.587-44.254,25.583-49.749c7.953,5.504,25.617,20.958,25.617,49.749 C170.667,353.076,153.097,368.445,145.075,373.957z"></path>{" "}
              <path d="M503.467,494.875H392.533v-102.4H409.6c1.195,0,29.355-0.222,48.7-19.567c19.345-19.345,19.567-47.505,19.567-48.7v-25.6 c0-4.71-3.814-8.533-8.533-8.533h-25.6c-1.195,0-29.355,0.222-48.7,19.567c-0.879,0.888-1.69,1.809-2.5,2.731v-73.498 c0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533v124.698c-0.811-0.922-1.621-1.843-2.5-2.731 c-19.345-19.345-47.505-19.567-48.7-19.567h-25.6c-4.719,0-8.533,3.823-8.533,8.533v25.6c0,1.195,0.222,29.355,19.567,48.7 c19.345,19.345,47.505,19.567,48.7,19.567h17.067v51.2h-8.533c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h136.533 c4.719,0,8.533-3.823,8.533-8.533S508.186,494.875,503.467,494.875z M392.533,358.341c0-0.222,0.171-22.238,14.566-36.634 c14.259-14.259,36.437-14.566,36.634-14.566H460.8v17.067c0,0.222-0.171,22.229-14.566,36.634 c-14.157,14.157-36.122,14.558-36.651,14.566h-17.05V358.341z M375.467,426.608H358.4c-0.213,0-22.238-0.171-36.634-14.566 c-14.259-14.259-14.566-36.437-14.566-36.634v-17.067h17.067c0.213,0,22.229,0.162,36.634,14.566 c14.259,14.259,14.566,36.437,14.566,36.634V426.608z"></path>{" "}
              <path d="M332.8,187.675c2.185,0,4.369-0.836,6.033-2.5l27.964-27.964c5.069,2.987,10.906,4.821,17.203,4.821 c6.298,0,12.134-1.835,17.203-4.821l27.964,27.964c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5 c3.337-3.336,3.337-8.73,0-12.066l-27.947-27.955c3.004-5.086,4.847-10.94,4.847-17.254c0-6.306-1.835-12.134-4.821-17.203 l27.921-27.921c3.337-3.337,3.337-8.73,0-12.066c-3.337-3.336-8.73-3.336-12.066,0l-27.913,27.913 c-5.077-3.012-10.931-4.855-17.254-4.855c-6.323,0-12.177,1.843-17.263,4.855l-27.904-27.913c-3.336-3.336-8.73-3.336-12.066,0 c-3.337,3.337-3.337,8.73,0,12.066l27.921,27.921c-2.987,5.069-4.821,10.897-4.821,17.203c0,6.315,1.843,12.169,4.847,17.254 l-27.947,27.955c-3.337,3.337-3.337,8.73,0,12.066C328.431,186.838,330.615,187.675,332.8,187.675z M371.789,116.012 c0.051-0.051,0.119-0.06,0.171-0.111c0.06-0.06,0.068-0.128,0.12-0.188c3.081-3.012,7.279-4.881,11.921-4.881 c4.642,0,8.841,1.869,11.913,4.881c0.06,0.06,0.068,0.128,0.128,0.188c0.051,0.051,0.12,0.06,0.171,0.111 c2.987,3.072,4.855,7.262,4.855,11.887c0,9.412-7.654,17.067-17.067,17.067c-9.412,0-17.067-7.654-17.067-17.067 C366.933,123.274,368.802,119.084,371.789,116.012z"></path>{" "}
              <path d="M332.8,494.875h-17.067c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533H332.8 c4.719,0,8.533-3.823,8.533-8.533S337.519,494.875,332.8,494.875z"></path>{" "}
              <path d="M256.111,192.121c-0.862,15.369,5.734,30.191,19.601,44.058c27.017,27.017,58.3,26.121,87.211-2.79 c8.047-8.038,15.667-20.966,21.077-31.377c5.41,10.402,13.03,23.339,21.077,31.377c14.925,14.916,30.31,22.485,45.73,22.485 h0.009c14.447,0,28.399-6.622,41.472-19.695c13.867-13.867,20.463-28.698,19.601-44.083 c-0.819-14.541-8.371-29.047-22.443-43.119c-8.03-8.047-20.949-15.573-31.351-20.898c10.394-5.478,23.322-13.175,31.351-21.214 c14.071-14.071,21.623-28.587,22.443-43.145c0.862-15.403-5.734-30.242-19.601-44.109c-26.982-26.991-58.274-26.044-87.211,2.884 C397.03,30.533,389.41,43.47,384,53.872c-5.41-10.402-13.03-23.339-21.077-31.377c-28.928-28.928-60.22-29.867-87.211-2.884 c-13.867,13.867-20.463,28.706-19.601,44.109c0.819,14.558,8.371,29.073,22.443,43.145c8.038,8.047,20.975,15.659,31.377,21.052 c-10.402,5.419-23.339,13.065-31.377,21.103C264.482,163.09,256.93,177.597,256.111,192.121z M333.107,135.749 c3.157-1.34,5.205-4.437,5.205-7.868c-0.009-3.43-2.065-6.519-5.231-7.851c-0.29-0.128-29.943-12.706-42.462-25.233 c-11.008-11.016-16.896-21.794-17.468-32.043c-0.58-10.334,4.344-20.787,14.635-31.078c20.454-20.437,40.875-19.294,63.07,2.884 c12.527,12.535,25.156,42.18,25.284,42.479c1.331,3.157,4.437,5.205,7.859,5.205c3.43,0,6.528-2.048,7.859-5.205 c3.499-8.286,14.857-32.051,25.284-42.479c22.187-22.17,42.615-23.33,63.07-2.876c10.291,10.283,15.215,20.736,14.635,31.07 c-0.572,10.249-6.46,21.026-17.468,32.043c-12.544,12.553-42.24,25.455-42.539,25.574c-3.149,1.365-5.171,4.48-5.154,7.91 c0.034,3.43,2.116,6.511,5.291,7.817c0.29,0.128,29.901,12.433,42.402,24.943c11.017,11.008,16.896,21.786,17.468,32.017 c0.58,10.317-4.343,20.762-14.635,31.053c-9.745,9.754-19.635,14.694-29.397,14.694c-10.743,0-22.067-5.879-33.673-17.485 c-12.527-12.527-25.165-42.18-25.284-42.479c-1.331-3.157-4.437-5.214-7.859-5.214c-3.43,0-6.528,2.057-7.859,5.214 c-3.499,8.286-14.857,32.06-25.284,42.479c-22.161,22.161-42.607,23.262-63.07,2.79c-10.291-10.291-15.215-20.727-14.635-31.027 c0.572-10.223,6.451-20.983,17.468-32C303.147,148.549,332.809,135.877,333.107,135.749z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>,
  ];

  const graduateHat = [
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" key="crypto.randomUUID()">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect x="0" fill="none" width="20" height="20"></rect>{" "}
        <g>
          {" "}
          <path d="M10 10L2.54 7.02 3 18H1l.48-11.41L0 6l10-4 10 4zm0-5c-.55 0-1 .22-1 .5s.45.5 1 .5 1-.22 1-.5-.45-.5-1-.5zm0 6l5.57-2.23c.71.94 1.2 2.07 1.36 3.3-.3-.04-.61-.07-.93-.07-2.55 0-4.78 1.37-6 3.41C8.78 13.37 6.55 12 4 12c-.32 0-.63.03-.93.07.16-1.23.65-2.36 1.36-3.3z"></path>{" "}
        </g>{" "}
      </g>
    </svg>,
  ];

  return (
    <div>
      <div className=" flex flex-col justify-center w-full max-w-5xl mx-auto py-10 lg:py-25 md:py-32 font-(family-name:--font-comic-relief)">
        <div className="flex flex-col gap-2 justify-baseline w-full px-5">
          <p className=" text-4xl dark:text-kiwi-9 text-kiwi-11 font-bold">
            About Me
          </p>
          <p className="pb-2 text-taupe-800 text-lg">
            A LITTLE ABOUT MY JOURNEY
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center w-full p-5 gap-5">
          <div className="basis-1/3 justify-center md:items-center lg:items-baseline">
            {isMounted ? (
              <Image
                src="/images/Gen.jpeg"
                alt="KiwiSweet"
                key="crypto.randomUUID()"
                width="280"
                height="300"
                className=" h-auto w-auto rounded-md"
              />
            ) : (
              <Skeleton className="w-80 h-106.5 rounded-md" />
            )}
          </div>
          <div className="flex flex-col gap-5 justify-around items-baseline md:justify-center lg:justify-baseline basis-2/3 ">
            <div className="flex-col text-lg text-justify px-3 text-taupe-800">
              <p className="pb-3 dark:text-kiwi-9 text-kiwi-11 text-3xl">
                Where creative ideas meet clean code.
              </p>
              <p className="pb-3">
                I&apos;m a creative and driven individual who enjoys exploring
                the intersection of technology, design, and problem-solving. I
                have a passion for bringing ideas to life and finding new ways
                to turn imagination into something meaningful.
              </p>
              <p className="pb-3">
                I&apos;m naturally curious, enjoy thinking outside the box and
                love exploring new possibilities. Whether I&apos;m experimenting
                with a new idea, learning a skill or working through a
                challenge, I find excitement in the process of discovering what
                I can create.
              </p>
            </div>

            <div className="flex flex-row items-center justify-center px-2 gap-2">
              <a
                href="https://github.com/KiwiSweetH20"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="dark:text-kiwi-9 text-kiwi-11">
                  <GitHub />
                </span>
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-400/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/genevieve-van-niekerk-6013653b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="dark:text-kiwi-9 text-kiwi-11">
                  <Linkedin />
                </span>
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-400/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  LinkedIn
                </span>
              </a>
              {/* <a
                href="https://github.com/KiwiSweetH20"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="dark:text-kiwi-9 text-kiwi-11">
                  <svg
                    xmlns="http://w3.org"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </span>
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-400/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  X
                </span>
              </a> */}
              {/* <a
                href="..."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="dark:text-kiwi-9 text-kiwi-11">
                  <svg width="25" height="25" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662c-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4c.68 2.28 3.094 3.05 5.32 2.803c-3.26.483-6.157 1.67-2.36 5.898c4.178 4.325 5.726-.927 6.52-3.59c.794 2.663 1.708 7.726 6.444 3.59c3.556-3.59.977-5.415-2.283-5.898c2.225.247 4.64-.523 5.319-2.803c.205-.69.52-4.825.52-5.399c0-.575-.116-1.55-.752-1.838c-.549-.248-1.386-.517-3.583 1.033c-2.293 1.621-4.76 4.904-5.665 6.664"
                    ></path>
                  </svg>
                </span>
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-400/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  BlueSky
                </span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-20 mb-15">
          <p className="text-4xl text-center dark:text-kiwi-9 text-kiwi-11">
            It started with a website and a spark of creativity.
          </p>
          <p className="text-lg text-center text-taupe-800">
            How my hands-on experience building client sites sparked my passion for front-end design.
          </p>
          <div className=" flex flex-col gap-3 w-3xl mt-5 justify-center p-3 bg-kiwi-3 dark:bg-taupe-50 rounded-md border-3 border-kiwi-11 dark:border-kiwi-9 shadow-2xl shadow-taupe-800/30 dark:shadow-taupe-500/30">
            <p className="text-3xl text-center dark:text-kiwi-9 text-kiwi-11">
              R&M Web Developers
            </p>
            <p className="text-center dark:text-kiwi-9 text-kiwi-11">
              WordPress · Divi · Client Websites
            </p>
            <p className="text-center text-taupe-800">
              My journey into web development began when I had the oppertunity
              to work with R&M Web Developers, where I gained hands-on
              experience creating client websites using WordPress and Divi.
            </p>
            <p className="text-center text-taupe-800">
              This experience introduced me to the creative side of web
              development and sparked my interest in combining technology and
              design to bring ideas to life.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-20">
            <p className="text-3xl text-center dark:text-kiwi-9 text-kiwi-11">
              Always moving forward with curiosity
            </p>
            <div className="flex flex-row gap-4 max-w-6xl mx-auto mt-5">
              <div className="flex flex-1 flex-col justify-center items-center text-center gap-2 bg-kiwi-3 dark:bg-taupe-50 dark:border-3 border-kiwi-9 w-fit h-fit rounded-2xl p-3">
                <p className="w-9 h-9 text-taupe-800 dark:text-kiwi-9">{bulb}</p>
                <p className="text-2xl dark:text-kiwi-9 text-taupe-800">Creativity</p>
                <p className="text-taupe-800">Exploring ideas and new possibilities.</p>
              </div>
              <div className="flex flex-1 flex-col justify-center items-center text-center gap-2 bg-kiwi-3 dark:bg-taupe-50 dark:border-3 border-kiwi-9 w-fit h-fit rounded-2xl p-3">
                <p className="w-9 h-9 text-taupe-800 dark:text-kiwi-9">
                  {puzzel}
                </p>
                <p className="text-2xl dark:text-kiwi-9 text-taupe-800">Problem-solving</p>
                <p className="text-taupe-800">Finding ways to overcome challenges.</p>
              </div>
              <div className="flex flex-1 flex-col justify-center items-center text-center gap-2 bg-kiwi-3 dark:bg-taupe-50 dark:border-3 border-kiwi-9 w-fit h-fit rounded-2xl p-3">
                <p className="w-9 h-9 text-taupe-800 dark:text-kiwi-9">{graduateHat}</p>
                <p className="text-2xl dark:text-kiwi-9 text-taupe-800">Learning</p>
                <p className="text-taupe-800">Constantly developing new skills.</p>
              </div>
              <div className="flex flex-1 flex-col justify-center items-center text-center gap-2 bg-kiwi-3 dark:bg-taupe-50 dark:border-3 border-kiwi-9 w-fit h-fit rounded-2xl p-3">
                <p className="w-9 h-9 text-taupe-800 dark:text-kiwi-9">
                  {growth}
                </p>
                <p className="text-2xl dark:text-kiwi-9 text-taupe-800">Growth</p>
                <p className="text-taupe-800">Taking on challenges and improving.</p>
              </div>
            </div>
            <div className="flex flex-row gap-5 mt-20 w-full max-w-4xl mx-auto">
            <div className="flex flex-1 flex-col justify-center items-center text-center gap-4 p-5 border-3 border-kiwi-9 rounded-md">
              <p className="text-3xl dark:text-kiwi-9 text-kiwi-11">
                The journey is just getting started.
              </p>
              <p className=" text-taupe-800">
                I&apos;m excited to keep learning, take on new challenges and
                find opportunities to contribute my creativity and growing
                technical skills.
              </p>
            </div>
              <div className="flex flex-1 border-3 border-kiwi-9 rounded-md p-5">
              <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
