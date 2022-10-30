<template>
    <div class="nav">
        <div class="container">
            <nav>
                <li class="active">خانه</li>
                <li>محصولات</li>
                <li>محصولات</li>
                <li>محصولات</li>
                <li>محصولات</li>
                <li>محصولات</li>
            </nav>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.nav{
    box-shadow: 0px 4px 4px #f3f3f3;
}
nav{
    @apply  flex justify-between items-center list-none h-20 text-gray-400;
    font-family: IRANYekanExtraBoldFaNum;
    li.active{
        @apply text-elaa-violet;
    }
}
</style>