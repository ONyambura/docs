import MemberLink from './MemberLink';

interface Profile {
  username: string;
  github?: string;
  discord?: string;
  cfx?: string;
  youtube?: string
  avatar_url: string;
  kofi?: string;
}

const profiles: Profile[] = [
  {
    username: 'NXBR',
    github: 'ONyambura',
    avatar_url: 'https://cdn.discordapp.com/avatars/575331371262672927/b26e853b8c667ac5764015e328b1a249.webp?size=80',
    kofi: 'nyambura',
  },
  {
    username: 'N-Developments',
    youtube: '@n-developments',
    discord: 'mVUgnGjXQU',
    avatar_url: 'https://raw.githubusercontent.com/ONyambura/pictures/refs/heads/main/N%20Logos%20-%20Purple/logo.png',
  },
];

const priorityOrder = ['NXBR'];

const sortedprofiles = [
  ...priorityOrder
    .map((username) => profiles.find((m) => m.username === username))
    .filter((m): m is Profile => !!m),
  ...profiles.filter((m) => !priorityOrder.includes(m.username)),
];

const Displayprofiles = () => (
  <div className="mt-4 grid grid-cols-2 place-items-center gap-y-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {sortedprofiles.map(profile => (
      <MemberLink
        username={profile.username}
        github={profile.github}
        discord={profile.discord}
        cfx={profile.cfx}
        youtube={profile.youtube}
        image={profile.avatar_url}
        kofi={profile.kofi}
      />
    ))}
  </div>
);

export default Displayprofiles;