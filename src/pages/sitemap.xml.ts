import { getCollection } from "astro:content";
import { SITE_URL } from "../data/config";

export async function GET() {
  const siteUrl = SITE_URL;
  const posts = await getCollection("posts");
  const isPublishedPost = posts.filter(
    (post) => post.data.isPublish && !post.data.isDraft
  );

  const latestPostDate = isPublishedPost.length > 0
    ? isPublishedPost.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())[0].data.publishedAt.toISOString()
    : new Date().toISOString();

  const result = `
  <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${siteUrl}/</loc><lastmod>${latestPostDate}</lastmod></url>
    <url><loc>${siteUrl}/posts/</loc><lastmod>${latestPostDate}</lastmod></url>

    ${isPublishedPost
      .map((post) => {
        const lastMod = post.data.publishedAt.toISOString();
        return `<url><loc>${siteUrl}/posts/${post.id}/</loc><lastmod>${lastMod}</lastmod></url>`;
      })
      .join("\n")}  
  </urlset>  
  `.trim();

  return new Response(result, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
