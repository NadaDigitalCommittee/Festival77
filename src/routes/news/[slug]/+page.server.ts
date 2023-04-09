import type { PageServerLoad } from './$types';
import client from '$lib/server/contentful';

export const load = (async ({ params }) => {
  const data = await client.getEntry(params.slug, {
    select: 'sys.id,fields',
  });

  const item = data as {
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
    id: item.sys.id,
    title: item.fields.title,
    date: new Date(item.fields.date),
    description: item.fields.description,
  };
}) satisfies PageServerLoad;
