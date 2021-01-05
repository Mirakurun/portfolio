<template>
  <q-page>
    <!-- Banner -->
    <banner />

    <!-- Skills -->
    <skills />

    <!-- Projects -->
    <projects />

    <!-- Work Experience -->
    <experience />

    <!-- Education -->
    <education />

    <!-- Ceritifation -->
    <certification />

    <!-- Contact -->
    <contact />

    <!-- Page Scroller -->
    <q-page-scroller position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="fas fa-arrow-up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script>
import Banner from 'components/Banner.vue';
import Skills from 'components/Skills.vue';
import Projects from 'components/Projects.vue';
import Experience from 'components/Experience.vue';
import Education from 'components/Education.vue';
import Certification from 'components/Certification.vue';
import Contact from 'components/Contact.vue';

export default {
  name: 'PageIndex',
  components: {
    Banner,
    Skills,
    Projects,
    Experience,
    Education,
    Certification,
    Contact,
  },
  mounted() {
    particlesJS.load(
      'skills-particles',
      'config/particlesjs-skills-container-config.json'
    );
  },
};
</script>
