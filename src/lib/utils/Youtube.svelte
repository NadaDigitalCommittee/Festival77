<iframe class={iframeStyle} src="https://www.youtube.com/embed/{id}" title="第77回文化祭 「Splash!」 テーマ発表PV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

<script lang="ts">
  import { propResponsive, type responsiveSize } from '$lib/styles/utils';
  import { css } from '@emotion/css';

  export let width: responsiveSize = '560px';
  export let id = '';

  const iframeStyle = css`
    aspect-ratio: 16 / 9;
    ${propResponsive('width', width)}
  `;
</script>
