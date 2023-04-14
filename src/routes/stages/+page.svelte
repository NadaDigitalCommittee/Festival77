<MakeHead name="ステージ" description="第77回灘校文化祭「Splash!」のステージ企画の一覧です。" />
<div class={titleStyle}><Title size={['4rem', '3rem']}>STAGES</Title></div>
<div class={containerStyle}>
  <div class={daysStyle}>
    {#each [1, 2] as d}
      <label class={dayStyle}>
        <input style="display: none" type="radio" bind:group={day} value={d} checked={d === 1 || null}>
        Day {d}
      </label>
    {/each}
  </div>
  <div class={mainStyle}>
    <div class={placesStyle}>
      {#each places as p}
        <label class={placeStyle}>
          <input style="display: none" type="radio" bind:group={place} value={p} checked={p === '中庭' || null}>
          {p}
        </label>
      {/each}
    </div>
    {day}, {place}
  </div>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import MakeHead from '$lib/utils/MakeHead.svelte';
  import Title from '$lib/utils/Title.svelte';
  import { colors, responsive } from '$lib/styles/utils';

  let day = 1;
  let place = '中庭';
  const places = [
    '中庭',
    '視聴覚室',
    '大講義室',
    '本館',
    '体育館',
  ];

  const titleStyle = css`
    text-align: center;

    ${responsive(`
    `, `
      margin: 35px 0;
    `)}
  `;

  const containerStyle = css`
    position: relative;
    z-index: 1;
    width: 100%;
  `;

  const daysStyle = css`
    display: flex;
  `;

  const dayStyle = css`
    width: 100%;
    padding: 20px 0;
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px 15px 0 0;

    &:has(input:checked) {
      position: relative;
      background-color: ${colors.white};
      color: ${colors.black};

      &::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        height: 15px;
        width: 100%;
        background-color: ${colors.white};
        z-index: 3;
      }
    }

    &:has(input:not(:checked)) {
      background-color: #E8E8E8;
      color: #999999;
    }
  `;

  const placesStyle = css`
    position: relative;
    display: flex;
    padding-bottom: 8px;
    margin-bottom: 40px;

    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: #FF5454;
    }
  `;

  const placeStyle = css`
    width: 100%;
    padding: 15px 0 10px;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
    font-size: 1rem;
    text-align: center;
    border-radius: 8px 8px 0 0;

    &:has(input:checked) {
      background-color: #FF5454;
      color: ${colors.white};
    }

    &:has(input:not(:checked)) {
      background-color: #999999;
      color: ${colors.white};
    }
  `;

  const mainStyle = css`
    position: relative;
    padding: 10px 0 50px;
    z-index: 2;
    background-color: ${colors.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  `;
</script>
