import React from "react";
import Link from "next/link";

const footerNav = {
  Company: [
    {
      title: "About Us",
      href: "/#",
    },
    { title: "Contact Us", href: "/#" },
    { title: "Newsroom", href: "/#" },
    { title: "FAQ", href: "/#" },
  ],
  "Job Seeker": [
    {
      title: "Jobs by Specialisation",
      href: "/#",
    },
    { title: "Jobs by Location", href: "/#" },
    { title: "Jobs by Type", href: "/#" },
    { title: "Jobs by Experience Level", href: "/#" },
    { title: "Companies", href: "/#" },
    { title: "Advice", href: "/#" },
  ],
  Employers: [
    {
      title: "Start Hiring Today",
      href: "/#",
    },
    { title: "Headhunting Services", href: "/#" },
  ],
};

const SocialLinks = [
  {
    title: "Instagram",
    link: "https://instagram.com/",
    Icon: <InstagramIcon height={30} width={30} />,
  },
  {
    title: "Facebook",
    link: "https://facebook.com/",
    Icon: <FacebookIcon height={30} width={30} />,
  },
  {
    title: "Tiktok",
    link: "https://tiktok.com/",
    Icon: <TiktokIcon height={30} width={30} />,
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/",
    Icon: <LinkedInIcon height={30} width={30} />,
  },
  {
    title: "Youtube",
    link: "https://youtube.com/",
    Icon: <YoutubeIcon height={30} width={30} />,
  },
];

export const Footer = () => {
  return (
    <footer className="mt-20 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-screen-xl px-6 pt-16 sm:px-8">
        <div className="grid grid-cols-1 gap-y-6 gap-x-6 md:!grid-cols-6 md:gap-8 xs:grid-cols-2">
          <div className="mb-4  flex flex-col xs:col-span-2">
            <span className="text-xl font-bold capitalize">Hiredli</span>
            <p className="mt-4 max-w-screen-xs text-sm">
              We are on an unwavering mission to be Asia’s most loved job search
              platform, helping people discover any job with any employer in the
              market.
            </p>
            <ul
              id="social-media-links"
              className="mt-4 flex items-center space-x-4"
            >
              {SocialLinks.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.link}
                    aria-label={`${item.title} profile`}
                    className="transition-all duration-150 hover:fill-indigo-800 dark:fill-white dark:hover:fill-indigo-800"
                  >
                    {item.Icon}
                  </a>
                </li>
              ))}
            </ul>

            <span className="mt-8 text-xl font-bold capitalize">
              our strategic partner
            </span>

            <a
              href="https://www.linkedin.com/"
              rel="noreferrer"
              target="_blank"
              className="mt-4 max-w-min"
            >
              <LinkedInFullIcon height={35} />
            </a>
          </div>

          {Object.entries(footerNav).map(([title, items]) => {
            return (
              <div key={title}>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {title}
                </h2>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href}>
                        <a className="transition-all duration-150 hover:text-indigo-800 hover:underline dark:text-gray-300 dark:hover:text-white">
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="flex flex-col space-y-2">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Get Our App
            </h2>
            <a href="#">
              <img
                src="/img/app_store_download_button.svg"
                alt="download app"
                className="h-12"
              />
            </a>
            <a href="#">
              <img
                src="/img/google_play_download_button.svg"
                alt="download app"
                className="h-12"
              />
            </a>
            <a href="#">
              <img
                src="/img/app_gallery_download_button.svg"
                alt="download app"
                className="h-12"
              />
            </a>
          </div>
        </div>

        <div
          id="footer-copyright"
          className="mt-2 border-t border-slate-200 py-4 dark:border-slate-600"
        >
          <p className="text-center text-sm dark:text-gray-300">
            Copyright © 2022{" "}
            <a
              href="https://github.com/miadv"
              className="font-semibold hover:text-indigo-800 hover:underline dark:hover:text-white"
            >
              Miad Vosoughi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

function LinkedInFullIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...otherProps } = props;
  return (
    <svg viewBox="0 0 270 65" height={height} width={width} {...otherProps}>
      <path
        fill="#0a66c2"
        d="M263.744 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836M0 9.5874h9.993v36.4h18.5v9.222H0zm32.911 14.689h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 11-5.57 5.569 5.569 5.569 0 015.57-5.569m44.958.674h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066l-10.191-15.282h-.126v15.28h-9.6zm-34.835 14.699h9.219v4.225h.131a10.085 10.085 0 019.09-4.994c9.735 0 11.527 6.405 11.527 14.726v16.954h-9.6v-15.031c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6z"
      />
      <path
        fill="#0a66c2"
        d="M135.136 36.1384a5.756 5.756 0 00-5.894-5.89 6.406 6.406 0 00-6.784 5.89zm8.132 13.7a16.909 16.909 0 01-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331 0-9.923 7.685-16.328 17.286-16.328 8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 007.235 6.019 8.193 8.193 0 006.851-3.778zm21.482-18.089c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 01-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.5774h9.609zm64.809.018h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2h-55.21a4.728 4.728 0 00-4.781 4.67v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67m12.173 56.411a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"
      />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...otherProps } = props;

  return (
    <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
      <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...otherProps } = props;

  return (
    <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
      <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
      <circle cx="11.994" cy="11.979" r="3.003"></circle>
    </svg>
  );
}
function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...otherProps } = props;

  return (
    <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
    </svg>
  );
}
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...otherProps } = props;

  return (
    <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
      <circle cx="4.983" cy="5.009" r="2.188"></circle>
      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
    </svg>
  );
}
function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...otherProps } = props;

  return (
    <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
      <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
    </svg>
  );
}
