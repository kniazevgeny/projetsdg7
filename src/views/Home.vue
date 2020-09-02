<template lang="pug">
    v-layout(column)
        v-parallax(row, :src="require('../assets/img/1.png')", height="820", id="parallax1")
            v-card(flat, style="width: 90%; margin-left: 5%; background: rgba(0, 0, 0, 0)")
                p {{$t('home.b1')}}
                v-layout(wrap)
                    GChart(
                    type="GeoChart"
                    :data="map1Data"
                    :options="map1Options"
                    :settings="{mapsApiKey: apiKey, packages: ['geochart']}"
                    style="width: 1000px; margin: 0px auto; background: rgba(0, 0, 0, 0); fill: #000")
        h2.headlinee.mt-7 Développement durable
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                p.post L'utilisation des combustibles fossiles est la façon la plus simple de les utiliser, car il s'agit d'un processus déjà bien établi et il est facile d'en tirer de l'énergie.
                p.post En même temps, les articles sur l'énergie écrivent que pour être respectueux de l'environnement, il est nécessaire de développer des sources d'énergie renouvelables, mais qu'il est difficile de le réaliser.
                p.post Par exemple en 2018 la Canada a atteint 10.3% d`energie durable dans sa consommation d’énergie tandis que la Russie - seulement 0.21%.
                img(:src="require('../assets/img/energy-use.png')" data-action="zoom" width="100%" style="margin: auto").img-zoom
                p.post Le Canada se trouve dans l'hémisphère nord et à peu près sur la même latitude que la Russie. Ce qui fait ses zones climatiques similaires aux nôtres.
                p.post Essayons de comprendre, comment la Russie pourrait atteindre le niveau de la Canada dans le domaine d`énergie durable.
                p.post Comme leur nom l’indique, il s’agit de sources qui se renouvellent et ne s’épuiseront donc jamais à l’échelle du temps humain !
                p.post Ce sont:
                    br
                    span •	L’énergie solaire
                    br
                    span •	L’énergie éolienne
                    br
                    span •	La bioénergie
                    br
                    span •	L’énergie hydraulique
                    br
                    span •	L’énergie géothermique
                img(:src="require('../assets/img/renouvelables-explained.png')" data-action="zoom" width="100%" style="margin: auto").img-zoom
                //image-dialog(
                //:full="require('../assets/img/renouvelables-explained.png')",
                //:full-width="945",
                //:full-height="600")
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
                p.post Quant a l`energie geothermique, elle ne dépend pas des conditions atmosphériques - il s’agit de l'extraction de l'énergie contenue dans le sol. Et. Cette chaleur résulte de la désintégration radioactive des atomes fissiles contenus dans les roches.
                p.post Dans le système énergétique russe l'hydroélectricité et la bioénergie occupent une place importante. Le reste de l'énergie renouvelable est réparti entre l'énergie solaire, l'énergie éolienne et l'énergie géothermique.
            v-flex(xs1 sm1 md4 lg6)
        h2.headlinee.mt-7 Réseau énergétique russe
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                img(:src="require('../assets/img/diesel-generators.png')" data-action="zoom" width="100%" style="margin: auto").img-zoom
                p.post La particularité du réseau énergétique russe est qu`il est décentralisé. Il y a au moins 900 générateurs diesel en Russie qui fournissent de l'énergie pour des zones peu peuplées. Ces générateurs sont vieux et inefficaces. Par conséquent, les coûts d`exploitation peuvent être extrêmement élevés - parfois de plus de 12 fois par rapport aux valeurs habituelles. En outre, ces territoires souffrent d'une mauvaise qualité de l'air.
                p.post Pour surmonter les problèmes de la demande locale d'électricité, des systèmes autonomes de SER et de tourbe ont été inclus dans les projets du gouvernement en tant que sources d'énergie prometteuses.
            v-flex(xs1 sm1 md4 lg6)

        h2.headlinee.mt-7 L’énergie solaire
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                img(:src="require('../assets/img/sun-map.png')" data-action="zoom" width="100%" style="margin: auto").img-zoom
                p.post La Russie dispose de vastes zones favorables à l’utilisation d’énergie solaire en particulier dans les régions du sud-ouest et du sud. Cela représente en moyenne 1 200-1 500 kWh par an. Les installations ne peuvent fonctionner efficacement que pendant 4 à 5 mois par an. Il n'est donc pas possible de remplacer toute l’énergie basée sur des générateurs diesel par des cellules solaires.
                p.post Le problème majeur est que le coût de production des panneaux solaires est relativement élevé, par rapport aux combustibles fossiles. Un autre obstacle au développement est l'absence de lois et de politique gouvernementale claire dans ce domaine. En outre, l'expérience a montré que le transport des panneaux solaires vers des régions éloignées est également difficile et coûteux.
            v-flex(xs1 sm1 md4 lg6)

        h2.headlinee.mt-7 Energie du vent
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                img(:src="require('../assets/img/wind-map.png')" data-action="zoom" width="100%" style="margin: auto").img-zoom
                p.post La Russie possède le plus grand potentiel éolien du monde.
                p.post Dans les régions du nord de la Russie, ainsi que dans le sud-ouest et en Extrême-Orient soufflent des vents, dont la vitesse dépasse facilement 8 m/s à 100 m de hauteur.
                p.post Théoriquement, le potentiel économique éolien pourrait atteindre 30 % de la production d'électricité du pays, alors qu`à ce jour, la part des parcs éoliens en Russie est inférieure à 0,1 % de la production totale d'électricité (APREN, 2016).
                p.post Plusieurs facteurs entravent le développement du parc éolien. C`est, d`abord, le fait que la capacite de production du parc éolien est variable. Ensuite, l`l’installation des éoliennes à grande échelle nécessitent de vastes terrains. Même en Russie, les investisseurs sont confrontés à des problèmes liés au prix élevé des terrains. Enfin, en raison des obstacles administratifs, il n'est pas facile de transformer juridiquement des terres agricoles en terres industrielles.
            v-flex(xs1 sm1 md4 lg6)
        h2.headlinee.mt-7 Géothermie
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                p.post Dans de nombreuses régions du pays (la partie européenne de la Russie, la Sibérie, l'Extrême-Orient), il existe des réserves de fluides géothermiques chauds (50-200oC, 200-3000km),
            v-flex(xs1 sm1 md4 lg6)

        h2.headlinee.mt-7 L'énergie des océans et des marées
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                p.post Le nord de la Russie dispose d'importantes ressources marémotrices. La mer Blanche et la mer d'Okhotsk ont des marées parmi les plus hautes du monde, atteignant plus de 10 mètres.
            v-flex(xs1 sm1 md4 lg6)

        h2.headlinee.mt-7 Bioénergie
        v-layout(justify="space-around")
            v-flex(xs1 sm1 md4 lg6)
            v-card.block-text(color="#fff" xs5 md4 flat)
                p.post La Russie possède un cinquième de la superficie forestière mondiale. Une grande partie de cette surface se trouve en Sibérie. Le pays dispose donc de riches ressources pour la bioénergie sous toutes ses formes - des produits forestiers et de la tourbe aux déchets agricoles.
                p.post Mais actuellement, les biocombustibles sont sous-développés. Le coût de la production de biocarburants est élevé, et il n'existe pas de mécanismes d’aide de la part de l`Etat, quant à leur utilisation.
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
            v-flex(xs1 sm1 md4 lg6)


        //TODO: Font Candara
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
        Doughnut_summaryRussiaData: object = {
            labels: ['Gaz naturel',
                'Oil',
                'Charbon',
                'Nucléaire',
                'Hydroenergie',
                'Bioenergie et ?waste',
                'Renouvelables'],
            data: [338334, 153963, 113581, 53279, 15908, 7801, 165]
        };
        Doughnut_summaryCanadaData: object = {
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
        font-family: 'TT Supermolot Neue';
        font-size: 3rem;
        text-align: center;
        color: #444;
    }
</style>
