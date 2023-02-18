<div class={containerStyle}>
  <div class={titleStyle}><Title>INFORMATION</Title></div>
  <div class={twoColumnsStyle}>
    <div class={abstractStyle}>
      <Subtitle>開催要項</Subtitle>
      <div class={dateStyle}>
        <Date counter={1} date="2023/05/02" />
        <Date counter={2} date="2023/05/03" />
      </div>
      <div class={timeStyle}>
        <img src="{base}/img/assets/time.svg" alt="時間">
        <p>9:00-15:30</p>
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
  <Subtitle size="2.25rem">SNS</Subtitle>
  <p class={checkStyle}>最新情報をチェック！</p>
  <div class={socialsStyle}>
    {#each socials as social}
      <Logo style="social/black/{social}" hover="social/color/{social}" size="2.5rem"></Logo>
    {/each}
  </div>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import { base } from '$app/paths';
  import { colors } from '$lib/styles/utils';
  import Date from './Date.svelte';
  import Location from './Location.svelte';
  import Title from '$lib/utils/Title.svelte';
  import Logo from '$lib/utils/Logo.svelte';
  import Subtitle from '$lib/utils/Subtitle.svelte';

  const socials = [
    'twitter',
    'instagram',
    'facebook',
    'youtube',
    'line',
  ];

  const titleStyle = css`
    margin-bottom: 25px;
  `;

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 100px 160px;
    background-color: ${colors.white};
    opacity: 85%;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 120px;
  `;

  const twoColumnsStyle = css`
    display: flex;
    width: 100%;
    justify-content: space-between;
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
  `;

  const timeStyle = css`
    display: flex;
    gap: 12px;
    margin-left: 15px;

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
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-weight: 900;
    font-size: 1.25rem;
    margin-top: 30px;
    margin-bottom: 16px;
  `;

  const accessTableStyle = css`
    position: relative;
    height: max-content;
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
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

  const checkStyle = css`
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-weight: 900;
    font-size: 1rem;
    margin: 35px auto 30px 40px;
    align-self: start;
  `;

  const socialsStyle = css`
    display: flex;
    height: max-content;
    align-items: center;
    gap: 4rem;
  `;
</script>
