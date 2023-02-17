<div class={containerStyle}>
  <p class={counterStyle}><span>DAY</span> {counter}</p>
  <p class={weakStyle}>{format(dateObject, 'yyyy')}</p>
  <p>
    {format(dateObject, 'MM.dd')}<span class={weakStyle}>{format(dateObject, 'eee').toLowerCase()}</span>
  </p>
</div>

<script lang="ts">
  import { colors } from '$lib/styles/utils';
  import { css } from '@emotion/css';
  import { format } from 'date-fns';

  export let counter = 1;
  export let date = '2023/05/02';
  const dateObject = new Date(date);

  const containerStyle = css`
    font-family: futura-pt, sans-serif;
    font-weight: 600;
    color: ${colors.black};
    font-size: 2.25rem;
    border-left: 5px solid ${colors.black};
    padding: 5px 15px;
    line-height: 1.2ch;
  `;

  const counterStyle = css`
    position: relative;
    margin-bottom: 20px;

    span {
      color: ${colors.gray};
      font-size: 1.5rem;
    }

    &:after {
      content: "";
      position: absolute;
      background-color: ${colors.black};
      top: 1.5ch;
      left: 0;
      width: 40px;
      height: 3px;
    }
  `;

  const weakStyle = css`
    color: ${colors.gray};
    font-size: 1.25rem;
  `;
</script>
