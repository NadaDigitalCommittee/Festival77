import type { PageServerLoad } from './$types';
import client from '$lib/server/contentful';

export const load = (async () => {
  const data = await client.getEntries({
    content_type: 'stage',
    select: 'fields',
  });

  const items = data.items.map((item) => {
    const fields = item.fields as {
      name: string;
      place: string;
      start: string;
      end: string;
    };

    return {
      name: fields.name,
      place: fields.place,
      start: new Date(fields.start),
      end: new Date(fields.end),
    };
  });

  return {
    items,
  };
}) satisfies PageServerLoad;
