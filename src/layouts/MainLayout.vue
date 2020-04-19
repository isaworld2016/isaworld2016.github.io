<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">IsaWorld</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img
        src="statics/header.png"
        class="header-image absolute-top" />
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 193px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>
            <!-- About -->
            <q-item to="/About" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="indigo-10" name="fas fa-user" />
            </q-item-section>
            <q-item-section>
              About
            </q-item-section>
            </q-item>

            <!-- Experience -->
            <q-expansion-item
              :content-inset-level="0.5"
              expand-separator
              default-closed
              icon="perm_identity"
            >
              <!--참고용으로 남겨두기 <q-icon color="primary" name="img:statics/icons/favicon.ico" /> -->
            <template v-slot:header>
              <q-item-section avatar dense>
                <q-icon color="cyan" name="fas fa-chart-line" />
              </q-item-section>
              <q-item-section>
                Experience & Project
              </q-item-section>
            </template>
              <!-- 1 depth -->
              <q-expansion-item
                expand-separator
                default-closed
                :content-inset-level="0.5"
                label="FIT"
              >
                <!-- 2-1 depth -->
                <q-item exact clickable >
                  <q-item-section>
                    Alliex Vietnam
                  </q-item-section>
                </q-item>
                <!-- 2-2 depth -->
                <q-item
                  to=""
                  exact
                  clickable
                >
                <q-item-section>
                  Darayo Web
                </q-item-section>
                </q-item>
              </q-expansion-item>
              <!-- 1 depth -->
              <q-expansion-item
                expand-separator
                default-closed
                :content-inset-level="0.5"
                label="Side Project"
              >
                <!-- 2-1 depth -->
                <q-item to="" exact clickable >
                  <q-item-section>
                    진동마을앱
                  </q-item-section>
                </q-item>
                <!-- 2-2 depth -->
                <!-- <q-item
                  to="/About"
                  exact
                  clickable
                >
                <q-item-section avatar>
                  <q-icon color="primary" name="fas fa-angry"/>
                </q-item-section>
                <q-item-section>
                  Darayo Web
                </q-item-section>
                </q-item> -->
              </q-expansion-item>
            </q-expansion-item>

            <!-- Skills -->
            <q-item to="/skills" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="deep-purple-9" name="fas fa-toolbox" />
              </q-item-section>
              <q-item-section>
                Skills
              </q-item-section>
            </q-item>

            <!-- Education -->
            <q-item to="/Education" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="orange-9" name="fas fa-graduation-cap " />
              </q-item-section>
              <q-item-section>
                Education
              </q-item-section>
            </q-item>

            <!-- Contact -->
            <q-item to="/Contact" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="brown-13" name="fas fa-envelope" />
              </q-item-section>
              <q-item-section>
                Contact
              </q-item-section>
            </q-item>

            <!-- Blog -->
            <q-item @click="callBlog" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="yellow-8" name="fas fa-feather-alt" />
              </q-item-section>
              <q-item-section>
                Blog
              </q-item-section>
              <q-item-section side>
                <q-icon color="grey" name="link"/>
              </q-item-section>
            </q-item>

            <!-- Resume -->
            <q-item @click="callResume" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="teal-7" name="far fa-file-alt" />
              </q-item-section>
              <q-item-section>
                Resume
              </q-item-section>
              <q-item-section side>
                <q-icon color="grey" name="link"/>
              </q-item-section>
            </q-item>

            <!-- play -->
            <!-- <q-expansion-item
              :content-inset-level="0.5"
              expand-separator
              default-closed
              icon="perm_identity"
            >
              <template v-slot:header>
                <q-item-section avatar dense>
                  <q-icon color="primary" name="fas fa-basketball-ball" />
                </q-item-section>
                <q-item-section>
                  Play
                </q-item-section>
              </template> -->

              <!-- 1-1 depth -->
              <!-- <q-item to="/RandomBox" exact clickable >
                <q-item-section class="text-center">
                  Random Box
                </q-item-section>
              </q-item> -->
              <!-- 1-2 depth -->
              <!-- <q-item to="/RandomBox" exact clickable >
                <q-item-section class="text-center">
                  another game
                </q-item-section>
              </q-item>
            </q-expansion-item> -->

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top bg-primary" style="height: 192px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="70px" class="q-mb-sm q-px-sm">
              <img src="statics/isa.jpg">
            </q-avatar>
            <div class="q-px-sm text-weight-bold text-h6">
              Isa Rhee
            </div>
            <a
              clickable
              tag="a"
              target="_blank"
              :href="link"
              style="color:white;text-decoration:none;"
              class="q-px-sm"
            >
            @isaworld
            </a>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date, openURL } from 'quasar'

export default {
  name: 'MainLayout',

  components: {
  },

  data () {
    return {
      link: 'https://github.com/isaworld2016',
      leftDrawerOpen: false
    }
  },
  computed: {
    todaysDate () {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'M월 D일 ( ddd ) - H시 m분')
    }
  },
  methods: {
    callBlog () {
      console.log('call isaworld')
      openURL('https://blog.naver.com/isaworld')
    },
    callResume () {
      console.log('call Resume')
      openURL('https://docs.google.com/document/d/1p9V4T43VPp53EOLwPG0iJ7cXavQusAIsvYMM_Ehl13I/edit?usp=sharing')
    }
  }
}
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
</style>
