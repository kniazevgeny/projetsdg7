<script lang="ts">
    import Vue from "vue";
    import Component, {mixins} from "vue-class-component";
    import {Prop} from 'vue-property-decorator';
    import {Doughnut} from 'vue-chartjs'

    @Component
    export default class PieChart_summaryRussia extends mixins(Doughnut) {
        @Prop({required: true})
        public labels!: object[];

        @Prop({required: true})
        public data!: object[];

        mounted() {
            let t = this as any;
            t.gradient = t.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);
            t.gradient2 = t.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);

            t.gradient.addColorStop(0, "rgba(255, 0,0, 0.8)");
            t.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.35)");
            t.gradient.addColorStop(1, "rgba(255, 50, 50, 0.75)");

            t.gradient2.addColorStop(0, "rgba(75, 151, 255, 0.55)");
            t.gradient2.addColorStop(0.5, "rgba(75, 151, 255, 0.25)");
            t.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");
            t.renderChart(
                {
                    labels: this.labels,
                    datasets: [
                        {
                            backgroundColor: [t.gradient2, t.gradient, "#666", "#FFA500", "#00DFF9", "#0AF55F", "#F5F500"],
                            data: this.data
                        }
                    ]
                },
                {responsive: true, maintainAspectRatio: false}
            );
        }
    }
</script>