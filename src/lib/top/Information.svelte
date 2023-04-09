<div class={containerStyle}>
  <div class={titleStyle}><Title size={['4rem', '3rem']}>INFORMATION</Title></div>
  <div class={twoColumnsStyle}>
    <div class={abstractStyle}>
      <Subtitle>開催要項</Subtitle>
      <div class={dateStyle}>
        <Date counter={1} date="2023/05/02" />
        <Date counter={2} date="2023/05/03" />
      </div>
      <div class={timeStyle}>
        <img src="{base}/img/assets/time.svg" alt="時間">
        <p>9:00-15:00</p>
      </div>
    </div>
    <div class={accessStyle}>
      <Subtitle>アクセス</Subtitle>
      <p class={placeStyle}>灘中学校・灘高等学校</p>
      <Location ref="https://goo.gl/maps/RrZ6PnrQehs73WnV9">兵庫県神戸市東灘区魚崎北町8-5-1</Location>
      <table class={accessTableStyle}>
        <tr>
          <th>JR住吉駅</th>
          <td>徒歩10分</td>
        </tr>
        <tr>
          <th>阪神魚崎駅</th>
          <td>徒歩10分</td>
        </tr>
        <tr>
          <th>阪急岡本駅</th>
          <td>徒歩25分</td>
        </tr>
      </table>
    </div>
  </div>
  <div class={snsStyle}>
    <Subtitle size="2.25rem">SNS</Subtitle>
    <p class={checkStyle}>最新情報をチェック！</p>
    <div class={socialsStyle}>
      {#each socials as social}
        <a href={social.url}>
          <Logo
            style="social/black/{social.name}"
            hover="social/color/{social.name}"
            size={['2.5rem', '2rem']}
          />
        </a>
      {/each}
    </div>
  </div>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import { base } from '$app/paths';
  import { colors, responsive } from '$lib/styles/utils';
  import Date from './Date.svelte';
  import Location from './Location.svelte';
  import Title from '$lib/utils/Title.svelte';
  import Logo from '$lib/utils/Logo.svelte';
  import Subtitle from '$lib/utils/Subtitle.svelte';
  import { socials } from '$lib/utils/data';

  const titleStyle = css`
    margin-bottom: 25px;
    align-self: center;
  `;

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    ${responsive(`
      align-items: center;
      padding: 100px 160px;
      background-color: ${colors.white};
      box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
      border-radius: 120px;
      width: 100%;
    `, `
      padding: 0 15%;
      gap: 75px;
    `)}
  `;

  const twoColumnsStyle = css`
    ${responsive(`
      display: flex;
      width: 100%;
      justify-content: space-between;
    `, `
      display: contents;
    `)}
    margin-top: 50px;
    margin-bottom: 40px;
  `;

  const abstractStyle = css`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;

  const dateStyle = css`
    display: flex;
    gap: 15px;
    ${responsive('', `
      width: 100%;
      margin: 0 30%;
      align-self: center;
      justify-content: space-evenly;
    `)}
  `;

  const timeStyle = css`
    display: flex;
    gap: 12px;
    ${responsive(`
      margin-left: 15px;
    `, '')}

    p {
      font-family: futura-pt, sans-serif;
      font-size: 1.25rem;
      font-weight: 600;
      color: ${colors.black};
    }
  `;

  const accessStyle = css`
    display: flex;
    flex-direction: column;
  `;

  const placeStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
    font-size: 1.25rem;
    margin-top: 30px;
    margin-bottom: 16px;
  `;

  const accessTableStyle = css`
    position: relative;
    ${responsive('', `
      width: max-content;
    `)}
    height: max-content;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
    font-size: 1rem;
    color: ${colors.gray};
    border-collapse: separate;
    border-spacing: 35px 20px;
    margin: 5px -10px -15px;

    &::after {
      content: "";
      position: absolute;
      background-color: ${colors.black};
      top: 10px;
      left: 15px;
      height: calc(100% - 40px);
      width: 5px;
    }

    td {
      vertical-align: middle;
    }

    th {
      font-size: 1.25rem;
      color: ${colors.black};
    }
  `;

  const snsStyle = css(responsive(`
    display: contents;
  `, `
  `));

  const checkStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
    font-size: 1rem;
    ${responsive(`
      margin: 35px auto 30px 40px;
      align-self: start;
    `, `
      margin: 20px 0;
    `)}
  `;

  const socialsStyle = css`
    display: flex;
    height: max-content;
    align-items: center;
    ${responsive(`
      gap: 4rem;
    `, `
      width: 100%;
      gap: 1.5rem;
      justify-content: space-evenly;
    `)}
  `;
</script>
