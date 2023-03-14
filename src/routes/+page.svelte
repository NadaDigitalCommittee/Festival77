<div class={containerStyle}>
  <News/>
  <Concept/>
  <Youtube width={['60rem', '100%']} id="1dKc96P4zuU"/>
  <Information/>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import News from '$lib/top/News.svelte';
  import Concept from '$lib/top/Concept.svelte';
  import Information from '$lib/top/Information.svelte';
  import Youtube from '$lib/utils/Youtube.svelte';
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
</script>
