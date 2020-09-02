<template lang="pug">
    v-app(:dark='$store.state.dark' :class='$store.state.dark ? "grey darken-4" : "grey lighten-4"' style="background-color: #f5f6f8;")
        ///cookie-law(theme='blood-orange'
        //:buttonText='$t("cookieButton")'
        //:message='$t("cookieMessage")'
        //style="height: 300vh")
        Navbar
        Snackbar
        v-content
            router-view(style="margin-top: -52px")
            //v-parallax(column, :src="require('./assets/img/2.jpg')", height="600", width="100vw", style="height: 700px")
                v-card(flat, style="width: 90%; margin-left: 5%; background: rgba(0, 0, 0, 0)")
                    v-layout(wrap, class="text-center")
                        v-spacer
                        GChart(
                        type="GeoChart" :data="map1Data" :options="map1Options" :settings="{mapsApiKey: 'AIzaSyDdRmGhfE2hBf_DODRLnOH2Ww68B94h7bE', packages: ['geochart']}" style="height: 500px; width: 40vw; background: rgba(0, 0, 0, 0); fill: #000")
                        v-spacer
</template>

<script lang="ts">
    import Vue from "vue";
    import Navbar from "./components/Navbar.vue";
    import Snackbar from "./components/Snackbar.vue";
    import * as store from "./plugins/store";

    const CookieLaw = require("vue-cookie-law");
    // @ts-ignore
    import {GChart} from 'vue-google-charts'

    Vue.component("GChart", GChart);

    export default {
        components: {Navbar, Snackbar, CookieLaw},
        data: () => ({
            map1Data: [
                ['Country', 'Popularity'],
                ['Germany', 200],
                ['United States', 300],
                ['Brazil', 400],
                ['Canada', 500],
                ['France', 600],
                ['RU', 700]
            ],
            map1Options: {
                backgroundColor: {fill: 'transparent'},
                colorAxis: {colors: ['yellow', 'red']},
                mapsApiKey: 'AIzaSyDdRmGhfE2hBf_DODRLnOH2Ww68B94h7bE'
            }
        })
    };
</script>
