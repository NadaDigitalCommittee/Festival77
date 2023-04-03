import type { PageServerLoad } from './$types';
import client from '$lib/server/contentful';

export const ssr = true;

export const load = (async () => {
  const data = await client.getEntries({
    content_type: 'goods',
    select: 'fields',
    order: 'sys.createdAt',
  });

  return data;
}) satisfies PageServerLoad;
