import React from 'react';
const SVG = module.exports = {};

SVG.compose = className => {
  return(
    <svg
      version="1.1"
      viewBox="0 0 1000 1000"
      enableBackground="new 0 0 1000 1000"
      className={className}
    >
      <g>
        <path d="M984.1,122.3C946.5,84.5,911.4,42.1,867.8,11c-40-8.3-59.2,34.9-86.7,55.1c46.4,53.9,100.5,101.5,150.4,152.5C954.1,191.7,1007.7,164.1,984.1,122.3z M959.3,325.9c-31.7,31.8-64.5,62.8-95.1,95.8c-0.8,127.5,0.3,255-0.4,382.6c-0.6,47-41.8,88.7-88.8,90.3c-193.4,0.8-387,0.8-580.4,0.1c-52.2-1.4-94-51.4-89.9-102.7c-0.1-184.6-0.1-369.1,0-553.5c-4-51.1,38-100.3,89.6-102.1c128.1-1.7,256.3,0.1,384.3-0.9c33.2-30,63.9-62.9,95.7-94.5c-170.6,0-341-0.9-511.6,0.5c-79.6,1.4-151,71-152.4,151C10.1,407.7,9.5,622.8,10.7,838c0.3,77.5,66.1,144.7,142.4,152h670.2c72.3-12.7,134.3-75.8,135.2-150.9C960.7,668.1,959,496.9,959.3,325.9z M908.2,242.2C858,191.7,807.4,141.5,756.6,91.5C645.4,201.9,534,312,423.4,423c50.1,50.4,100.4,100.6,151.3,150.3C686,463.1,797.2,352.6,908.2,242.2z M341.2,654.6c68.1-18.5,104.4-30.2,172.5-48.5c18.2-5.8,30.3-9.3,39.7-13c-48.2-45.9-103.6-102.5-151.7-148.8C381.4,514.4,361.4,584.5,341.2,654.6z"/>
      </g>
    </svg>
  );
}

SVG.lens = className => {
  return(
    <svg version="1.1" x="0px" y="0px" className={className}
    	 viewBox="0 0 461.101 461.101" enableBackground="new 0 0 461.101 461.101;"
    	 >
    <g>
    	<path d="M400.091,410.17l-95.543-149.488c-7.431-11.617-20.909-17.035-33.694-14.764l-22.053-34.504 c46.762-37.412,58.784-105.057,25.821-156.636C239.351-0.408,165.757-16.607,110.575,18.666 C55.39,53.938,39.19,127.52,74.462,182.708c33.149,51.863,100.133,69.267,153.878,41.908l21.812,34.116 c-7.999,10.72-9.017,25.67-1.383,37.604L344.31,445.82c9.842,15.403,30.312,19.912,45.716,10.065 C405.424,446.039,409.934,425.574,400.091,410.17z M229.068,204.051c-47.046,30.069-109.774,16.255-139.843-30.786 C59.161,126.221,72.972,63.492,120.011,33.424c47.046-30.066,109.774-16.255,139.842,30.791 C289.918,111.254,276.111,173.991,229.068,204.051z"/>
    </g>
    </svg>
  );
}

SVG.home = className => {
  return(
    <svg
      enableBackground="new 0 0 16 16;"
      version="1.1"
      viewBox="0 0 16 16"
      className={className}
    >
      <path d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z"/>
    </svg>
  )
}

SVG.contacts = className => {
  return(
    <svg
      version="1.2"
      viewBox="0 0 24 24"
      className={className}
    >
      <g>
        <g>
          <path d="M19,3H8C6.346,3,5,4.346,5,6v1H4C3.447,7,3,7.448,3,8s0.447,1,1,1h1v2H4c-0.553,0-1,0.448-1,1s0.447,1,1,1h1v2H4    c-0.553,0-1,0.448-1,1s0.447,1,1,1h1v1c0,1.654,1.346,3,3,3h11c1.654,0,3-1.346,3-3V6C22,4.346,20.654,3,19,3z M7,6    c0-0.551,0.449-1,1-1v2H7V6z M7,9h1v2H7V9z M7,13h1v2H7V13z M7,18v-1h1v2C7.449,19,7,18.551,7,18z M20,18c0,0.551-0.449,1-1,1H9V5 h10c0.551,0,1,0.449,1,1V18z"/>
          <circle cx="14" cy="10.5" r="2"/>
          <path d="M14,13.356c-1.562,0-2.5,0.715-2.5,1.429c0,0.357,0.938,0.715,2.5,0.715c1.466,0,2.5-0.357,2.5-0.715    C16.5,14.071,15.52,13.356,14,13.356z"/>
        </g>
      </g>
    </svg>
  )
}

SVG.request = className => {
  return(
    <svg
      enableBackground="new 0 0 48 48;"
      version="1.1"
      viewBox="0 0 48 48"
      className={className}
    >
      <g>
        <g>
          <path d="M12.65847,33.66603c2.61059-0.00001,17.33555,0,19.94255,0    c0.22318,0,0.39552-0.18031,0.38894-0.4034c-0.02485-0.84248-0.15854-2.741-0.8712-3.35053    c-0.34131-0.28613-0.75488-0.51758-1.33545-0.74512c-0.01514-0.00391-0.02979-0.00781-0.04297-0.01367    c-0.35645-0.1377-0.72314-0.25293-1.08789-0.36914c-0.35156-0.11133-0.70166-0.22266-1.03955-0.35059    c-0.33496-0.125-0.68164-0.22168-1.02783-0.31836c-0.47461-0.13281-0.96484-0.26953-1.43213-0.47949    c-0.35303-0.15869-0.60144-0.35742-0.75494-0.59625c-0.59167,0.70526-1.5083,1.4566-2.73138,1.4566h-0.04004    c-1.24274,0-2.16742-0.77551-2.75867-1.49146c-0.1369,0.23346-0.36847,0.45508-0.75745,0.6311    c-0.46973,0.20996-0.96191,0.34766-1.43848,0.47949c-0.34717,0.09668-0.69482,0.19336-1.03369,0.31934    c-0.34912,0.13477-0.71631,0.25195-1.08447,0.36914c-0.90674,0.28809-1.7627,0.56055-2.41113,1.10938    c-0.70812,0.6053-0.84589,2.50429-0.87305,3.34839C12.26245,33.48497,12.43487,33.66603,12.65847,33.66603z"/>
          <path d="M22.62658,27.79688h0.04004c1.28516,0,2.18994-1.11523,2.61475-1.7793    c0.31152-0.48145,0.5625-1.03125,0.80566-1.56348c0.09033-0.19824,0.18066-0.39551,0.27393-0.58984    c0.35352-0.75781,0.64307-1.52441,0.85889-2.27441c0.20654-0.68164,0.31982-1.31445,0.34717-1.93945    c0.03809-1.02734-0.09033-2.50098-0.9165-3.67188c-0.0957-0.13086-0.19434-0.25781-0.31152-0.375    c-0.80273-0.82129-2.19092-1.29199-3.66309-1.26758c-0.05615-0.00098-0.11279-0.00195-0.16846-0.00195    c-1.45117,0-2.77979,0.47852-3.55029,1.26758c-0.12061,0.12012-0.21924,0.24609-0.31787,0.38086    c-0.82324,1.16797-0.95117,2.64062-0.91309,3.6709c0.02686,0.62207,0.13965,1.25488,0.34521,1.93164    c0.21729,0.75488,0.50684,1.52148,0.8623,2.28223c0.09131,0.19141,0.18164,0.38867,0.27197,0.58691    c0.24316,0.53223,0.49414,1.08203,0.80469,1.56152C20.43664,26.68164,21.34191,27.79688,22.62658,27.79688z"/>
          <path d="M33.36632,15.41895c-0.19336,0-0.3501,0.15625-0.3501,0.34961v1.67285h-1.67187    c-0.19336,0-0.3501,0.15625-0.3501,0.34961s0.15674,0.34961,0.3501,0.34961h1.67187v1.67285    c0,0.19336,0.15674,0.34961,0.3501,0.34961s0.3501-0.15625,0.3501-0.34961v-1.67285h1.67236    c0.19336,0,0.3501-0.15625,0.3501-0.34961s-0.15674-0.34961-0.3501-0.34961h-1.67236v-1.67285    C33.71642,15.5752,33.55968,15.41895,33.36632,15.41895z"/>
        </g>
      </g>
    </svg>
  )
}
SVG.lookup = className => {
  return(
    <svg
      enableBackground="new 0 0 48 48;"
      version="1.1" viewBox="0 0 48 48"
      className={className}
    >
      <g>
        <g>
          <g>
            <path d="M38.48689,31.71885c-0.03003-0.02997-0.06-0.07001-0.09003-0.09998     c-0.13-0.13-0.27997-0.25-0.42999-0.35999c-0.14001-0.11005-0.28998-0.21002-0.44-0.30005     c-0.01996-0.01996-0.04999-0.02997-0.07996-0.04999c-0.11005-0.07001-0.23004-0.13995-0.34003-0.20996     c-0.47998-0.26001-0.96997-0.49005-1.41998-0.73004c-0.5-0.26001-0.98999-0.51001-1.48999-0.76996     c-0.25-0.14001-0.49005-0.26001-0.71002-0.40002c-0.06-0.02997-0.10999-0.07001-0.16003-0.12     c-0.00995-0.01001-0.02997-0.03003-0.04999-0.03998l-0.01001-0.01001c-0.06-0.04999-0.12-0.10004-0.16998-0.15002     c-0.17999-0.17999-0.32001-0.39001-0.42999-0.66998c-0.07001-0.16998-0.12-0.28998-0.15997-0.41003     c-0.03003-0.09998-0.05005-0.17999-0.07001-0.25995c-0.01001-0.02002-0.01001-0.04004-0.02002-0.06     c0.01001-0.01001,0-0.02002,0-0.03003c-0.01001-0.07001-0.02002-0.14001-0.02997-0.22998c0-0.02002-0.01001-0.04004-0.01001-0.06     c-0.01001-0.04004-0.01001-0.09003-0.01001-0.14001c0-0.02002,0-0.03003-0.01001-0.04999v-0.08002     c0-0.03003,0-0.07001-0.01001-0.10999v-0.04004l0.33002-0.41998c0.15997-0.21997,0.28998-0.84998,0.35999-1.28998     c0.02002-0.12,0.03998-0.22003,0.04999-0.29999c0-0.03003,0.01001-0.05005,0.01001-0.07001c0-0.03003,0-0.05005,0.01001-0.07001     c0.01001-0.01001,0.01001-0.02002,0.01001-0.02002c0.14996-0.01001,0.27997-0.08002,0.38-0.19     c0.09998-0.10999,0.17999-0.23999,0.21997-0.37c0.12-0.39001,0.25-0.75,0.29004-1.16998     c0.03998-0.29999,0.09998-0.66998-0.14001-0.91003c-0.02002-0.01996-0.09003-0.04999-0.17999-0.06h-0.01001     c-0.01001-0.01001-0.02002-0.01001-0.03998-0.01001c-0.09003-0.00995-0.19-0.00995-0.21002,0.04004     c0.02002-0.04004,0.04999-0.78003,0.07001-1.33002c0.01001-0.16998,0.01001-0.31,0.01001-0.41998s0-0.17999,0-0.17999     l0.42999-0.31l0.01996-0.02002l-0.03998-0.33002l-0.01001-0.04999l-0.08002-0.64001c0,0-0.45996-2.21997-2.75995-2.75     c-2.30005-0.53998-3.67999,0.71002-3.67999,0.71002c-0.73004,0-1.21002,0.48999-1.43005,1.39001     c-0.09998,0.40997-0.10999,0.88-0.06995,1.25v0.14996c0.00995,0.05005,0.00995,0.10004,0.01996,0.15002     c0.02002,0.13,0.03003,0.22998,0.04999,0.31c0.01001,0.09998,0.02002,0.15002,0.02002,0.15002s0.02002,0.71997,0.03998,1.27997     c0.01001,0.22003,0.02002,0.41998,0.03003,0.53003c0,0.06,0.01001,0.09998,0.01001,0.10999     c-0.01001-0.02002-0.04004-0.03003-0.07001-0.04004c-0.03003-0.00995-0.08002-0.00995-0.13,0c-0.03998,0-0.08002,0-0.12,0.02002     c-0.04999,0.02002-0.09998,0.04004-0.10999,0.04999c-0.01001,0-0.01001,0-0.01001,0     c-0.23999,0.24005-0.17999,0.61005-0.14001,0.91003c0.01001,0.09998,0.03003,0.20996,0.04999,0.31     c0.04004,0.19,0.09003,0.38,0.15002,0.57001c0.02997,0.09998,0.06,0.19,0.08997,0.28998c0.08002,0.25,0.31,0.54999,0.61005,0.56     c0,0,0.04999,0.35004,0.13,0.73999v0.01001c0.01996,0.12,0.04999,0.23999,0.07996,0.35999     c0.04004,0.17999,0.09003,0.34003,0.13,0.47003c0.02002,0.02997,0.03003,0.06,0.04999,0.08997     c0.01001,0.03003,0.03003,0.06,0.04004,0.08002l0.33002,0.41003c-0.01001,0.08997-0.01001,0.16998-0.01001,0.23999     s-0.01001,0.13995-0.02002,0.20001c0.02002,0.02997,0.01001,0.06995-0.01001,0.12c-0.01001,0.06995-0.02002,0.13-0.02997,0.19     l-0.03003,0.14996c-0.03998,0.12-0.08002,0.26001-0.15997,0.44c0.01001,0.01001,0.01001,0.01001,0.01001,0.02002     c-0.03003,0.08002-0.06006,0.15997-0.10004,0.26001c-0.29999,0.75995-0.66998,0.94995-1.38,1.31     c-0.15997,0.07996-0.25,0.10999-0.41998,0.19c0.04999,0.01996,0.08997,0.04999,0.14001,0.07996     c0.44,0.23004,0.85999,0.51001,1.25,0.84003c0.98999,0.77997,1.76996,1.82001,2.07996,3.09998h10.76001     C39.09687,32.92887,38.8769,32.16886,38.48689,31.71885z" /><path d="M39.73689,33.46885H28.45686c-0.31-1.27997-1.08997-2.32001-2.07996-3.09998     c-0.39001-0.33002-0.81-0.60999-1.25-0.84003c0.98999-0.44995,1.78998-1.02997,1.76001-1.83997     c0-0.01001,0-0.01001-0.01001-0.02002c0.01001-0.07001,0-0.14001-0.02002-0.21002     c-0.02002-0.08997,0.14001-0.32996,0.21997-0.50995v-0.01001c0.01001-0.01001,0.02002-0.03003,0.02002-0.04999     c0.02002-0.05005,0.03003-0.09003,0.01001-0.12c0.01001-0.06006,0.02002-0.13,0.02002-0.20001     c0.01001-0.07001,0.01996-0.14001,0.01996-0.23004l-0.00995-0.00995l-0.33002-0.41003     c-0.01001-0.02002-0.03003-0.04999-0.04004-0.08002c-0.00995-0.00995-0.01996-0.02997-0.01996-0.04999     c-0.01001-0.01001-0.02002-0.01996-0.03003-0.03998c-0.03998-0.13-0.08997-0.29004-0.13-0.47003     c-0.02997-0.12-0.06-0.23999-0.07996-0.35999v-0.01001c-0.08002-0.38995-0.13-0.73999-0.13-0.73999     c-0.30005-0.01001-0.53003-0.31-0.61005-0.56c-0.02997-0.09998-0.06-0.19-0.08997-0.28998     c-0.06-0.19-0.10999-0.38-0.15002-0.57001c-0.01996-0.10004-0.03998-0.21002-0.04999-0.31     c-0.02997-0.29999-0.09998-0.66998,0.15002-0.91003c0.01001-0.00995,0.06-0.02997,0.10999-0.04999     c0.03998-0.02002,0.08002-0.02002,0.12-0.02002c0.04999-0.00995,0.09998-0.00995,0.13,0     c0.02997,0.01001,0.06,0.02002,0.07001,0.04004c0-0.01001-0.01001-0.04999-0.01001-0.10999     c-0.01001-0.11005-0.02002-0.31-0.03003-0.53003c-0.01996-0.56-0.03998-1.27997-0.03998-1.27997     s-0.01001-0.05005-0.02002-0.15002c-0.01996-0.08002-0.02997-0.17999-0.04999-0.31     c-0.01001-0.04999-0.01001-0.09998-0.01996-0.15002c0-0.04999-0.01001-0.10999-0.01001-0.15997l0.01001,0.01001     c0.12994,0.14996,0.21997,0.25,0.21997,0.25c-0.01001-0.62,0.17999-1.23999,0.59003-1.72003     c0.41998-0.47998,0.82996-0.70996,1.45996-0.63c0.73004,0.09003,1.42999-0.19,2.16003-0.20996     c0.70996-0.01001,1.41998,0.25,1.98999,0.66998c0.60999,0.46002,1.29477,1.2064,1.54477,1.93644c0.07996-0.06,0,0,0.06-0.08002     l0.00522-0.12645l0.04999,0.33002h-0.01001l-0.01996,0.02002l-0.42004,0.32001c0,0,0,0.06-0.00995,0.16998     c0,0.10999,0,0.25-0.01001,0.41998c-0.02002,0.54999-0.04999,1.28998-0.07001,1.33002     c0.02002-0.04999,0.12-0.04999,0.21002-0.04004c0.01996,0,0.02997,0,0.03998,0.01001h0.01001     c0.08997,0.01001,0.15997,0.04004,0.17999,0.06c0.23999,0.24005,0.17999,0.61005,0.14001,0.91003     c-0.04004,0.41998-0.17004,0.77997-0.29004,1.16998c-0.02997,0.13-0.10999,0.26001-0.21997,0.37     c-0.10004,0.10999-0.23004,0.17999-0.38,0.19h-0.01001c0,0,0,0.01001,0,0.02002     c-0.01001,0.01996-0.01001,0.03998-0.01001,0.07001c0,0.01996-0.01001,0.03998-0.01001,0.07001     c-0.01001,0.07996-0.02997,0.17999-0.04999,0.29999c-0.07001,0.44-0.20001,1.07001-0.35999,1.28998l-0.33002,0.41998v0.04004     c0.01001,0.03998,0.01001,0.07996,0.01001,0.10999s0.01001,0.06,0.01001,0.09003v0.03998c0,0.02002,0,0.03998,0.01001,0.06     v0.08002c0,0.01996,0.01001,0.03998,0.01001,0.06c0.00995,0.08997,0.01996,0.15997,0.02997,0.22998     c0,0.01001,0.01001,0.02002,0,0.03003c0.01001,0.00995,0.01001,0.00995,0.01001,0.00995     c0,0.02002,0.01001,0.04004,0.01001,0.05005c0.01996,0.07996,0.03998,0.15997,0.07001,0.25995     c0.03998,0.12006,0.08997,0.24005,0.15997,0.41003c0.10999,0.27997,0.25,0.48999,0.42999,0.66998     c0.04999,0.04999,0.10999,0.10004,0.16998,0.15002l0.01001,0.01001c0.02002,0.00995,0.04004,0.02997,0.04999,0.03998     c0.05005,0.04999,0.10004,0.09003,0.16003,0.12c0.21997,0.14001,0.46002,0.26001,0.71002,0.40002     c0.5,0.25995,0.98999,0.50995,1.48999,0.76996c0.45001,0.23999,0.94,0.47003,1.41998,0.73004     c0.09998,0.07001,0.21002,0.13,0.31,0.19995c0.01001,0,0.02002,0.01001,0.03003,0.01001     c0.02997,0.02002,0.06,0.03003,0.07996,0.04999c0.15002,0.09003,0.29999,0.19,0.44,0.30005     c0.15002,0.10999,0.29999,0.22998,0.42999,0.35999c0.03003,0.02997,0.06,0.07001,0.09003,0.09998     c0.33002,0.38,0.72998,0.80005,1.02002,1.15002C39.65687,33.15885,39.71687,33.37888,39.73689,33.46885z"/><path d="M26.70686,24.70884c0,0-1.25995-2.60999-0.29999-2.48999c0.95001,0.12,0.63-2.69995,0.63-2.69995     c-0.07001-2.16003,0.92999-2.28003,0.94-2.28003c0.08002-0.01001,0.12-0.03003,0.20001,0.01001     c1.08002,0.60999,2.21002,1.15997,3.39996,1.54999c0.73004,0.23999,1.52002,0.44,2.30005,0.40997     c0.01996,0.02002,0.03998,0.03003,0.06,0.05005l-0.42004,0.32001c0,0,0,0.06-0.00995,0.16998c0,0.10999,0,0.25-0.01001,0.41998     c-0.02002,0.54999-0.04999,1.28998-0.07001,1.33002c0.02002-0.04999,0.12-0.04999,0.21002-0.04004     c0.01996,0,0.02997,0,0.03998,0.01001h0.01001c0.08997,0.01001,0.15997,0.04004,0.17999,0.06     c0.23999,0.24005,0.17999,0.61005,0.14001,0.91003c-0.04004,0.41998-0.17004,0.77997-0.29004,1.16998     c-0.02997,0.13-0.10999,0.26001-0.21997,0.37c-0.10004,0.10999-0.23004,0.17999-0.38,0.19h-0.01001     c0,0-0.01001,0.06-0.02002,0.16003c-0.01001,0.07996-0.02997,0.17999-0.04999,0.29999     c-0.07001,0.44-0.20001,1.07001-0.35999,1.28998l-0.33002,0.41998v0.04004c0.01001,0.03998,0.01001,0.07996,0.01001,0.10999     v0.08002l0.01001,0.01001v0.03998c0,0.02002,0,0.03998,0.01001,0.06c0,0.04999,0,0.09998,0.01001,0.14001     c0.00995,0.08997,0.01996,0.15997,0.02997,0.22998c0,0.01001,0.01001,0.02002,0,0.03003     c0.01001,0.00995,0.01001,0.00995,0.01001,0.00995c0,0.02002,0.01001,0.04004,0.01001,0.05005     c0.01996,0.07996,0.03998,0.15997,0.07001,0.25995c0.19995,1.35004,1.35999,2.92004,3.57996,4.11005     c1.55005,0.83997,1.97003,1.52997,2.05005,1.95996h-9.68005c-0.31-1.27997-1.08997-2.32001-2.07996-3.09998     c0.34998-0.28998,0.66998-0.64001,0.87-1.06c0.47998-0.97998,0.32996-2.17999,0.06-3.20001l-0.5-0.19     c-0.01001-0.02002-0.03003-0.04999-0.04004-0.08002c-0.00995-0.00995-0.01996-0.02997-0.01996-0.04999     c-0.02002-0.04999-0.04004-0.10999-0.06-0.16998c-0.04004-0.09998-0.07001-0.22003-0.10004-0.34003     c-0.02997-0.12-0.06-0.23999-0.07996-0.35999v-0.01001C26.62691,24.78885,26.70686,24.70884,26.70686,24.70884z"/></g><g><path d="M26.20088,31.80234c-0.02533-0.03394-0.05908-0.06781-0.09283-0.10175     c-0.72589-0.70367-1.7641-1.1615-2.65033-1.62775c-0.05066-0.02545-0.09283-0.0509-0.14349-0.07629     c-0.43048-0.22894-0.87781-0.44934-1.30829-0.67828c-0.66681-0.3476-1.50244-0.64429-1.78943-1.3819     c-0.19836-0.49182-0.27606-1.39276-0.32031-2.11951h0.008h1.59528l-0.39667-0.47266c0,0,1.77252-0.35449,1.77252-0.48956     c0-0.14349-0.61615-0.93689-0.61615-0.93689c0.07245-0.3031,0.14777-0.59216,0.25208-0.88599     c0.10602-0.29858,0.21246-0.59735,0.30029-0.90192c0.11859-0.41125,0.09546-0.88385,0.06909-1.30646     c-0.03369-0.53992-0.12189-1.07654-0.24902-1.60205c-0.13849-0.57202-0.32489-1.13348-0.56396-1.67145     c-0.23596-0.53076-0.52429-1.04175-0.88269-1.49994c-0.33472-0.42792-0.7345-0.81195-1.20514-1.08759     c-0.46515-0.27252-0.99164-0.42566-1.53137-0.43445c-0.64789-0.0105-1.2829,0.1781-1.86139,0.45966     c-0.35236,0-0.7038,0.05725-1.03723,0.17151c-0.64868,0.22229-1.20551,0.65161-1.64581,1.17126     c-0.47723,0.56329-0.82697,1.22943-1.07147,1.92371c-0.25464,0.72321-0.3988,1.48743-0.4248,2.25372     c-0.0127,0.37341,0.00317,0.74811,0.05267,1.11853c0.02393,0.17938,0.05585,0.35779,0.09656,0.53412     c0.05359,0.23236,0.14221,0.44116,0.22198,0.66486c0.05408,0.15167,0.09467,0.30988,0.1369,0.46527     c0.05658,0.20813,0.11005,0.4173,0.15991,0.6272c0,0-0.61615,0.7934-0.61615,0.93689c0,0.13507,1.77252,0.48956,1.77252,0.48956     l-0.38824,0.47266h1.56989c-0.03656,0.73358-0.10034,1.63593-0.29535,2.11951c-0.28699,0.73761-1.15637,1.0343-1.82318,1.3819     c-0.48956,0.25433-0.97913,0.50024-1.46021,0.75458c-0.87787,0.46625-1.9245,0.92407-2.65039,1.62775     c-0.02527,0.03394-0.05908,0.06781-0.08441,0.10175c-0.59924,0.69519-0.80182,1.50061-0.83557,1.67017h11.28503h2.16925h5.31757     C27.00276,33.30296,26.80018,32.49754,26.20088,31.80234z" />
            <path d="M27.03307,33.47066H8.26311c0.03998-0.16998,0.23999-0.97003,0.83997-1.66998     c0.02002-0.03003,0.06-0.07001,0.08002-0.10004c0.72998-0.70001,1.77002-1.15997,2.65002-1.63     c0.47998-0.25,0.96997-0.5,1.45996-0.75c0.66998-0.34998,1.54004-0.64996,1.83002-1.38c0.19-0.48999,0.25-1.38995,0.28998-2.12     h-1.57001l0.39001-0.47998c0,0-1.77002-0.34998-1.77002-0.48999s0.61005-0.92999,0.61005-0.92999     c-0.04999-0.21002-0.10004-0.42004-0.16003-0.63c-0.03998-0.16003-0.07996-0.31-0.13-0.47003     c-0.07996-0.21997-0.16998-0.42999-0.22998-0.65997c-0.03998-0.17999-0.07001-0.34998-0.09003-0.53003     c-0.04999-0.37-0.06995-0.75-0.06-1.12c0.03003-0.76996,0.17004-1.52997,0.43005-2.26001     c0.1416-0.40704,0.33521-0.79803,0.5575-1.17273c-0.22034,0.3725-0.40344,0.81268-0.51752,1.34277l-0.0161,1.01489     c0,0,1.13725-3.05098,3.82745-4.0549c0.18444,0.04317,0.36845,0.09225,0.55412,0.12962     c0.65098,0.13103,0.9712,0.82834,1.57247,1.06719c0.29418,0.11686,0.60575,0.18579,0.90615,0.28435     c0.2457,0.08061,0.48813,0.17771,0.70589,0.31887c0.44,0.28998,0.78003,0.75,1.06,1.19     c0.72003,1.14996,1.10004,2.51996,1.14001,3.87c0,0,0.17999-1.71002-0.14001-3.52002c0.06,0.16998,0.10999,0.33002,0.15002,0.5     c0.13,0.52997,0.20996,1.06,0.25,1.59998c0.01996,0.42999,0.04999,0.90002-0.07001,1.31     c-0.09003,0.30005-0.20001,0.60004-0.29999,0.90002c-0.11005,0.28998-0.17999,0.58002-0.25,0.89001     c0,0,0.60999,0.78998,0.60999,0.92999s-1.77002,0.48999-1.77002,0.48999l0.40002,0.47998h-1.60999     c0.04999,0.72003,0.13,1.62,0.31995,2.12c0.29004,0.73004,1.13,1.03003,1.79004,1.38c0.42999,0.23004,0.88,0.45001,1.31,0.67999     c0.04999,0.02002,0.08997,0.05005,0.14001,0.07001c0.88995,0.47003,1.92999,0.92999,2.64996,1.63     c0.04004,0.03003,0.07001,0.07001,0.10004,0.10004C26.80309,32.50063,27.0031,33.30068,27.03307,33.47066z"/><path d="M27.03307,33.47066H10.70311c0.38995-0.75,1.39996-2.31,3.32001-3.13     c2.59997-1.09003,1.71997-4.23999,1.71997-4.23999s-0.13,0.02997-0.35999,0.09998c0.01996-0.13,0.01996-0.26001,0.02997-0.38     h-1.57001l0.39001-0.47998c0,0-1.77002-0.34998-1.77002-0.48999c1.32001-0.10999,1.77002-0.85004,1.77002-0.85004     c-1.26001-7.15997,2.61999-8.01996,2.61999-8.01996s1.66003,3.25,3.84003,4.48999c0,0,1.08997,0.54999,1.35999,2.84998v0.01001     c0.02002,0.54999,0.08211,0.77915,0.08211,0.77915l0.2379-0.03916c0.17999,0.24005,0.5,0.67999,0.5,0.78003     c0,0.14001-1.77002,0.48999-1.77002,0.48999l0.40002,0.47998h-1.60999c0.04999,0.72003,0.13,1.62,0.31995,2.12     c0.29004,0.73004,1.13,1.03003,1.79004,1.38c0.42999,0.23004,0.88,0.45001,1.31,0.67999     c0.04999,0.02002,0.08997,0.05005,0.14001,0.07001c0.88995,0.47003,1.92999,0.92999,2.64996,1.63     c0.04004,0.03003,0.07001,0.07001,0.10004,0.10004C26.80309,32.50063,27.0031,33.30068,27.03307,33.47066z"/></g><g><polyline points="     19.87687,33.46886 20.26687,33.46886 21.24687,33.46886 21.72687,33.46886 22.86687,33.46886 27.04687,33.46886    " />
            <path d="     M37.44687,30.90886c0.03,0.02,0.06,0.03,0.08,0.05c0.45,0.25,0.88,0.53,1.23,0.87c0.04,0.04,0.07,0.07,0.1,0.1     c0.3,0.35,0.51,0.68,0.65,0.94c0.15,0.29,0.21,0.51,0.23,0.6h-0.52h-1.08h-9.68c-0.31-1.28-1.09-2.32-2.08-3.1     c-0.39-0.33-0.81-0.61-1.25-0.84c-0.05-0.03-0.09-0.06-0.14-0.08c0.17-0.08,0.26-0.11,0.42-0.19c0.71-0.36,1.08-0.55,1.38-1.31     c0.04-0.1,0.07-0.18,0.1-0.26c0.07-0.19,0.12-0.33,0.15-0.46c0.01-0.05,0.02-0.1,0.03-0.15c0-0.04,0.01-0.08,0.01-0.13v-0.01     c0.02-0.13,0.03-0.29,0.04-0.5l-0.34-0.42c-0.26-0.37-0.45-1.79-0.45-1.79c-0.31,0-0.55-0.32-0.63-0.57     c-0.13-0.4-0.25-0.77-0.3-1.19c-0.04-0.31-0.1-0.69,0.15-0.93c0.02-0.02,0.1-0.05,0.19-0.06c0.04-0.02,0.08-0.02,0.12-0.02     c0.07,0,0.12,0.01,0.14,0.05c0,0-0.01-0.02-0.01-0.05c-0.04-0.32-0.08-1.92-0.08-1.92s-0.25-1.14-0.02-2.05     c0.24-0.91,0.73-1.41,1.48-1.41c0,0,1.44-1.27,3.82-0.73c2.38,0.55,2.85,2.82,2.85,2.82l0.14,1.03l-0.47,0.34     c0,0-0.04,1.6-0.07,1.92c0,0.03-0.01,0.04-0.01,0.05c0.01-0.02,0.03-0.03,0.05-0.04h0.01c0.12-0.04,0.36,0.03,0.39,0.07     c0.25,0.24,0.18,0.62,0.15,0.93c-0.05,0.42-0.18,0.79-0.31,1.19c-0.08,0.25-0.32,0.57-0.62,0.57c0,0-0.2,1.42-0.45,1.79     l-0.34,0.42c0.04,0.73,0.05,0.81,0.32,1.51c0.12,0.29,0.27,0.49,0.44,0.68l0.01,0.01c0.02,0.01,0.04,0.03,0.05,0.04     c0.05,0.05,0.1,0.09,0.16,0.12c0.27,0.22,0.58,0.38,0.93,0.56c0.52,0.26,1.03,0.52,1.54,0.79c0.47,0.24,0.97,0.48,1.46,0.75     C37.42687,30.89886,37.43687,30.90886,37.44687,30.90886" />
            <g>
              <path d="      M15.43687,25.81886c-0.04,0.71-0.04,1.45-0.31,2.12c-0.29,0.73-1.16,1.03-1.83,1.38c-0.49,0.25-0.98,0.5-1.46,0.75      c-0.87,0.47-1.92,0.93-2.65,1.63c-0.02,0.03-0.06,0.07-0.08,0.1c-0.6,0.7-0.8,1.5-0.84,1.67h11.29h0.32h0.39h0.98h0.48h1.14      h4.18"
              />
              <path d="      M23.57687,30.12886c0.02,0.01,0.04,0.02,0.06,0.03c0.56,0.3,1.18,0.59,1.73,0.95c0.27,0.18,0.53,0.37,0.75,0.59      c0.03,0.03,0.06,0.07,0.09,0.1c0.6,0.7,0.8,1.5,0.84,1.67"
              />
              <path d="      M19.90687,25.81886c0.05,0.71,0.05,1.45,0.32,2.12c0.28,0.73,1.12,1.03,1.78,1.38c0.44,0.23,0.88,0.45,1.31,0.68      c0.05,0.02,0.1,0.05,0.15,0.07c0.02,0.01,0.04,0.02,0.07,0.04"
              />
              <g>
                <path d="       M15.43311,25.81648h-1.59l0.39-0.48c0,0-1.77-0.35-1.77-0.49001c0.00002-0.12852,0.15259-0.29683,0.22019-0.39585       c0.10674-0.15633,0.22842-0.30311,0.33347-0.46025c0.12044-0.18018-0.06429-0.59916-0.12525-0.79565       c-0.09694-0.31248-0.21267-0.61902-0.30078-0.93426c-0.2558-0.9153-0.22935-1.92632-0.05996-2.8547       c0.16478-0.90312,0.48728-1.79018,0.99193-2.56009c0.46001-0.7018,1.09035-1.31566,1.87863-1.6309       c0.37854-0.15138,0.78417-0.22829,1.19177-0.22829c0.69884-0.3405,1.48329-0.54158,2.26218-0.42635       c0.66135,0.09784,1.2618,0.42072,1.75468,0.86566c0.52469,0.47365,0.93163,1.06831,1.25365,1.69409       c0.33531,0.65161,0.58396,1.34791,0.75907,2.05893c0.15771,0.64039,0.26011,1.29994,0.27095,1.9602       c0.00467,0.2847,0.01169,0.60664-0.05694,0.88293c-0.15385,0.61939-0.47637,1.19299-0.54892,1.85253       c-0.01657,0.15546,0.23624,0.39063,0.32341,0.51575c0.07818,0.11221,0.26192,0.30954,0.26192,0.45626       c0,0.14-1.77,0.49-1.77,0.49l0.4,0.48h-1.6" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
