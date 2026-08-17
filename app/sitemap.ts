import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://maulimogal.com'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: post.metadata.link
      ? `${baseUrl}${post.metadata.link}`
      : `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
