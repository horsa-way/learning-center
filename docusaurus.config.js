// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Horsa Way - Learning Center',
    tagline: 'A comprehensive hub for educational resources, tutorials, and documentation',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://horsa-way.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/learning-center/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'horsa-way', // Usually your GitHub org/user name.
    projectName: 'learning-center', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'it',
        locales: ['it'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/horsa-social-card.png',
            navbar: {
                title: 'Horsa Way',
                logo: {
                    alt: 'Horsa Way Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {
                        href: 'https://github.com/horsa-way/learning-center',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/company/horsa/',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/horsa-way/',
                            }
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Microsoft Learn',
                                href: 'https://learn.microsoft.com/it-it/training/browse/',
                            },
                            {
                                label: 'Horsa',
                                href: 'https://www.horsa.com/it/it',
                            },
                            {
                                label: 'Blog Horsa Way',
                                href: 'https://blog.horsaway.it/',
                            }
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Horsa Way srl, Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ['al'],
            },
        }),
};

export default config;
