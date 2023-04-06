<MakeHead description="2023年5月2日・5月3日に開催される第77回灘校文化祭「Splash!」の公式ウェブサイトです。" />
<div class={containerStyle}>
  <News/>
  <Concept/>
  <div class={youtubeStyle}>
    <Youtube width="100%" id="1dKc96P4zuU"/>
  </div>
  <Information/>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import News from '$lib/top/News.svelte';
  import Concept from '$lib/top/Concept.svelte';
  import Information from '$lib/top/Information.svelte';
  import Youtube from '$lib/utils/Youtube.svelte';
  import MakeHead from '$lib/utils/MakeHead.svelte';
  import { responsive } from '$lib/styles/utils';

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${responsive(`
      width: 60rem;
      gap: 120px;
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
