import { useEffect } from 'react';
import { Location } from 'react-router-dom';

const SITE_URL = 'https://www.scottcl.com';
const DEFAULT_TITLE = 'Scott Lewis | Senior Full Stack Developer';
const DEFAULT_DESCRIPTION = 'Scott Lewis is a senior full stack developer specializing in React, .NET, cloud architecture, and product engineering for modern web applications.';

type PageMetadata = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
};

function setMetaTag(attributes: Record<string, string>): void {
  const { name, property, content } = attributes;
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    if (name) {
      element.setAttribute('name', name);
    }
    if (property) {
      element.setAttribute('property', property);
    }
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setJsonLd(schema: Record<string, unknown>) {
  let script = document.head.querySelector('script[data-app-schema="true"]') as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.setAttribute('data-app-schema', 'true');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
}

export function getPageMetadata(pathname: string): PageMetadata {
  switch (pathname) {
    case '/portfolio':
      return {
        title: 'Portfolio & Projects',
        description: 'Explore Scott Lewis’s portfolio of full stack projects, software engineering work, and product builds across web, cloud, and developer tooling.',
        keywords: 'Scott Lewis portfolio, software projects, React portfolio, .NET projects, cloud applications, developer portfolio',
        image: '/android-chrome-512x512.png',
      };
    case '/resume':
      return {
        title: 'Resume',
        description: 'View Scott Lewis’s resume for full stack development, architecture, leadership, and cloud engineering experience.',
        keywords: 'Scott Lewis resume, full stack developer resume, software engineering experience, .NET developer CV, cloud architect experience',
        image: '/android-chrome-512x512.png',
      };
    case '/about':
      return {
        title: 'About',
        description: 'Learn more about Scott Lewis, a senior full stack developer with experience in software architecture, mentoring, and delivering modern digital products.',
        keywords: 'About Scott Lewis, senior full stack developer, software engineering leader, mentoring, team leadership',
        image: '/android-chrome-512x512.png',
      };
    case '/contact':
      return {
        title: 'Contact',
        description: 'Contact Scott Lewis to discuss software engineering, product development, and technical leadership opportunities.',
        keywords: 'Contact Scott Lewis, software engineering opportunities, full stack developer hire, contact developer',
        image: '/android-chrome-512x512.png',
      };
    case '/home':
    case '/':
    default:
      return {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        keywords: 'Scott Lewis, senior full stack developer, React developer, .NET developer, cloud engineer, portfolio, software engineering',
        image: '/android-chrome-512x512.png',
      };
  }
}

export function usePageMetadata(pathname: string) {
  useEffect(() => {
    const meta = getPageMetadata(pathname);
    const fullTitle = meta.title ? `${meta.title} | Scott Lewis` : DEFAULT_TITLE;
    const description = meta.description || DEFAULT_DESCRIPTION;
    const canonicalUrl = new URL(pathname === '/' ? '' : pathname, SITE_URL).toString();
    const imageUrl = new URL(meta.image || '/android-chrome-512x512.png', SITE_URL).toString();

    document.title = fullTitle;
    document.documentElement.lang = 'en';

    setMetaTag({ name: 'description', content: description });
    setMetaTag({ name: 'keywords', content: meta.keywords || '' });
    setMetaTag({ name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' });
    setMetaTag({ name: 'author', content: 'Scott Lewis' });
    setMetaTag({ name: 'canonical', content: canonicalUrl });
    setMetaTag({ property: 'og:type', content: 'website' });
    setMetaTag({ property: 'og:title', content: fullTitle });
    setMetaTag({ property: 'og:description', content: description });
    setMetaTag({ property: 'og:url', content: canonicalUrl });
    setMetaTag({ property: 'og:image', content: imageUrl });
    setMetaTag({ property: 'og:site_name', content: 'Scott Lewis' });
    setMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
    setMetaTag({ name: 'twitter:title', content: fullTitle });
    setMetaTag({ name: 'twitter:description', content: description });
    setMetaTag({ name: 'twitter:image', content: imageUrl });
    setMetaTag({ name: 'theme-color', content: '#1a89bc' });

    const canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonicalLink) {
      canonicalLink.href = canonicalUrl;
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': pathname === '/contact' ? 'ContactPage' : pathname === '/resume' ? 'ProfilePage' : 'WebSite',
      name: 'Scott Lewis',
      url: SITE_URL,
      description,
      inLanguage: 'en-US',
      author: {
        '@type': 'Person',
        name: 'Scott Lewis',
        url: SITE_URL,
        sameAs: [
          'https://www.linkedin.com/in/sclewis1',
          'https://github.com/scottcl88',
        ],
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/portfolio?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });
  }, [pathname]);
}

export function useCanonicalUrl(location: Location) {
  return new URL(location.pathname, SITE_URL).toString();
}
