const app = Vue.createApp({
  data() {
    return {
      name: 'Jauharuddin',
      age: 28,
      image:
        'https://m.media-amazon.com/images/M/MV5BODM1ZjU4NzgtZGQ3NC00MDY4LTkwNTctNGE2N2I2MGQ3Y2Y3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg',
    };
  },
  methods: {
    favoriteNumber() {
      const randomNumber = Math.floor(Math.random() * 3);
      return randomNumber;
    },
  },
});

app.mount('#assignment');
