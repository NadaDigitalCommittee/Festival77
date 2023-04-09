<div class={containerStyle}>
    <img src="{base}/img/assets/waves/Frame1.svg" alt="" class={Wave1}/>
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
    <img src="{base}/img/assets/sc-d2.svg" class={Scroll2} alt="">
</div>

<script lang = "ts">
    import { base } from '$app/paths';
    import { css, keyframes } from '@emotion/css';
    
    const containerStyle = css`
    width:100%;
    height:80% ;
    background-color: #FFFFFF;`;
    const Titles = css`
    position:relative;
    top:5%;
    margin-left:calc( 50% - 9rem );
    `;
    const Title1 = css`
    position: relative;
    font-family: futura-pt-bold, sans-serif;
    color: #FB5607;
    font-weight: 900;
    white-space: nowrap;
    font-size: 2rem;
    `;
    const Title2 = css`
    position: relative;
    font-family: futura-pt-bold, bold;
    color: #FB5607;
    font-weight: 900;
    white-space: nowrap;
    font-size: 1rem;`;
    const Sevens = css`
    `;
    const Spaces = css`
    `;
    const Logo = css`
    position: relative;
    top:5vh;
    left: calc(50% - 18vh);
    height:36vh;
    `;
    const Wave1 = css`
    position:absolute;
    top: 56vh;
    left: 0%;
    height: 70vh;
    width: 100%;
    `;
    const Days = css`
    font-family: futura-pt, heavy;
    position:absolute;
    color: #FFFFFF;
    font-weight:700;
    top:66vh;
    left:10%;
    `;
    const YYYY = css`
    font-size:1.2rem;
    `;
    const MMDD = css`
    font-size:2.4rem;
    `;
    const Youbi = css`
    font-size:1.2rem;
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
    top: 66vh;
    right: 12.5%;
    height:6rem;
    animation: ${rt} 8s linear infinite;
    `;
    const Scroll2 = css`
    position:absolute;
    top: 66vh;
    right: 12.5%;
    height:6rem;
    `;
</script>