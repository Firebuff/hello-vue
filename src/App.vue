<template>
    <div id="app">
        <div>root</div>

        <router-link to="/home" style="margin: 0 10px;">home</router-link>

        <router-link to="/admin" style="margin: 0 10px;">admin</router-link>

        <router-view></router-view>
        <router-view name="naming01"></router-view>
        <router-view name="naming02"></router-view>
    </div>
</template>
<style lang="scss">
</style>