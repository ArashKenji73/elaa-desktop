<template>
    <div class="main-layout">
        <TheHeader />
        <TheNavbar />
        <div class="main-content">
            <slot />
        </div>
        <TheFooter />
    </div>
</template>
<style lang="scss">
.main-layout{
    @apply flex flex-col min-h-screen
}
.main-content{
    @apply flex-grow;
}
</style>