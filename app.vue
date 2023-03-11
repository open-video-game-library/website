<template>
    <NuxtLayout>
        <NuxtLoadingIndicator
            color="white"
            :height="3"
            :duration="5000"
            :throttle="200"
        />
        <NuxtPage />
    </NuxtLayout>
</template>
