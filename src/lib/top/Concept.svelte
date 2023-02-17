<div class={containerStyle}>
  <Title>CONCEPT</Title>
  <p class={contentStyle}>{content}</p>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import { colors } from '$lib/styles/utils';
  import Title from '$lib/utils/Title.svelte';

  const content = 'ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ';

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 60px;
    background-color: ${colors.white};
    opacity: 85%;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
  `;

  const contentStyle = css`
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-size: 0.9375rem;
    font-weight: 900;
    line-height: 200%;
    text-align: center;
    margin: 50px 100px 0;
  `;
</script>
