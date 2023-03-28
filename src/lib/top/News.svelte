<div class={containerStyle}>
  <div class={titleStyle}><Title size={['4rem', '3rem']}>NEWS</Title></div>
  <ul class={listStyle}>
    <li class={dummyItemStyle}/>
    {#each news as item }
      <li class={pcItemStyle}>
        <div class={dateStyle}>{format(item.date, 'yyyy.MM.dd')}</div>
        <p class={contentStyle}>{item.content}</p>
        <a href={item.url} class={buttonStyle}>
          <span/>
          <span/>
          <span/>
        </a>
      </li>
      <li class={mobileOnlyStyle}>
        <a href={item.url} class={mobileItemStyle}>
          <div class={dateStyle}>{format(item.date, 'MM.dd')}</div>
          <p class={contentStyle}>{item.content}</p>
        </a>
      </li>
    {/each}
  </ul>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import Title from '$lib/utils/Title.svelte';
  import {
    colors, mobileOnly, pcOnly, responsive,
  } from '$lib/styles/utils';
  import { format } from 'date-fns';

  const news = [
    { date: new Date('2023-04-09'), content: 'ホームページを公開しました', url: 'https://fest.nada-sc.jp/2023/' },
    { date: new Date('2023-04-09'), content: 'ホームページを公開しました', url: 'https://fest.nada-sc.jp/2023/' },
    { date: new Date('2023-04-09'), content: 'ホームページを公開しました', url: 'https://fest.nada-sc.jp/2023/' },
  ];

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `;

  const titleStyle = css(responsive(`
    margin: 70px;
  `, `
    margin: 45px;
  `));

  const listStyle = css`
    ${responsive(`
      opacity: 85%;
    `, '')}
    width: 100%;

    li {
      border-bottom: 2px solid ${colors.navy};
    }
  `;

  const dummyItemStyle = css`
    background-color: ${colors.navy};
    height: 2px;
    width: 100%;
  `;

  const pcItemStyle = css(pcOnly(`
    display: flex;
    background-color: ${colors.lightgray};
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
    background-color: ${colors.navy};
    padding: 6px 18px;
    border-radius: 30px;
  `;

  const contentStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-size: 1rem;
    font-weight: 900;
    color: ${colors.navy};
    margin-left: 40px;
    margin-right: auto;
  `;

  const buttonStyle = css`
    position: relative;
    width: 60px;
    height: 60px;
    border: 2px solid ${colors.navy};
    border-radius: 30px;
    transition: background-color 0.4s ease;

    span {
      position: absolute;
      background-color: ${colors.navy};
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
      background-color: ${colors.navy};

      span {
        background-color: ${colors.white};
      }
    }
  `;
</script>
