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
