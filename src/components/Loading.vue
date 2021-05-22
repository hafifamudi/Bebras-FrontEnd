<template>
    <div class="wrapper mx-auto my-20">
        <div class="wave">
            <span style="--c:1;">L</span>
            <span style="--c:2;">o</span>
            <span style="--c:3;">a</span>
            <span style="--c:4;">d</span>
            <span style="--c:5;">i</span>
            <span style="--c:6;">n</span>
            <span style="--c:7;">g</span>
            <span style="--c:8;">.</span>
            <span style="--c:9;">.</span>
            <span style="--c:10;">.</span>
        </div>
    </div>
   
</template>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .wave{
    position: relative;
    -webkit-box-reflect: below -12px linear-gradient(transparent,rgba(0,0,0,0.2));
    }
    .wave span{
    position: relative;
    display: inline-block;
    color:white;
    font-size:2em;
    text-transform: uppercase;
    animation:animate 1.5s ease-in-out infinite;
    animation-delay: calc(.1s * var(--c));
    }
    @keyframes animate{
    0%,100%{
        transform: translateY(0px);
    }
    20%{
        transform: translateY(-20px);
    }
    40%{
        transform: translateY(0px);
    }
}

</style>


<script>
export default {
    name:'Loading'
}
</script>