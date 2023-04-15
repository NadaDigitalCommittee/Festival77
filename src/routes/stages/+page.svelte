<MakeHead name="ステージ" description="第77回灘校文化祭「Splash!」のステージ企画の一覧です。" />
<div class={titleStyle}><Title size={['4rem', '3rem']}>STAGES</Title></div>
<div class={containerStyle}>
  <div class={daysStyle}>
    {#each [1, 2] as d}
      <label class={dayStyle}>
        <input style="display: none" type="radio" bind:group={day} value={d} checked="{d === 1}">
        Day {d}
      </label>
    {/each}
  </div>
  <div class={mainStyle}>
    <div class={placesStyle}>
      {#each places as p}
        <label class={placeStyle}>
          <input style="display: none" type="radio" bind:group={place} value={p} checked={p === '中庭'}>
          {p}
        </label>
      {/each}
    </div>
    <div class={timeTableStyle}>
      {#each timestamps as t, i}
        <div style="--top-height: {i * 6}rem" class={horLineStyle} />
        <div style="--top-height: {i * 6}rem" class={timeStampStyle}>
          {#if t.getMinutes() === 0}
            <span class={hourStyle}>{format(t, 'H')}</span>
          {/if}
          {format(t, 'mm')}
        </div>
      {/each}
      {#each events as e}
        {#if e.place === place
          && e.start.getDate() === days[day - 1].getDate()
          && e.end.getDate() === days[day - 1].getDate()
        }
          <div style={eventSize(e)} class={eventStyle}>
            <div class={nameStyle}>
              {#if e.beforeSubtitle }
                <p class={subtitleStyle}>{e.beforeSubtitle}</p>
              {/if}
              <p>{e.name}</p>
              {#if e.afterSubtitle }
                <p class={subtitleStyle}>{e.afterSubtitle}</p>
              {/if}
            </div>
            <div class={timeStyle}>
              <p>{format(e.start, 'H:mm')}-{format(e.end, 'H:mm')}</p>
            </div>
          </div>
        {/if}
      {/each}
      <div class={vertLineStyle} />
    </div>
  </div>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import { format } from 'date-fns';
  import MakeHead from '$lib/utils/MakeHead.svelte';
  import Title from '$lib/utils/Title.svelte';
  import { colors, responsive } from '$lib/styles/utils';
  import type { PageServerData } from './$types';

  type EventItem = {
    name: string;
    beforeSubtitle?: string;
    afterSubtitle?: string;
    place: string;
    start: Date;
    end: Date;
  };

  export let data: PageServerData;
  const events = data.items as EventItem[];

  let day = 1;
  let place = '中庭';
  const days = [
    new Date('2023-05-02T09:00:00+09:00'),
    new Date('2023-05-03T09:00:00+09:00'),
  ];
  const places = [
    '中庭',
    '視聴覚室',
    '大講義室',
    '本館',
    '体育館',
  ];

  const timestamps = new Array(13).fill(30).map((v, i) => {
    const t = new Date('1970-01-01T09:00:00+09:00');
    t.setMinutes(t.getMinutes() + v * i);
    return t;
  });

  const eventSize = (e: EventItem) => {
    const start = (e.start.getTime() - days[day - 1].getTime()) / 300000;
    const span = (e.end.getTime() - e.start.getTime()) / 300000;
    return `--top: ${start}rem; --height: ${span}rem;`;
  };

  const titleStyle = css`
    text-align: center;

    ${responsive(`
      margin: 55px 0;
    `, `
      margin: 35px 0;
    `)}
  `;

  const containerStyle = css`
    position: relative;
    z-index: 1;
    ${responsive(`
      width: 920px;
      margin-left: calc(50% - 460px);
      margin-bottom: 100px;
    `, `
      width: 100%;
    `)}
  `;

  const daysStyle = css`
    display: flex;
  `;

  const dayStyle = css`
    width: 100%;
    padding: 20px 0;
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    text-align: center;

    ${responsive(`
      font-size: 3rem;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
      border-radius: 45px 45px 0 0;
    `, `
      font-size: 2rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      border-radius: 15px 15px 0 0;
    `)}

    &:has(input:checked) {
      position: relative;
      background-color: ${colors.white};
      color: ${colors.black};

      &::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        height: 20px;
        width: 100%;
        background-color: ${colors.white};
        z-index: 3;
      }
    }

    &:has(input:not(:checked)) {
      background-color: #E8E8E8;
      color: #999999;

      ${responsive(`
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
          background-color: ${colors.black};
          color: ${colors.white};
        }
      `, '')}
    }
  `;

  const mainStyle = css`
    position: relative;
    padding: 10px 0 50px;
    z-index: 2;
    background-color: ${colors.white};
    ${responsive(`
      padding: 15px 0 75px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
    `, `
      padding: 10px 0 50px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    `)}
  `;

  const placesStyle = css`
    position: relative;
    display: flex;
    margin-bottom: 40px;

    ${responsive(`
      padding-bottom: 16px;
    `, `
      padding-bottom: 8px;
    `)}

    &::after {
      position: absolute;
      display: block;
      content: "";
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #FF5454;
      z-index: 4;

      ${responsive(`
        height: 16px;
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
      `, `
        height: 8px;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
      `)}
    }
  `;

  const placeStyle = css`
    width: 100%;
    position: relative;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
    text-align: center;

    ${responsive(`
      padding: 20px 0 18px;
      font-size: 1.5rem;
      border-radius: 16px 16px 0 0;
    `, `
      padding: 15px 0 10px;
      font-size: 1rem;
      border-radius: 8px 8px 0 0;
    `)}

    &:has(input:checked) {
      background-color: #FF5454;
      color: ${colors.white};

      ${responsive(`
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
      `, `
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
      `)}

      &::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #FF5454;
        z-index: 5;

        ${responsive(`
          height: 18px;
        `, `
          height: 10px;
        `)}
      }
    }

    &:has(input:not(:checked)) {
      background-color: #999999;
      color: ${colors.white};

      ${responsive(`
        transition: background-color 0.3s ease;
        &:hover {
          background-color: #000000;
        }
      `, '')}
    }
  `;

  const timeTableStyle = css`
    position: relative;
    height: calc(72rem + 65px);

    ${responsive(`
      width: calc(100% - 210px);
      margin-left: 90px;
    `, `
      width: calc(100% - 30px);
    `)}
  `;

  const vertLineStyle = css`
    position: absolute;
    top: 0;
    height: 100%;
    background-color: ${colors.black};

    ${responsive(`
      left: calc(6rem + 14px);
      width: 3px;
    `, `
      left: calc(4.5rem + 14px);
      width: 2px;
    `)}
  `;

  const horLineStyle = css`
    position: absolute;
    top: calc(var(--top-height) + 35px);
    height: 1px;
    background-color: #9B9B9B;

    ${responsive(`
      left: calc(6rem + 14px);
      width: calc(100% - 6rem - 14px);
    `, `
      left: calc(4.5rem + 14px);
      width: calc(100% - 4.5rem - 14px);
    `)}
  `;

  const timeStampStyle = css`
    position: absolute;
    bottom: calc(100% - var(--top-height) - 35px - 0.5em);
    margin-right: 12px;
    line-height: 1em;
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    text-align: right;

    ${responsive(`
      font-size: 1.5rem;
      right: calc(100% - 6rem - 14px);
    `, `
      font-size: 1rem;
      right: calc(100% - 4.5rem - 14px);
    `)}
  `;

  const hourStyle = css`
    font-size: 1.5rem;
    margin-right: 2px;

    ${responsive(`
      font-size: 2.5rem;
    `, `
      font-size: 1.5rem;
    `)}
  `;

  const eventStyle = css`
    position: absolute;
    display: flex;
    top: calc(var(--top) + 35px);
    height: var(--height);
    background-color: ${colors.white};
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);

    ${responsive(`
      left: calc(6rem + 14px);
      width: calc(100% - 6rem - 14px);
    `, `
      left: calc(4.5rem + 14px);
      width: calc(100% - 4.5rem - 14px);
    `)}
  `;

  const nameStyle = css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 60%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: ${colors.black};

    ${responsive(`
      font-size: 1.25rem;
    `, `
      font-size: 1rem;
    `)}
  `;

  const timeStyle = css`
    display: flex;
    width: 40%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #8D8D8D;
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: ${colors.white};

    ${responsive(`
      font-size: 1.5rem;
    `, `
      font-size: 1rem;
    `)}
  `;

  const subtitleStyle = css`
    ${responsive(`
      font-size: 0.8rem;
    `, `
      font-size: 0.64rem;
    `)}
  `;
</script>
