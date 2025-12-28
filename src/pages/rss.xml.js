import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteData from '../data/site.json';

export async function GET(context) {
    const posts = await getCollection('posts');
    return rss({
        title: siteData.siteName,
        description: siteData.siteDescription,
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.id}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
