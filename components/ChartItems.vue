<template>
  <div class="chart-items">
    <div class="row">
      <div ref="chart1" class="col-sm-4">
        <div class="chart-item">
          <chart-doughnut
            :height="chartHeight"
            :chartdata="chart1.data"
            :isActive="chart1.isActive"
            :duration="chartDuration"
            class="chart-item__chart"
          />
          <p v-show="chart1.isActive" class="chart-item__count">{{ chart1.count | formatCount }}%</p>
        </div>
        <p class="chart-item__text">顧客満足度</p>
      </div>
      <div ref="chart2" class="col-sm-4">
        <div class="chart-item">
          <chart-doughnut
            :height="chartHeight"
            :chartdata="chart2.data"
            :isActive="chart2.isActive"
            :duration="chartDuration"
            class="chart-item__chart"
          />
          <p v-show="chart2.isActive" class="chart-item__count">{{ chart2.count | formatCount }}%</p>
        </div>
        <p class="chart-item__text">業界シェア</p>
      </div>
      <div ref="chart3" class="col-sm-4">
        <div class="chart-item">
          <chart-doughnut
            :height="chartHeight"
            :chartdata="chart3.data"
            :isActive="chart3.isActive"
            :duration="chartDuration"
            class="chart-item__chart"
          />
          <p v-show="chart3.isActive" class="chart-item__count">{{ chart3.count | formatCount }}%</p>
        </div>
        <p class="chart-item__text">見出しが入ります</p>
      </div>
    </div>
  </div>
</template>

<script>
import ChartDoughnut from '@/components/ChartDoughnut'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  data() {
    return {
      chartDuration: 1000,
      chartHeight: 200,
      chart1: {
        data: [81, 19],
        isActive: false,
        count: 0,
      },
      chart2: {
        data: [95, 5],
        isActive: false,
        count: 0,
      },
      chart3: {
        data: [90, 10],
        isActive: false,
        count: 0,
      },
    }
  },
  components: {
    ChartDoughnut,
  },
  methods: {
    animChart(name) {
      this[name].isActive = true;
      gsap.to(this.$data[name], {
        duration: this.chartDuration / 1000,
        count: this[name].data[0],
        ease: 'power0.easeNone',
      });
    },
    animHandler(name) {
      ScrollTrigger.create({
        trigger: this.$refs[name],
        start: "top 50%",
        onEnter: self => {
          this.animChart(name);
          self.kill();
        }
      });
    }
  },
  filters: {
    formatCount(count) {
      return count.toFixed(0);
    }
  },
  mounted() {
    this.animHandler('chart1');
    this.animHandler('chart2');
    this.animHandler('chart3');
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.chart-item {
  position: relative;
  height: 200px;
  margin-bottom: 16px;
}
.chart-item__chart {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.chart-item__count {
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 48px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
}
.chart-item__text {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  @include mq(sm) {
    margin-bottom: 36px;
  }
}
</style>
