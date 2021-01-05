<template>
  <div style="background-color: black">
    <q-parallax
      id="projects"
      src="images/coffee.jpg"
      :height="projectsBoxHeight"
    >
      <div class="q-px-sm q-py-xl">
        <div class="container q-gutter-y-lg">
          <div class="text-h4 text-white ubuntu-mono">Projects</div>
          <div class="row q-px-lg q-col-gutter-md">
            <div
              v-for="project in projects"
              :key="project.title"
              class="col-xs-12 col-sm-6 col-md-4 column"
            >
              <q-card class="col column" dark style="opacity: 0.8">
                <q-card-section>
                  <div class="text-h6 text-white ubuntu-condensed">
                    {{ project.title }}
                  </div>
                </q-card-section>
                <div>
                  <q-separator dark inset color="orange" />
                </div>
                <q-card-section>
                  <div class="text-grey-4">
                    {{ project.description }}
                  </div>
                </q-card-section>
                <q-card-section class="q-py-none">
                  <q-chip
                    v-for="(stack, index) in project.stack"
                    :key="index"
                    :label="stack"
                    class="ubuntu"
                    color="light-blue"
                    dense
                    text-color="white"
                  />
                </q-card-section>
                <q-card-actions
                  v-if="project.demo || project.github"
                  class="col items-end"
                >
                  <div class="q-pa-sm q-gutter-x-sm">
                    <q-btn
                      v-if="project.demo"
                      outline
                      color="secondary"
                      icon="fas fa-play-circle"
                      label="demo"
                      rel="noopener"
                      target="_blank"
                      type="a"
                      :href="project.demo"
                    />
                    <q-btn
                      v-if="project.github"
                      outline
                      icon="fab fa-github-alt"
                      label="github"
                      style="color: #f34f29"
                      rel="noopener"
                      target="_blank"
                      type="a"
                      :href="project.github"
                    />
                  </div>
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </div>

        <q-resize-observer @resize="onProjectsBoxResize" />
      </div>
    </q-parallax>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projectsBoxHeight: 0,
      projects: [
        {
          title: 'Emoting Mokou',
          description:
            'An app for tweeting "Emoting Mokou" memes. Emoting Mokou is a collection of images featuring the character Mokou from Touhou, Japanese video game series, with Chinese and "Engrish" captions, created by the artist Shangguan Feiying.',
          stack: [
            'Vue.js',
            'Node.js',
            'Express',
            'MongoDB Atlas',
            'AWS',
            'CloudFront',
            'API Gateway',
            'Lambda',
            'S3',
          ],
          demo: 'https://www.emotingmokou.moe',
          github: 'https://github.com/Mirakurun/emoting-mokou',
        },
        {
          title: 'Serverless Invoice',
          description:
            'Work in progress. An online invoicing application. Send invoice via email. Payment processing powered by Stripe API.',
          stack: [
            'Vue.js',
            'Node.js',
            'Express',
            'MongoDB Atlas',
            'AWS',
            'CloudFront',
            'API Gateway',
            'Lambda',
            'S3',
            'SES',
          ],
          demo: 'https://serverless-invoice.mirakurun.dev',
          github: 'https://github.com/Mirakurun/serverless-invoice',
        },
        {
          title: 'AWS Lambda SES S3 Email Forwarder',
          description:
            'A Node.js Lambda function that utilizes Amazon SES to forward incoming emails to an email address inbox. Setup Amazon SES to receive emails and deliver to a S3 bucket, then invoke lambda to forward the email to your email of choice.',
          stack: ['Vue', 'Node.js', 'AWS', 'Lambda', 'S3', 'SES'],
          github:
            'https://github.com/Mirakurun/aws-lambda-ses-s3-email-forwarder',
        },
        {
          title: 'Calculator',
          description: 'A basic calculator',
          stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
          demo: 'https://mirakurun.github.io/freecodecamp/calc/',
          github:
            'https://github.com/Mirakurun/mirakurun.github.io/tree/master/freecodecamp/calc',
        },
        {
          title: 'Simon Game',
          description: 'Play Simon',
          stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
          demo: 'https://mirakurun.github.io/freecodecamp/simon/',
          github:
            'https://github.com/Mirakurun/mirakurun.github.io/tree/master/freecodecamp/simon',
        },
      ],
    };
  },
  methods: {
    onProjectsBoxResize(size) {
      this.projectsBoxHeight = size.height;
    },
  },
};
</script>

<style lang="scss" scoped>
.q-parallax {
  ::v-deep .q-parallax__media {
    filter: blur(1px) brightness(50%);
  }
}
</style>
