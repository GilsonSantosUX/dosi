const app = new Vue({
  el:'#app',
  data: {
    name: 'DOSI',
  },
  methods: {
    showModal(){
      modal.modal = !modal.modal
    }
  }
})

const modal = new Vue({
  el:'#modal',
  data: {
    modal: false,
    email: ''
  },
  methods:{
      saveEmail(){
          this.email = ''
      }
  }
})