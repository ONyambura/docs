import { IconCoffee, IconBrandDiscord, IconNote, IconBrandYoutube } from '@tabler/icons-react';
const IconRockstar: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/512px-Rockstar_Games_Logo.svg.png?20161113121956"
    alt="Rockstar Games Logo"
    width={size}
    height={size}
    className={className}
  />
);

const MemberLink: React.FC<{ 
  username?: string, 
  github?: string, 
  discord?: string, 
  cfx?: string,
  youtube?: string,
  image?: string, 
  kofi?: string 
}> = ({ username, github, discord, cfx, youtube, image, kofi }) => {
  // const haskofi = !!kofi;
  // const hasDiscord = !!discord && !haskofi;
  // const hasCfx = !!cfx && !haskofi && !hasDiscord;
  // const hasYoutube = !!youtube && !haskofi && !hasDiscord && !hasCfx;

  return (
    <div key={username} className="flex flex-col items-center justify-center gap-2">
      <a 
        href={`https://github.com/${github}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2"
      >
        <p className="text-sky-500 font-semibold">{username}</p>
        <img 
          src={image} 
          alt={`${username}-image`} 
          className="w-24 rounded-md bg-neutral-100 shadow-md dark:bg-neutral-900" 
        />
      </a>
      
      {kofi && (
          <a 
            href={`https://ko-fi.com/${kofi}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-md p-2 text-sky-500 bg-sky-500/20 hover:bg-sky-500/30">
              <IconCoffee />
              Support
            </button>
          </a>
        )}
        
        {discord  && (
          // 
          <a 
            href={`https://forum.cfx.re/u/${cfx}/summary`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-md p-2 text-indigo-500 bg-indigo-500/20 hover:bg-indigo-500/30">
              <IconBrandDiscord />
              Discord
            </button>
          </a>
        )} 
        
        {/* { cfx && (
          <a 
            href={`https://discord.com/users/${discord}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-md p-2 text-indigo-500 bg-indigo-500/20 hover:bg-indigo-500/30">
              <IconRockstar />
              CFX
            </button>
          </a>
        )}

        { youtube && (
          <a 
            href={`youtube.com/${youtube}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-md p-2 text-indigo-500 bg-indigo-500/20 hover:bg-indigo-500/30">
              <IconBrandYoutube />
              Youtube
            </button>
          </a>
        )} */}
    </div>
  );
};

export default MemberLink;
