<div class={headStyle}>
  <p class={titleStyle}>{item.title}</p>
  <div class={dateStyle}>{format(item.date, 'yyyy.MM.dd')}</div>
</div>
<div class={descriptionStyle}>{item.description}</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import {
    colors, responsive,
  } from '$lib/styles/utils';
  import { format } from 'date-fns';
  import type { NewsItem } from '$lib/news/types';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
  const item = data as NewsItem;

  const headStyle = css`

    ${responsive(`
      width: 936px;
      margin-left: calc(50% - 468px);
      border-bottom: 4px solid ${colors.gray};
      padding: 35px 0;
      margin-top: 70px;
      margin-bottom: 75px;
    `, `
      width: calc(100% - 56px);
      margin-left: 28px;
      border-bottom: 3px solid ${colors.gray};
      padding: 12px 0;
      margin-top: 30px;
      margin-bottom: 20px;
    `)}
  `;

  const titleStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    color: ${colors.black};
    margin-bottom: 10px;

    ${responsive(`
      font-weight: 900;
      font-size: 1.5rem;
    `, `
      font-weight: 900;
      font-size: 1.125rem;
      margin-bottom: 10px;
    `)}
  `;

  const dateStyle = css`
    position: relative;
    font-family: "Noto Sans JP", sans-sefif;
    color: ${colors.gray};
    padding: 3px 10px;

    ${responsive(`
      font-weight: 700;
      font-size: 1rem;
    `, `
      font-weight: 900;
      font-size: 0.7rem;

    `)}

    &::after {
      content: "";
      position: absolute;
      background-color: ${colors.gray};
      top: 0;
      left: 0;
      height: 100%;

      ${responsive(`
        width: 3px;
      `, `
        width: 2px;
      `)}
    }
  `;

  const descriptionStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 400;
    line-height: 1.5ch;
    margin-bottom: 100px;

    ${responsive(`
      width: 784px;
      margin-left: calc(50% - 392px);
      font-size: 1rem;
    `, `
      width: calc(100% - 60px);
      margin-left: 32px;
      font-size: 0.9rem;
    `)}
  `;
</script>
