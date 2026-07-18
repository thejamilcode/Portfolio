import React from "react";

export default function TechIcon({ name, className = "w-8 h-8" }: { name: string; className?: string }) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-yellow-400`}>
          <circle cx="12" cy="12" r="11" fill="#F7DF1E" />
          <path d="M12 15c0-.9.2-1.6.6-2.1.4-.5 1-.7 1.7-.7s1.3.2 1.7.7c.4.5.6 1.2.6 2.1v.2c0 .9-.2 1.6-.6 2.1-.4.5-1 .7-1.7.7s-1.3-.2-1.7-.7c-.4-.5-.6-1.2-.6-2.1v-.2zm2.8 0c0-.5-.1-.9-.2-1.1-.1-.2-.3-.3-.6-.3s-.5.1-.6.3c-.1.2-.2.6-.2 1.1v.2c0 .5.1.9.2 1.1.1.2.3.3.6.3s.5-.1.6-.3c.1-.2.2-.6.2-1.1v-.2zM7.2 11h1.5v4.4c0 .8-.1 1.4-.4 1.8-.3.4-.8.7-1.4.7-.6 0-1.1-.3-1.4-.7-.2-.3-.3-.7-.3-1.2h1.4c0 .3.1.5.2.7.1.1.2.2.4.2s.3-.1.4-.2c.1-.2.2-.4.2-.7V11z" fill="#000" />
        </svg>
      );

    case "vuejs":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M24,1.6L12,22.4L0,1.6h5.3l6.7,11.6l6.7-11.6H24z" fill="#41B883" />
          <path d="M18.7,1.6L12,13.2L5.3,1.6h5.2l1.5,2.6l1.5-2.6H18.7z" fill="#35495E" />
        </svg>
      );

    case "reactjs":
      return (
        <svg viewBox="0 0 24 24" className={`${className} text-cyan-400 fill-none stroke-current`} strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2.2" className="fill-current text-cyan-400" />
        </svg>
      );

    case "css3":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" fill="#1572B6" />
          <path d="M12 2.2V21.8l6.7-2.2 1.5-16.7L12 2.2z" fill="#33A9DC" />
          <path d="M12 7.7H7.4L7 6.1h9.4L16 4.5H5.1l1.1 11.2L12 17.5V7.7z" fill="#FFF" />
          <path d="M12 11.4h4.2l-.4 4-3.8 1.1v-1.6l2-.6.2-2.1H12v-2.1h4.5l.2-2H12v2.1z" fill="#EAEAEA" />
        </svg>
      );

    case "tailwindcss":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-sky-400`}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );

    case "sass":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-pink-400`}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.2 12.8H8.7V8.1h1.9v3.6h2.8V8.1h1.9v6.7z" fill="none" />
          <path d="M17.9 11.2c-.4-.9-.9-1.5-1.5-1.9-.6-.4-1.3-.6-2.1-.6-.9 0-1.7.3-2.4.9-.7.6-1.3 1.4-1.8 2.4l-.2.4c-.4.8-.8 1.3-1.1 1.6-.3.3-.7.5-1 .5-.4 0-.7-.2-.9-.5-.2-.3-.3-.8-.3-.5 0-.7.2-1.6.6-2.8l.2-.5.1-.3c-.3 0-.6.1-.9.2-.3.1-.6.3-.8.6L6.5 10c-.3.4-.5.9-.6 1.4-.1.5-.2 1.1-.2 1.7 0 1.2.3 2.1.9 2.8.6.7 1.4 1 2.3 1 1 0 1.9-.4 2.7-1.2.8-.8 1.4-1.8 2-3l.1-.3c.4-.7.7-1.2 1-1.5.3-.3.6-.4.9-.4.4 0 .6.2.7.5.1.3.2.7.2 1.3 0 .7-.2 1.6-.6 2.7l-.1.3c.3 0 .5-.1.8-.2.3-.1.5-.3.7-.6.4-.6.6-1.3.7-2 0-.6.1-1.2.1-1.7.2-1.2-.1-2.1-.7-2.8z" />
        </svg>
      );

    case "markdown":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-sky-400`}>
          <path d="M22.3 3H1.7C.8 3 0 3.8 0 4.7v14.6C0 20.2.8 21 1.7 21h20.6c.9 0 1.7-.8 1.7-1.7V4.7C24 3.8 23.2 3 22.3 3zm-11 12.9H9.6V11.2l-2 2.5-2-2.5v4.7H3.9V8.1h1.7l2 2.5 2-2.5h1.7v7.8zm9.3-3.6h-2.3V8.1h-1.9v4.2h-2.3l3.2 3.6 3.3-3.6z" />
        </svg>
      );

    case "jquery":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-sky-500`}>
          <circle cx="12" cy="12" r="11" fill="#0769AD" />
          <path d="M6 8h2v8H6V8zm6 0c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4c0-1.1.9-2 2-2zm4.5 3h1.5v2.2h-1.5V15h-1.5V8h3v3z" fill="#FFF" />
        </svg>
      );

    case "redux":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-purple-500`}>
          <path d="M12 2.3c-.3 0-.6.1-.8.4l-7.3 6.9c-.4.4-.4 1.1 0 1.5l7.3 6.9c.4.4 1.2.4 1.6 0l7.3-6.9c.4-.4.4-1.1 0-1.5l-7.3-6.9c-.2-.3-.5-.4-.8-.4zm0 2.2l6.2 5.9-6.2 5.9-6.2-5.9 6.2-5.9z" />
        </svg>
      );

    case "es6":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-yellow-500`}>
          <circle cx="12" cy="12" r="11" fill="#f0db4f" />
          <text x="12" y="16" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#000">ES6</text>
        </svg>
      );

    case "python":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M11.9 2c-5.5 0-5.5 2.4-5.5 4.3v1.8h5.6V9h-7.8C2.3 9 2 9.7 2 12.1v2.5C2 17 3.3 17 4.2 17h1.5v-2.2c0-1.9 1.6-3.5 3.5-3.5h5.3c1.8 0 3-1.1 3-3V6c0-1.9-1.2-4-5.6-4zm3.6 8.3c0 1.9-1.6 3.5-3.5 3.5H6.7c-1.8 0-3 1.1-3 3V21c0 1.9 1.2 4 5.6 4 5.5 0 5.5-2.4 5.5-4.3v-1.8h-5.6v-.9h7.8c1.9 0 2.2-.7 2.2-3.1v-2.5c0-2.5-1.3-2.5-2.2-2.5h-1.5V10.3z" fill="#3776AB" />
          <path d="M9.1 5.1a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm5.8 12.2a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" fill="#FFE873" />
        </svg>
      );

    case "django":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="11" fill="#092E20" />
          <text x="12" y="16" fontFamily="serif" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#FFF">dj</text>
        </svg>
      );

    case "php":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <ellipse cx="12" cy="12" rx="11" ry="8" fill="#777BB4" />
          <text x="12" y="15.5" fontFamily="sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#FFF">PHP</text>
        </svg>
      );

    case "mysql":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-sky-600`}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.5H9v-1.2h2v1.2zm3.5-3.5h-5v-1.2h5v1.2zm1.5-3.5h-6.5V10H16v1.5z" />
        </svg>
      );

    case "postgresql":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-blue-500`}>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm-3.5-6.5h2v2h-2v-2zm5 0h2v2h-2v-2z" />
        </svg>
      );

    case "woocommerce":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="11" fill="#96588A" />
          <path d="M6.5 8.5l3 7h2l1.5-3.5 1.5 3.5h2l3-7h-2.5l-1.5 4.5-1.5-4.5H11l-1.5 4.5-1.5-4.5H6.5z" fill="#FFF" />
        </svg>
      );

    case "wordpress":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="11" fill="#21759B" />
          <path d="M12 3.8a8.2 8.2 0 0 1 5 1.7L13.8 15.3l-2.4-7.3A8.2 8.2 0 0 1 12 3.8zm-5 4.7a8.2 8.2 0 0 1 1.7-1.4l3 8.7-2.3 6.7A8.2 8.2 0 0 1 7 8.5zm10 0a8.2 8.2 0 0 1 1.3 2.1c-.2.6-.7.9-1.2.9h-.3l-2 5.7 2.2-8.7zm-5 11.7a8.2 8.2 0 0 1-3.2-1.3l2.8-8 1.4 4.2 1.4-4.2 2.8 8A8.2 8.2 0 0 1 12 20.2z" fill="#FFF" />
        </svg>
      );

    case "git":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-orange-500`}>
          <path d="M23.2 11.4L12.6.8c-.8-.8-2-.8-2.8 0L8.2 2.4l3 3c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l3 3c.6-.2 1.3 0 1.8.5.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.7-1.2-.5-1.8l-3-3c-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3l-3 3c.2.6 0 1.3-.5 1.8-.7.7-1.8.7-2.5 0s-.7-1.8 0-2.5c.5-.5 1.2-.7 1.8-.5l3-3c-.2-.2-.3-.5-.3-.8 0-.3.1-.6.3-.8L5 .8l-.8.8-1.4 1.4-2 2c-.8.8-.8 2 0 2.8l10.6 10.6c.8.8 2 .8 2.8 0l10.6-10.6c.8-.8.8-2 0-2.8z" />
        </svg>
      );

    case "github":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-white`}>
          <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C18 3 19 3.3 19 3.3c.7 1.7.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z" />
        </svg>
      );

    case "docker":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-sky-400`}>
          <path d="M13.983 11.078h2.119v-2h-2.119zm-2.437 0h2.119v-2h-2.119zm-2.438 0h2.12v-2h-2.12zm-2.438 0h2.119v-2H6.67zm-2.437 0h2.119v-2H4.233zM8.622 8.651h2.119v-2h-2.119zm2.437 0h2.12v-2h-2.12zm-4.874 0h2.119v-2H6.185zM8.622 6.223h2.119v-2h-2.119zm12.733 6.074c-.096.002-.585.011-.756.291-.076.127-.108.407-.108.685 0 1.926-1.743 3.492-3.879 3.492h-8.48c-.066 0-.256-.002-.387-.042-2.103-.637-3.513-2.61-3.513-4.861 0-2.822 2.457-5.12 5.488-5.12.164 0 .324.008.483.023V6.2h-.18c-3.328 0-6.035 2.502-6.035 5.578 0 2.463 1.745 4.544 4.256 5.257l.156.044h8.324c2.51-.013 4.537-1.895 4.537-4.195 0-.17-.008-.34-.022-.509z" />
        </svg>
      );

    case "vercel":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-white`}>
          <path d="M24 22.525H0L12 1.475L24 22.525Z" />
        </svg>
      );

    case "netlify":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-teal-400`}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.1 11.2h-6.2V8.1h1.9v3.6H12v-3.6h1.9v3.6h1.2v-3.6h1.9v6.7z" />
        </svg>
      );

    case "heroku":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-purple-700`}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 12h-4v-4h4v4z" />
        </svg>
      );

    case "linux":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-slate-300`}>
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 14.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-.5-8h-1v6h1V8.5z" />
        </svg>
      );

    case "cicd":
    case "cicdgithubactions":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-blue-400`}>
          <circle cx="12" cy="12" r="11" fill="#2088FF" />
          <path d="M7 12h10v2H7zM7 8h6v2H7zm4 8h6v2h-6z" fill="#FFF" />
        </svg>
      );

    case "npm":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-red-500`}>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4h16v16H4V4zm2 2v12h4v-8h2v8h4V6H6z" />
        </svg>
      );

    case "bash":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current text-green-400`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );

    case "aws":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-orange-400`}>
          <circle cx="12" cy="12" r="11" fill="#232F3E" />
          <path d="M12 16.5c-2.3 0-3.5-.9-3.5-1.5 0-.5.6-1 1.8-1.2.6-.1 1.3-.1 1.7-.1.8 0 1.5.1 1.8.3.3.2.4.5.4.8v.5c0 .7-.8 1.2-2.2 1.2zm3.3-6.5l-.8 1.2c-.3-.2-.6-.4-1-.5s-.8-.2-1.2-.2c-1.3 0-2 .6-2 1.5 0 .8.7 1.3 2 1.3.8 0 1.5-.2 2-.5V10h1v4.3c0 1-.3 1.7-1 2.2s-1.7.7-2.8.7c-1.5 0-2.7-.4-3.5-1.1l.8-1.2c.6.6 1.5.9 2.7.9.8 0 1.4-.2 1.8-.5.3-.3.5-.8.5-1.5v-.5c-.6.3-1.4.5-2.2.5-1.7 0-3-.8-3-2.3s1.3-2.3 3.2-2.3c.9 0 1.7.2 2.2.6V8.1h1.1V10z" fill="#FFF" />
          <path d="M6.5 17.5c2.5 1.5 6 2 9 1l-1-1.5c-2.5.8-5.5.3-7.5-.8l-.5 1.3z" fill="#FF9900" />
        </svg>
      );

    case "vscode":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-sky-500`}>
          <path d="M23.9 6.5l-2.7-2.7c-.2-.2-.6-.2-.8 0L12 11.4 3.6 3.8c-.2-.2-.6-.2-.8 0L.1 6.5c-.2.2-.2.6 0 .8l5.9 5.9-5.9 5.9c-.2.2-.2.6 0 .8l2.7 2.7c.2.2.6.2.8 0L12 15l8.4 7.6c.2.2.6.2.8 0l2.7-2.7c.2-.2.2-.6 0-.8l-5.9-5.9 5.9-5.9c.2-.2.2-.6 0-.8z" />
        </svg>
      );

    case "figma":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 2C9.2 2 7 4.2 7 7s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 10c-2.8 0-5 2.2-5 5s2.2 5 5 5v-10zm5 5c0 2.8-2.2 5-5 5s-5-2.2-5-5v-10h10v10z" fill="#F24E1E" />
          <path d="M12 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5-2.2-5-5-5z" fill="#A259FF" />
          <path d="M12 2v10c2.8 0 5-2.2 5-5s-2.2-5-5-5z" fill="#FF7262" />
          <path d="M7 7c0 2.8 2.2 5 5 5V2c-2.8 0-5 2.2-5 5z" fill="#1ABC9C" />
          <path d="M12 12c2.8 0 5 2.2 5 5s-2.2 5-5 5V12z" fill="#19BC9B" />
        </svg>
      );

    case "postman":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <path d="M12 4.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6z" fill="#FFF" />
        </svg>
      );

    case "chromedevtools":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="11" fill="#4285F4" />
          <path d="M12 2a10 10 0 0 0-7.6 3.5l3.8 6.5c.2-.5.5-1 1-1.3l2.8-4.7H12zm0 20a10 10 0 0 0 7.6-3.5l-3.8-6.5c-.2.5-.5 1-1 1.3l-2.8 4.7H12zm-10-10a10 10 0 0 0 3.5 7.6l6.5-3.8c-.5-.2-1-.5-1.3-1l-4.7-2.8V12zm20 0a10 10 0 0 0-3.5-7.6l-6.5 3.8c.5.2 1 .5 1.3 1l4.7 2.8V12z" fill="#FFF" />
          <circle cx="12" cy="12" r="4.5" fill="#4285F4" />
        </svg>
      );

    case "stackshare":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="11" fill="#0084FF" />
          <circle cx="8" cy="12" r="2.5" fill="#FFF" />
          <circle cx="15" cy="7" r="2.5" fill="#FFF" />
          <circle cx="15" cy="17" r="2.5" fill="#FFF" />
          <line x1="10" y1="12" x2="13" y2="8.5" stroke="#FFF" strokeWidth="1.5" />
          <line x1="10" y1="12" x2="13" y2="15.5" stroke="#FFF" strokeWidth="1.5" />
        </svg>
      );

    case "prettier":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="11" fill="#1A2B3C" />
          <path d="M7 7h10v10H7z" fill="url(#prettier-grad)" />
          <defs>
            <linearGradient id="prettier-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F44336" />
              <stop offset="50%" stopColor="#E91E63" />
              <stop offset="100%" stopColor="#9C27B0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "chatgpt":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="11" fill="#10a37f" />
          <path d="M16 11.5c.3 0 .5-.1.7-.3s.3-.5.3-.7c0-.6-.5-1-1-1h-2.5c-.3 0-.5.1-.7.3s-.3.5-.3.7v3c0 .6.5 1 1 1h2c.3 0 .5-.1.7-.3s.3-.5.3-.7v-.5c0-.6-.5-1-1-1h-1.5v-1H16z" fill="#FFF" />
        </svg>
      );

    case "cursor":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current text-sky-400`}>
          <path d="M5.5 3.2L18.8 12l-6.3 1.7 4.2 6.3-2.5 1.7-4.2-6.3-4.5 3.8V3.2z" />
        </svg>
      );

    case "githubcopilot":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="11" fill="#6F42C1" />
          <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm4-2.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z" fill="#FFF" />
        </svg>
      );

    case "gemini":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z" fill="url(#gemini-grad)" />
          <defs>
            <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="50%" stopColor="#9B72CB" />
              <stop offset="100%" stopColor="#EA4335" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={`${className} text-[var(--bb-text-muted)] fill-none stroke-current`} strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
  }
}
