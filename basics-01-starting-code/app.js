const app = Vue.createApp({
  data() {
    return {
      courseGoal1: 'Finish the course and learn Vue!',
      courseGoal2: 'Star the course and learn Vue!',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoal1;
      } else {
        return this.courseGoal2;
      }
    },
  },
});

app.mount('#user-goal');
