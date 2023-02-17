<div class={containerStyle}>
  <News/>
  <Concept/>
  <Youtube width="60rem" id="1dKc96P4zuU"/>
  <Information/>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import News from '$lib/top/News.svelte';
  import Concept from '$lib/top/Concept.svelte';
  import Information from '$lib/top/Information.svelte';
  import Youtube from '$lib/utils/Youtube.svelte';

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    width: 60rem;
    gap: 120px;
    margin: 0 auto 100px;
  `;
</script>
