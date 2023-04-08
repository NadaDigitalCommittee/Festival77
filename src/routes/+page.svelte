<MakeHead description="2023年5月2日・5月3日に開催される第77回灘校文化祭「Splash!」の公式ウェブサイトです。" />
<div style="--window-height: {height}px" class={pcAnimationStyle}><PcAnimation/></div>
<div style="--window-height: {height}px" class={mobileAnimationStyle}><MobileAnimation/></div>
<div class={containerStyle}>
  <News list={data.items}/>
  <Concept/>
  <div class={youtubeStyle}>
    <Youtube width="100%" id="1dKc96P4zuU"/>
  </div>
  <Information/>
</div>

<svelte:window bind:innerHeight={height} />

<script lang="ts">
  import { css } from '@emotion/css';
  import News from '$lib/top/News.svelte';
  import Concept from '$lib/top/Concept.svelte';
  import Information from '$lib/top/Information.svelte';
  import PcAnimation from '$lib/top/PcAnimation.svelte';
  import MobileAnimation from '$lib/top/MobileAnimation.svelte';
  import Youtube from '$lib/utils/Youtube.svelte';
  import MakeHead from '$lib/utils/MakeHead.svelte';
  import { mobileOnly, pcOnly, responsive } from '$lib/styles/utils';
  import type { PageServerData } from './$types';

  export let data: PageServerData;

  let height: number;

  const pcAnimationStyle = css(pcOnly(`
    width: 100%;
    height: calc(100vh );
    height: calc(var(--window-height));
  `));

  const mobileAnimationStyle = css(mobileOnly(`
    width: 100%;
    height: calc(100vh - 4.5rem);
  `));

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${responsive(`
      width: 60rem;
      gap: 80px;
    `, `
      gap: 60px;
    `)}
    margin: 0 auto 100px;
  `;

  const youtubeStyle = css`
    ${responsive(`
      background-color: rgba(96, 113, 125, 0.85);
      padding: 60px;
    `, `
      background-color: #F0F0F0;
      padding: 30px;
    `)}
  `;
</script>
