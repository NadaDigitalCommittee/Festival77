<div class={containerStyle}>
    <img src="{base}/img/assets/waves/phone.svg" alt="" class={Wave1}/>
    <div class={Titles}>
        <p class = {Title1}><span class={Spaces}>第<span class = {Sevens}>77</span></span>回灘校文化祭</p>
        <p class= {Title2}>77th NADA School Festival</p>
    </div>
    <img src="{base}/img/logos/logo-standard.svg" alt="ロゴ" class={Logo}>     
    <div class={Days}>
        <p class={YYYY}>2023</p>
        <p class={MMDD}>05.02 <span class={Youbi}>tue</span></p>
        <img src="{base}/img/assets/yajirusi.svg" class={Yajirusi} alt="">
        <p class={MMDD}>05.03 <span class={Youbi}>wed</span></p>
    </div>
    <img src="{base}/img/assets/scroll-down.svg" class={Scroll} alt="">
</div>

<script lang = "ts">
    import { base } from '$app/paths';
    import { responsive } from '$lib/styles/utils';
    import { css } from '@emotion/css';
    
    const containerStyle = css`
    width:100vw;
    height:calc(100vh - 6rem);
    background-color: #FFFFFF;`;
    const Titles = css`
    position:relative;
    top:5vh;
    width:100vw;
    margin-left:calc( 50vw - min( max( 4.5vw, 4.5vh) , 7.5vw) * 4 );
    `;
    const Title1 = css`
    position: relative;
    font-family: futura-pt-bold, sans-serif;
    color: #FB5607;
    font-weight: 600;
    white-space: nowrap;
    font-size: min( max( 4.5vw, 4.5vh) , 7.5vw);
    `;
    const Title2 = css`
    position: relative;
    font-family: futura-pt-bold, bold;
    color: #FB5607;
    font-weight: 900;
    white-space: nowrap;
    font-size: min( max( 2.25vw, 2.25vh) , 3.5vw);`;
    const Sevens = css`
    `;
    const Spaces = css`
    `;
    const Logo = css`
    position: relative;
    top:5vh;
    left: calc(50vw - min( 40vw , 18vh));
    width:min(80vw,36vh);

    `;
    const Wave1 = css`
    position:absolute;
    top:55vh;
    left: -6vw;
    height:55vh;
    width: 112vw;
    `;
    const Days = css`
    font-family: futura-pt, heavy;
    position:absolute;
    color: #FFFFFF;
    font-weight:600;
    top:65vh;
    left:10vw;
    `;
    const YYYY = css`
    font-size:min( max( 3vw, 3vh) , 5vw);
    `;
    const MMDD = css`
    font-size:min( max( 4.5vw, 4.5vh) , 7.5vw);
    `;
    const Youbi = css`
    font-size:min( max( 3vw, 3vh) , 5vw);
    `;
    const Yajirusi = css`
    padding-left: 25%;
    height:1.5vh;
    `;
    const Scroll = css`
    position:absolute;
    top:65vh;
    left: calc(80vw - min(12.5vh,12.5vw));
    width: min(25vh,25vw);
    `;
</script>