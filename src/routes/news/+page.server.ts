import type { PageServerLoad } from './$types';
import client from '$lib/server/contentful';

export const load = (async () => {
  const data = await client.getEntries({
    content_type: 'news',
    select: 'sys.id,fields',
    order: '-fields.date',
  });

  const items = data.items.map((item) => {
    const i = item as {
      sys: {
        id: string;
      };
      fields: {
        title: string;
        date: string;
        description: string;
      };
    };

    return {
      id: i.sys.id,
      title: i.fields.title,
      date: new Date(i.fields.date),
      description: i.fields.description,
    };
  });

  return {
    items,
  };
}) satisfies PageServerLoad;
