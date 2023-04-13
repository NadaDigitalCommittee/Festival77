import type { PageServerLoad } from './$types';
import client from '$lib/server/contentful';

export const load = (async () => {
  const data = await client.getEntries({
    content_type: 'circles',
    select: 'fields',
    order: 'sys.createdAt',
  });
  const items = data.items.map((item) => {
    const fields = item.fields as {
      name: string;
      description?: string;
      area: string;
      areaId: number;
    };

    return {
      name: fields.name,
      description: fields.description,
      area: fields.area,
      areaId: fields.areaId,
    };
  });
  return {
    items,
  };
}) satisfies PageServerLoad;
