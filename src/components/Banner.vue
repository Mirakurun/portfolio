<template>
  <div style="background-color: black">
    <q-parallax src="images/macbook.jpg">
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
            Software Engineer
          </div>
          <q-btn
            outline
            color="amber"
            icon="fas fa-file-download"
            label="resume"
            size="lg"
            type="a"
            href="https://docs.google.com/document/d/1hpoYpobBC4w1p9xURMy7zmvgCx0qxREJGIW8m8veV-A/export?format=pdf"
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
