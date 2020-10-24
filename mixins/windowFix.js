export default {
  data() {
    return {
      windowFixTargetIdList: [
        'global-header',
        'modal',
        'loading',
      ],
    }
  },
  methods: {
    windowFix() {
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.paddingRight = `${scrollBarWidth}px`;
      this.windowFixTargetIdList.forEach(targetId => {
        if (!document.getElementById(targetId)) return;
        document.getElementById(targetId).style.paddingRight = `${scrollBarWidth}px`;
      });
    },
    windowFixClear() {
      document.documentElement.style.overflow = null;
      document.documentElement.style.paddingRight = null;
      this.windowFixTargetIdList.forEach(targetId => {
        if (!document.getElementById(targetId)) return;
        document.getElementById(targetId).style.paddingRight = null;
      });
    },
  }
}
