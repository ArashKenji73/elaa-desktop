<template>
    <div class="relative">
        <img src="@/assets/images/cute-pony.png" class="absolute right-0 bottom-0"/>
        <img src="@/assets/images/cute-pony-2.png" class="absolute left-0 bottom-0"/>
        <div class="container flex justify-between">
            <div class="about-us">
                <h1>درباره ما</h1>
                <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                </h3>
            </div>

            <div>
                <h1>میانبر</h1>
                <ul>
                    <li>
                        <h3>خانه</h3>
                    </li>
                    <li>
                        <h3>محصولات</h3>
                    </li>
                </ul>
            </div>
            <div>
                <h1>میانبر</h1>
                <ul>
                    <li>
                        <h3>حراجستون</h3>
                    </li>
                    <li>
                        <h3>مادرانه</h3>
                    </li>
                </ul>
            </div>
            <div>
                <h1>میانبر</h1>
                <ul>
                    <li>
                        <h3>داستان الا</h3>
                    </li>
                    <li>
                        <h3>پیگیری خرید</h3>
                    </li>
                    <li>تماس با ما</li>
                </ul>
            </div>

            <div class="footer-logo">
                <img src="@/assets/images/logo.svg" />
                <div class="flex justify-between">
                    <img class="social-icon" src="@/assets/icons/Instagram.svg" />
                    <img class="social-icon" src="@/assets/icons/Whatsapp.svg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
h1 {
    font-family: IRANYekanExtraBoldFaNum;
    @apply text-xl mb-4;
}

h3 {
    font-family: IRANYekanMedium;
    @apply text-sm text-gray-600 leading-6 text-justify;
}

.about-us {
    width: 250px;
}

.footer-logo {
    img {
        @apply w-16 mb-4;
    }

    .social-icon {
        @apply w-4;
    }
}
</style>