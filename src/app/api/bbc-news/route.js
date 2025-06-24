import Parser from 'rss-parser';

const parser = new Parser();

export async function GET(req) {
  try {
    const feed = await parser.parseURL('https://feeds.bbci.co.uk/news/world/rss.xml');
    return new Response(JSON.stringify({ items: feed.items }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch news.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 