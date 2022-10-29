<template>
    <div class="search-box">
        <span class="icon-search-normal search-icon text-xs"></span>
        <input type="text" class="search-input iranSansNumb" placeholder=".... جستجوی محصولات" />
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.search-box{
    display: flex;
    background: #F8F8F8;
    border: 1px solid #E3E3E3;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    width: 242px;
    input{
        @apply flex-grow text-xs;
        background: none;
        &:focus{
            outline: none;
        }
    }
    .search-icon{
        @apply flex items-center justify-start w-8 ml-0;
    }
}
</style>