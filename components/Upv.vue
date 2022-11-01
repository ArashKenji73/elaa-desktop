<template>
    <ul class="upv mt-16 mb-16">
        <div class="upv-wrap">
            <li>
                <span class="icon-now-in-stock icon"></span>
                <div class="content">
                    <h1>محصول با کیفییت</h1>
                    <h3>تهیه شده از مواد با کیفییت</h3>
                </div>
            </li>
            <li>
                <span class="icon-kid icon"></span>
                <div class="content">
                    <h1>محصول با کیفییت</h1>
                    <h3>تهیه شده از مواد با کیفییت</h3>
                </div>
            </li>
            <li>
                <span class="icon-washing icon"></span>
                <div class="content">
                    <h1>محصول با کیفییت</h1>
                    <h3>تهیه شده از مواد با کیفییت</h3>
                </div>
            </li>
        </div>
    </ul>
</template>

<script setup>

</script>

<style lang="scss">
.upv .upv-wrap{
    @apply flex justify-between items-center w-max mx-auto gap-32;
    li{
        @apply flex gap-4 items-center;
        .icon{
            @apply text-5xl text-elaa-violet;
        }
        .content{
            @apply flex flex-col;
            h1{
                @apply text-lg mb-1 text-gray-500;
                font-family: IRANYekanExtraBoldFaNum;
            }
            h3{
                @apply text-sm text-gray-400;
                font-family: IRANYekanMedium;
            }
        }
    }
}
</style>