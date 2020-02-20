<template>
  <div style="background-color: black">
    <q-parallax src="statics/images/macbook.jpg">
      <div class="q-px-sm q-py-xl">
        <div class="container q-gutter-y-md">
          <div
            :class="[
              { 'text-h1': $q.screen.gt.xs },
              { 'text-h3': $q.screen.lt.sm },
              'text-white',
            ]"
          >
            Kevin Chhay
          </div>
          <div class="text-h4 text-info q-mb-lg ubuntu-mono">
            Web Developer
          </div>
          <q-btn
            outline
            color="amber"
            icon="fas fa-file-download"
            label="resume"
            size="lg"
            type="a"
            href="statics/resume/resume.pdf"
            download
          />
        </div>
      </div>
    </q-parallax>
  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss" scoped>
.q-parallax {
  ::v-deep .q-parallax__media {
    filter: blur(1px) brightness(50%);
  }
}
</style>
