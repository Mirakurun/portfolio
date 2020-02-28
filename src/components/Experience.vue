<template>
  <div id="work-experience" class="q-px-sm q-py-xl bg-grey-2">
    <div class="container q-gutter-y-lg">
      <div class="text-h4 text-grey-8 ubuntu-mono">
        Work Experience
      </div>
      <div class="q-px-lg">
        <q-timeline>
          <template v-for="(position, index) in positions">
            <q-timeline-entry :key="index" class="text-grey-9" tag="h5" heading>
              {{ position.heading }}
            </q-timeline-entry>
            <q-timeline-entry
              v-for="title in position.titles"
              :key="title.title"
            >
              <template #subtitle>
                <div>
                  {{ formatDates(title.subtitle[0], title.subtitle[1]) }}
                </div>
                <div>{{ title.location }}</div>
              </template>
              <template #title>
                <div class="text-grey-10">{{ title.title }}</div>
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
          heading: 'Clearpoint Credit Counseling Solutions',
          titles: [
            {
              title: 'System Support Analyst',
              subtitle: [new Date(2016, 5), new Date(2016, 11)], // June 2016 to December 2016
              location: 'Commerce, CA',
              description: [
                'Lead implementation of TASKE Contact, a contact center call management software allowing supervisors and agents to manage call activity.',
                'Supervised McAfee ePolicy Orchestrator migration and Host Intrusion Prevention deployment to alleviate ransomware malware.',
                'Automated patching and software deployments with Manage Engine Desktop Central by creating scripts and packages.',
              ],
            },
            {
              title: 'Network Administrator I',
              subtitle: [new Date(2014, 1), new Date(2016, 5)], // February 2014 to June 2016
              location: 'Commerce, CA',
              description: [
                'Served as the primary IT specialist for the west coast region.',
                'Collaborated on post-merger project migrating Microsoft Exchange to Office 365.',
                'Provisioned VMware virtual desktops and servers.',
              ],
            },
          ],
        },
        {
          heading:
            'Associated Students, Inc. at California State University Long Beach',
          titles: [
            {
              title: 'Network Assistant',
              subtitle: [new Date(2012, 7), new Date(2013, 4)], // August 2012 to May 2013
              location: 'Long Beach, CA',
              description: [
                'Assisted IT Manager on completing helpdesk tickets and various IT projects.',
                'Deployed and reimaged hundreds of desktop computers utilizing Windows Deployment Services.',
                'Installed Digital Signage flat panel touchscreens at Student Recreational Wellness Center.',
              ],
            },
          ],
        },
        {
          heading: 'East Los Angeles College ',
          titles: [
            {
              title: 'Computer Assisted Instruction Lab Technician',
              subtitle: [new Date(2008, 9), new Date(2010, 7)], // October 2008 to August 2010
              location: 'Monterey Park, CA',
              description: [
                'Assisted students, faculty, and staff with use of hardware and software aplications.',
                'Coordinated the use of the lab equipment and facilities.',
                'Assigned lab computers for students.',
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    formatDates(start, end) {
      return `${format(start, 'MMMM yyyy')} — ${format(end, 'MMMM yyyy')}`;
    },
  },
};
</script>
