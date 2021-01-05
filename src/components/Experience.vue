<template>
  <div id="work-experience" class="q-px-sm q-py-xl bg-grey-2">
    <div class="container q-gutter-y-lg">
      <div class="text-h4 text-grey-8 ubuntu-mono">Work Experience</div>
      <div class="q-px-lg">
        <q-timeline>
          <template v-for="(position, index) in positions">
            <q-timeline-entry :key="index" tag="h5" heading>
              <div class="text-dark text-weight-medium">
                {{ position.heading }}
              </div>
            </q-timeline-entry>
            <q-timeline-entry
              v-for="title in position.titles"
              :key="title.description[0]"
            >
              <template #subtitle>
                <div class="text-capitalize">
                  {{ formatDates(title.subtitle[0], title.subtitle[1]) }}
                </div>
                <div class="text-capitalize">{{ title.location }}</div>
              </template>
              <template #title>
                <div class="text-dark">{{ title.title }}</div>
              </template>
              <div class="text-body1 text-grey-14">
                <ul style="list-style-type: disc">
                  <li v-for="(description, i) in title.description" :key="i">
                    {{ description }}
                  </li>
                </ul>
              </div>
            </q-timeline-entry>
          </template>
        </q-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'Experience',
  data() {
    return {
      positions: [
        {
          heading: 'Self-employed',
          titles: [
            {
              title: 'Family Caregiver',
              subtitle: [new Date(2017, 0), 'Present'],
              location: 'Monterey Park, CA',
              description: [
                'Manage day to day needs of family member.',
                'Clean the household environment and prepare meals.',
                'Schedule medical appointments and provide transportation.',
                'Shop for supplies and pick up medication.',
              ],
            },
          ],
        },
        {
          heading: 'Clearpoint Credit Counseling Solutions',
          titles: [
            {
              title: 'Systems Administrator',
              subtitle: [new Date(2014, 1), new Date(2016, 11)], // June 2016 to December 2016
              location: 'Commerce, CA',
              description: [
                'Led help desk team on troubleshooting computer technical issues and integrating information technology solutions.',
                'Supervised anti-virus software deployment to alleviate widespread ransomware malware.',
                'Automated software deployments and security software patching.',
                'Managed virtual machines in a Windows and VMware environment.',
                'Migrated “Microsoft Exchange” email server to Office 365.',
                'Directed integration of contact center software into Cisco UCM and UCCX.',
              ],
            },
          ],
        },
        {
          heading:
            'Associated Students, Inc. at California State University Long Beach',
          titles: [
            {
              title: 'Network Administrator',
              subtitle: [new Date(2012, 7), new Date(2013, 4)], // August 2012 to May 2013
              location: 'Long Beach, CA',
              description: [
                'Maintained local computer network.',
                'Deployed desktop computers and reimaged desktops.',
                'Installed digital signage touch screens at the Student Recreation and Wellness Center.',
              ],
            },
          ],
        },
        {
          heading: 'East Los Angeles College ',
          titles: [
            {
              title: 'Computer Technician',
              subtitle: [new Date(2008, 9), new Date(2010, 7)], // October 2008 to August 2010
              location: 'Monterey Park, CA',
              description: ['Provided help desk support.'],
            },
          ],
        },
      ],
    };
  },
  methods: {
    formatDates(start, end) {
      if (typeof end === 'string') {
        return `${format(start, 'MMM yyyy')} — Present`;
      }
      return `${format(start, 'MMM yyyy')} — ${format(end, 'MMM yyyy')}`;
    },
  },
};
</script>
