var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, property } from "lit-element";
let NavBar = class NavBar extends LitElement {
    constructor() {
        super(...arguments);
        this.message = "Welcome to LitElement";
    }
    render() {
        return html `
      <nav class="bg-white shadow z-11">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="/">
                  <img
                    src="https://onairparking.com/staticmyapp/logo-registred.svg"
                    width="112"
                    height="56"
                    alt="On Air Parking"
                  />
                </a>
              </div>
            </div>
            <ul
              class="hidden ml-auto items-baseline justify-center"
              id="menu-link"
            >
              <li>
                <a href="https://www.onairparking.com" class="font-bold"
                  >Home</a
                >
              </li>
              <li>
                <a href="/about" class="font-bold">About</a>
              </li>
              <li>
                <a href="/contact" class="font-bold">Contact</a>
              </li>
              <li>
                <a href="/faq" class="font-bold">FAQ</a>
              </li>
              <li>
                <a href="/" class="font-bold">Blog</a>
              </li>
              <li>
                <a href="/myreservation/membership" class="font-bold"
                  >Membership</a
                >
              </li>
              <li>
                <a
                  href="/login"
                  class="
                flex
                bg-white
                border border-primary
                hover:no-underline
                rounded-full
                mx-auto
                uppercase
                w-24
                justify-center
                items-center
                sign-in
              "
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
    }
};
NavBar.styles = css `
    nav {
      margin: -8px;
    }
    a {
      font-family: "Roboto", Helvetica, Arial, sans-serif !important;
    }
    *,
    ::before,
    ::after {
      box-sizing: border-box;
    }

    html {
      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;
    }

    html {
      line-height: 1.15; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
    }

    /*
    Sections
    ========
    */

    /**
    Remove the margin in all browsers.
    */

    body {
      margin: 0 !important;
      padding: 0 !important;
    }

    /**
    Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
    */

    body {
      font-family: Roboto, Helvetica, Arial, sans-serif;
    }

    /*
    Grouping content
    ================
    */

    /**
    1. Add the correct height in Firefox.
    2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
    */

    hr {
      height: 0; /* 1 */
      color: inherit; /* 2 */
    }

    /*
    Text-level semantics
    ====================
    */

    /**
    Add the correct text decoration in Chrome, Edge, and Safari.
    */

    abbr[title] {
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
    }

    /**
    Add the correct font weight in Edge and Safari.
    */

    b,
    strong {
      font-weight: bolder;
    }

    /**
    1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
    2. Correct the odd 'em' font sizing in all browsers.
    */

    code,
    kbd,
    samp,
    pre {
      font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono",
        Menlo, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }

    /**
    Add the correct font size in all browsers.
    */

    small {
      font-size: 80%;
    }

    /**
    Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
    */

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    /*
    Tabular data
    ============
    */

    /**
    1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
    2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
    */

    table {
      text-indent: 0; /* 1 */
      border-color: inherit; /* 2 */
    }

    /*
    Forms
    =====
    */

    /**
    1. Change the font styles in all browsers.
    2. Remove the margin in Firefox and Safari.
    */

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }

    /**
    Remove the inheritance of text transform in Edge and Firefox.
    1. Remove the inheritance of text transform in Firefox.
    */

    button,
    select {
      /* 1 */
      text-transform: none;
    }

    /**
    Correct the inability to style clickable types in iOS and Safari.
    */

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }

    /**
    Remove the inner border and padding in Firefox.
    */

    /**
    Restore the focus styles unset by the previous rule.
    */

    /**
    Remove the additional ':invalid' styles in Firefox.
    See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
    */

    /**
    Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
    */

    legend {
      padding: 0;
    }

    /**
    Add the correct vertical alignment in Chrome and Firefox.
    */

    progress {
      vertical-align: baseline;
    }

    /**
    Correct the cursor style of increment and decrement buttons in Safari.
    */

    /**
    1. Correct the odd appearance in Chrome and Safari.
    2. Correct the outline style in Safari.
    */

    [type="search"] {
      -webkit-appearance: textfield; /* 1 */
      outline-offset: -2px; /* 2 */
    }

    /**
    Remove the inner padding in Chrome and Safari on macOS.
    */

    /**
    1. Correct the inability to style clickable types in iOS and Safari.
    2. Change font properties to 'inherit' in Safari.
    */

    /*
    Interactive
    ===========
    */

    /*
    Add the correct display in Chrome and Safari.
    */

    summary {
      display: list-item;
    }

    /**
     * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
     * A thin layer on top of normalize.css that provides a starting point more
     * suitable for web applications.
     */

    /**
     * Removes the default spacing and border for appropriate elements.
     */

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }

    button {
      background-color: transparent;
      background-image: none;
    }

    fieldset {
      margin: 0;
      padding: 0;
    }

    ol,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    html {
      font-family: Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.5; /* 2 */
    }

    body {
      font-family: inherit;
      line-height: inherit;
    }

    *,
    ::before,
    ::after {
      box-sizing: border-box; /* 1 */
      border-width: 0; /* 2 */
      border-style: solid; /* 2 */
      border-color: currentColor; /* 2 */
    }

    hr {
      border-top-width: 1px;
    }

    img {
      border-style: solid;
    }

    textarea {
      resize: vertical;
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      opacity: 1;
      color: #9ca3af;
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      opacity: 1;
      color: #9ca3af;
    }

    input::placeholder,
    textarea::placeholder {
      opacity: 1;
      color: #9ca3af;
    }

    button {
      cursor: pointer;
    }

    table {
      border-collapse: collapse;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    /**
     * Reset links to optimize for opt-in styling instead of
     * opt-out.
     */

    a {
      color: inherit;
      text-decoration: inherit;
    }

    /**
     * Reset form element properties that are easy to forget to
     * style explicitly so you don't inadvertently introduce
     * styles that deviate from your design system. These styles
     * supplement a partial reset that is already applied by
     * normalize.css.
     */

    button,
    input,
    optgroup,
    select,
    textarea {
      padding: 0;
      line-height: inherit;
      color: inherit;
    }

    /**
     * Use the configured 'mono' font family for elements that
     * are expected to be rendered with a monospace font, falling
     * back to the system monospace stack if there is no configured
     * 'mono' font family.
     */

    pre,
    code,
    kbd,
    samp {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
    }

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block; /* 1 */
      vertical-align: middle; /* 2 */
    }

    /**
     * Constrain images and videos to the parent width and preserve
     * their intrinsic aspect ratio.
     *
     * https://github.com/mozdevs/cssremedy/issues/14
     */

    img,
    video {
      max-width: 100%;
      height: auto;
    }

    [hidden] {
      display: none;
    }

    *,
    ::before,
    ::after {
      --tw-border-opacity: 1;
      border-color: rgba(209, 213, 219, var(--tw-border-opacity));
    }

    .container {
      width: 100%;
    }

    @media (min-width: 640px) {
      .container {
        max-width: 640px;
      }
    }

    @media (min-width: 768px) {
      .container {
        max-width: 768px;
      }
    }

    @media (min-width: 1024px) {
      .container {
        max-width: 1024px;
      }
    }

    @media (min-width: 1280px) {
      .container {
        max-width: 1280px;
      }
    }

    @media (min-width: 1536px) {
      .container {
        max-width: 1536px;
      }
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    .visible {
      visibility: visible;
    }

    .invisible {
      visibility: hidden;
    }

    .static {
      position: static;
    }

    .absolute {
      position: absolute;
    }

    .relative {
      position: relative;
    }

    .top-0 {
      top: 0px;
    }

    .top-1 {
      top: 0.25rem;
    }

    .top-2 {
      top: 0.5rem;
    }

    .top-4 {
      top: 1rem;
    }

    .top-1\.5 {
      top: 0.375rem;
    }

    .top-2\.5 {
      top: 0.625rem;
    }

    .right-0 {
      right: 0px;
    }

    .right-1 {
      right: 0.25rem;
    }

    .right-4 {
      right: 1rem;
    }

    .right-1\.5 {
      right: 0.375rem;
    }

    .left-0 {
      left: 0px;
    }

    .z-0 {
      z-index: 0;
    }

    .z-10 {
      z-index: 10;
    }

    .z-50 {
      z-index: 50;
    }

    .col-span-2 {
      grid-column: span 2 / span 2;
    }

    .col-span-3 {
      grid-column: span 3 / span 3;
    }

    .col-span-4 {
      grid-column: span 4 / span 4;
    }

    .m-0 {
      margin: 0px;
    }

    .m-2 {
      margin: 0.5rem;
    }

    .m-4 {
      margin: 1rem;
    }

    .mx-2 {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    .mx-4 {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    .mx-auto {
      margin-left: auto;
      margin-right: auto;
    }

    .my-4 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .my-7 {
      margin-top: 1.75rem;
      margin-bottom: 1.75rem;
    }

    .my-8 {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    .my-10 {
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
    }

    .my-12 {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }

    .my-24 {
      margin-top: 6rem;
      margin-bottom: 6rem;
    }

    .mt-0 {
      margin-top: 0px;
    }

    .mt-1 {
      margin-top: 0.25rem;
    }

    .mt-2 {
      margin-top: 0.5rem;
    }

    .mt-3 {
      margin-top: 0.75rem;
    }

    .mt-4 {
      margin-top: 1rem;
    }

    .mt-6 {
      margin-top: 1.5rem;
    }

    .mt-8 {
      margin-top: 2rem;
    }

    .mt-10 {
      margin-top: 2.5rem;
    }

    .mt-12 {
      margin-top: 3rem;
    }

    .mt-1\.5 {
      margin-top: 0.375rem;
    }

    .mt-2\.5 {
      margin-top: 0.625rem;
    }

    .-mt-4 {
      margin-top: -1rem;
    }

    .-mt-8 {
      margin-top: -2rem;
    }

    .mr-0 {
      margin-right: 0px;
    }

    .mr-1 {
      margin-right: 0.25rem;
    }

    .mr-2 {
      margin-right: 0.5rem;
    }

    .mr-4 {
      margin-right: 1rem;
    }

    .mr-8 {
      margin-right: 2rem;
    }

    .mr-auto {
      margin-right: auto;
    }

    .-mr-4 {
      margin-right: -1rem;
    }

    .mb-0 {
      margin-bottom: 0px;
    }

    .mb-2 {
      margin-bottom: 0.5rem;
    }

    .mb-3 {
      margin-bottom: 0.75rem;
    }

    .mb-4 {
      margin-bottom: 1rem;
    }

    .mb-5 {
      margin-bottom: 1.25rem;
    }

    .mb-6 {
      margin-bottom: 1.5rem;
    }

    .mb-8 {
      margin-bottom: 2rem;
    }

    .mb-12 {
      margin-bottom: 3rem;
    }

    .-mb-8 {
      margin-bottom: -2rem;
    }

    .ml-0 {
      margin-left: 0px;
    }

    .ml-1 {
      margin-left: 0.25rem;
    }

    .ml-2 {
      margin-left: 0.5rem;
    }

    .ml-3 {
      margin-left: 0.75rem;
    }

    .ml-4 {
      margin-left: 1rem;
    }

    .ml-6 {
      margin-left: 1.5rem;
    }

    .ml-8 {
      margin-left: 2rem;
    }

    .ml-10 {
      margin-left: 2.5rem;
    }

    .ml-20 {
      margin-left: 5rem;
    }

    .ml-auto {
      margin-left: auto;
    }

    .-ml-4 {
      margin-left: -1rem;
    }

    .block {
      display: block;
    }

    .inline-block {
      display: inline-block;
    }

    .flex {
      display: flex;
    }

    .inline-flex {
      display: inline-flex;
    }

    .table {
      display: table;
    }

    .grid {
      display: grid;
    }

    .contents {
      display: contents;
    }

    .hidden {
      display: none;
    }

    .h-6 {
      height: 1.5rem;
    }

    .h-8 {
      height: 2rem;
    }

    .h-10 {
      height: 2.5rem;
    }

    .h-12 {
      height: 3rem;
    }

    .h-14 {
      height: 3.5rem;
    }

    .h-16 {
      height: 4rem;
    }

    .h-32 {
      height: 8rem;
    }

    .h-40 {
      height: 10rem;
    }

    .h-56 {
      height: 14rem;
    }

    .h-60 {
      height: 15rem;
    }

    .h-64 {
      height: 16rem;
    }

    .h-98 {
      height: 28rem;
    }

    .h-auto {
      height: auto;
    }

    .h-full {
      height: 100%;
    }

    .h-city-map {
      height: 36.5rem;
    }

    .w-6 {
      width: 1.5rem;
    }

    .w-8 {
      width: 2rem;
    }

    .w-12 {
      width: 3rem;
    }

    .w-24 {
      width: 6rem;
    }

    .w-32 {
      width: 8rem;
    }

    .w-44 {
      width: 11rem;
    }

    .w-48 {
      width: 12rem;
    }

    .w-60 {
      width: 15rem;
    }

    .w-auto {
      width: auto;
    }

    .w-full {
      width: 100%;
    }

    .min-w-full {
      min-width: 100%;
    }

    .max-w-xs {
      max-width: 20rem;
    }

    .max-w-sm {
      max-width: 24rem;
    }

    .max-w-md {
      max-width: 28rem;
    }

    .max-w-lg {
      max-width: 32rem;
    }

    .max-w-xl {
      max-width: 36rem;
    }

    .max-w-2xl {
      max-width: 42rem;
    }

    .max-w-3xl {
      max-width: 48rem;
    }

    .max-w-4xl {
      max-width: 56rem;
    }

    .flex-1 {
      flex: 1 1 0%;
    }

    .flex-auto {
      flex: 1 1 auto;
    }

    .flex-shrink-0 {
      flex-shrink: 0;
    }

    .transform {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      transform: translateX(var(--tw-translate-x))
        translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
        skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    .hover\:scale-95:hover {
      --tw-scale-x: 0.95;
      --tw-scale-y: 0.95;
    }

    @-webkit-keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @-webkit-keyframes ping {
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes ping {
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @-webkit-keyframes pulse {
      50% {
        opacity: 0.5;
      }
    }

    @keyframes pulse {
      50% {
        opacity: 0.5;
      }
    }

    @-webkit-keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }

      50% {
        transform: none;
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }

      50% {
        transform: none;
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    .cursor-pointer {
      cursor: pointer;
    }

    .cursor-not-allowed {
      cursor: not-allowed;
    }

    .list-inside {
      list-style-position: inside;
    }

    .list-decimal {
      list-style-type: decimal;
    }

    .grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .flex-row {
      flex-direction: row;
    }

    .flex-col {
      flex-direction: column;
    }

    .flex-wrap {
      flex-wrap: wrap;
    }

    .place-content-start {
      place-content: start;
    }

    .place-items-start {
      place-items: start;
    }

    .place-items-center {
      place-items: center;
    }

    .items-start {
      align-items: flex-start;
    }

    .items-center {
      align-items: center;
    }

    .items-baseline {
      align-items: baseline;
    }

    .justify-start {
      justify-content: flex-start;
    }

    .justify-center {
      justify-content: center;
    }

    .justify-between {
      justify-content: space-between;
    }

    .justify-around {
      justify-content: space-around;
    }

    .gap-0 {
      gap: 0px;
    }

    .gap-2 {
      gap: 0.5rem;
    }

    .gap-4 {
      gap: 1rem;
    }

    .gap-5 {
      gap: 1.25rem;
    }

    .gap-8 {
      gap: 2rem;
    }

    .gap-x-8 {
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }

    .gap-x-14 {
      -moz-column-gap: 3.5rem;
      column-gap: 3.5rem;
    }

    .gap-y-0 {
      row-gap: 0px;
    }

    .gap-y-2 {
      row-gap: 0.5rem;
    }

    .space-x-8 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(2rem * var(--tw-space-x-reverse));
      margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
    }

    .space-y-2 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
    }

    .space-y-4 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1rem * var(--tw-space-y-reverse));
    }

    .space-y-8 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(2rem * var(--tw-space-y-reverse));
    }

    .divide-x > :not([hidden]) ~ :not([hidden]) {
      --tw-divide-x-reverse: 0;
      border-right-width: calc(1px * var(--tw-divide-x-reverse));
      border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    }

    .divide-y > :not([hidden]) ~ :not([hidden]) {
      --tw-divide-y-reverse: 0;
      border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
      border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
    }

    .divide-secondary > :not([hidden]) ~ :not([hidden]) {
      --tw-divide-opacity: 1;
      border-color: rgba(94, 152, 216, var(--tw-divide-opacity));
    }

    .divide-onair-orange > :not([hidden]) ~ :not([hidden]) {
      --tw-divide-opacity: 1;
      border-color: rgba(250, 140, 22, var(--tw-divide-opacity));
    }

    .self-start {
      align-self: flex-start;
    }

    .self-end {
      align-self: flex-end;
    }

    .self-center {
      align-self: center;
    }

    .justify-self-start {
      justify-self: start;
    }

    .justify-self-end {
      justify-self: end;
    }

    .overflow-hidden {
      overflow: hidden;
    }

    .overflow-x-auto {
      overflow-x: auto;
    }

    .overflow-y-auto {
      overflow-y: auto;
    }

    .overflow-y-hidden {
      overflow-y: hidden;
    }

    .overflow-clip {
      text-overflow: clip;
    }

    .rounded-none {
      border-radius: 0px;
    }

    .rounded {
      border-radius: 0.25rem;
    }

    .rounded-md {
      border-radius: 0.375rem;
    }

    .rounded-full {
      border-radius: 9999px;
    }

    .rounded-tl-md {
      border-top-left-radius: 0.375rem;
    }

    .rounded-tr-md {
      border-top-right-radius: 0.375rem;
    }

    .rounded-br-md {
      border-bottom-right-radius: 0.375rem;
    }

    .rounded-bl-md {
      border-bottom-left-radius: 0.375rem;
    }

    .rounded-bl-full {
      border-bottom-left-radius: 9999px;
    }

    .border-0 {
      border-width: 0px;
    }

    .border {
      border-width: 1px;
    }

    .border-t {
      border-top-width: 1px;
    }

    .border-b {
      border-bottom-width: 1px;
    }

    .border-l-2 {
      border-left-width: 2px;
    }

    .border-none {
      border-style: none;
    }

    .border-black {
      --tw-border-opacity: 1;
      border-color: rgba(0, 0, 0, var(--tw-border-opacity));
    }

    .border-white {
      --tw-border-opacity: 1;
      border-color: rgba(255, 255, 255, var(--tw-border-opacity));
    }

    .border-gray-100 {
      --tw-border-opacity: 1;
      border-color: rgba(243, 244, 246, var(--tw-border-opacity));
    }

    .border-gray-200 {
      --tw-border-opacity: 1;
      border-color: rgba(229, 231, 235, var(--tw-border-opacity));
    }

    .border-gray-300 {
      --tw-border-opacity: 1;
      border-color: rgba(209, 213, 219, var(--tw-border-opacity));
    }

    .border-red-500 {
      --tw-border-opacity: 1;
      border-color: rgba(239, 68, 68, var(--tw-border-opacity));
    }

    .border-primary {
      --tw-border-opacity: 1;
      border-color: rgba(229, 119, 21, var(--tw-border-opacity));
    }

    .border-secondary {
      --tw-border-opacity: 1;
      border-color: rgba(94, 152, 216, var(--tw-border-opacity));
    }

    .hover\:border-white:hover {
      --tw-border-opacity: 1;
      border-color: rgba(255, 255, 255, var(--tw-border-opacity));
    }

    .hover\:border-primary:hover {
      --tw-border-opacity: 1;
      border-color: rgba(229, 119, 21, var(--tw-border-opacity));
    }

    .hover\:border-secondary:hover {
      --tw-border-opacity: 1;
      border-color: rgba(94, 152, 216, var(--tw-border-opacity));
    }

    .focus\:border-primary:focus {
      --tw-border-opacity: 1;
      border-color: rgba(229, 119, 21, var(--tw-border-opacity));
    }

    .border-opacity-25 {
      --tw-border-opacity: 0.25;
    }

    .bg-white {
      --tw-bg-opacity: 1;
      background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    }

    .bg-gray-50 {
      --tw-bg-opacity: 1;
      background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
    }

    .bg-gray-100 {
      --tw-bg-opacity: 1;
      background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
    }

    .bg-gray-300 {
      --tw-bg-opacity: 1;
      background-color: rgba(209, 213, 219, var(--tw-bg-opacity));
    }

    .bg-primary {
      --tw-bg-opacity: 1;
      background-color: rgba(229, 119, 21, var(--tw-bg-opacity));
    }

    .bg-secondary {
      --tw-bg-opacity: 1;
      background-color: rgba(94, 152, 216, var(--tw-bg-opacity));
    }

    .bg-orange-50 {
      --tw-bg-opacity: 1;
      background-color: rgba(254, 243, 235, var(--tw-bg-opacity));
    }

    .group:hover .group-hover\:bg-primary {
      --tw-bg-opacity: 1;
      background-color: rgba(229, 119, 21, var(--tw-bg-opacity));
    }

    .hover\:bg-white:hover {
      --tw-bg-opacity: 1;
      background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    }

    .hover\:bg-primary:hover {
      --tw-bg-opacity: 1;
      background-color: rgba(229, 119, 21, var(--tw-bg-opacity));
    }

    .hover\:bg-primary-hover:hover {
      --tw-bg-opacity: 1;
      background-color: rgba(226, 109, 6, var(--tw-bg-opacity));
    }

    .hover\:bg-secondary:hover {
      --tw-bg-opacity: 1;
      background-color: rgba(94, 152, 216, var(--tw-bg-opacity));
    }

    .hover\:bg-secondary-hover:hover {
      --tw-bg-opacity: 1;
      background-color: rgba(63, 138, 169, var(--tw-bg-opacity));
    }

    .hover\:bg-opacity-75:hover {
      --tw-bg-opacity: 0.75;
    }

    .bg-cover {
      background-size: cover;
    }

    .bg-center {
      background-position: center;
    }

    .bg-no-repeat {
      background-repeat: no-repeat;
    }

    .bg-origin-border {
      background-origin: border-box;
    }

    .object-contain {
      -o-object-fit: contain;
      object-fit: contain;
    }

    .object-cover {
      -o-object-fit: cover;
      object-fit: cover;
    }

    .object-bottom {
      -o-object-position: bottom;
      object-position: bottom;
    }

    .object-center {
      -o-object-position: center;
      object-position: center;
    }

    .p-0 {
      padding: 0px;
    }

    .p-2 {
      padding: 0.5rem;
    }

    .p-3 {
      padding: 0.75rem;
    }

    .p-4 {
      padding: 1rem;
    }

    .p-5 {
      padding: 1.25rem;
    }

    .p-8 {
      padding: 2rem;
    }

    .px-0 {
      padding-left: 0px;
      padding-right: 0px;
    }

    .px-1 {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }

    .px-2 {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .px-3 {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }

    .px-4 {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .px-5 {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }

    .px-6 {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .px-7 {
      padding-left: 1.75rem;
      padding-right: 1.75rem;
    }

    .px-8 {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .px-10 {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }

    .px-12 {
      padding-left: 3rem;
      padding-right: 3rem;
    }

    .px-24 {
      padding-left: 6rem;
      padding-right: 6rem;
    }

    .py-1 {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }

    .py-2 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .py-3 {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
    }

    .py-4 {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    .py-5 {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }

    .py-6 {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }

    .py-8 {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    .py-12 {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }

    .py-16 {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }

    .py-2\.5 {
      padding-top: 0.625rem;
      padding-bottom: 0.625rem;
    }

    .py-3\.5 {
      padding-top: 0.875rem;
      padding-bottom: 0.875rem;
    }

    .pt-0 {
      padding-top: 0px;
    }

    .pt-2 {
      padding-top: 0.5rem;
    }

    .pt-3 {
      padding-top: 0.75rem;
    }

    .pt-4 {
      padding-top: 1rem;
    }

    .pt-8 {
      padding-top: 2rem;
    }

    .pt-2\.5 {
      padding-top: 0.625rem;
    }

    .pt-3\.5 {
      padding-top: 0.875rem;
    }

    .pr-0 {
      padding-right: 0px;
    }

    .pr-4 {
      padding-right: 1rem;
    }

    .pr-6 {
      padding-right: 1.5rem;
    }

    .pb-0 {
      padding-bottom: 0px;
    }

    .pb-1 {
      padding-bottom: 0.25rem;
    }

    .pb-2 {
      padding-bottom: 0.5rem;
    }

    .pb-4 {
      padding-bottom: 1rem;
    }

    .pb-8 {
      padding-bottom: 2rem;
    }

    .pb-12 {
      padding-bottom: 3rem;
    }

    .pl-4 {
      padding-left: 1rem;
    }

    .pl-5 {
      padding-left: 1.25rem;
    }

    .pl-6 {
      padding-left: 1.5rem;
    }

    .text-left {
      text-align: left;
    }

    .text-center {
      text-align: center;
    }

    .text-right {
      text-align: right;
    }

    .text-xs {
      font-size: 0.75rem;
      line-height: 1rem;
    }

    .text-sm {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    .text-base {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    .text-xl {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    .text-2xl {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .text-3xl {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    .text-4xl {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    .text-5xl {
      font-size: 3rem;
      line-height: 1;
    }

    .text-8xl {
      font-size: 6rem;
      line-height: 1;
    }

    .text-9xl {
      font-size: 8rem;
      line-height: 1;
    }

    .font-normal {
      font-weight: 400;
    }

    .font-medium {
      font-weight: 500;
    }

    .font-semibold {
      font-weight: 600;
    }

    .font-bold {
      font-weight: 700;
    }

    .uppercase {
      text-transform: uppercase;
    }

    .leading-tight {
      line-height: 1.25;
    }

    .leading-normal {
      line-height: 1.5;
    }

    .text-white {
      --tw-text-opacity: 1;
      color: rgba(255, 255, 255, var(--tw-text-opacity));
    }

    .text-gray-500 {
      --tw-text-opacity: 1;
      color: rgba(107, 114, 128, var(--tw-text-opacity));
    }

    .text-gray-600 {
      --tw-text-opacity: 1;
      color: rgba(75, 85, 99, var(--tw-text-opacity));
    }

    .text-gray-700 {
      --tw-text-opacity: 1;
      color: rgba(55, 65, 81, var(--tw-text-opacity));
    }

    .text-gray-900 {
      --tw-text-opacity: 1;
      color: rgba(17, 24, 39, var(--tw-text-opacity));
    }

    .text-primary {
      --tw-text-opacity: 1;
      color: rgba(229, 119, 21, var(--tw-text-opacity));
    }

    .text-secondary {
      --tw-text-opacity: 1;
      color: rgba(94, 152, 216, var(--tw-text-opacity));
    }

    .text-brown {
      --tw-text-opacity: 1;
      color: rgba(172, 85, 11, var(--tw-text-opacity));
    }

    .text-onair-orange {
      --tw-text-opacity: 1;
      color: rgba(250, 140, 22, var(--tw-text-opacity));
    }

    .group:hover .group-hover\:text-white {
      --tw-text-opacity: 1;
      color: rgba(255, 255, 255, var(--tw-text-opacity));
    }

    .hover\:text-white:hover {
      --tw-text-opacity: 1;
      color: rgba(255, 255, 255, var(--tw-text-opacity));
    }

    .hover\:text-primary:hover {
      --tw-text-opacity: 1;
      color: rgba(229, 119, 21, var(--tw-text-opacity));
    }

    .hover\:text-secondary:hover {
      --tw-text-opacity: 1;
      color: rgba(94, 152, 216, var(--tw-text-opacity));
    }

    .underline {
      text-decoration: underline;
    }

    .line-through {
      text-decoration: line-through;
    }

    .hover\:underline:hover {
      text-decoration: underline;
    }

    .hover\:no-underline:hover {
      text-decoration: none;
    }

    .opacity-20 {
      opacity: 0.2;
    }

    .opacity-50 {
      opacity: 0.5;
    }

    .opacity-70 {
      opacity: 0.7;
    }

    .opacity-80 {
      opacity: 0.8;
    }

    .opacity-100 {
      opacity: 1;
    }

    .hover\:opacity-70:hover {
      opacity: 0.7;
    }

    .hover\:opacity-75:hover {
      opacity: 0.75;
    }

    .hover\:opacity-100:hover {
      opacity: 1;
    }

    *,
    ::before,
    ::after {
      --tw-shadow: 0 0 #0000;
    }

    .shadow-sm {
      --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    .shadow {
      --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    .shadow-md {
      --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    .shadow-none {
      --tw-shadow: 0 0 #0000;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    .focus\:shadow-md:focus {
      --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    .focus\:outline-none:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    *,
    ::before,
    ::after {
      --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgba(59, 130, 246, 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
    }

    .ring-0 {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
        var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
        calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
        var(--tw-shadow, 0 0 #0000);
    }

    .ring-2 {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
        var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
        calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
        var(--tw-shadow, 0 0 #0000);
    }

    .focus\:ring-2:focus {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
        var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
        calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
        var(--tw-shadow, 0 0 #0000);
    }

    .ring-red-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgba(254, 202, 202, var(--tw-ring-opacity));
    }

    .focus\:ring-white:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgba(255, 255, 255, var(--tw-ring-opacity));
    }

    .focus\:ring-yellow-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgba(245, 158, 11, var(--tw-ring-opacity));
    }

    .focus\:ring-opacity-20:focus {
      --tw-ring-opacity: 0.2;
    }

    .focus\:ring-offset-2:focus {
      --tw-ring-offset-width: 2px;
    }

    .focus\:ring-offset-gray-800:focus {
      --tw-ring-offset-color: #1f2937;
    }

    .filter {
      --tw-blur: var(--tw-empty, /*!*/ /*!*/);
      --tw-brightness: var(--tw-empty, /*!*/ /*!*/);
      --tw-contrast: var(--tw-empty, /*!*/ /*!*/);
      --tw-grayscale: var(--tw-empty, /*!*/ /*!*/);
      --tw-hue-rotate: var(--tw-empty, /*!*/ /*!*/);
      --tw-invert: var(--tw-empty, /*!*/ /*!*/);
      --tw-saturate: var(--tw-empty, /*!*/ /*!*/);
      --tw-sepia: var(--tw-empty, /*!*/ /*!*/);
      --tw-drop-shadow: var(--tw-empty, /*!*/ /*!*/);
      filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
        var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
        var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    }

    .blur {
      --tw-blur: blur(8px);
    }

    .drop-shadow-lg {
      --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
        drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
    }

    .drop-shadow-none {
      --tw-drop-shadow: drop-shadow(0 0 #0000);
    }

    .transition {
      transition-property: background-color, border-color, color, fill, stroke,
        opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
      transition-property: background-color, border-color, color, fill, stroke,
        opacity, box-shadow, transform, filter, backdrop-filter;
      transition-property: background-color, border-color, color, fill, stroke,
        opacity, box-shadow, transform, filter, backdrop-filter,
        -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    .transition-opacity {
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    .delay-150 {
      transition-delay: 150ms;
    }

    .duration-300 {
      transition-duration: 300ms;
    }

    .duration-500 {
      transition-duration: 500ms;
    }

    .ease-in-out {
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    body {
      font-size: 14px;
      background-color: white !important;
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
    }

    .ant-picker-active-bar,
    .ant-picker-range-arrow {
      transition: none !important;
    }

    svg {
      vertical-align: initial !important;
    }

    input[type="date"] {
      min-height: 2.5rem;
    }

    .ant-layout {
      background-color: inherit !important;
    }

    .ant-input[disabled] {
      color: inherit;
      opacity: 0.85 !important;
    }

    .ant-modal-header {
      text-align: center;
    }

    .ant-modal-content {
      background: #f2f2f2;
    }

    .ant-modal-footer {
      padding: 0 24px 24px;
    }

    nav #menu-link li {
      list-style-type: none;
      margin: 0 1vw;
    }

    nav #menu-link li .sign-in {
      margin-right: 0 !important;
    }

    nav #menu-link li .sign-in:hover {
      text-decoration: none;
    }

    nav #menu-link li a {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      color: #f47606;
      padding: 0.45rem 0;
      font-family: "Roboto", Helvetica, Arial, sans-serif !important;
    }

    nav #menu-link li a:hover {
      text-decoration: underline;
    }

    bold {
      font-weight: 700;
      font-family: Roboto, Helvetica, Arial, sans-serif;
    }

    .btn-orange {
      border: 1px solid #e57715 !important;
      border-radius: 9999px !important;
      color: #e57715 !important;
    }

    .btn-status {
      border-radius: 9999px;
    }

    .btn-status-orange {
      border: 1px solid #e57715;
      background-color: #e57715;
      color: white !important;
    }

    .btn-status-soldout,
    .btn-status-unavailable {
      border: 1px solid #8d8d8d;
      background-color: #8d8d8d;
      color: white !important;
    }

    .bg-search-airport {
      background: #dca77b url("/staticmyapp/bg-search-airport.svg") no-repeat;
      background-size: cover;
    }

    .bg-search-city {
      background: #c2ccd0 url("/staticmyapp/bg-search-city.svg") no-repeat;
      background-size: cover;
    }

    .bg-search_city {
      background: #c2ccd0 url("/staticmyapp/bg-search-city.svg") no-repeat;
      background-size: cover;
    }

    .bg-about {
      background: url("/staticmyapp/bg-about.png") no-repeat;
      background-size: cover;
    }

    .bg-membership {
      background: url("/staticmyapp/bg-membership.png") no-repeat;
      background-size: cover;
    }

    .bg-partner {
      background: url("/staticmyapp/bg-partner.png") no-repeat;
      background-size: cover;
    }

    .ant-list-item {
      border-bottom-color: inherit !important;
    }

    .search-switch {
      background: rgba(0, 0, 0, 0.25);
      height: 40px;
      border-radius: 90px;
      padding: 5px 44px;
      max-width: 228px;
      text-align: center;
      display: flex !important;
      width: 100% !important;
      flex-direction: row !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .search-switch li {
      border-radius: 9999px !important;
    }

    .search-switch li button {
      width: 114px;
      height: 40px;
    }

    .search-switch li.active .ant-btn {
      background: #f47606;
      border: 1px solid #f47606;
      border-radius: 9999px !important;
    }

    .search-switch li.active a {
      color: #fff;
    }

    .search-switch li a {
      display: block;
      text-transform: uppercase;
      --tw-text-opacity: 1;
      color: rgba(17, 24, 39, var(--tw-text-opacity));
      padding: 10px 20px;
      font-size: 14px;
    }

    .divider-text:before {
      position: absolute;
      content: "";
      border-bottom: 1px solid #ddd;
      width: 70px;
      left: 0;
    }

    .divider-text:after {
      position: absolute;
      content: "";
      border-bottom: 1px solid #ddd;
      width: 70px;
      right: 0;
    }

    /* Override base SVG style to work with Ant Design */

    .logo {
      background: url("/staticmyapp/logo-registred.svg") no-repeat;
      width: 115px;
      height: 60px;
      margin-right: auto;
      display: flex;
    }

    .search {
      background: url("https://www.onairparking.com/assets/public/image/jpg/banner_1.jpg")
        no-repeat;
      background-size: cover;
      height: calc(100vh - 64px);
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .search form {
      background: white;
      border-radius: 5px;
      padding: 10px;
      width: auto !important;
    }

    .ant-select-selector {
      border: none !important;
    }

    #checkIn.ant-input {
      padding: 0 23px;
    }

    .btn-sort.active span {
      color: #ff962e;
      text-decoration: underline;
    }

    .rounded-bl-90 {
      border-bottom-left-radius: 90px;
    }

    .text-roboto-bold-14 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 22px;
    }

    .text-roboto-14 {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
    }

    .color-orange {
      color: #e57715;
    }

    .bg-clear-orange {
      background: #fef3eb;
    }

    .ant-collapse-arrow {
      color: #e57715;
    }

    .ant-collapse-terms .ant-collapse-header {
      align-items: flex-start;
    }

    .ant-collapse-terms .ant-collapse-header .ant-collapse-arrow {
      margin-top: 4px;
    }

    .ant-layout-footer {
      background-color: #e5e5e5 !important;
    }

    .ant-tabs-tab.ant-tabs-tab-active {
      font-weight: 500;
      border-width: 1px !important;
      --tw-border-opacity: 1 !important;
      border-color: rgba(229, 119, 21, var(--tw-border-opacity)) !important;
      --tw-bg-opacity: 1 !important;
      background-color: rgba(229, 119, 21, var(--tw-bg-opacity)) !important;
    }

    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #fff !important;
      font-weight: 500;
    }

    .ant-picker-content .ant-picker-time-panel-column:nth-child(2n),
    .ant-picker-content .ant-picker-time-panel-column:nth-child(3n) {
      overflow: unset;
    }

    input[type="date"],
    select {
      -webkit-appearance: none;
    }

    .ribbon {
      right: -10px;
    }

    .ribbon::after {
      position: absolute;
      z-index: -1;
      content: "";
      display: block;
      border: 5px solid #ad5e15;
    }

    /* top right*/

    .ribbon-top-right::before,
    .ribbon-top-right::after {
      border-top-color: transparent;
      border-right-color: transparent;
    }

    .ribbon-top-right::before {
      top: 0;
      left: 0;
    }

    .ribbon-top-right::after {
      bottom: -10px;
      right: 0;
      transform: rotate(90deg);
    }

    #parkingat .ant-modal-title {
      text-align: center;
    }

    .landing {
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
    }

    .landing .landing-table {
      overflow: auto !important;
      margin-bottom: 1rem;
    }

    .landing a {
      --tw-text-opacity: 1;
      color: rgba(229, 119, 21, var(--tw-text-opacity));
      text-decoration: underline;
    }

    .landing p {
      font-size: 1rem;
      line-height: 1.5rem;
      --tw-text-opacity: 1;
      color: rgba(81, 83, 86, var(--tw-text-opacity));
    }

    .landing p.normal-text {
      font-size: 1rem;
      line-height: 1.5rem;
      --tw-text-opacity: 1;
      color: rgba(81, 83, 86, var(--tw-text-opacity));
    }

    .landing p.red-text {
      --tw-text-opacity: 1;
      color: rgba(220, 38, 38, var(--tw-text-opacity));
    }

    .landing .pb-4 {
      overflow-x: auto;
    }

    .landing table {
      margin-top: 1rem;
      margin-bottom: 1rem;
      table-layout: auto;
      border-collapse: collapse;
      border-width: 1px;
      --tw-border-opacity: 1;
      border-color: rgba(243, 244, 246, var(--tw-border-opacity));
      overflow: auto !important;
      width: 100% !important;
    }

    .landing table th,
    .landing table td {
      border-width: 1px;
      --tw-border-opacity: 1;
      border-color: rgba(243, 244, 246, var(--tw-border-opacity));
      padding: 1rem;
    }

    .landing table tr:hover {
      --tw-bg-opacity: 1;
      background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
    }

    .landing table tr:nth-child(odd) {
      --tw-bg-opacity: 1;
      background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
    }

    .landing h1,
    .landing h2,
    .landing h3,
    .landing h4,
    .landing h5,
    .landing h6 {
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
    }

    .landing h1,
    .landing h2,
    .landing h3,
    .landing h4,
    .landing h5,
    .landing h6 {
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-weight: 600;
      line-height: 1.375;
    }

    .landing h1 {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .landing h2 {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    .landing h3,
    .landing h4,
    .landing h5,
    .landing h6 {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    .landing p {
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
      margin-bottom: 1rem;
      line-height: 1.375;
    }

    .landing .ant-collapse-header-text {
      font-size: 1rem;
      line-height: 1.5rem;
      text-transform: uppercase;
    }

    .landing-raw {
      color: #4a4a4a;
      padding-bottom: 40px !important;
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
    }

    .landing-raw p {
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
    }

    .landing-raw a {
      color: #e57715;
    }

    .landing-raw a span {
      color: #e57715;
    }

    .landing-raw img {
      display: block;
      margin: 0 auto;
      margin-bottom: 1rem;
    }

    .landing-raw table {
      margin: 0 10% !important;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      line-height: 1.42857143;
      color: #333;
      letter-spacing: 0.4pt;
      font-family: "Roboto";
      font-size: 14px;
      text-align: center;
      box-sizing: border-box;
      border-spacing: 0;
      border-collapse: collapse;
      background-color: transparent;
      max-width: 100%;
      border: 1px solid #dddddd;
      margin-bottom: 1rem !important;
      width: 80% !important;
    }

    .landing-raw table td {
      border: 1px solid #dddddd;
      padding: 8px;
    }

    .landing-raw strong {
      font-weight: 500;
    }

    .landing-raw br {
      height: 0 !important;
    }

    .landing-raw p {
      margin: 0px 10% 10px !important;
      text-align: left !important;
    }

    .landing-raw p img,
    .landing-raw p iframe {
      display: block;
      margin: 0 auto;
    }

    .landing-raw p,
    .landing-raw div,
    .landing-raw li {
      font-size: 16px !important;
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
    }

    .landing-raw h1,
    .landing-raw h2,
    .landing-raw h3,
    .landing-raw h4,
    .landing-raw h5,
    .landing-raw h6 {
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
      font-weight: 600 !important;
    }

    .landing-raw h1,
    .landing-raw h2,
    .landing-raw h3,
    .landing-raw h4,
    .landing-raw h5,
    .landing-raw h6 {
      margin-bottom: 1rem;
      line-height: 1.375;
    }

    .landing-raw h1,
    .landing-raw h2,
    .landing-raw h3,
    .landing-raw h4,
    .landing-raw h5,
    .landing-raw h6 {
      font-style: normal !important;
    }

    .landing-raw h1 {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .landing-raw h2 {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    .landing-raw h3,
    .landing-raw h4,
    .landing-raw h5,
    .landing-raw h6 {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    .landing-raw p {
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
      margin-bottom: 1rem;
      line-height: 1.375;
    }

    .landing-raw span {
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
    }

    .landing-raw h2,
    .landing-raw h3 {
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
    }

    .landing-raw h2,
    .landing-raw h3 {
      line-height: 1.375;
    }

    .landing-raw h2 span,
    .landing-raw h3 span {
      font-weight: 600;
    }

    .landing-raw h2 span,
    .landing-raw h3 span {
      font-weight: 600 !important;
    }

    .ant-collapse-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    .ant-collapse {
      overflow: hidden !important;
      --tw-border-opacity: 1 !important;
      border-color: rgba(229, 119, 21, var(--tw-border-opacity)) !important;
    }

    .ant-collapse > .ant-collapse-item {
      border-bottom-width: 1px !important;
      --tw-border-opacity: 1 !important;
      border-color: rgba(229, 119, 21, var(--tw-border-opacity)) !important;
    }

    @media (min-width: 640px) {
      .sm\:col-auto {
        grid-column: auto;
      }

      .sm\:block {
        display: block;
      }

      .sm\:flex {
        display: flex;
      }

      .sm\:hidden {
        display: none;
      }

      .sm\:h-98 {
        height: 28rem;
      }

      .sm\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .sm\:flex-col {
        flex-direction: column;
      }

      .sm\:gap-2 {
        gap: 0.5rem;
      }

      .sm\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      .sm\:py-2 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }

      .sm\:pt-0 {
        padding-top: 0px;
      }

      .sm\:text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width: 768px) {
      .md\:relative {
        position: relative;
      }

      .md\:bottom-0 {
        bottom: 0px;
      }

      .md\:col-auto {
        grid-column: auto;
      }

      .md\:col-span-2 {
        grid-column: span 2 / span 2;
      }

      .md\:col-span-8 {
        grid-column: span 8 / span 8;
      }

      .md\:m-0 {
        margin: 0px;
      }

      .md\:my-8 {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      .md\:mt-0 {
        margin-top: 0px;
      }

      .md\:mt-4 {
        margin-top: 1rem;
      }

      .md\:mt-6 {
        margin-top: 1.5rem;
      }

      .md\:mt-12 {
        margin-top: 3rem;
      }

      .md\:mt-16 {
        margin-top: 4rem;
      }

      .md\:-mt-6 {
        margin-top: -1.5rem;
      }

      .md\:mb-0 {
        margin-bottom: 0px;
      }

      .md\:mb-9 {
        margin-bottom: 2.25rem;
      }

      .md\:mb-12 {
        margin-bottom: 3rem;
      }

      .md\:ml-2 {
        margin-left: 0.5rem;
      }

      .md\:ml-4 {
        margin-left: 1rem;
      }

      .md\:ml-6 {
        margin-left: 1.5rem;
      }

      .md\:ml-10 {
        margin-left: 2.5rem;
      }

      .md\:ml-80 {
        margin-left: 20rem;
      }

      .md\:block {
        display: block;
      }

      .md\:flex {
        display: flex;
      }

      .md\:table {
        display: table;
      }

      .md\:grid {
        display: grid;
      }

      .md\:hidden {
        display: none;
      }

      .md\:h-32 {
        height: 8rem;
      }

      .md\:h-44 {
        height: 11rem;
      }

      .md\:h-64 {
        height: 16rem;
      }

      .md\:h-80 {
        height: 20rem;
      }

      .md\:h-full {
        height: 100%;
      }

      .md\:min-h-full {
        min-height: 100%;
      }

      .md\:w-48 {
        width: 12rem;
      }

      .md\:w-auto {
        width: auto;
      }

      .md\:w-1\/3 {
        width: 33.333333%;
      }

      .md\:w-2\/3 {
        width: 66.666667%;
      }

      .md\:w-full {
        width: 100%;
      }

      .md\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .md\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .md\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .md\:grid-cols-12 {
        grid-template-columns: repeat(12, minmax(0, 1fr));
      }

      .md\:flex-row {
        flex-direction: row;
      }

      .md\:flex-col {
        flex-direction: column;
      }

      .md\:place-content-center {
        place-content: center;
      }

      .md\:items-start {
        align-items: flex-start;
      }

      .md\:items-center {
        align-items: center;
      }

      .md\:justify-start {
        justify-content: flex-start;
      }

      .md\:justify-end {
        justify-content: flex-end;
      }

      .md\:justify-center {
        justify-content: center;
      }

      .md\:justify-between {
        justify-content: space-between;
      }

      .md\:gap-8 {
        gap: 2rem;
      }

      .md\:gap-14 {
        gap: 3.5rem;
      }

      .md\:gap-20 {
        gap: 5rem;
      }

      .md\:gap-24 {
        gap: 6rem;
      }

      .md\:gap-x-12 {
        -moz-column-gap: 3rem;
        column-gap: 3rem;
      }

      .md\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(1rem * var(--tw-space-x-reverse));
        margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
      }

      .md\:space-y-8 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(2rem * var(--tw-space-y-reverse));
      }

      .md\:divide-x-4 > :not([hidden]) ~ :not([hidden]) {
        --tw-divide-x-reverse: 0;
        border-right-width: calc(4px * var(--tw-divide-x-reverse));
        border-left-width: calc(4px * calc(1 - var(--tw-divide-x-reverse)));
      }

      .md\:justify-self-end {
        justify-self: end;
      }

      .md\:overflow-visible {
        overflow: visible;
      }

      .md\:rounded-md {
        border-radius: 0.375rem;
      }

      .md\:rounded-full {
        border-radius: 9999px;
      }

      .md\:border {
        border-width: 1px;
      }

      .md\:border-l {
        border-left-width: 1px;
      }

      .md\:border-dashed {
        border-style: dashed;
      }

      .md\:bg-transparent {
        background-color: transparent;
      }

      .md\:bg-white {
        --tw-bg-opacity: 1;
        background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
      }

      .md\:object-scale-down {
        -o-object-fit: scale-down;
        object-fit: scale-down;
      }

      .md\:p-4 {
        padding: 1rem;
      }

      .md\:p-8 {
        padding: 2rem;
      }

      .md\:px-0 {
        padding-left: 0px;
        padding-right: 0px;
      }

      .md\:px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      .md\:px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
      }

      .md\:py-0 {
        padding-top: 0px;
        padding-bottom: 0px;
      }

      .md\:py-8 {
        padding-top: 2rem;
        padding-bottom: 2rem;
      }

      .md\:pt-0 {
        padding-top: 0px;
      }

      .md\:pr-2 {
        padding-right: 0.5rem;
      }

      .md\:pr-4 {
        padding-right: 1rem;
      }

      .md\:pl-0 {
        padding-left: 0px;
      }

      .md\:pl-12 {
        padding-left: 3rem;
      }

      .md\:text-left {
        text-align: left;
      }

      .md\:text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }

      .md\:text-base {
        font-size: 1rem;
        line-height: 1.5rem;
      }

      .md\:text-xl {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }

      .md\:text-3xl {
        font-size: 1.875rem;
        line-height: 2.25rem;
      }

      .md\:text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }

      .md\:font-medium {
        font-weight: 500;
      }

      .md\:shadow-md {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      }

      .md\:shadow-xl {
        --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      }
    }

    @media (min-width: 1024px) {
      .lg\:flex {
        display: flex;
      }

      .lg\:hidden {
        display: none;
      }

      .lg\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .lg\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .lg\:flex-col {
        flex-direction: column;
      }

      .lg\:justify-start {
        justify-content: flex-start;
      }

      .lg\:py-0 {
        padding-top: 0px;
        padding-bottom: 0px;
      }
    }
  `;
__decorate([
    property({ type: String })
], NavBar.prototype, "message", void 0);
NavBar = __decorate([
    customElement("nav-bar")
], NavBar);
export { NavBar };
