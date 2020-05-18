<template lang="pug">
	v-layout(column)
		v-parallax(row, :src="require('../assets/img/1.png')", height="820", id="parallax1")
			v-card(flat, style="width: 90%; margin-left: 5%; background: rgba(0, 0, 0, 0.5)")
				p {{$t('home.b1')}}
				v-layout(wrap)
					GChart(
					type="GeoChart"
					:data="map1Data"
					:options="map1Options"
					:settings="{mapsApiKey: apiKey, packages: ['geochart']}"
					style="height: 500px; width: 40vw; background: rgba(0, 0, 0, 0); fill: #000")
		v-layout(justify="space-around")
			p Production de l`electricite par source en Russie
			Doughnut_summary(:labels="Doughnut_summaryRussiaData.labels" :data="Doughnut_summaryRussiaData.data" style="width: 25vw; position: relative")
			Doughnut_summary(:labels="Doughnut_summaryCanadaData.labels" :data="Doughnut_summaryCanadaData.data" style="width: 25vw; position: relative")


</template>

<script lang="ts">
    import Vue from "vue";
    import * as store from "../plugins/store";
    import Component from "vue-class-component";
    import {i18n} from "../plugins/i18n";
    // @ts-ignore
    import {GChart} from 'vue-google-charts'
    import Doughnut_summary from "../components/Doughnut_summary.vue";

    Vue.component("GChart", GChart);
    Vue.component("Doughnut_summary", Doughnut_summary);

    export default class Home extends Vue {
        name: string = "sss";
        apiKey = "AIzaSyDdRmGhfE2hBf_DODRLnOH2Ww68B94h7bE";
        // Array will be automatically processed with visualization.arrayToDataTable function
        map1Data: object = [
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700]
        ];
        map1Options: object = {
            backgroundColor: {fill: 'transparent'},
            colorAxis: {colors: ['yellow', 'red']},
            mapsApiKey: 'AIzaSyDdRmGhfE2hBf_DODRLnOH2Ww68B94h7bE'
        };
        Doughnut_summaryRussiaData:object = {
            labels: ['Gaz naturel',
                'Oil',
                'Charbon',
                'Nucléaire',
                'Hydroenergie',
                'Bioenergie et ?waste',
                'Renouvelables'],
		        data: [338334, 153963, 113581, 53279, 15908, 7801, 165]
        };
        Doughnut_summaryCanadaData:object = {
            labels: ['Gaz naturel',
                'Oil',
                'Charbon',
                'Nucléaire',
                'Hydroenergie',
                'Bioenergie et ?waste',
                'Renouvelables'],
            data: [100864, 99921, 17016, 26346, 33752, 13686, 2826]
        };
    }
</script>

<style>
	.v-parallax__image-container:after {
		position: absolute;
		box-shadow: inset 0px -66px 38px 0px rgba(0, 0, 0, 0.77);
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		content: "";
	}
</style>
