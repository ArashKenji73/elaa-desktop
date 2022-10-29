<template>
    <header>
        <div class="container header">
            <!-- USER-CART-PHONE -->
            <div class="user-cart-phone">
                <!-- PHONE -->
                <div class="phone">
                    <div class="icon-simple">
                        <span class="icon-call"></span>
                    </div>
                    <div class="phone-col">
                        <span>
                            021-44476028
                        </span>
                        <span>
                            021-44476028
                        </span>
                    </div>
                </div>
                <!-- ICON-CIRCLE -->
                <div class="icon-circle">
                    <span class="icon-user"></span>
                </div>
                <!-- ICON-CIRCLE -->
                <div class="icon-circle">
                    <span class="icon-shopping-cart"></span>
                </div>
            </div>
            <!-- LOGO-SEARCHFORM -->
            <div class="logo-searchForm">
                <!-- SEARCHFORM -->
                <div class="search-box">
                    <span class="icon-search-normal search-icon text-xs"></span>
                    <input
                        type="text"
                        class="search-input iranSansNumb"
                        placeholder=".... جستجوی محصولات"
                    />
                </div>
                <!-- LOGO -->
                <img class="logo" src="~/assets/images/logo.svg" />
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss">
header {
    @apply border-b-2 border-gray-100
}

.header {
    @apply flex justify-between items-end pb-5;
    height: 92px;
}

.user-cart-phone {
    @apply flex items-center gap-4;
}
.logo-searchForm{
    @apply flex items-end gap-6;
}

.phone {
    @apply flex items-center gap-2;
    .phone-col{
        font-family: IRANYekanExtraBoldFaNum;
        @apply flex flex-col text-sm text-elaa-violet;
    }
}

.icon-simple{
    @apply h-9 w-9 flex items-center text-3xl text-elaa-violet font-bold cursor-pointer;
}

.logo{
    width: 50px;
}

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