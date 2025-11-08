import React from 'react';
import { GhButton, DocButton, ReleaseButton, TebexButton, YoutubeButton, FivemButton } from './button';

interface Props {
  children?: React.ReactNode;
  repo: string;
  docs?: string;
  tebex?: string;
  youtube?: string;
  cfx?: string
}

const ResourceLinks = ({ repo, docs, tebex, youtube, cfx }: Props) => {
  return (
    <div className="flex flex-wrap gap-1">
      { repo && <GhButton link={repo} />}
      {repo && <ReleaseButton link={`${repo}/releases`} />}
      {docs && <DocButton link={docs} />}

      {tebex && <TebexButton link={tebex} />}
      {youtube && <YoutubeButton link={youtube} />}
      {cfx && <FivemButton link={cfx} />}
    </div>
  );
};

export default ResourceLinks;
