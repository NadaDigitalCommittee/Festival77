<div class={containerStyle}>
  <div class={titleStyle}><Title>NEWS</Title></div>
  <ul class={listStyle}>
    {#each news as item }
      <li class={itemStyle}>
        <div class={dateStyle}>{format(item.date, 'yyyy.MM.dd')}</div>
        <p class={contentStyle}>{item.content}</p>
        <a href={item.url} class={buttonStyle}>
          <span/>
          <span/>
          <span/>
        </a>
      </li>
    {/each}
  </ul>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import Title from '$lib/utils/Title.svelte';
  import { colors } from '$lib/styles/utils';
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

  const titleStyle = css`
    margin: 70px;
  `;

  const listStyle = css`
    background-color: ${colors.lightgray};
    opacity: 85%;
    width: 100%;

    li:first-child {
      border-top: 2px solid ${colors.navy};
    }

    li {
      border-bottom: 2px solid ${colors.navy};
    }
  `;

  const itemStyle = css`
    display: flex;
    align-items: center;
    padding: 26px 80px;
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
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
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
