import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  keywords?: string[];
  author?: string;
  schema?: object; // New prop for JSON-LD Structured Data
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80', 
  type = 'website',
  keywords = ['CodeAlpha', 'Internship', 'Coding', 'Programming', 'Education', 'Tech Careers'],
  author = 'CodeAlpha',
  schema
}) => {
  const location = useLocation();
  const url = window.location.origin + window.location.pathname + location.search;
  const siteTitle = `${title} | CodeAlpha`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = siteTitle;

    // 2. Helper to update/create meta tags
    const updateMetaTag = (attribute: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper to update/create link tags (Canonical)
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // --- Standard Meta Tags ---
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords.join(', '));
    updateMetaTag('name', 'author', author);
    updateMetaTag('name', 'robots', 'index, follow'); // Explicitly tell bots to index

    // --- Open Graph (Social Media) ---
    updateMetaTag('property', 'og:title', siteTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:url', url);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:site_name', 'CodeAlpha');
    updateMetaTag('property', 'og:locale', 'en_US');

    // --- Twitter Cards ---
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', siteTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image);
    updateMetaTag('name', 'twitter:creator', '@CodeAlphaOfficial');

    // --- Canonical URL (Crucial for SEO to avoid duplicate content) ---
    updateLinkTag('canonical', url);

    // --- Structured Data (JSON-LD) ---
    if (schema) {
      let script = document.querySelector('#structured-data');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('id', 'structured-data');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else {
      // Cleanup if no schema provided for this page
      const script = document.querySelector('#structured-data');
      if (script) script.remove();
    }

  }, [title, description, image, type, url, siteTitle, keywords, author, schema]);

  return null;
};

export default SEO;