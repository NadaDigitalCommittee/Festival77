<div class={containerStyle}>
    <div class={Waves}>
        <img src="{base}/img/assets/waves/1.svg" alt="" class={Wave1} />
        <img src="{base}/img/assets/waves/2.svg" alt="" class={Wave2} />
        <img src="{base}/img/assets/waves/3.svg" alt="" class={Wave3} />
        <img src="{base}/img/assets/waves/4.svg" alt="" class={Wave4} />
        <img src="{base}/img/assets/waves/5.svg" alt="" class={Wave5} />
        <!--後でやる-->
    </div>
    <div class={Titles}>
        <p class = {Title1}><span class={Spaces}>第<span class = {Sevens}>77</span></span>回灘校文化祭</p>
        <p class= {Title2}>77th NADA School Festival</p>
    </div>
    <img src="{base}/img/logos/logo-standard.svg" alt="ロゴ" class={Logo}>
    
    <div class={Days}>
        <p class={YYYY}>2023</p>
        <p class={MMDD}>05.02 <span class={Youbi}>Tue</span></p>
        <img src="{base}/img/assets/yajirusi.svg" class={Yajirusi} alt="">
        <p class={MMDD}>05.03 <span class={Youbi}>Wed</span></p>
    </div>
    <img src="{base}/img/assets/scroll-down.svg" class={Scroll} alt="">
    <img src="{base}/img/assets/sc-d2.svg" class={Scroll2} alt="" on:click={()=>{window.scroll({
        top: 100,
        behavior: 'smooth',
      });}}>
</div>

<script lang = "ts">
    import { base } from '$app/paths';
    import { css, keyframes } from '@emotion/css';
    
    const containerStyle = css`
    width:100%;
    height:calc( 100vh - 6rem);
    background-color: #FFFFFF;`;
    const Titles = css`
    position:absolute;
    top: 28vh;
    left:15%;
    `;
    const Title1 = css`
    position: relative;
    font-family: 'Source Han Sans';
    color: #FB5607;
    font-weight: 700;
    font-size:45px;
    `;
    const Title2 = css`
    position: relative;
    font-family: 'Source Han Sans';
    color: #FB5607;
    font-weight: 700;
    font-size:24px;`;
    const Sevens = css`
    font-size:50px;
    `;
    const Spaces = css`
    letter-spacing: 0.3rem;
    `;
    const Logo = css`
    position: absolute;
    top: 14vh;
    right:15%;
    width:25%;

    `;
    const Waves = css`
    position:absolute;
    width:100%;
    height:50vh;
    top:25vh;
    `;
    const Wave1 = css`
    position:absolute;
    top:26vh;
    height:82vh;
    width:100%;
    `;
    const Wave2 = css`
    position:absolute;
    top:31vh;
    height:75vh;
    width:100%;
    `;
    const Wave3 = css`
    position:absolute;
    top:36vh;
    height: 68vh;
    width:100%;
    `;
    const Wave4 = css`
    position:absolute;
    top:41vh;
    height: 61vh;
    width:100%;
    `;
    const Wave5 = css`
    position:absolute;
    top:46vh;
    height:54vh;
    width:100%;
    `;
    const Days = css`
    font-family: futura-pt, heavy;
    position:absolute;
    color: #FFFFFF;
    font-weight:700;
    top:65vh;
    left:17.5%;
    `;
    const YYYY = css`
    font-size:2.5rem;
    `;
    const MMDD = css`
    font-size:3.75rem;
    `;
    const Youbi = css`
    font-size:2.5rem;
    `;
    const Yajirusi = css`
    padding-left: 25%;
    height:1.5%;
    `;
    const rt = keyframes`
    0% {
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(90deg);
    }
    50%{
        transform: rotate(180deg);
    }
    75%{
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }`;
    const Scroll = css`
    position:absolute;
    top:75vh;
    right:20%;
    animation: ${rt} 8s linear infinite;
    `;
    const Scroll2 = css`
    position:absolute;
    top:75vh;
    right:20%;
    width:146px;
    height:146px;
    `;
</script>