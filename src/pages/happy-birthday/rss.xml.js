import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const long_form = await getCollection("birthday");
    return rss({
        stylesheet: '/rss/rss.xsl',
        title: 'Uplove Vintage      ',
        description: 'recycle. Upcycle. Relove. Uplove.',
        site: context.site,
        items: long_form.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/happy-birthday/${post.slug}/`,
            content: sanitizeHtml(parser.render(post.body)),
            ...post.data,
        })),
        customData: `<language>en-us</language>`,
    });
}