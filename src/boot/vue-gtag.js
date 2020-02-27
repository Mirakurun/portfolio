import VueGtag from 'vue-gtag';

export default async ({ router, Vue }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'UA-158839652-1' },
    },
    router
  );
};
