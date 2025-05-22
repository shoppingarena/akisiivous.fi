/** @type {import('next-sitemap').IConfig} */
export default {
    siteUrl: process.env.SITE_URL || 'https://akisiivous.fi',
    generateRobotsTxt: true, // (optional)
    changefreq: 'weekly',
    // ...other options
};

// version 1
///** @type {import('next-sitemap').IConfig} */
//const config = {
//   siteUrl: process.env.SITE_URL || 'https://example.com',
//    generateRobotsTxt: true, // (optional)
// ...other options
//};

//export default config;