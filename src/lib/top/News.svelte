<div class={containerStyle}>
  <div class={titleStyle}><Title size={['4rem', '3rem']}>NEWS</Title></div>
  <ul class={listStyle}>
    <li class={dummyItemStyle}/>
    {#each list as item }
      <li class={pcItemStyle}>
        <div class={dateStyle}>{format(item.date, 'yyyy.MM.dd')}</div>
        <p class={contentStyle}>{item.title}</p>
        <a href="{base}/news/{item.id}" class={buttonStyle}>
          <span/>
          <span/>
          <span/>
        </a>
      </li>
      <li class={mobileOnlyStyle}>
        <a href="{base}/news/{item.id}" class={mobileItemStyle}>
          <div class={dateStyle}>{format(item.date, 'MM.dd')}</div>
          <p class={contentStyle}>{item.title}</p>
        </a>
      </li>
    {/each}
  </ul>
  <a href="{base}/news" class={moreButtonStyle}>
    <p class={moreStyle}>MORE</p>
    <div class={moreArrowStyle}>
      <span/>
      <span/>
      <span/>
    </div>
  </a>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import Title from '$lib/utils/Title.svelte';
  import {
    colors, mobileOnly, pcOnly, responsive,
  } from '$lib/styles/utils';
  import { format } from 'date-fns';
  import { base } from '$app/paths';
  import type { NewsItem } from '$lib/news/types';

  export let list: NewsItem[];

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${responsive(`
      width: 100%;
    `, `
      width: calc(100% - 30px);
      margin-left: 15px;
    `)}
  `;

  const titleStyle = css(responsive(`
    margin: 70px;
  `, `
    margin: 45px;
  `));

  const listStyle = css`
    width: 100%;

    li {
      border-bottom: 2px solid ${colors.navy};
      ${responsive(`
        border-bottom: 2px solid ${colors.darkgray};
      `, `
        border-bottom: 1px solid ${colors.gray2};
      `)}
    }
  `;

  const dummyItemStyle = css`
    width: 100%;
    ${responsive(`
      height: 2px;
      background-color: ${colors.darkgray};
    `, `
      height: 1px;
      background-color: ${colors.gray2};
    `)}
  `;

  const pcItemStyle = css(pcOnly(`
    display: flex;
    align-items: center;
    padding: 26px 80px;
    width: 100%;
  `));

  const mobileOnlyStyle = css(mobileOnly(''));

  const mobileItemStyle = css`
    display: flex;
    align-items: center;
    padding: 15px;
    width: 100%;
  `;

  const dateStyle = css`
    font-family: futura-pt, sans-sefif;
    font-weight: 600;
    font-size: 0.9375rem;
    color: ${colors.white};
    ${responsive(`
      background-color: ${colors.darkgray};
    `, `
      background-color: ${colors.gray2};
    `)}
    padding: 6px 18px;
    border-radius: 30px;
  `;

  const contentStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-size: 1rem;
    font-weight: 900;
    color: ${colors.black};
    margin-left: 35px;
    margin-right: auto;
  `;

  const buttonStyle = css`
    position: relative;
    width: 60px;
    height: 60px;
    border: 2px solid ${colors.darkgray};
    border-radius: 30px;
    transition: background-color 0.4s ease;

    span {
      position: absolute;
      background-color: ${colors.darkgray};
      transform-origin: right bottom;
      transition: background-color 0.4s ease;
    }

    span:nth-child(1) {
      right: 16px;
      bottom: 27px;
      width: 24px;
      height: 2px;
    }

    span:nth-child(2) {
      right: 15px;
      bottom: 28.4px;
      width: 2px;
      height: 10px;
      transform-orifin: 1px bottom;
      transform: rotate(-45deg);
    }

    span:nth-child(3) {
      right: 13.5px;
      bottom: 27px;
      width: 2.8px;
      height: 2px;
      transform-orifin: right bottom;
      transform: skewX(45deg);
    }

    &:hover {
      background-color: ${colors.darkgray};

      span {
        background-color: ${colors.white};
      }
    }
  `;

  const moreButtonStyle = css`
    display: flex;
    align-self: flex-end;
    border-radius: 9999px;
    transition: border-color 0.4s ease, background-color 0.4s ease;

    ${responsive(`
      margin-top: 30px;
      margin-right: 80px;
      border: 3px solid ${colors.black};
      padding: 15px 40px;
      gap: 25px;
    `, `
      margin-top: 15px;
      margin-right: 15px;
      border: 2px solid ${colors.black};
      padding: 10px 20px;
      gap: 15px;
    `)}

    &:hover {
      background-color: ${colors.darkgray};
      border-color: ${colors.darkgray};

      p {
        color: ${colors.white};
      }

      div {
        span {
          background-color: ${colors.white};
        }
      }
    }
  `;

  const moreStyle = css`
    font-family: futura-pt, sans-serif;
    font-weight: 600;
    color: ${colors.black};
    transition: color 0.4s ease;

    ${responsive(`
      font-size: 1.5rem;
    `, `
      font-size: 1rem;
    `)}
  `;

  const moreArrowStyle = css`
    position: relative;

    span {
      position: absolute;
      background-color: ${colors.black};
      transform-origin: right bottom;
      transition: background-color 0.4s ease;
    }

    ${responsive(`
      width: 30px;
      height: 30px;

      span:nth-child(1) {
        right: 1px;
        bottom: 12px;
        width: 28px;
        height: 3px;
      }

      span:nth-child(2) {
        right: 0px;
        bottom: 14px;
        width: 3px;
        height: 12.5px;
        transform-orifin: 1px bottom;
        transform: rotate(-45deg);
      }

      span:nth-child(3) {
        right: -1.5px;
        bottom: 12px;
        width: 2.8px;
        height: 2px;
        transform-orifin: right bottom;
        transform: skewX(45deg);
      }
    `, `
      width: 20px;
      height: 20px;

      span:nth-child(1) {
        right: 1px;
        bottom: 8px;
        width: 16px;
        height: 2px;
      }

      span:nth-child(2) {
        right: 0px;
        bottom: 10px;
        width: 2px;
        height: 8px;
        transform-orifin: 1px bottom;
        transform: rotate(-45deg);
      }

      span:nth-child(3) {
        right: -1.5px;
        bottom: 8px;
        width: 2.8px;
        height: 2px;
        transform-orifin: right bottom;
        transform: skewX(45deg);
      }
    `)}

  `;
</script>
