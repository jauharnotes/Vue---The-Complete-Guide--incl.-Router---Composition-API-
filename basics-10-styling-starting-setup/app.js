const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxClasses() {
      return { active: this.boxBSelected };
    },
  },
  methods: {
    boxSelected(value) {
      if (value === 'A') {
        this.boxASelected = !this.boxASelected;
      } else if (value === 'B') {
        this.boxBSelected = !this.boxBSelected;
      } else if (value === 'C') {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount('#styling');
