<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark">
        <q-btn
          flat
          dense
          round
          class="lt-md"
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-tooltip
            content-class="bg-light-blue"
            content-style="font-size: 12px"
          >
            Menu
          </q-tooltip>
        </q-btn>

        <q-space />

        <q-btn
          v-for="link in navigation"
          :key="link.title"
          flat
          stretch
          class="gt-sm"
          :icon="link.icon"
          :label="link.title"
          @click="scrollToElement(link.id)"
        />
        <q-separator dark vertical class="gt-sm" />
        <q-btn
          flat
          stretch
          href="https://github.com/Mirakurun"
          class="gt-sm"
          icon="fab fa-github-alt"
          rel="noopener"
          target="_blank"
          type="a"
        />
        <q-btn
          flat
          stretch
          href="https://www.linkedin.com/in/kevin-chhay/"
          class="gt-sm"
          icon="fab fa-linkedin-in"
          rel="noopener"
          target="_blank"
          type="a"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      ref="drawer"
      v-model="leftDrawerOpen"
      behavior="mobile"
      bordered
      dark
      @hide="scrollToElement($event)"
    >
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-white">
              Kevin Chhay
            </q-item-label>
            <q-item-label class="text-subtitle2 text-info ubuntu-mono">
              Software Engineer
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn
              flat
              dense
              round
              aria-label="Close"
              icon="close"
              text-color="white"
              @click="leftDrawerOpen = false"
            >
              <q-tooltip
                content-class="bg-light-blue"
                content-style="font-size: 12px"
              >
                Close
              </q-tooltip>
            </q-btn>
          </q-item-section>
        </q-item>

        <q-separator dark inset color="orange" />
        <q-item-label header class="text-white">NAVIGATION</q-item-label>

        <DrawerNavigation
          v-for="link in navigation"
          :key="link.title"
          v-bind="link"
          @hide="$refs.drawer.hide($event)"
        />

        <q-separator dark inset color="orange" />
        <q-item-label header class="text-white">SOCIAL</q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink';
import DrawerNavigation from 'components/DrawerNavigation';
import { scrollToElement } from 'utils/scroll';

export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
    DrawerNavigation,
  },
  data() {
    return {
      leftDrawerOpen: false,
      navigation: [
        { title: 'Skills', icon: 'fas fa-layer-group fa-fw', id: 'skills' },
        { title: 'Projects', icon: 'fas fa-code fa-fw', id: 'projects' },
        {
          title: 'Work Experience',
          icon: 'fas fa-briefcase fa-fw',
          id: 'work-experience',
        },
        {
          title: 'Education',
          icon: 'fas fa-graduation-cap fa-fw',
          id: 'education',
        },
        {
          title: 'Certifications',
          icon: 'fas fa-award fa-fw',
          id: 'certification',
        },
        { title: 'Contact', icon: 'fas fa-envelope fa-fw', id: 'contact' },
      ],
      essentialLinks: [
        {
          title: 'Github',
          caption: 'github.com/Mirakurun',
          icon: 'fab fa-github-alt fa-fw',
          link: 'https://github.com/Mirakurun',
        },
        {
          title: 'LinkedIn',
          caption: 'linkedin.com/in/kevin-chhay',
          icon: 'fab fa-linkedin-in fa-fw',
          link: 'https://www.linkedin.com/in/kevin-chhay',
        },
      ],
    };
  },
  methods: {
    scrollToElement,
  },
};
</script>
