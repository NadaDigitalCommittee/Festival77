<MakeHead name="サークル" description="第77回灘校文化祭「Splash!」に出展するクラブ・サークルの一覧です。部誌や動画も公開しています。(準備中)" />
<div class={containerStyle}>
  <div class={titleStyle}><Title size={['4rem', '3rem']}>CIRCLES</Title></div>
  <div class={searchBoxStyle}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img src="{base}/img/assets/search.svg" alt="" on:click={runSearch} class={searchBoxImageStyle}>
  <input bind:value={inputtext} placeholder="検索" class={textinputStyle}>
  </div>
    {#each areaDatas as areaData}
    <h2 class={headStyle}>{areaData.a}</h2>
    <ul class={listStyle}>
      {#each items.filter((i)=>(i.areaId>=areaData.b && i.areaId< areaData.c)) as item }
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="{liStyle} {item.selected2? liStyle2 : '' }" on:mouseenter={()=>{item.selected=true;}} on:mouseleave={()=>{item.selected=false;}} id={item.circleId} on:click={()=>{
          if(item.selected2){
            item.selected2 = false;
            item.selected3 = false;
          }else{
            item.selected2 = true;
            setTimeout(()=>{item.selected3 = item.selected2&&true;},800);
          }
          } }>
          <div class="{unselectedStyle} {item.selected? selectedStyle : '' }"/>
          <div class={boxStyle}>
          <div class={itemStyle} >
            <div class={itemMainStyle}>
              <p class={contentStyle}>{item.name}</p>
              {#if item.areaId >=9}
              <div class="{bigarea} {ken}">
                <p class={kousya}>
                  研修館
                </p>
              </div>
              {:else if item.areaId%3 ==0}
              <div class="{bigarea} {tyu}">
                <p class={kousya}>
                  中学棟
                </p>
              </div>
              {:else if item.areaId%3 ==1}
              <div class="{bigarea} {kou}" >
                <p class={kousya}>
                  高校棟
                </p>
              </div>
              {:else}
              <div class="{bigarea} {nisi}">
                <p class={kousya}>
                  西ゾーン
                </p>
              </div>
              {/if}
              <p class={dateStyle}>{item.area}</p>
            </div>
            <div class={item.selected2 ? arrowStyle2 :arrowStyle}>
              <span/>
              <span/>
            </div>
          </div>
          {#if item.selected3}
          <p class={descStyle}>{item.description}</p>
          {/if}
          </div>
        </li>
      {/each}
    </ul>
    {/each}
</div>
<script lang="ts">
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import Title from '$lib/utils/Title.svelte';
  import MakeHead from '$lib/utils/MakeHead.svelte';
  import { css, keyframes } from '@emotion/css';
  import { colors,mobileOnly, pcOnly, responsive } from '$lib/styles/utils';
  export let data: PageData;
  const items = data.items as Circle[];
  const areaDatas = [{a:"2F",b:0,c:3},{a:"3F",b:3,c:6},{a:"4F",b:6,c:9},{a:"研修館",b:9,c:12}];
  let inputtext:string = "";
  function runSearch(){
    //名前との完全一致検索 連続部分文字列のほうがいいなら言って
    let flag = false;
    for(let i=0; i < items.length ; i++ ){
      if(inputtext === items.at(i)?.name){
        location.href= "./circles#"+items.at(i)?.circleId;
        scrollBy(0,-125);
        flag=true;
      }
    }
    if(!flag){
      alert("検索失敗");
    }
  }

  type Circle = {
      name: string;
      description?: string;
      area: string;
      areaId: number;
      circleId: number;
      selected: boolean;
      selected2: boolean;
      selected3: boolean;
  };

    const searchBoxStyle = css`
    width:400px;
    height:66px;
    border-radius:9999px;
    background-color:white;
    margin-left:-500px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    padding: 20px 33px;
    `;
    const searchBoxImageStyle = css`
    width:25px;
    height:25px;
    `;
    const textinputStyle= css`
      height:auto;
      width:300px;
      color:#0D3A4F;
      font-size:1.25rem;
      font-family: 'Source Han Sans JP';
      font-style: normal;
      font-weight: 700;
      line-height: 29px;
    `;
    const descStyle = css`
    margin:0 10%;
    font-family: 'Source Han Sans JP';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 23px;
    `;
    const boxStyle = css`
    width:100%;
    `;
    const liStyle = css`
    display:flex;
    height:80px;
    transition: 0.6s;
    `;
    const liStyle2 = css`
    display:flex;
    height: 250px;
    transition: 0.6s;
    `;
    const selectedStyle = css`
    background-color:#0D3A4FFF;
    transition: 0.6s;
    `;
    const unselectedStyle = css`
    width:2%;
    height: 100%;
    transition: 0.6s;
    `;
    const bigarea = css`
    width: 11.5%;
    color:white;
    text-align:center;
    border-radius: 20px;
    `;
    const tyu = css`background-color: #EA616F;`;
    const kou = css`background-color: #008CCF;`;
    const nisi = css`background-color: #F5A21B;`;
    const ken = css`background-color: #C2D95C;`;
    const kousya = css`
    margin-top:6px;
    margin-bottom:4px;
    `;

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    ${responsive(`
      width: 960px;
      margin-left: calc(50% - 480px);
    `, `
      width: 100%;
    `)}
  `;
  
  const dateStyle = css`
    font-family: "Noto Sans JP", sans-sefif;
    color: ${colors.gray};
    margin-left:15%;
    ${responsive(`
      font-weight: 700;
      font-size: 1rem;
    `, `
      position: relative;
      font-weight: 900;
      font-size: 0.7rem;
      padding: 3px 10px;

      &::after {
        content: "";
        position: absolute;
        background-color: ${colors.gray};
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
      }
    `)}

  `;

  const itemStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin:auto 0;
    ${responsive(`
      padding: 27px 65px 27px 60px;
    `, `
      padding: 15px 40px 15px 30px;
    `)}
  `;
  const titleStyle = css(responsive(`
    margin: 70px;
  `, `
    margin: 45px;
  `));

  const headStyle = css`
    width:100%;
    padding-left:7.5%;
    font-family: futura-pt, heavy;
    font-weight: 700;
    font-size: 3rem;
    color: #000000;
    line-height: 77px;
  `;
  
  const listStyle = css`
    width: 100%;

    ${responsive(`
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    `, '')}

    li:nth-child(odd) {
      background-color: ${colors.white};
    }

    li:nth-child(even) {
      background-color: #F1F1F1;
    }
  `;
  const arrowStyle = css`
    position: relative;
    transform: rotate(-45deg);

    ${responsive(`
      width: 17px;
      height: 17px;
    `, `
      width: 15px;
      height: 15px;
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

    ${responsive(`
      width: 17px;
      height: 17px;
    `, `
      width: 15px;
      height: 15px;
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
  const itemMainStyle = css`
    ${responsive(`
      width: 100%;
      display: flex;
    `, '')}
  `;

  const contentStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    color: ${colors.black};
    width:40%;
    ${responsive(`
      font-weight: 700;
      font-size: 1.25rem;
    `, `
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 10px;
    `)}
  `;
</script>