const fs = require('fs');
const path = require('path');

const siteUrl = 'https://www.scottcl.com';
const routes = {
  about: {
    title: 'About',
    description: 'Learn more about Scott Lewis, a senior full stack developer with experience in software architecture, mentoring, and delivering modern digital products.',
    keywords: 'About Scott Lewis, senior full stack developer, software engineering leader, mentoring, team leadership',
  },
  portfolio: {
    title: 'Portfolio & Projects',
    description: 'Explore Scott Lewis’s portfolio of full stack projects, software engineering work, and product builds across web, cloud, and developer tooling.',
    keywords: 'Scott Lewis portfolio, software projects, React portfolio, .NET projects, cloud applications, developer portfolio',
  },
  resume: {
    title: 'Resume',
    description: 'View Scott Lewis’s resume for full stack development, architecture, leadership, and cloud engineering experience.',
    keywords: 'Scott Lewis resume, full stack developer resume, software engineering experience, .NET developer CV, cloud architect experience',
  },
  contact: {
    title: 'Contact',
    description: 'Contact Scott Lewis to discuss software engineering, product development, and technical leadership opportunities.',
    keywords: 'Contact Scott Lewis, software engineering opportunities, full stack developer hire, contact developer',
  },
};

function replaceMeta(html, attribute, value, content) {
  const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const matcher = new RegExp(`<meta(?=[^>]*\\b${attribute}=["']${escapedValue}["'])[^>]*>`);
  return html.replace(matcher, (tag) => tag.replace(/\bcontent=(["']).*?\1/, `content="${content}"`));
}

function replaceLink(html, rel, href) {
  const matcher = new RegExp(`<link(?=[^>]*\\brel=["']${rel}["'])[^>]*>`);
  return html.replace(matcher, (tag) => tag.replace(/\bhref=(["']).*?\1/, `href="${href}"`));
}

const template = fs.readFileSync(path.join(__dirname, '..', 'build', 'index.html'), 'utf8');

for (const [route, metadata] of Object.entries(routes)) {
  const routeUrl = `${siteUrl}/${route}`;
  const imageUrl = `${siteUrl}/android-chrome-512x512.png`;
  const title = `${metadata.title} | Scott Lewis`;
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/\b(href|src)=(["'])\.\/([^"']+)\2/g, '$1=$2/$3$2');

  html = replaceMeta(html, 'name', 'description', metadata.description);
  html = replaceMeta(html, 'name', 'keywords', metadata.keywords);
  html = replaceMeta(html, 'property', 'og:title', title);
  html = replaceMeta(html, 'property', 'og:description', metadata.description);
  html = replaceMeta(html, 'property', 'og:url', routeUrl);
  html = replaceMeta(html, 'property', 'og:image', imageUrl);
  html = replaceMeta(html, 'name', 'twitter:title', title);
  html = replaceMeta(html, 'name', 'twitter:description', metadata.description);
  html = replaceMeta(html, 'name', 'twitter:image', imageUrl);
  html = replaceLink(html, 'canonical', routeUrl);

  const routeDirectory = path.join(__dirname, '..', 'build', route);
  fs.mkdirSync(routeDirectory, { recursive: true });
  fs.writeFileSync(path.join(routeDirectory, 'index.html'), html);
}
