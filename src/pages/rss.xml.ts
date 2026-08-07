import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "@/data/config";

export async function GET() {
  const posts = await getCollection("posts");
  const published = posts
    .filter((post) => post.data.isPublish && !post.data.isDraft)
    .sort(
      (a, b) =>
        b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
    );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    items: published.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/posts/${post.id}/`,
    })),
  });
}
