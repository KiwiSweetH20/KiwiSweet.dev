import { GitHub, Linkedin } from "react-feather";

export default function Socials() {
  const iconInfo = [
    {
      id: crypto.randomUUID(),
      icon: <GitHub />,
      link: "https://github.com/KiwiSweetH20",
      tooltip: "GitHub",
    },
    {
      id: crypto.randomUUID(),
      icon: <Linkedin/>,
      link: "https://www.linkedin.com/feed/",
      tooltip: "LinkedIn",
    },
    {
      id: crypto.randomUUID(),
      icon: (
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      link: "https://github.com/KiwiSweetH20",
      tooltip: "Twitter",
    },
  ];
  return (
    <fieldset className="border-2 border-taupe-800 w-fit h-fit rounded-2xl p-2 my-2 bg-taupe-950/20">
      <legend className="text-kiwi-9">Socials</legend>
      <div>
        <ul className="grid grid-cols-3 gap-2">
          {iconInfo.map((info) => (
            <li key={info.id}>
              <SocialIcons
                icon={info.icon}
                link={info.link}
                tooltip={info.tooltip}
              />
            </li>
          ))}
        </ul>
      </div>
    </fieldset>
  );
}

function SocialIcons({ icon, link, tooltip }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-block cursor-pointer"
    >
      <span className="text-kiwi-9">{icon}</span>
      <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md bg-taupe-800/40 backdrop-blur-sm px-3 py-1.5 text-sm text-kiwi-9 opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap border-kiwi-9 border-2">
        {tooltip}
      </span>
    </a>
  );
}
