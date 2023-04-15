import type { PageServerLoad } from './$types';
import client from '$lib/server/contentful';

export const load = (async () => {
  const data = await client.getEntries({
    content_type: 'circles',
    select: 'fields',
    order: 'fields.areaId',
  });
  const items = data.items.map((item) => {
    const fields = item.fields as {
      name: string;
      description?: string;
      area: string;
      areaId: number;
      circleId: number;
    };

    return {
      name: fields.name,
      description: fields.description,
      area: fields.area,
      areaId: fields.areaId,
      circleId: fields.circleId,
      selected: false,
      selected2: false,
      selected3: false,
    };
  });
  return {
    items,
  };
}) satisfies PageServerLoad;
