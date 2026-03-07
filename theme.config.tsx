import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Search from '@components/Search';
import DiscordWidget from "@components/DiscordWidget";

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs.nxbr.dev${asPath}`;
  const description = frontMatter.description || "Documentation for NXBR's resources for FiveM/RedM";
  const siteName = 'NXBR Docs';
  const keywords = [
    'N Developments', 'N Developments Docs',
    'Nyambura', 'Nyambura Docs',
    'NXBR', 'NXBR Docs',
    'Nexbur', 'Nexbur Docs',
    'FiveM', 'FiveM scripts', 'FiveM resources',
    'RedM', 'RedM scripts', 'RedM resources',
    'N Easy Sit', 'N Pause', 'N Tune', 'N Crosshair',
  ].join(', ');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    alternateName: ['N Developments', 'Nyambura', 'NXBR', 'Nexbur', 'N Developments Docs', 'Nyambura Docs', 'NXBR Docs', 'Nexbur Docs'],
    url: 'https://docs.nxbr.dev',
    description: "Documentation for NXBR's resources for FiveM/RedM",
  };

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="https://raw.githubusercontent.com/ONyambura/pictures/refs/heads/main/N%20Logos%20-%20Purple/transpared_ico.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="NXBR" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'NXBR Docs';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  main: ({ children }) => {
    return (
      <>
        {children}
        {/* 🔥 Inject globally at end of every page */}
        <DiscordWidget />
      </>
    );
  },
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://raw.githubusercontent.com/ONyambura/pictures/refs/heads/main/N%20Logos%20-%20Purple/long_logo_new.png" // Path relative to the public directory
        alt="N Developments"
        style={{ lineHeight: '38px', paddingLeft: '5px' }} // Adjust size as needed
      />
    </div>
  ),
  chat: {
    link: 'https://discord.nxbr.dev',
  },
  footer: {
    text: '2026 © NXBR Studios - All Rights Reserved. We are not affiliated with Rockstar Games',
  },
  search: {
    component: <Search />,
  },
  head: useHead,
  primaryHue: { dark: 200, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,

  },
  toc: {
    backToTop: true,
    // extraContent: () => (
    //   <div
    //     style={{
    //       marginTop: "1.5rem",
    //       padding: "1rem",
    //       borderRadius: "16px",
    //       background:
    //         "linear-gradient(145deg, var(--nextra-bg-soft), var(--nextra-bg))",
    //       border: "1px solid var(--nextra-border)",
    //       boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
    //       backdropFilter: "blur(12px)",
    //       transition: "all 0.3s ease",
    //       overflow: "hidden",
    //     }}
    //     className="discord-widget-card"
    //   >
    //     {/* Header */}
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         gap: "8px",
    //         marginBottom: "0.75rem",
    //       }}
    //     >
    //       <img
    //         src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
    //         alt="Discord"
    //         width="22"
    //         height="22"
    //         style={{
    //           opacity: 0.9,
    //           filter: "drop-shadow(0 0 4px rgba(88,101,242,0.5))",
    //         }}
    //       />
    //       <span
    //         style={{
    //           fontSize: "0.95rem",
    //           fontWeight: 700,
    //           opacity: 0.9,
    //         }}
    //       >
    //         Join Our Discord
    //       </span>
    //     </div>

    //     {/* Iframe */}
    //     <iframe
    //       src="https://discord.com/widget?id=685925212142829779&theme=dark"
    //       width="100%"
    //       height="420"
    //       style={{
    //         border: "none",
    //         borderRadius: "12px",
    //         boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
    //         transition: "transform 0.25s ease",
    //       }}
    //       className="discord-iframe"
    //       frameBorder="0"
    //       allowTransparency={true}
    //       sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    //     />
    //   </div>
    // )
  },
  feedback: { content: null },
  editLink: { component: null },
  useNextSeoProps: useNextSeoProps,
  
};

export default config;
