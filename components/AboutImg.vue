<template>
  <div class="about-img">
    <svg ref="svg" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice">
      <defs>
        <mask class="about-img__mask">
          <path class="about-img__mask--base" d="M 0 150 l 150 -150 l 150 150 l -150 150 l -150 -150 Z" />
        </mask>
      </defs>
      <foreignObject class="about-img__img-wrapper" width="300" height="300">
        <div class="about-img__img" :style="{'background-image': `url(${bgImg})`}"></div>
      </foreignObject>
    </svg>
  </div>
</template>

<script>
export default {
  props: ['bgImg', 'isAnimated'],
  data() {
    return {
      svg: '',
      mask: '',
      maskBase: '',
      img: '',
      maskGroups: [],
      maskPoints: [
        ['0 150'],
        ['30 120', '30 180'],
        ['60 90', '60 150', '60 210'],
        ['90 60', '90 120', '90 180', '90 240'],
        ['120 30', '120 90', '120 150', '120 210', '120 270'],
        ['150 60', '150 120', '150 180', '150 240'],
        ['180 90', '180 150', '180 210'],
        ['210 120', '210 180'],
        ['240 150'],
      ]
    }
  },
  methods: {
    setMasks() {
      // マスクを作成
      this.maskPoints.forEach(points => {
        const g = this.mask.g();
        points.forEach(point => {
          const pathVal = this.getPathVal(point);
          const path = g.path(pathVal);
          g.add(path);
        });
        g.attr({
          fill: '#fff',
          fillOpacity: 0,
        });
        this.mask.append(g);
        // グループを配列に追加（画像表示アニメーションに利用）
        this.maskGroups.push(g);
      });
      // 画像にマスクを適用
      this.img.attr({
        mask: this.mask
      });
    },
    setSvgEl() {
      this.svg = Snap(this.$refs.svg);
      this.mask = this.svg.select('.about-img__mask');
      this.maskBase = this.svg.select('.about-img__mask--base');
      this.img = this.svg.select('.about-img__img-wrapper');
    },
    getPathVal(point) {
      return `M ${point} l 30 -30 l 30 30 l -30 30 l -30 -30 Z`;
    },
    init() {
      if (process.client) {
        this.setSvgEl();
        this.setMasks();
      }
    },
    showImg() {
      this.maskGroups.forEach((group, index) => {
        // 100ms間隔でグループを表示
        setTimeout(() => {
          group.animate({
            fillOpacity: 1,
          }, 1000, () => {
            // 最後にベースのマスクを表示（個別のマスクのみだと境目に線が残ってしまうため）
            if (index === (this.maskGroups.length - 1)) {
              this.maskBase.animate({
                fill: '#fff'
              }, 500);
            }
          });
        }, 100 * index);
      });
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    isAnimated(newState, oldState) {
      if (newState && !oldState) {
        this.showImg();
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.about-img {
  width: 300px;
  max-width: 100%;
  margin: 0 auto 16px;
  @include mq(sm) {
    margin: 0 auto;
  }
}
.about-img__img {
  width: 300px;
  height: 300px;
  background-position: center center;
  background-size: cover;
}
</style>
