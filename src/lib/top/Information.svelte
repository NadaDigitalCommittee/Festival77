<div class={containerStyle}>
  <div class={titleStyle}><Title>INFORMATION</Title></div>
  <Subtitle>開催要項</Subtitle>
  <div class={abstractStyle}>
    <Date counter={1} date="2023/05/02" />
    <Date counter={2} date="2023/05/03" />
    <table class={timeAndThemeStyle}>
      <tr>
        <th>TIME</th>
        <td>9:00-15:30</td>
      </tr>
      <tr>
        <th>THEME</th>
        <td>Splash!</td>
      </tr>
    </table>
  </div>
  <Subtitle>アクセス</Subtitle>
  <div class={accessStyle}>
    <div>
      <p class={placeStyle}>灘中学校・灘高等学校</p>
      <Location ref="https://goo.gl/maps/RrZ6PnrQehs73WnV9">兵庫県神戸市東灘区魚崎北町8-5-1</Location>
    </div>
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
  <Subtitle>SNS</Subtitle>
  <p class={checkStyle}>最新情報をチェック！</p>
  <div class={socialsStyle}>
    {#each socials as social}
      <Logo style="social/black/{social}" hover="social/color/{social}" size="2.5rem"></Logo>
    {/each}
  </div>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
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
    gap: 50px;
    width: 100%;
    padding: 100px 160px 120px;
    background-color: ${colors.white};
    opacity: 85%;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 120px;
  `;

  const abstractStyle = css`
    display: flex;
    margin-bottom: 75px;
    gap: 40px;
  `;

  const timeAndThemeStyle = css`
    height: max-content;
    font-family: futura-pt, sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    border-collapse: separate;
    border-spacing: 16px;
    margin: -16px;
    color: ${colors.black};

    th {
      color: ${colors.gray};
    }
  `;

  const accessStyle = css`
    display: flex;
    margin-bottom: 25px;
    margin-right: -80px;
    gap: 96px;
  `;

  const placeStyle = css`
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    margin-top: 10px;
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
    margin: -15px -10px;

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
    margin: -20px auto 0 40px;
    align-self: start;
  `;

  const socialsStyle = css`
    display: flex;
    height: max-content;
    align-items: center;
    gap: 4rem;
  `;
</script>
