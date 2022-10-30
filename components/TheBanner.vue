<template>
    <div class="container">
        <div class="banner-grid">
            <!-- MAIN-ITEM -->
            <div class="banner-item main-item">
                <img class="pattern" src="~/assets/images/main-banner-pattern.svg" />
                <img class="baby" src="~/assets/images/baby.png" />
                <!-- MAIN-ITEM-TEXT -->
                <div class="main-item-text">
                    <h1>پوشاک نوزاد</h1>
                    <h3>پیراهن ، سرهمی ، پیشبند</h3>
                    <div class="cta-btn">خرید کنید</div>
                </div>
            </div>
            <div class="banner-item materials">
                <img class="pattern" src="~/assets/images/circle-pattern.svg" />
                <img class="materials-img" src="~/assets/images/materilas.png" />
                <!-- MAIN-ITEM-TEXT -->
                <div class="main-item-text">
                    <h1>پارچه</h1>
                    <h3>تنوع بینظیر</h3>
                    <div class="cta-btn">خرید کنید</div>
                </div>
            </div>
            <div class="banner-item">3</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.banner-grid{
    @apply grid grid-cols-3 grid-rows-2 gap-2;
    height: 620px;
    .banner-item{
        @apply rounded-md bg-gray-300;
        &:nth-child(2){
            @apply bg-elaa-violet relative;
        }
        &:nth-child(3){
            @apply bg-elaa-khaki;
        }
    }
    .main-item{
        @apply relative flex items-center col-start-2 col-end-4 row-start-1 row-end-3 bg-elaa-mint; 
        .baby,
        .pattern{
            // object-fit: cover;
            // width: 100%;
            // height: 100%;
            width: auto;
            position: absolute;
        }
        .pattern{
            width: 100%;
        }
        .baby{
            margin-right: 25%;
        }
        .main-item-text{
            left: 14%;
            @apply absolute flex flex-col text-elaa-mint-dark;
            h1{
                font-family: IRANYekanExtraBoldFaNum;
                @apply text-5xl mb-2;
            }
            h3{
                font-family: IRANYekanMedium;
                @apply text-2xl mb-4 opacity-90;
            }
            .cta-btn{
                font-family: IRANYekanExtraBoldFaNum;
                @apply flex justify-center items-center  h-12 bg-white text-elaa-mint-dark tracking-wide rounded-lg ;
            }
        }
    }
    .materials{
        @apply relative flex items-center;
        .pattern{
            position: absolute;
            width: 82px;
            left: 0px;
            top: 0px;
        }
        .materials-img{
            @apply mr-8;
        }
        .main-item-text{
            left: 30%;
            @apply absolute flex flex-col text-white;
            h1{
                font-family: IRANYekanExtraBoldFaNum;
                @apply text-4xl mb-2;
            }
            h3{
                font-family: IRANYekanMedium;
                @apply text-lg mb-4 opacity-90;
            }
            .cta-btn{
                font-family: IRANYekanExtraBoldFaNum;
                @apply flex justify-center items-center  h-10 bg-white text-elaa-violet tracking-wide rounded-lg ;
            }
        }
    }
}
</style>