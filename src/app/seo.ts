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
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  switch (normalizedPath) {
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
    const fullTitle = !meta.title || meta.title === DEFAULT_TITLE
      ? DEFAULT_TITLE
      : `${meta.title} | Scott Lewis`;
    const description = meta.description || DEFAULT_DESCRIPTION;
    const normalizedPath = pathname.replace(/\/+$/, '');
    const canonicalUrl = new URL(normalizedPath, SITE_URL).toString();
    const imageUrl = new URL(meta.image || '/og-image.png', SITE_URL).toString();

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
    setMetaTag({ property: 'og:locale', content: 'en_US' });
    setMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
    setMetaTag({ name: 'twitter:title', content: fullTitle });
    setMetaTag({ name: 'twitter:description', content: description });
    setMetaTag({ name: 'twitter:image', content: imageUrl });
    setMetaTag({ name: 'twitter:site', content: '@scottcl88' });
    setMetaTag({ name: 'twitter:creator', content: '@scottcl88' });
    setMetaTag({ name: 'theme-color', content: '#1a89bc' });
    setMetaTag({ name: 'application-name', content: 'Scott Lewis Portfolio' });

    const canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonicalLink) {
      canonicalLink.href = canonicalUrl;
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Scott Lewis',
      jobTitle: 'Senior Full Stack Developer',
      description,
      url: SITE_URL,
      sameAs: [
        'https://www.linkedin.com/in/sclewis1',
        'https://github.com/scottcl88',
      ],
      email: 'mailto:scottcl@outlook.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      knowsAbout: [
        'React',
        '.NET',
        'Full Stack Development',
        'Cloud Architecture',
        'Software Engineering',
        'Product Engineering',
      ],
    };

    const pageSchema = normalizedPath === '/contact'
      ? {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Scott Lewis',
          url: `${SITE_URL}/contact`,
          description,
          about: personSchema,
          mainEntity: personSchema,
          image: `${SITE_URL}/og-image.png`,
        }
      : normalizedPath === '/resume'
        ? {
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            name: 'Scott Lewis Resume',
            url: `${SITE_URL}/resume`,
            description,
            about: personSchema,
            mainEntity: personSchema,
            image: `${SITE_URL}/og-image.png`,
          }
        : {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Scott Lewis',
            url: SITE_URL,
            description,
            inLanguage: 'en-US',
            author: personSchema,
            image: `${SITE_URL}/og-image.png`,
          };

    setJsonLd(pageSchema);
  }, [pathname]);
}

export function useCanonicalUrl(location: Location) {
  return new URL(location.pathname, SITE_URL).toString();
}
