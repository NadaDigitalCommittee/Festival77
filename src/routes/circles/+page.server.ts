import type { PageServerLoad } from './$types';
import client from '$lib/server/contentful';

export const load = (async () => {
  const data = await client.getEntries({
    content_type: 'circles',
    select: 'fields',
  });
  const items = data.items.map((item) => {
    const fields = item.fields as {
      name: string;
      description: string;
      area: string;
      tags: string[];
      areaname: string;
      haslongdesc: boolean
    };

    const tables:{[key:string]:number} = {
      高校棟1F: -2,
      中学棟2F: 0,
      高校棟2F: 1,
      西ゾーン2F: 2,
      中学棟3F: 3,
      高校棟3F: 4,
      西ゾーン3F: 5,
      中学棟4F: 6,
      高校棟4F: 7,
      西ゾーン4F: 8,
      研修館1F: 9,
      研修館2F: 10,
      研修館3F: 11,
      第1グラウンド: 12,
      テニスコート: 13,
      その他: 14,
    };
    return {
      name: fields.name,
      description: fields.description,
      area: fields.area,
      tags: fields.tags,
      areaId: tables[fields.areaname],
      selected: false,
      selected2: false,
      selected3: false,
      searchFalse: false,
      haslongdesc: fields.haslongdesc,
    };
  });
  return {
    items,
  };
}) satisfies PageServerLoad;
