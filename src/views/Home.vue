<template lang="pug">
    v-layout(column  style="background-color: #f5f6f8;")
        v-parallax(row, :src="require('../assets/img/' + imgNum)", :height="isMobile ? '660' : '790'", id="parallax1" :style="isMobile ? 'height: 700px' : 'height: 840px'")
            v-card(flat, style="background: rgba(0, 0, 0, 0); width: 90%; margin-left: auto; margin-right: auto; height: 100%;")
                v-layout(style="text-align: center; bottom: 25%; position: absolute; left: 0; right: 0;" wrap)
                    v-spacer
                    v-flex(xs12 md10 style="text-align: center")
                        span.page-title {{$t('home.title')}}
                    v-spacer
                    // GChart(type="GeoChart" :data="map1Data" :options="map1Options" :settings="{mapsApiKey: apiKey, packages: ['geochart']}" style="width: 1000px; margin: 0px auto; background: rgba(0, 0, 0, 0); fill: #000") a
        h2.headlinee.mt-7 Développement durable
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs10 md4 flat)
                p.post L'utilisation des combustibles fossiles ou de charbon est la façon la plus simple de produire de l'énergie, car il s'agit d'un processus déjà bien établi. En même temps, les articles sur l'énergie écrivent que pour être respectueux de l'environnement, il est nécessaire de développer des sources d'énergie renouvelables, mais qu'il est difficile de le réaliser.
                p.post En même temps, les articles sur l'énergie écrivent que pour être respectueux de l'environnement, il est nécessaire de développer des sources d'énergie renouvelables, mais qu'il est difficile de le réaliser.
                p.post Découvrons à quel point cela est vrai pour la Russie et le Canada.
                p.post
                    span En 2017 
                    a(href="https://trackingsdg7.esmap.org" target="_blank" rel="noreferrer") le Canada a atteint 23.1% d’énergie durable
                    span  dans sa consommation d’énergie tandis que 
                    a(href="https://trackingsdg7.esmap.org" target="_blank" rel="noreferrer") la Russie - seulement 3.3%
                img(:src="require('../assets/img/energy-use.png')" data-action="zoom" width="100%" style="margin: auto" alt="Diagramme sur la production de l'energie").img-zoom
                p.source
                    a(href="https://www.iea.org/" target="_blank" rel="noreferrer") Source
                p.post Le Canada se trouve dans l'hémisphère nord et à peu près sur la même latitude que la Russie. Ce qui fait ses zones climatiques similaires aux nôtres.
                p.post Essayons de comprendre, comment la Russie pourrait atteindre le niveau de la Canada dans le domaine d`énergie durable ou renouvelable.
                p.post Comme leur nom l’indique, il s’agit de sources qui se renouvellent et ne s’épuiseront donc jamais à l’échelle du temps humain !
                img(:src="require('../assets/img/renouvelables-explained.png')" data-action="zoom" width="100%" style="margin: auto" alt="Renouvelables: une schema simple").img-zoom
                p.post
                    b L'énergie solaire
                    span  correspond à l'électricité produite par des cellules photovoltaïques. Ces cellules reçoivent la lumière du Soleil et sont capables d'en transformer une partie en électricité.
                p.post
                    b Les éoliennes
                    span  produisent de l'énergie à partir du déplacement des masses d’air. Le vent souffle, les pales se tournent, et la lampe s`allume !
                p.post
                    b La biomasse
                    span  est la matière organique d'origine végétale, animale, ou bactérienne, utilisable comme source d'énergie. Cette énergie peut en être extraite par combustion directe (ex : bois énergie), ou par combustion après des transformations chimiques. Trois modes de valorisations de la biomasse (co)existent : thermique, chimique et biochimique. La bioénergie peut devenir une source de chaleur, d'électricité ou de carburant
                p.post
                    b L'énergie hydraulique
                    span  permet de fabriquer de l'électricité grâce à la force de l'eau qui dépend soit de la hauteur de la chute d'eau, soit du débit des fleuves et des rivières
                p.post Quant a
                    b  l`energie geothermique
                    span , elle ne dépend pas des conditions atmosphériques - il s’agit de l'extraction de l'énergie contenue dans le sol. Cette chaleur résulte de la désintégration radioactive des atomes fissiles contenus dans les roches.
            v-flex(xs1 sm1 md4 lg6)
        h2.headlinee.mt-7 Comparaison de l'utilisation des ressources en Russie et au Canada
        v-card(class="hidden-md-and-up" flat style="width: 100%; padding: none")
            v-window(v-model="windowSummary")
                v-window-item.text-center(style="position: absolute;")
                    p.font.headline(style="font-family: 'TTSupermolotNeue' !important; font-weight: 600;") Production de l`electricite par source en Russie
                    Doughnut_summary#summary(:labels="Doughnut_summaryRussiaData.labels" :data="Doughnut_summaryRussiaData.data")
                v-window-item.text-center(style="position: absolute;")
                    p.headline(style="font-family: 'TTSupermolotNeue' !important; font-weight: 600;") Production de l`electricite par source en Canada
                    Doughnut_summary#summary(:labels="Doughnut_summaryCanadaData.labels" :data="Doughnut_summaryCanadaData.data" )
            v-card-actions.justify-center
                v-item-group.text--center(v-model='windowSummary', mandatory='')
                    v-item(v-for='n in length', :key='`btn-${n}`', v-slot:default='{ active, toggle }')
                        v-btn(:input-value='active', icon='', @click='toggle')
                            v-icon radio_button_checked
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                p.headline.hidden-sm-and-down(style="font-family: 'TTSupermolotNeue' !important; font-weight: 600; text-align: center").mb-0.pb-0 Production de l`electricite par source
                v-layout(justify="space-around" class="hidden-sm-and-down")
                    //charts
                    v-layout()
                        v-flex(column lg6).text-center
                            p.headline(style="font-family: 'TTSupermolotNeue' !important; font-weight: 600;").mt-0 en Russie
                            Doughnut_summary(:labels="Doughnut_summaryRussiaData.labels" :data="Doughnut_summaryRussiaData.data" style="width: 25vw; position: relative")
                        v-flex(column lg2).text-center
                        v-flex(column lg6).text-center
                            p.headline(style="font-family: 'TTSupermolotNeue' !important; font-weight: 600;").mt-0 en Canada
                            Doughnut_summary(:labels="Doughnut_summaryCanadaData.labels" :data="Doughnut_summaryCanadaData.data" style="width: 25vw; position: relative")
                v-btn(text='', @click='next')
                br
                p.post Dans le système énergétique russe l'hydroélectricité et la bioénergie occupent une place importante. Le reste de l'énergie renouvelable est réparti entre l'énergie solaire, l'énergie éolienne et l'énergie géothermique.
            v-flex(xs1 sm1 md4 lg6)
        h2.headlinee.mt-7 Réseau énergétique russe
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                img(:src="require('../assets/img/diesel-generators.png')" data-action="zoom" width="100%" style="margin: auto" alt="Carte des générateurs diesel").img-zoom
                p.source
                    a(href="https://www.irena.org/publications/2017/Apr/Renewable-Energy-Prospects-for-the-Russian-Federation-REmap-working-paper" target="_blank" rel="noreferrer") Source
                p.post La particularité du réseau énergétique russe est qu`il est décentralisé. Il y a au moins 900 générateurs diesel en Russie qui fournissent de l'énergie pour des zones peu peuplées. Ces générateurs sont vieux et inefficaces. Par conséquent, les coûts d`exploitation peuvent être extrêmement élevés - parfois de plus de 12 fois par rapport aux valeurs habituelles. En outre, ces territoires souffrent d'une mauvaise qualité de l'air.
                p.post Pour surmonter les problèmes de la demande locale d'électricité, des systèmes autonomes de SER et de tourbe ont été inclus dans les projets du gouvernement en tant que sources d'énergie prometteuses.
            v-flex(xs1 sm1 md4 lg6)

        h2.headlinee.mt-7 L’énergie solaire
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                img(:src="require('../assets/img/sun-map.png')" data-action="zoom" width="100%" style="margin: auto" alt="Carte de l'energie solaire").img-zoom
                p.source
                    a(href="https://www.irena.org/publications/2017/Apr/Renewable-Energy-Prospects-for-the-Russian-Federation-REmap-working-paper" target="_blank" rel="noreferrer") Source
                p.post La Russie dispose de vastes zones favorables à l’utilisation d’énergie solaire en particulier dans les régions du sud-ouest et du sud. Cela représente en moyenne 1 200-1 500 kWh par an. Les installations ne peuvent fonctionner efficacement que pendant 4 à 5 mois par an. Il n'est donc pas possible de remplacer toute l’énergie basée sur des générateurs diesel par des cellules solaires.
                p.post Le problème majeur est que le coût de production des panneaux solaires est relativement élevé, par rapport aux combustibles fossiles. Un autre obstacle au développement est l'absence de lois et de politique gouvernementale claire dans ce domaine. En outre, l'expérience a montré que le transport des panneaux solaires vers des régions éloignées est également difficile et coûteux.
            v-flex(xs1 sm1 md4 lg6)

        h2.headlinee.mt-7 Énergie du vent
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                img(:src="require('../assets/img/wind-map.png')" data-action="zoom" width="100%" style="margin: auto" alt="Carte du vents").img-zoom
                p.source
                    a(href="https://ozlib.com/897401/fizika/ustoychivost_atmosfery_protsessy_rasseivaniya" target="_blank" rel="noreferrer") Source
                p.post La Russie possède le plus grand potentiel éolien du monde.
                p.post Dans les régions du nord de la Russie, ainsi que dans le sud-ouest et en Extrême-Orient soufflent des vents, dont la vitesse dépasse facilement 8 m/s à 100 m de hauteur.
                p.post Théoriquement, le potentiel économique éolien pourrait atteindre 30 % de la production d'électricité du pays, alors qu`à ce jour, la part des parcs éoliens en Russie est inférieure à 0,1 % de la production totale d'électricité (APREN, 2016).
                p.post Plusieurs facteurs entravent le développement du parc éolien. C`est, d`abord, le fait que la capacite de production du parc éolien est variable. Ensuite, l`l’installation des éoliennes à grande échelle nécessitent de vastes terrains. Même en Russie, les investisseurs sont confrontés à des problèmes liés au prix élevé des terrains. Enfin, en raison des obstacles administratifs, il n'est pas facile de transformer juridiquement des terres agricoles en terres industrielles.
            v-flex(xs1 sm1 md4 lg6)
        h2.headlinee.mt-7 Géothermie
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                img(:src="require('../assets/img/geo-map.png')" data-action="zoom" width="100%" style="margin: auto" alt="Carte de la geothermie").img-zoom
                p.source
                    a(href="https://lektsii.org/6-47909.html" target="_blank" rel="noreferrer") Source
                p.post Dans de nombreuses régions du pays (la partie européenne de la Russie, la Sibérie, l'Extrême-Orient), il existe des réserves de fluides géothermiques chauds (50-200oC, 200-3000km).
                p.post La capacité géothermique installée, principalement située dans la partie orientale de la Russie, a atteint 86 MW fin 2015. L'une des tendances les plus importantes dans le développement de l'énergie géothermique du pays est la construction de centrales géothermiques binaires. Trois grandes centrales géothermiques sont en service au Kamchatka : deux d'entre elles de 12 MW et une de 50 MW de capacité totale installée.
            v-flex(xs1 sm1 md4 lg6)

        h2.headlinee.mt-7 L'énergie des océans et des marées
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                img(:src="require('../assets/img/hydro-map.png')" data-action="zoom" width="100%" style="margin: auto" alt="Carte de l'hydroenergie").img-zoom
                p.source
                    a(href="http://aenergy.ru/1524" target="_blank" rel="noreferrer") Source
                p.post Le potentiel économiquement réalisable de l'hydroélectricité est près de cinq fois supérieur à la capacité actuelle en exploitation, en particulier dans la partie orientale de la Sibérie. Pour les petites centrales hydroélectriques, le plus grand potentiel se trouve dans les parties centrale et orientale du pays.
                p.post Le nord de la Russie dispose d'importantes ressources marémotrices. La mer Blanche et la mer d'Okhotsk ont des marées parmi les plus hautes du monde, atteignant plus de 10 mètres.
                img(:src="require('../assets/img/wave-map.png')" data-action="zoom" width="100%" style="margin: auto" alt="Carte de marees").img-zoom
                p.source
                    span(style="font-size: 85%; font-weight: light") La mer Blanche
                    br
                    a(href="http://carto.geogr.msu.ru/wavenergy/" target="_blank" rel="noreferrer") Source
                p.post Parmi les sites potentiels pour les installations d'énergie marémotrice, on trouve Mezen et Tugur, qui ont un amplitude moyenne des marées de 5,5 m et offrent un potentiel combiné d'environ 22 GW, couvrant une zone de bassin de plus de 3 500 km2 (Gorlov, 2009). Le potentiel total de production marémotrice est estimé à environ 90 GW (Helston, 2012).
            v-flex(xs1 sm1 md4 lg6)

        h2.headlinee.mt-7 Bioénergie
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                img(:src="require('../assets/img/pellet-map.png')" data-action="zoom" width="100%" style="margin: auto" alt="Marche des pellets").img-zoom
                p.source
                    a(href="https://epc.bioenergyeurope.org/about-pellets/pellets-statistics/world-pellet-map/" target="_blank" rel="noreferrer") Source
                p.post La Russie possède un cinquième de la superficie forestière mondiale. Une grande partie de cette surface se trouve en Sibérie. Le pays dispose donc de riches ressources pour la bioénergie sous toutes ses formes - des produits forestiers et de la tourbe aux déchets agricoles. Aujourd'hui, la Russie est devenue le cinquième producteur de pellets au monde, et le troisième exportateur de granulés de bois vers l'UE (environ 0,9 mégatonnes, Mt), après le Canada (1,6 Mt) et les États-Unis (1,9 Mt)
                p.post
                    span La plus grande capacité de production de granulés installée dans le pays appartient à 
                    a(href="http://www.vfdc.ru/" target="_blank" rel="noreferrer") la société forestière Vyborgskaya.
                    span  Leur usine, qui a une capacité de production annuelle de 1 Mt, est située dans la région de Leningrad. Ses besoins annuels en bois rond sont de 2,2 millions de m3 (Ekman & Co., 2013). Puisque 95% de la production de l'entreprise sont exportés.
                p.post Mais actuellement, les biocombustibles sont sous-développés. Le coût de la production de biocarburants est élevé, et il n'existe pas de mécanismes d’aide de la part de l`Etat, quant à leur utilisation.
            v-flex(xs1 sm1 md4 lg6)
        h2.headlinee.mt-7 Le problème de tous ses secteurs
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                p.post Le problème de tous les secteurs d'énergie renouvelable est le coût des projets qui reste supérieur à la moyenne mondiale. Cela est dû en partie à l'introduction récente de ces technologies et aux spécificités du pays (par exemple, un vaste territoire de la Russie, qui nécessite le transport de matériel sur de longues distances, ce qui augmente les coûts).
                p.post Les deux principales questions sont, primo,
                p.post -	Comment relier les installations aux communautés concentrées dans différentes parties du pays et, secundo,
                p.post -	Comment effectuer la transition entre les systèmes énergétiques.
                p.post Pour rendre l'industrie efficace, Il s`agit de mettre en place une réglementation claire, de réduire les tarifs de l'électricité pour les utilisateurs finaux et de garantir un accès non discriminatoire aux réseaux.
                p.post Globalement, Le développement des SER, mis à part l'hydroélectricité et la bioénergie, est lent en Russie. A ce jour les sources traditionnelles de charbon, de pétrole et de gaz naturel dominent.
                //картинка сравнения рф и канады, где основные виэ – гидро и биоэнергетика
            v-flex(xs1 sm1 md4 lg6)
        h2.headlinee.mt-7 Possibilités ultérieures
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                //Здесь раздел сократится, тк многое я проиллюстрирую и покажу картинкой
                p.post Une des stratégies d'utilisation des meilleures ressources éoliennes de la Russie, situées sur la côte pacifique, c`est l`exportation d'électricité vers la Chine. Outre la Chine, il est possible d'exporter de l’Energie vers l'Europe. Cela pourrait aider l'UE à atteindre plus rapidement ses objectifs en matière d'énergies renouvelables, et la Russie pourrait bénéficier de l'émergence de l'industrie locale.
                    p.post Le développement des technologies d'énergies renouvelables peut contribuer à la croissance économique, en créant des activités et des emplois.
                p.post Par exemple, l'industrie hydroélectrique russe emploie aujourd'hui plus de 65 000 personnes, ce qui en fait le cinquième plus gros employeur au monde. Avec une augmentation de la part des SER, l'emploi total du secteur pourrait atteindre 1 million de personnes d'ici 2030.
                p.post Par ailleurs, autour de chaque technologie d'énergie renouvelable, il existe tout un système de production et de vente qui crée de nombreuses opportunités commerciales.
                p.post Avec la diffusion des énergies renouvelables, la Russie renforcerait son potentiel scientifique.
                p.post Le pays pourrait produire des équipements pour l'utilisation des SER et devenir un exportateur compétitif. Or, leur élaboration prend du temps et peut être coûteuse. Par conséquent, la Russie pourrait opter pour l'importation des équipements et des technologies. Cependant, l`importation créerait également une dépendance et augmenterait le coût des services.
                p.post Par rapport aux énergies fossiles, les énergies renouvelables peuvent apporter des avantages environnementaux importants, notamment, une baisse considérable de la pollution atmosphérique.
                p.post En outre, la promotion de l’énergie durable pourrait diversifier le bilan énergétique du pays, réduire les coûts d'approvisionnement en énergie dans des régions éloignées et aider la Russie à respecter ses obligations internationales, comme celles recommandées (imposees ?) par la COP 21.
                p.headline.text-center(style="font-family: 'Candara'!important") Le monde dans dix ans..?
                v-layout.justify-center
                    video(:width="isMobile ? '100%' : '50%'" autoplay loop)
                        source(:src="require('../assets/img/inst.mp4')" type="video/mp4")
                p.source
                    a(href="https://www.instagram.com/p/B82AtHanASH/?igshid=1r45spszjwdxb" target="_blank" rel="noreferrer") Source
                //else
                    v-icon mdi-chevron-right
            v-flex(xs1 sm1 md4 lg6)

        h2.headlinee.mt-7 Notre équipe époustouflante
        v-layout(justify="space-around")
            v-flex(xs0 sm2 lg3)
            v-flex(xs12 sm8 lg6)
                v-row(cols="12" style="width: 100%").mt-2.pb-10
                    v-flex(xs4)
                        v-card(flat color="transparent")
                            center
                              v-img(:src="require('../assets/img/team-design.webp')" style="border-radius: 50%; width: 80%" alt="Designer principal")
                            center(style="font-size: 130%;") Designer principal
                    v-flex(xs4)
                        v-card(flat color="transparent")
                            center
                                v-img(:src="require('../assets/img/team-market.webp')" style="border-radius: 50%; width: 80%" alt="Chef de file du marketing")
                            center(style="font-size: 130%;") Chef de file du marketing
                    v-flex(xs4)
                        v-card(flat color="transparent")
                            center
                                v-img(:src="require('../assets/img/team-dev.webp')" style="border-radius: 50%; width: 80%" alt="Développeur principal")
                            center(style="font-size: 130%;") Développeur principal
            v-flex(xs0 sm2 lg3)





</template>
<script lang="ts">
    import Vue from "vue";
    import * as store from "../plugins/store";
    import Component from "vue-class-component";
    import {i18n} from "../plugins/i18n";
    // @ts-ignore
    import {GChart} from 'vue-google-charts'
    import Doughnut_summary from "../components/Doughnut_summary.vue";
    import {Watch} from "vue-property-decorator";


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

        get isMobile() {
            return window.innerWidth < 600;
        }

        get imgNum() {
            let num = Math.floor(Math.random() * Math.floor(5));  // 0-4
            return "1-" + num + ".png"
        }

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
        Doughnut_summaryRussiaData: object = {
            labels: ['Gaz naturel',
                'Pétrole',
                'Charbon',
                'Nucléaire',
                'Hydroénergie',
                'Bioénergie',
                'Renouvelables'],
            data: [338334, 153963, 113581, 53279, 15908, 7801, 165]
        };
        Doughnut_summaryCanadaData: object = {
            labels: ['Gaz naturel',
                'Pétrole',
                'Charbon',
                'Nucléaire',
                'Hydroénergie',
                'Bioénergie',
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

    .font {
        font-family: "TTSupermolotNeue" !important;
        font-weight: 600;
    }

    .block-text {
        width: 100%;
        background-color: #FFF;
        margin: 40px auto 40px;
        position: relative;
        display: block;
        padding: 40px 60px;
        clear: both;
        box-sizing: border-box;
    }
    @media screen and (max-width: 600px){
        .block-text {
            padding: 40px 30px;
        }
    }

    .block-text p {
        font-size: 1.2rem;
    }

    p, pre {
        margin: 1em 0;
    }

    p.post {
        font-family: 'Candara';
    }

    .headlinee {
        font-family: 'TTSupermolotNeue';
        font-size: 3rem;
        text-align: center;
        color: #444;
    }
    .v-window__container {
        height: 515px!important;
    }
    .v-window__container--is-active {
        height: 515px!important;
        padding: 0;
        margin: 0;
    }
    .source {
        text-align: center;
        padding-top: 0;
        margin-top: 0;
    }
    .source a {
        font-weight: 300;
        font-family: 'Candara';
        font-style: italic;
        color: #999!important;
        text-decoration: underline;
    }
    span.page-title {
        width: 100%;
        font-size: 3rem;
        line-height: 130%;
        display: inline;
        background-color: white;
        text-align: center;
        font-family: 'TTSupermolotNeue',sans-serif;
    }
    @media screen and (max-width: 600px){
        span.page-title {
            font-size: 2.5rem;
        }
        .headlinee {
            font-size: 2.2rem;
        }
    }
    @media screen and (min-width: 1000px){
        span.page-title {
            font-size: 4.5rem;
        }
        .headlinee {
            font-size: 3.5rem;
        }
    }
    #summary {
        width: 100vw!important;
    }
</style>
