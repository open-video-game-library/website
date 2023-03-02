<template>
    <NuxtLayout>
        <NuxtLoadingIndicator
            color="white"
            :height="2"
            :duration="5000"
            :throttle="200"
        />
        <NuxtPage />
    </NuxtLayout>
</template>
