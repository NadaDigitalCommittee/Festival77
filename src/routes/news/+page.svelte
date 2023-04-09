<MakeHead name="ニュース" description="第77回灘校文化祭「Splash!」に関するニュースの一覧です。"/>
<div class={containerStyle}>
  <div class={titleStyle}><Title size={['4rem', '3rem']}>NEWS</Title></div>
  <ul class={listStyle}>
    {#each list as item }
      <li>
        <a href="{base}/news/{item.id}" class={itemStyle}>
          <div class={itemMainStyle}>
            <p class={contentStyle}>{item.title}</p>
            <div class={dateStyle}>{format(item.date, 'yyyy.MM.dd')}</div>
          </div>
          <div class={arrowStyle}>
            <span/>
            <span/>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import Title from '$lib/utils/Title.svelte';
  import MakeHead from '$lib/utils/MakeHead.svelte';
  import {
    colors, responsive,
  } from '$lib/styles/utils';
  import { format } from 'date-fns';
  import { base } from '$app/paths';
  import type { NewsItem } from '$lib/news/types';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
  const list = data.items as NewsItem[];

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    ${responsive(`
      width: 960px;
      margin-left: calc(50% - 480px);
    `, `
      width: 100%;
    `)}
  `;

  const titleStyle = css(responsive(`
    margin: 70px;
  `, `
    margin: 45px;
  `));

  const listStyle = css`
    width: 100%;

    ${responsive(`
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    `, '')}

    li:nth-child(odd) {
      background-color: ${colors.white};
    }

    li:nth-child(even) {
      background-color: #F1F1F1;
    }
  `;

  const itemStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    ${responsive(`
      padding: 27px 65px 27px 60px;
    `, `
      padding: 15px 40px 15px 30px;
    `)}
  `;

  const itemMainStyle = css`
    ${responsive(`
      width: 540px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `, '')}
  `;

  const contentStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    color: ${colors.black};

    ${responsive(`
      font-weight: 700;
      font-size: 1.25rem;
    `, `
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 10px;
    `)}
  `;

  const dateStyle = css`
    font-family: "Noto Sans JP", sans-sefif;
    color: ${colors.gray};

    ${responsive(`
      font-weight: 700;
      font-size: 1rem;
    `, `
      position: relative;
      font-weight: 900;
      font-size: 0.7rem;
      padding: 3px 10px;

      &::after {
        content: "";
        position: absolute;
        background-color: ${colors.gray};
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
      }
    `)}

  `;

  const arrowStyle = css`
    position: relative;
    transform: rotate(-45deg);

    ${responsive(`
      width: 17px;
      height: 17px;
    `, `
      width: 15px;
      height: 15px;
    `)}

    span {
      position: absolute;
      border-radius: 9999px;
      background-color: ${colors.gray};
      bottom: 0;
      right: 0;
    }

    span:nth-child(1) {
      height: 3px;
      width: 100%;
    };

    span:nth-child(2) {
      height: 100%;
      width: 3px;
    };
  `;
</script>
