<template lang="pug">
	v-parallax(column, :src="require('../assets/img/1.png')", height="820", id="parallax1")
		v-card(flat, style="width: 90%; margin-left: 5%; background: rgba(0, 0, 0, 0.5)")
			p {{$t('home.b1')}}
			v-layout(wrap)
				GChart(
				type="GeoChart"
				:data="map1Data"
				:options="map1Options"
				:settings="{mapsApiKey: 'AIzaSyDdRmGhfE2hBf_DODRLnOH2Ww68B94h7bE', packages: ['geochart']}"
				style="height: 500px; width: 40vw; background: rgba(0, 0, 0, 0); fill: #000")
				GChart(
				type="PieChart"
				:data="pie1Data"
				:options="pie1Options"
				style="height: 500px; width: 40vw; background: rgba(200, 200, 200, 0.5); fill: #000")


</template>

<script lang="ts">
    import Vue from "vue";
    import * as store from "../plugins/store";
    import Component from "vue-class-component";
    import {i18n} from "../plugins/i18n";
    // @ts-ignore
    import {GChart} from 'vue-google-charts'

    Vue.component("GChart", GChart);

    export default class Home extends Vue {
        name: string = "sss";
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
        pie1Data: object = [
            ['Source', 'Sales', 'Expenses', 'Profit'],
            ['Charbon', 500, 400, 200],
            ['Gas', 1170, 460, 250],
            ['Eoliens', 660, 1120, 300],
            ['Panneaux Photovoltaiques', 200, 540, 350]
        ];
        pie1Options: object = {
            pieHole: 0.5,
            backgroundColor: {fill: 'transparent'},
            title: 'Sources de l`energie',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
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
