<template>
  <div style="background-color: black">
    <q-parallax
      id="education"
      src="statics/images/beach.jpg"
      :height="educationBoxHeight"
    >
      <div class="q-px-sm q-py-xl">
        <div class="container q-gutter-y-lg">
          <div class="text-h4 text-white ubuntu-mono">
            Education
          </div>
          <div class="q-px-lg text-wrap">
            <div
              class="text-h6"
              style="color: #ecaa00; text-shadow: 0 0 10px black;"
            >
              California State University Long Beach, CA
            </div>
            <div
              class="text-subtitle1 text-white"
              style="text-shadow: 0 0 10px #ffda27"
            >
              Bachelor of Science (B.S.), Management Information Systems,
              General
            </div>
            <div style="color: #ffda27">
              2010 — 2013
            </div>
          </div>
        </div>

        <q-resize-observer @resize="onEducationBoxResize" />
      </div>
    </q-parallax>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      educationBoxHeight: 0,
    };
  },
  methods: {
    onEducationBoxResize(size) {
      this.educationBoxHeight = size.height;
    },
  },
};
</script>

<style lang="scss" scoped>
#education {
  ::v-deep .q-parallax__content {
    align-items: stretch;
  }
}

#education {
  ::v-deep .q-parallax__media {
    filter: blur(1px) brightness(30%);
  }
}
</style>
