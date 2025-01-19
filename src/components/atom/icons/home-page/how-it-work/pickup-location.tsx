import { SVGProps } from 'react';

export function PickupLocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      {...props}
    >
      <path
        fill="url(#pickup-location-b)"
        d="M53.279 47.203V14.55L.869 16.797V49.45a2.2 2.2 0 0 0 1.111 1.924l20.762 11.987a4.772 4.772 0 0 0 4.772 0l24.654-14.234a2.2 2.2 0 0 0 1.11-1.924Z"
      />
      <path
        fill="url(#pickup-location-c)"
        d="M1.98 14.873 26.634.64a4.772 4.772 0 0 1 4.773 0l20.76 11.987c1.482.855 1.482 2.992 0 3.848L27.515 30.707a4.772 4.772 0 0 1-4.772 0L1.98 18.721c-1.48-.855-1.48-2.993 0-3.848Z"
      />
      <path
        fill="#DEA861"
        d="m9.974 10.258 26.48 15.288 7.024-4.055-26.48-15.288-7.024 4.055Z"
      />
      <path
        fill="#CC8241"
        d="m14.172 7.832 26.48 15.288-1.376.794-26.48-15.288 1.376-.794Zm22.282 17.714v5.8l7.024-4.055v-5.8l-7.024 4.055Z"
      />
      <path
        fill="url(#pickup-location-d)"
        d="m60.074 21.825-3.935-2.272c-1.894-1.313-4.497-1.235-7.349.583-5.173 3.299-9.35 11.36-9.516 18.357-.073 3.043.603 5.439 1.794 7.021l-.002.003 6.368 8.143c.115.147.246.256.388.333l3.947 2.279 8.305-34.447Z"
      />
      <path
        fill="url(#pickup-location-e)"
        d="M63.13 29.647c0-7.557-4.722-10.917-10.447-7.267-5.173 3.297-9.35 11.359-9.517 18.356-.072 3.043.603 5.439 1.794 7.021l-.002.003 6.369 8.143c.893 1.143 2.744.074 3.637-2.1l6.369-15.497h-.002c1.133-2.814 1.8-5.824 1.8-8.66Z"
      />
      <path
        fill="url(#pickup-location-f)"
        d="m60.435 27.81-2.937-1.691c-1.16-.614-2.649-.526-4.274.412-3.697 2.134-6.694 7.861-6.694 12.79 0 2.711.907 4.614 2.337 5.425l-.001.002 2.684 1.55 8.886-18.488Z"
      />
      <path
        fill="#F2EFFA"
        d="M61.344 39.346c2.225-5.222 1.634-10.476-1.32-11.735-2.954-1.259-7.153 1.954-9.378 7.176-2.225 5.222-1.634 10.476 1.32 11.734 2.955 1.26 7.153-1.954 9.378-7.175Z"
      />
      <defs>
        <linearGradient
          id="pickup-location-b"
          x1={20.939}
          x2={28.138}
          y1={39.275}
          y2={39.275}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC8241" />
          <stop offset={1} stopColor="#DEA861" />
        </linearGradient>
        <linearGradient
          id="pickup-location-c"
          x1={12.483}
          x2={39.445}
          y1={7.25}
          y2={22.816}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEA861" />
          <stop offset={1} stopColor="#EBCBA0" />
        </linearGradient>
        <linearGradient
          id="pickup-location-d"
          x1={48.658}
          x2={55.613}
          y1={39.135}
          y2={27.088}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB2C37" />
          <stop offset={1} stopColor="#FF7A85" />
        </linearGradient>
        <linearGradient
          id="pickup-location-e"
          x1={43.161}
          x2={67.627}
          y1={44.83}
          y2={44.83}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF4757" />
          <stop offset={1} stopColor="#FF7A85" />
        </linearGradient>
        <linearGradient
          id="pickup-location-f"
          x1={52.842}
          x2={55.593}
          y1={34.185}
          y2={29.419}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C5BAEB" />
          <stop offset={1} stopColor="#D7D1EB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
