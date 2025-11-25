import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Search from '@components/Search';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs.nxbr.dev${asPath}`;
  const description = frontMatter.description || "Documentation for NXBR's resources for FiveM/RedM";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="https://raw.githubusercontent.com/ONyambura/pictures/refs/heads/main/N%20Logos%20-%20Purple/transpared_ico.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
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
  logo: (
    <div
      style={{
        paddingLeft: '210px',
        lineHeight: '38px',
        background: "url('https://raw.githubusercontent.com/ONyambura/pictures/refs/heads/main/N%20Logos%20-%20Purple/long_logo_new.png') no-repeat left",
        backgroundSize: '200px',
        fontWeight: 550,
      }}
    >
      Docs
    </div>
  ),
  // project: {
  //   link: 'https://github.com/NXBR/docs',
  // },
  chat: {
    link: 'https://discord.nxbr.dev',
  },
  // docsRepositoryBase: 'https://github.com/NXBR/docs/blob/main',
  footer: {
    text: '2025 © NXBR Studios - All Rights Reserved. We are not affiliated with Rockstar Games',
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
  },

  useNextSeoProps: useNextSeoProps,
};

export default config;
