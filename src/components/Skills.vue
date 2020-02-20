<template>
  <div id="skills" class="q-px-sm q-py-xl relative-position bg-grey-2">
    <div class="container">
      <div class="q-mb-lg text-h4 text-grey-8 ubuntu-mono">
        Technical Skills
      </div>
      <div class="row q-col-gutter-y-lg ubuntu">
        <div
          v-for="skill in skills"
          :key="skill.text"
          :class="[
            { 'q-gutter-y-sm': skill.gutter },
            'col-sm-4',
            'col-md-2',
            'gt-xs',
            'text-center',
          ]"
        >
          <i v-if="skill.icon" :class="skill.icon" :style="skill.style" />
          <q-icon v-if="skill.qicon" :name="skill.qicon" size="70px" />
          <q-img
            v-if="skill.qimage"
            :src="skill.qimage"
            contain
            no-default-spinner
            :style="skill.style"
            transition="none"
          />
          <div class="text-subtitle2 text-grey-10" :style="skill.textStyle">
            {{ skill.text }}
          </div>
        </div>
        <div class="lt-sm">
          <div>
            <ul
              class="text-subtitle1 text-grey-10"
              style="list-style-type: none"
            >
              <li>Languages</li>
              <ul class="text-body1 text-grey-14" style="list-style-type: none">
                <li>HTML, CSS, JavaScript</li>
              </ul>
              <li>Technologies/Tools</li>
              <ul class="text-body1 text-grey-14" style="list-style-type: none">
                <li>
                  Bootstrap, Vue.js, Quasar Framework, Node.js, Express.js,
                  MongoDB, Git, Jest, Serverless Framework
                </li>
              </ul>
              <li>Cloud Platforms</li>
              <ul class="text-body1 text-grey-14" style="list-style-type: none">
                <li>
                  Amazon Web Services (S3, CloudFront, API Gateway, Lambda,
                  SES), MongoDB Atlas
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      id="skills-particles"
      class="absolute full-width full-height"
      style="top: 0; left: 0"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        {
          text: 'HTML',
          textStyle: false,
          icon: 'fab fa-html5 fa-fw fa-5x text-deep-orange',
          qicon: false,
          qimage: false,
          style: false,
          gutter: true,
        },
        {
          text: 'CSS',
          textStyle: false,
          icon: 'fab fa-css3-alt fa-fw fa-5x text-light-blue',
          qicon: false,
          qimage: false,
          style: false,
          gutter: true,
        },
        {
          text: 'JavaScript',
          textStyle: false,
          icon: 'fab fa-js fa-fw fa-5x text-amber',
          qicon: false,
          qimage: false,
          style: false,
          gutter: true,
        },
        {
          text: 'Bootstrap',
          textStyle: false,
          icon: 'fab fa-bootstrap fa-fw fa-5x',
          qicon: false,
          qimage: false,
          style: { color: '#563d7c' },
          gutter: true,
        },
        {
          text: 'Vue.js',
          textStyle: false,
          icon: 'fab fa-vuejs fa-fw fa-5x',
          qicon: false,
          qimage: false,
          style: { color: '#41B883' },
          gutter: true,
        },
        {
          text: 'Quasar Framework',
          textStyle: { 'margin-top': '8px' },
          icon: false,
          qicon: 'img:statics/images/quasar.svg',
          qimage: false,
          style: false,
          gutter: false,
        },
        {
          text: 'Node.js',
          textStyle: false,
          icon: 'fab fa-node fa-fw fa-5x',
          qicon: false,
          qimage: false,
          style: { color: '#68A063' },
          gutter: true,
        },
        {
          text: 'Express.js',
          textStyle: { 'margin-top': '8px' },
          icon: false,
          qicon: false,
          qimage: 'statics/images/expressjs.png',
          style: { height: '70px' },
          gutter: false,
        },
        {
          text: 'MongoDB',
          textStyle: { 'margin-top': '8px' },
          icon: false,
          qicon: 'img:statics/images/MongoDB_Leaf_FullColor_RGB.svg',
          qimage: false,
          style: false,
          gutter: false,
        },
        {
          text: 'Git',
          textStyle: false,
          icon: 'fab fa-git-alt fa-fw fa-5x',
          qicon: false,
          qimage: false,
          style: { color: '#f34f29' },
          gutter: true,
        },
        {
          text: 'Jest',
          textStyle: { 'margin-top': '8px' },
          icon: false,
          qicon: 'img:statics/images/jest.png',
          qimage: false,
          style: false,
          gutter: true,
        },
        {
          text: 'Serverless Framework',
          textStyle: { 'margin-top': '8px' },
          icon: false,
          qicon: 'img:statics/images/serverless.svg',
          qimage: false,
          style: false,
          gutter: false,
        },
        {
          text: 'Amazon Web Services',
          textStyle: false,
          icon: 'fab fa-aws fa-fw fa-5x text-orange',
          qicon: false,
          qimage: false,
          style: false,
          gutter: true,
        },
        {
          text: 'Simple Storage Service (S3)',
          textStyle: { 'margin-top': '8px' },
          icon: false,
          qicon: 'img:statics/images/Amazon-Simple-_Storage-Service-S3.svg',
          qimage: false,
          style: false,
          gutter: false,
        },
        {
          text: 'CloudFront',
          textStyle: { 'margin-top': '8px' },
          icon: false,
          qicon: 'img:statics/images/Amazon-CloudFront.svg',
          qimage: false,
          style: false,
          gutter: false,
        },
        {
          text: 'API Gateway',
          textStyle: { 'margin-top': '8px' },
          icon: false,
          qicon: 'img:statics/images/Amazon-API-Gateway.svg',
          qimage: false,
          style: false,
          gutter: false,
        },
        {
          text: 'Lambda',
          textStyle: { 'margin-top': '8px' },
          icon: false,
          qicon: 'img:statics/images/AWS-Lambda.svg',
          qimage: false,
          style: false,
          gutter: false,
        },
        {
          text: 'Simple Email Service (SES)',
          textStyle: { 'margin-top': '8px' },
          icon: false,
          qicon: 'img:statics/images/Amazon-Simple-Email-Service-SES.svg',
          qimage: false,
          style: false,
          gutter: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.fab,
.fas,
.far,
.q-icon,
.q-img {
  position: relative;
  z-index: 999;
}
</style>
