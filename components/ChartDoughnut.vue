<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  props:['chartdata', 'isActive', 'duration'],
  data() {
    return {
      data: {
        datasets: [
          {
            backgroundColor: ['#333333', 'transparent'],
            hoverBackgroundColor: ['#333333', 'transparent'],
            borderWidth: 0,
            // data: [],
          },
        ],
      },
      options: {
        animation: {
          // duration: 2000,
          easing: 'linear',
        },
        cutoutPercentage: 80,
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          enabled: false,
        },
      },
    }
  },
  methods: {
    init() {
      this.renderChart(this.data, this.options);
    }
  },
  mounted() {
    this.data.datasets[0].data = this.chartdata;
    this.options.animation.duration = this.duration;
  },
  watch: {
    isActive(newState, oldState) {
      if (newState && !oldState) {
        this.init();
      }
    }
  }
}
</script>
