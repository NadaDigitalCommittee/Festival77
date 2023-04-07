import type { PageServerLoad } from './$types';
import client from '$lib/server/contentful';

export const load = (async () => {
  const data = await client.getEntries({
    content_type: 'goods',
    select: 'fields',
    order: 'sys.createdAt',
  });

  const assets = data.includes.Asset as {
    sys: {
      id: string;
    };
    fields: {
      title: string;
      file: {
        url: string;
      };
    };
  }[];

  const items = data.items.map((item) => {
    const fields = item.fields as {
      name: string;
      description?: string;
      price: number;
      plannedByStudents: boolean,
      image?: {
        sys: {
          id: string;
        };
      };
    };

    const image = assets.find((asset) => asset.sys.id === fields.image?.sys.id)?.fields;

    return {
      name: fields.name,
      description: fields.description,
      price: fields.price,
      plannedByStudents: fields.plannedByStudents,
      image,
    };
  });

  return {
    items,
  };
}) satisfies PageServerLoad;
