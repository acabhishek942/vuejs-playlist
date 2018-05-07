new Vue({
  el:'#view-app',
  data:{
    name: '',
    age: ''

  },
  methods:{
    logName:function() {
      console.log("you entered name");
    },

    logAge:function() {
      console.log("You entered age");
    }

    }
});
