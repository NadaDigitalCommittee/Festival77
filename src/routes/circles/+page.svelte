<MakeHead name="サークル" description="第77回灘校文化祭「Splash!」に出展するクラブ・サークルの一覧です。部誌や動画も公開しています。(準備中)" />
<div class={containerStyle}>
  <div class={titleStyle}><Title size={['4rem', '3rem']}>CIRCLES</Title></div>
  <div class={searchBoxStyle}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img src="{base}/img/assets/search.svg" alt="" on:click={runSearch} class={searchBoxImageStyle}>
  <input bind:value={inputtext} placeholder="検索" class={textinputStyle} on:input={runSearch}>
  </div>
    {#each areaDatas as areaData}
    <div class={floor} >
    <h2 class={headStyle}>{areaData.a}</h2>
    <ul class={listStyle}>
      {#each items.filter((i) => (i.areaId >= areaData.b && i.areaId < areaData.c)) as item }
        {#if !item.searchFalse}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="
          {liStyle} 
          {item.selected2 ? liStyle2 : '' }" on:mouseenter={() => { item.selected = true; }} on:mouseleave={() => { item.selected = false; }}  >
          <div class="{unselectedStyle} {item.selected ? selectedStyle : '' }"/>
          <div class={boxStyle}>
          <div class={itemStyle} on:click={() => {
            if (item.selected2) {
              item.selected2 = false;
              item.selected3 = false;
            } else {
              item.selected2 = true;
              setTimeout(() => { item.selected3 = item.selected2 && true; }, 800);
            }
            } }>
            <div class={itemMainStyle}>
              <p class={contentStyle}>{item.name}</p>
              {#if (item.areaId <= 11) && (item.areaId >= 9)}
              <div class="{bigarea} {ken}">
                <p class={kousya}>
                  研修館
                </p>
              </div>
              {:else if item.areaId === 12}
              <div class="{bigarea} {wide1g}">
                <p class={kousya}>
                  第1グラウンド
                </p>
              </div>
              {:else if item.areaId === 14}
              <div class="{bigarea} {other}">
                <p class={kousya}>
                  その他
                </p>
              </div>
              {:else if ((item.areaId % 3) + 3) % 3 === 0}
              <div class="{bigarea} {tyu}">
                <p class={kousya}>
                  中学棟
                </p>
              </div>
              {:else if ((item.areaId % 3) + 3) % 3 === 1}
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
            <div class={item.selected2 ? arrowStyle2 : arrowStyle}>
              <span class={item.selected ? spanStyle : spanStyle2}/>
              <span class={item.selected ? spanStyle : spanStyle2}/>
            </div>
          </div>
          {#if item.selected2}
          <p class=" {descStyle} " >{item.description}</p>
          <!-- ここ、コンポーネント化して分離する -->
          {#if typeof item.booksid !== 'undefined'}
          <div class={insidebox}>
            <Busi id={item.booksid} books={books}/>
          </div>
          {/if}
          {#if typeof item.moviesid !== 'undefined'}
          <div class={insidebox}>
            <Movie id={item.moviesid} youtubes={youtubes} />
          </div>
          {/if}
          {/if}
          </div>
        </li>
        {/if}
      {/each}
    </ul>
    </div>
    {/each}
</div>

<svelte:window bind:innerWidth={screensize} />
<script lang="ts">
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import Title from '$lib/utils/Title.svelte';
  import MakeHead from '$lib/utils/MakeHead.svelte';
  import { css } from '@emotion/css';
  import {
    colors, responsive,
  } from '$lib/styles/utils';
  import { tick } from 'svelte';
  import Busi from '$lib/circles/busi.svelte';
  import Movie from '$lib/circles/movie.svelte';
  
  export let data: PageData;

  type relation = {
    sys:{
      id:string;
    };
  };
  type Circle = {
      name: string;
      description: string;
      area: string;
      areaId: number;
      tags?: string[];
      selected: boolean;
      selected2: boolean;
      selected3: boolean;
      searchFalse: boolean;
      booksid:relation[];
      moviesid:relation[];
  };
  type bookdata ={[key:string]:{title:string; link:string;image:{title:string;file:{url:string;};};}};
  type youtubedata = {[key:string]:{title:string;youtubeId:string;};};
  const youtubes = data.youtubedict as youtubedata;
  const books = data.dict as bookdata;
  const items = data.items as Circle[];
  let screensize = 0;
  items.sort((a:Circle, b:Circle) => a.areaId - b.areaId);
  const areaDatas = [{ a: '2F', b: 0, c: 3 }, { a: '3F', b: 3, c: 6 }, { a: '4F', b: 6, c: 9 }, { a: '研修館', b: 9, c: 12 }, { a: '第1グラウンド', b: 12, c: 13 }, { a: 'その他', b: 13, c: 15 }];
  let inputtext = '';
  async function runSearch() {
    console.log(items);
    console.log(books);
    for (let i = 0; i < items.length; i += 1) {
      let flag = false;
      flag = flag || (items[i].name.indexOf(inputtext) !== -1);
      flag = flag || (items[i].description.indexOf(inputtext) !== -1);
      flag = flag || (items[i].area.indexOf(inputtext) !== -1);
      if (typeof items[i].tags !== 'undefined') {
        for (let j = 0; j < items[i].tags.length; j += 1) {
          flag = flag || (items[i].tags[j].indexOf(inputtext) !== -1);
        }
      }
      items[i].searchFalse = !flag;
    }
    await tick();
  }

  const insidebox = css`
    margin:2% 10%;
    width:80%;
  `;

  const spanStyle = css`
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

  const floor = css`
    width:100%;
    ${responsive(`
      margin-top:50px;
      `, `
      margin-top:20px;
      `)}
    `;
  const searchBoxStyle = css`
    height:66px;
    border-radius:9999px;
    background-color:white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    padding: 20px 33px;
    ${responsive(`
      margin-left:-500px;
      width:400px;
      `, `
      width:80%;
      `)}
    `;
  const searchBoxImageStyle = css`
    width:25px;
    height:25px;
    `;
  const textinputStyle = css`
      height:auto;
      ${responsive(`
        width:285px;
        `, `
        width: calc( 100% - 50px );
        `)}
      margin-left:15px;
      font-size:1.25rem;
      font-family: "Noto Sans JP";
      font-style: normal;
      font-weight: 700;
      line-height: 29px;
      :focus{
        outline: none;
      }
    `;
  const descStyle = css`
    margin:0 10%;
    padding-top:20px;
    padding-bottom:30px;
    font-family: "Noto Sans JP";
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
    transition:all 0.6s;
    color:#000000FF;
    `;
    // ここ、後でfit-contentなりmax-contentなりを使う実装に直す...はずだった
  const liStyle2 = css`
    display:flex;
    overflow: hidden;
    height:fit-content;
    transition: 0.6s;
    `;

  const selectedStyle = css`
    width:2%;
    height: 80px;
    background-color:#0D3A4F;
    transition: 0.6s;
    `;
  const unselectedStyle = css`
    width:2%;
    height: 80px;
    transition: 0.6s;
    `;
  const bigarea = css`
    margin-top: -3px;
    color:white;
    text-align:center;
    border-radius: 20px;
    font-family:"Noto Sans JP";
    ${responsive(`
      
      width: 11.5%;
      `, `
      width: 4.75rem;
      `)}
    `;
  const tyu = css`background-color: #EA616F;`;
  const kou = css`background-color: #008CCF;`;
  const nisi = css`background-color: #F5A21B;`;
  const ken = css`background-color: #C2D95C;`;
  const other = css`background-color: #555555;`;
  const wide1g = css`
  background-color: #69B557;
  ${responsive(`
      
      width: 15%;
      `, `
      width: 7rem;
      `)}
    
  `;
  const kousya = css`
    margin-top:4px;
    margin-bottom:4px;
    position: relative;
    font-family: "Noto Sans JP", sans-sefif;
    ${responsive(`
      font-size:1rem;
      font-weight: 700;
    `, `
      font-size:0.7rem;
      font-weight: 900;
      padding:4px 0;
      &::after {
        content: "";
        position: absolute;
        background-color: ${colors.gray};
        top: 0;
        left: -10px;
        width: 3px;
        height: 100%;
      }
      `)}
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
    ${responsive(`
      font-weight: 700;
      font-size: 1rem;
      margin-left:15%;
    `, `
      position: relative;
      font-weight: 900;
      font-size: 0.7rem;
      padding: 3px 10px;
      margin-left:8rem;
      margin-top:-1.5rem;
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
    font-family: futura-pt-bold, "Noto Sans JP";
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
  `;
  const itemMainStyle = css`
    ${responsive(`
      width: 100%;
      display: flex;
    `, `
    width: 100%;`)}
  `;

  const contentStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    color: ${colors.black};
    
    ${responsive(`
      font-weight: 700;
      font-size: 1.25rem;
      width:40%;
    `, `
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 10px;
      width:60%;
    `)}
  `;

  // 5/1にでも公開しようかと思う
  // eslint-disable-next-line max-len
  // console.log("デザイン開始が11月、デザイン納品期限が1/31のはずなのに期限から約3か月遅らせて公開予定日の1週間前にデザインを完成させた上で、実装にケチを多々つけてくるデザイン課の無能共は万死に値する");
  // console.log("デザイン用ソフトウェアにドラッグ&ドロップしたら勝手に実装されるとでも思っているのか?");
  // console.log("これまでの体育祭等のイベント(最悪の時は公開当日早朝にデザイン変更があった)のときからちっとも変わってないな")
  // eslint-disable-next-line max-len
  // console.log("こっちも学業に部用のプロジェクトに競プロに資格にとやることがあるんじゃ(最後の二つは諦めざるを得なかった さよなら、俺のネスぺ試験受験料7500円+参考書約3000円……) デザイン課のオナニーになんか付き合ってられねーよカスがよぉ");
  // console.log("聞くところによると他の部のポスターでも部の責任者への聞き取りなしで解釈違いの地雷ポスターを量産して、挙句の果てには著作権侵害までしたらしいじゃないか");
  // console.log("umdとtksmは後輩育成ちゃんとしてるのか?");
  // console.log("ディベート部ではいかにオナニーを他人に押し付ける方法でも教えてるのか?");
  // eslint-disable-next-line max-len
  // console.log("ところで、生徒会下部組織デジタル委員会情報システム部では私たちのようなIT奴隷をいつでも募集しています。報酬もやりがいもありませんが、精神病と役職名と慢性的な睡眠不足を与えることは可能です。また、狂気駆動で開発できる人間がいないとこのようなサイトを維持することは不可能です");
  // console.log("さあ、あなたも https://digital.nada-sc.jp/ からデジタル委員になろう! というかなれよ");
</script>