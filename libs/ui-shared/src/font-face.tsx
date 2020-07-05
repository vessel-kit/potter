import React from "react";
import { Global } from "@emotion/core";

export const fontFace = `
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light Italic"), local("IBMPlexMono-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1gMoW.woff) format("woff");
}

@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono Italic"), local("IBMPlexMono-Italic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa1Xdm.woff) format("woff");
}

@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold Italic"), local("IBMPlexMono-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1gMoW.woff) format("woff");
}

@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light"), local("IBMPlexMono-Light"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwlBFhA.woff) format("woff");
}

@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono"), local("IBMPlexMono"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1i8q0Q.woff) format("woff");
}

@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold"), local("IBMPlexMono-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwlBFhA.woff) format("woff");
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light Italic"), local("IBMPlexMono-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1jcoQPttoz6Pz.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light Italic"), local("IBMPlexMono-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1hMoQPttoz6Pz.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light Italic"), local("IBMPlexMono-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1j8oQPttoz6Pz.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light Italic"), local("IBMPlexMono-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1jsoQPttoz6Pz.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light Italic"), local("IBMPlexMono-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1gMoQPttozw.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono Italic"), local("IBMPlexMono-Italic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa2HdgregdFOFh.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono Italic"), local("IBMPlexMono-Italic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa0XdgregdFOFh.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono Italic"), local("IBMPlexMono-Italic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa2ndgregdFOFh.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono Italic"), local("IBMPlexMono-Italic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa23dgregdFOFh.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono Italic"), local("IBMPlexMono-Italic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa1XdgregdFA.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold Italic"), local("IBMPlexMono-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1jcoQPttoz6Pz.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold Italic"), local("IBMPlexMono-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1hMoQPttoz6Pz.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold Italic"), local("IBMPlexMono-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1j8oQPttoz6Pz.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold Italic"), local("IBMPlexMono-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1jsoQPttoz6Pz.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold Italic"), local("IBMPlexMono-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1gMoQPttozw.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light"), local("IBMPlexMono-Light"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwl1FgsAXHNlYzg.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light"), local("IBMPlexMono-Light"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwlRFgsAXHNlYzg.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light"), local("IBMPlexMono-Light"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwl9FgsAXHNlYzg.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light"), local("IBMPlexMono-Light"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwl5FgsAXHNlYzg.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Mono Light"), local("IBMPlexMono-Light"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwlBFgsAXHNk.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono"), local("IBMPlexMono"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1iIq131nj-otFQ.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono"), local("IBMPlexMono"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1isq131nj-otFQ.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono"), local("IBMPlexMono"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1iAq131nj-otFQ.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono"), local("IBMPlexMono"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1iEq131nj-otFQ.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Mono"), local("IBMPlexMono"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1i8q131nj-o.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold"), local("IBMPlexMono-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwl1FgsAXHNlYzg.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold"), local("IBMPlexMono-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwlRFgsAXHNlYzg.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold"), local("IBMPlexMono-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwl9FgsAXHNlYzg.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold"), local("IBMPlexMono-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwl5FgsAXHNlYzg.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Mono SemiBold"), local("IBMPlexMono-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwlBFgsAXHNk.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light Italic"), local("IBMPlexSans-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRcdvfo.woff) format("woff");
}

@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuF6ZP.woff) format("woff");
}

@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold Italic"), local("IBMPlexSans-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJcdvfo.woff) format("woff");
}

@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFscg.woff) format("woff");
}

@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans"), local("IBMPlexSans"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhdHeEw.woff) format("woff");
}

@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIFscg.woff) format("woff");
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light Italic"), local("IBMPlexSans-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRce_fuJGl18QRY.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light Italic"), local("IBMPlexSans-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRccvfuJGl18QRY.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* greek */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light Italic"), local("IBMPlexSans-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRcdffuJGl18QRY.woff2) format("woff2");
  unicode-range: U+0370-03FF;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light Italic"), local("IBMPlexSans-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRceffuJGl18QRY.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light Italic"), local("IBMPlexSans-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRcePfuJGl18QRY.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light Italic"), local("IBMPlexSans-LightItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRcdvfuJGl18Q.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuGqZJW9XjDlN8.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuE6ZJW9XjDlN8.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* greek */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuFKZJW9XjDlN8.woff2) format("woff2");
  unicode-range: U+0370-03FF;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuGKZJW9XjDlN8.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuGaZJW9XjDlN8.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuF6ZJW9XjDg.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold Italic"), local("IBMPlexSans-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJce_fuJGl18QRY.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold Italic"), local("IBMPlexSans-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJccvfuJGl18QRY.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* greek */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold Italic"), local("IBMPlexSans-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJcdffuJGl18QRY.woff2) format("woff2");
  unicode-range: U+0370-03FF;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold Italic"), local("IBMPlexSans-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJceffuJGl18QRY.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold Italic"), local("IBMPlexSans-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJcePfuJGl18QRY.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold Italic"), local("IBMPlexSans-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJcdvfuJGl18Q.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIxsdP3pBmtF8A.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIVsdP3pBmtF8A.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* greek */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIJsdP3pBmtF8A.woff2) format("woff2");
  unicode-range: U+0370-03FF;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI5sdP3pBmtF8A.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI9sdP3pBmtF8A.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdP3pBms.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans"), local("IBMPlexSans"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhdzeFaxOedfTDw.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans"), local("IBMPlexSans"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhdXeFaxOedfTDw.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* greek */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans"), local("IBMPlexSans"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhdLeFaxOedfTDw.woff2) format("woff2");
  unicode-range: U+0370-03FF;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans"), local("IBMPlexSans"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhd7eFaxOedfTDw.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans"), local("IBMPlexSans"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhd_eFaxOedfTDw.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("IBM Plex Sans"), local("IBMPlexSans"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIxsdP3pBmtF8A.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIVsdP3pBmtF8A.woff2) format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* greek */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIJsdP3pBmtF8A.woff2) format("woff2");
  unicode-range: U+0370-03FF;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AI5sdP3pBmtF8A.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AI9sdP3pBmtF8A.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIFsdP3pBms.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;

export function FontFace() {
  return <Global styles={fontFace} />;
}
