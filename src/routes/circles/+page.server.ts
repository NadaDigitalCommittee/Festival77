import type { PageServerLoad } from './$types';
import client from '$lib/server/contentful';

export const load = (async () => {
  const data = await client.getEntries({
    content_type: 'circles',
    select: 'fields',
  });
  type relation = {
    sys:{
      id:string;
    };
  };
  const items = data.items.map((item) => {
    const fields = item.fields as {
      name: string;
      description: string;
      area: string;
      tags?: string[];
      areaname: string;
      allbooks?:relation[];
      movies?:relation[];
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
      テニスコート: 14,
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
      booksid: fields.allbooks,
      moviesid: fields.movies,
      bookselected: false,
      movieselected: false,
    };
  });

  const data2 = await client.getEntries({
    content_type: 'books',
    select: 'fields',
  });

  const assets = data2.includes.Asset as {
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

  const books = data2.items.map((item) => {
    const fields = item.fields as{
      title:string;
      thumbnail: {
        sys: {
          id: string;
        };
      };
      link:string;
    };
    const syss = item.sys as{
      id: string;
    };
    const image = assets.find((asset) => asset.sys.id === fields.thumbnail?.sys.id)?.fields;
    return {
      id: syss.id,
      title: fields.title,
      link: fields.link,
      image,
    };
  });
  type bookdatadict ={[key:string]:{
    title:string;
    link:string;
    image?:{
      title:string;
      file:{
        url:string;
      };
    };
  }};
  const dict:bookdatadict = {};
  for (let i = 0; i < books.length; i += 1) {
    dict[books[i].id] = {
      title: books[i].title,
      link: books[i].link,
    };
    if (typeof books[i].image !== 'undefined') {
      dict[books[i].id].image = books[i].image;
    }
  }
  const data3 = await client.getEntries({
    content_type: 'youtube',
    select: 'fields',
  });
  const movies = data3.items.map((item) => {
    const fields = item.fields as {
      title:string;
      youtubeId:string;
    };
    const syss = item.sys as {
      id:string;
    };
    return {
      id: syss.id,
      title: fields.title,
      youtubeId: fields.youtubeId,
    };
  });
  type youtubedatadict = {[key:string]:{
    title:string;
    youtubeId:string;
  }};
  const youtubedict :youtubedatadict = {};
  for (let i = 0; i < movies.length; i += 1) {
    youtubedict[movies[i].id] = {
      title: movies[i].title,
      youtubeId: movies[i].youtubeId,
    };
  }
  return {
    items, dict, youtubedict,
  };
}) satisfies PageServerLoad;
