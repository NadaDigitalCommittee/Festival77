<iframe class={iframeStyle} src="https://www.youtube.com/embed/{id}" title="第77回文化祭 「Splash!」 テーマ発表PV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

<script lang="ts">
  import { propResponsive, responsiveMap, type responsiveSize } from '$lib/styles/utils';
  import { css } from '@emotion/css';
  import { math } from 'polished';

  export let width: responsiveSize = '560px';
  export let height = responsiveMap(width, (size: string) => math(`(${size} / 16) * 9`));
  export let id = '';

  const iframeStyle = css`
    ${propResponsive('width', width)}
    ${propResponsive('height', height)}
  `;
</script>
