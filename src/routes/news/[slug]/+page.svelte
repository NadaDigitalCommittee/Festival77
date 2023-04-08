<div class={headStyle}>
  <p class={titleStyle}>{item.title}</p>
  <div class={dateStyle}>{format(item.date, 'yyyy.MM.dd')}</div>
</div>
<div class={descriptionStyle}>
  <div class={markdownStyle}>
    <SvelteMarkdown source={item.description} />
  </div>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import {
    colors, responsive,
  } from '$lib/styles/utils';
  import { format } from 'date-fns';
  import type { NewsItem } from '$lib/news/types';
  import type { PageServerData } from './$types';
  import SvelteMarkdown from 'svelte-markdown';

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

  const markdownStyle = css`
    h1 {
      margin-top: 1em;
      margin-bottom: 0.67em;
      font-weight: bolder;
      padding-bottom: 0.5em;
      padding-left: 0.1em;
      font-size: 2em;
      line-height: 1.2em;
      border-bottom: 2px solid ${colors.gray};
    }

    h2 {
      margin-top: 1em;
      margin-right: 16px;
      margin-bottom: 0.67em;
      font-weight: bolder;
      padding-bottom: 0.4em;
      padding-left: 0.1em;
      font-size: 1.5em;
      line-height: 1.2em;
      border-bottom: 2px solid ${colors.gray};
    }

    h3 {
      margin-top: 1em;
      margin-bottom: 0.67em;
      padding-left: 0.1em;
      font-weight: bolder;
      font-size: 1.25em;
      line-height: 1.2em;
    }

    h4 {
      margin-top: 1em;
      margin-bottom: 0.67em;
      padding-left: 0.1em;
      font-weight: bolder;
      font-size: 1em;
      line-height: 1.2em;
    }

    h5 {
      margin-top: 1em;
      margin-bottom: 0.67em;
      padding-left: 0.1em;
      font-weight: bolder;
      font-size: 0.875em;
      line-height: 1.2em;
    }

    h6 {
      margin-top: 1em;
      margin-bottom: 0.67em;
      padding-left: 0.1em;
      font-weight: bolder;
      font-size: 0.8em;
      line-height: 1.2em;
    }

    p {
      line-height: 1.5em;
      margin-bottom: 10px;
    }

    blockquote {
      padding-left: 1em;
      margin-left: 5px;
      border-left: 3px solid ${colors.gray2};
      color: ${colors.gray};
    }

    ul {
      list-style-type: disc;
      margin-left: 1.4em;
      margin-bottom: 10px;
    }

    ol {
      list-style-type: decimal;
      margin-left: 1.2em;
      margin-bottom: 10px;
    }

    hr {
      border-top: 2px solid ${colors.gray};
      margin: 15px;
    }

    a {
      color: #1558D6;

      &:hover {
        text-decoration: underline;
      }

      &:visited {
        color: #551A8B;
      }
    }

    img {
      display: block;
      width: 240px;
      margin: 20px calc(50% - 120px);
    }
  `;
</script>
