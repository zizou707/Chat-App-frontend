import { Link } from "react-router-dom";

function Footer({ user }) {
  return (
    <div className="mt-auto flex justify-between ">
      <div className="flex ml-5 mt-2 mb-1">
        {!user && (
          <>
            <p className="self-center">Start your free live chat trial</p>
            <Link to="/Register" className="btn btn-success ml-14 m">
              Sign up free
            </Link>
          </>
        )}
      </div>
      <div className="socials flex flex-row float-right mb-3 mr-3 gap-4 ">
        <a
          href="https://twitter.com/intent/follow?screen_name=LiveChat"
          className=" u-text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill="currentColor"
              d="M18.2 2.3h3.3l-7.2 8.2 8.5 11.3H16L11 14.8l-6 6.8H1.6L9.4 13 1.2 2.2H8l4.8 6.3 5.4-6.3ZM17 19.8H19L7 4H5l12 15.7Z"
            ></path>
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/company/livechat/"
          className=" u-text-black"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.45 20.45H16.9v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM3.55 20.45h3.57V9H3.55v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>

        <a href="https://www.facebook.com/livechat" className=" u-text-black">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 12.07a12 12 0 1 0-13.88 11.86v-8.39H7.08v-3.47h3.04V9.43c0-3 1.8-4.67 4.54-4.67 1.31 0 2.68.23 2.68.23v2.96h-1.51c-1.5 0-1.96.92-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.39A12 12 0 0 0 24 12.07Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>

        <a
          href="https://www.youtube.com/livechat?sub_confirmation=1"
          className=" u-text-black"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.52 15.59V8.82l6.49 3.4-6.49 3.37Zm14.24-7.94s-.23-1.66-.95-2.39c-.92-.96-1.94-.96-2.4-1.02C17.03 4 12 4 12 4h-.02s-5.03 0-8.4.24c-.46.06-1.48.06-2.4 1.02-.72.73-.95 2.4-.95 2.4S0 9.6 0 11.54v1.82c0 1.95.24 3.9.24 3.9s.23 1.66.95 2.39c.92.96 2.12.93 2.65 1.03 1.92.18 8.16.24 8.16.24s5.04 0 8.4-.25c.47-.06 1.5-.06 2.4-1.02.73-.73.96-2.39.96-2.39s.24-1.95.24-3.9v-1.82c0-1.95-.24-3.9-.24-3.9Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>

        <a href="https://www.instagram.com/livechat/" className=" u-text-black">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.05.07C8.33.01 8.75 0 12 0c3.26 0 3.67.01 4.95.07a8.8 8.8 0 0 1 2.91.56c.79.3 1.46.72 2.13 1.38a5.88 5.88 0 0 1 1.38 2.13c.3.76.5 1.64.56 2.91.06 1.28.07 1.7.07 4.95 0 3.26-.01 3.67-.07 4.95a8.81 8.81 0 0 1-.56 2.91c-.3.79-.72 1.46-1.38 2.13a5.88 5.88 0 0 1-2.13 1.38c-.76.3-1.64.5-2.91.56-1.28.06-1.7.07-4.95.07-3.26 0-3.67-.01-4.95-.07a8.8 8.8 0 0 1-2.91-.56A5.88 5.88 0 0 1 2 21.99a5.88 5.88 0 0 1-1.38-2.13 8.8 8.8 0 0 1-.56-2.91A85.13 85.13 0 0 1 0 12c0-3.26.01-3.67.07-4.95a8.8 8.8 0 0 1 .56-2.91c.3-.79.72-1.46 1.38-2.13A5.88 5.88 0 0 1 4.14.63 8.8 8.8 0 0 1 7.05.07Zm12.03 2.58a6.64 6.64 0 0 0-2.23-.42A83.27 83.27 0 0 0 12 2.16c-3.2 0-3.58.01-4.85.07-1.17.06-1.8.25-2.23.42-.56.21-.96.47-1.38.9-.42.41-.68.81-.9 1.37a6.64 6.64 0 0 0-.4 2.23A83.28 83.28 0 0 0 2.15 12c0 3.2.01 3.58.07 4.85.06 1.17.25 1.8.42 2.23.21.56.47.96.9 1.38.41.42.81.68 1.37.9.43.16 1.06.35 2.23.4 1.27.07 1.65.08 4.85.08 3.2 0 3.58-.01 4.85-.07a6.64 6.64 0 0 0 2.23-.42c.56-.21.96-.47 1.38-.9.42-.41.68-.81.9-1.37.16-.43.35-1.06.4-2.23.07-1.27.08-1.65.08-4.85 0-3.2-.01-3.58-.07-4.85a6.64 6.64 0 0 0-.42-2.23 3.72 3.72 0 0 0-.9-1.38 3.72 3.72 0 0 0-1.37-.9ZM12 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm10.4-4.97a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>

        <a
          href="https://www.producthunt.com/posts/livechat-2"
          className=" u-text-black"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1999 14.4001h3.3998c2.3197 0 4.2-1.8803 4.2-4.2 0-2.31977-1.8803-4.20002-4.2-4.20002H7.79993V18.0001h2.39997v-3.6ZM0 12C0 5.37225 5.37225 0 12 0c6.627 0 12 5.37225 12 12 0 6.6278-5.373 12-12 12-6.62775 0-12-5.3722-12-12Zm10.2-3.60004h3.3998c.9946 0 1.8001.80625 1.8001 1.80004 0 .9937-.8055 1.7999-1.8001 1.7999H10.2V8.39996Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>

        <a href="https://dribbble.com/textcom" className=" u-text-black">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.93 5.53c-.21.3-1.93 2.5-5.72 4.05a30.73 30.73 0 0 1 .9 2c3.41-.42 6.8.27 7.14.34a10.2 10.2 0 0 0-2.32-6.39ZM9.6 2.05a54.8 54.8 0 0 1 3.82 6c3.65-1.37 5.19-3.44 5.38-3.7a10.2 10.2 0 0 0-9.2-2.3ZM1.97 9.92c.46 0 4.68.02 9.47-1.25a65.4 65.4 0 0 0-3.8-5.93c-2.86 1.35-5 4-5.67 7.18Zm2.42 8.95c.23-.4 3.04-5.06 8.33-6.76l.4-.13c-.26-.58-.54-1.16-.83-1.74A37.83 37.83 0 0 1 1.76 11.7l-.01.32c0 2.63 1 5.03 2.64 6.85ZM16 21.45c-.15-.9-.74-4.03-2.18-7.77l-.07.02c-5.78 2.01-7.86 6.02-8.04 6.4A10.2 10.2 0 0 0 16 21.45Zm6.12-7.8c-.35-.12-3.17-.96-6.38-.45a44.2 44.2 0 0 1 1.99 7.31 10.27 10.27 0 0 0 4.39-6.87ZM12 24C5.38 24 0 18.62 0 12S5.38 0 12 0s12 5.38 12 12-5.38 12-12 12Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>

        <a href="https://github.com/livechat" className=" u-text-black">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.39 6.13a12.1 12.1 0 0 0-4.37-4.48A11.52 11.52 0 0 0 12 0C9.82 0 7.81.55 5.98 1.65A12.27 12.27 0 0 0 0 12.3c0 2.68.76 5.1 2.29 7.23a11.78 11.78 0 0 0 5.91 4.45c.28.05.5.01.63-.12.13-.12.2-.28.2-.48a378 378 0 0 0-.01-2.29l-.36.07a6.45 6.45 0 0 1-1.95-.06 2.4 2.4 0 0 1-1.05-.48 2.03 2.03 0 0 1-.7-.98l-.15-.37c-.1-.25-.27-.52-.49-.82a1.9 1.9 0 0 0-.68-.6l-.1-.09a1.16 1.16 0 0 1-.35-.41c-.03-.08 0-.14.08-.19a1 1 0 0 1 .45-.07l.31.05c.2.04.47.17.77.38.31.22.56.5.76.83.24.44.53.78.87 1 .34.24.68.35 1.02.35.35 0 .64-.03.9-.08.24-.05.48-.13.7-.24.09-.72.35-1.27.76-1.65-.6-.06-1.13-.16-1.6-.29a6.3 6.3 0 0 1-1.47-.62 4.23 4.23 0 0 1-2.08-2.76c-.21-.7-.32-1.5-.32-2.4 0-1.3.42-2.4 1.24-3.3a4.4 4.4 0 0 1 .1-3.27c.3-.1.76-.02 1.35.22A9.29 9.29 0 0 1 9 6.36a10.84 10.84 0 0 1 6 0l.6-.39c.4-.25.88-.49 1.43-.7.55-.21.98-.27 1.27-.18.47 1.21.5 2.3.12 3.27.82.9 1.24 2 1.24 3.3 0 .9-.11 1.71-.32 2.41a5 5 0 0 1-.83 1.68 4.4 4.4 0 0 1-1.27 1.07c-.5.29-1 .5-1.47.62-.47.13-1 .23-1.6.29.54.48.81 1.24.81 2.27v3.38c0 .2.07.36.2.48.13.13.34.17.62.12 2.41-.83 4.39-2.3 5.91-4.45A12.16 12.16 0 0 0 24 12.3c0-2.23-.54-4.29-1.61-6.17Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Footer;