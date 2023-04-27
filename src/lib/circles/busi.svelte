<div class={all}
  on:mouseenter={() => { mouseon = true; }}
  on:mouseleave={() => { mouseon = false; }}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class={midasi} 
    on:click={() => { selected = !selected; }}>
      <div class="{unselectedStyle} {mouseon ? selectedStyle : '' }"/>
      <img src="{base}/img/assets/busi.svg" alt="">
      <p>部誌</p>
      <div class={selected ? arrowStyle2 : arrowStyle}>
        <span class={mouseon ? spanStyle : spanStyle2}/>
        <span class={mouseon ? spanStyle : spanStyle2}/>
      </div>
    </div>
    {#if selected}
    {#each id as eachbook,i}
      <a class="{each} {i % 2 === 1 ? backdark : backblack}" href="{books[eachbook.sys.id].link}" target="_blank">
        <img src={books[eachbook.sys.id].image.file.url} alt="部誌のサムネイル画像">
        <p>{books[eachbook.sys.id].title}</p>
      </a>
    {/each}
    {/if}
</div>

<script lang="ts">
  import { base } from '$app/paths';
  import { css } from '@emotion/css';
  import {
    colors, responsive,
  } from '$lib/styles/utils';
  
  type relation = {
    sys:{
      id:string;
    };
  };
  type bookdata ={
    [key:string]:
        {
            title:string;
            link:string;
            image:
            {
                title:string;
                file:{
                    url:string;
                };
            };
        }
    };
  
  export let id:relation[];
  export let books:bookdata;

  const backdark = css`
  background-color:#F0F0F0;
  `;
  const backblack = css`
  background-color:#DBDBDB;
  `;
  const all = css`
  width:100%;
  `;
  const midasi = css`
    display:flex;
    font-family: "Noto Sans JP";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 23px;
    height:80px;
    width:100%;
    align-items: center;
    width: 100%;
    background-color: #f0f0f0;
    padding-right:4%;
    img{
      ${responsive('', 'width:5%;')}
      margin-right:4%;
      margin-left:6%;
    }
    p{
      width:80%;
    }
  `;
  const each = css`
    font-family: "Noto Sans JP";
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 23px;
  align-items: center;
  display:flex;
  height:80px;
  a{
  align-items: center;
    display:flex;
  }
  img{
    height:54px;
    margin-right:15px;
    margin-left:30px;
  }
  `;

  const selectedStyle = css`
    width:2%;
    height: 100%;
    background-color:#0D3A4F;
    transition: 0.6s;
    `;
  const unselectedStyle = css`
    width:2%;
    height: 100%;
    transition: 0.6s;
    `;
  const arrowStyle = css`
    position: relative;
    transform: rotate(-45deg);
    transition: 0.6s;
    ${responsive(`
      width: 17px;
      height: 17px;
    `, `
      width: 15px;
      height: 15px;
      margin-top:5px;
    `)}

    span {
      position: absolute;
      border-radius: 9999px;
      background-color: ${colors.gray};
      bottom: 0;
      right: 0;
    }

    span:nth-child(1) {
      height: 3px;
      width: 100%;
    };

    span:nth-child(2) {
      height: 100%;
      width: 3px;
    };
  `;
  const arrowStyle2 = css`
    position: relative;
    transform: rotate(45deg);
    
    transition: 0.6s;
    ${responsive(`
      width: 17px;
      height: 17px;
    `, `
      width: 15px;
      height: 15px;
      margin-top:5px;
    `)}

    span {
      position: absolute;
      border-radius: 9999px;
      background-color: ${colors.gray};
      bottom: 0;
      right: 0;
    }

    span:nth-child(1) {
      height: 3px;
      width: 100%;
    };

    span:nth-child(2) {
      height: 100%;
      width: 3px;
    };
  `; const spanStyle = css`
    :nth-child(1){
    background-color: #0d3a4f;
    
    transition: 0.6s;
    }
    :nth-child(2){
    background-color: #0d3a4f;
    
    transition: 0.6s;
    }`;
  const spanStyle2 = css`
    :nth-child(1){
    transition: 0.6s;
    }
    :nth-child(2){
    transition: 0.6s;
    }`;
  let selected = false;
  let mouseon = false;
</script>