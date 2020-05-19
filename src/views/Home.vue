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
			//charts
			v-layout(class="hidden-sm-and-down")
				p.headline(style="font-family: 'TTSupermolotNeue' !important; font-weight: 600;") Production de l`electricite par source en Russie
				Doughnut_summary(:labels="Doughnut_summaryRussiaData.labels" :data="Doughnut_summaryRussiaData.data" style="width: 25vw; position: relative")
				p.headline(style="font-family: 'TTSupermolotNeue' !important; font-weight: 600;") Production de l`electricite par source en Canada
				Doughnut_summary(:labels="Doughnut_summaryCanadaData.labels" :data="Doughnut_summaryCanadaData.data" style="width: 25vw; position: relative")
			//else
		v-card(class="hidden-md-and-up")
			v-window(v-model="windowSummary")
				v-window-item.text-center
					p.font.headline(style="font-family: 'TTSupermolotNeue' !important; font-weight: 600;") Production de l`electricite par source en Russie
					Doughnut_summary(:labels="Doughnut_summaryRussiaData.labels" :data="Doughnut_summaryRussiaData.data" style="position: relative")
				v-window-item.text-center
					p.headline(style="font-family: 'TTSupermolotNeue' !important; font-weight: 600;") Production de l`electricite par source en Canada
					Doughnut_summary(:labels="Doughnut_summaryCanadaData.labels" :data="Doughnut_summaryCanadaData.data" style="position: relative")
			v-card-actions.justify-space-between(color="transparent")
				v-btn(text='', @click='prev')
					v-icon mdi-chevron-left
				v-item-group.text-center(v-model='windowSummary', mandatory='')
					v-item(v-for='n in length', :key='`btn-${n}`', v-slot:default='{ active, toggle }')
						v-btn(:input-value='active', icon='', @click='toggle')
							v-icon mdi-record
				v-btn(text='', @click='next')
					v-icon mdi-chevron-right



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

    @Component
    export default class Home extends Vue {

        apiKey = "AIzaSyDdRmGhfE2hBf_DODRLnOH2Ww68B94h7bE";
        windowSummary: number = 0;
        length = 2;
        n = 0;

        next() {
            this.windowSummary = this.windowSummary + 1 === this.length
                ? 0
                : this.windowSummary + 1
        };
        prev() {
            this.windowSummary = this.windowSummary - 1 < 0
                ? this.length - 1
                : this.windowSummary - 1
        };
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
	.font{
		font-family: "TTSupermolotNeue" !important;
		font-weight: 600;
	}
</style>
