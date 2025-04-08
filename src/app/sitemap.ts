import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com//blogs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com//about-us',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/services/mobile-app-development',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/services/web-app-development',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/services/uiux-web-design',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/services/machine-learning-ai',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/services/Ecommerce',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/portfolio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}