const config = { headers: {'Access-Control-Allow-Origin': "*"} }
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
    telefone: ''
  },
  methods:{
      saveEmail(){

        axios.post("dosi-email.firebaseio.com/usuarios", { telefone: this.telefone })
            .then((res)=>{ return console.log(res.status) })
      }
  }
})