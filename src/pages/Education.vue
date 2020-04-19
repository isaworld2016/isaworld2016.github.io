<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-px-lg q-pa-sm">
      <div class="text-h6 text-primary text-bold">> Education</div>
    </div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card q-mx-xl q-pa-sm q-mt-lg q-mb-xs">
        <q-card-section class="text-weight-bold">
          {{ uniTit }}
        </q-card-section>
        <q-separator/>
        <q-card-section class="text-grey">
          {{ uniCont }}
        </q-card-section>
      </q-card>

      <q-card class="my-card q-pa-sm q-mt-lg q-mb-xs">
        <q-card-section class="text-weight-bold">
          {{ highTit }}
        </q-card-section>
        <q-separator/>
        <q-card-section class="text-grey">
          {{ highCont }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      uniTit: '한양대학교 / 독어독문학과 학사',
      uniCont: '2007년 3월 - 2013년 8월, 서울',
      highTit: '낙생고등학교 / 인문',
      highCont: '2004년 3월 - 2007년 2월, 성남 판교'
    }
  }

}
</script>

<style>

</style>
