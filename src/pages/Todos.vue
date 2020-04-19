<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
        <q-input
          @keyup.enter="pushNewTodo"
          v-model="newTodo"
          filled
          bg-color="white"
          placeholder="새로운 일정을 입력하세요."
          class="col"
          square
          dense>

        <template>
          <q-btn @click="pushNewTodo" round dense flat icon="add" />
        </template>
      </q-input>
    </div>
    <q-list
      class="bg-white"
      seperator
      bordered>
      <q-item
        v-for="(task, index) in tasks"
        :key="task.title"
        clickable
        @click="task.done = !task.done"
        :class="{ 'done bg-blue-1' : task.done }"
        v-ripple>
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            class="no-pointer-events"
            color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
         <q-item-section
          v-if="task.done"
          side
          >
            <q-btn
              @click.stop="deleteTodo(index)"
              flat
              round
              dense
              color="primary"
              icon="delete"
            />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="primary" />
      <div class="test-h5 text-primary text-">
        일정이 없습니다.
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      newTodo: '',
      tasks: []
    }
  },
  methods: {
    deleteTodo (index) {
      this.$q.dialog({
        title: 'Confirm',
        message: '정말 삭제할까요?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
        this.$q.notify({ message: '일정이 삭제 되었습니다.', color: 'primary' })
      })
    },
    pushNewTodo () {
      this.tasks.push({
        title: this.newTodo,
        done: false
      })
      this.newTodo = ''
    }
  }
}
</script>

<style lang="scss">
.done {
  .q-item__label{
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-tasks {
  opacity: 0.5;
}
</style>
