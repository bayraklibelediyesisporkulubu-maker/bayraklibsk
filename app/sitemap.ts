import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bayraklibsk.org';
  const currentDate = new Date();

  const mainRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'always', priority: 1.0 },
    { url: `${baseUrl}/kurumsal/vizyon-misyon`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/kurumsal/yonetim`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branslar`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/iletisim`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const bransSlugs = [
    'atletizm', 'badminton', 'basketbol', 'gures', 'futbol', 
    'karate', 'kick-boks', 'muay-thai', 'taekwondo', 'voleybol', 
    'hentbol', 'tenis', 'masa-tenisi', 'yuzme'
  ];

  const bransRoutes: MetadataRoute.Sitemap = bransSlugs.map((slug) => ({
    url: `${baseUrl}/branslar/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...mainRoutes, ...bransRoutes];
}