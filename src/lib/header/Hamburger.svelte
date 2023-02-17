<div class={buttonStyle}>
  <span/>
  <span/>
  <span/>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import { colors } from '$lib/styles/utils';

  const buttonStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: calc(1.5rem + 20px);
    height: calc(1.5rem + 20px);
    padding: 10px;

    span {
      display: block;
      height: 3px;
      width: 100%;
      background-color: ${colors.black};
    }
  `;
</script>
