new Vue({
  el:'#view-app',
  data:{
    name:'Abhishe',
    job:'Sucks',
    website:'http://www.dummy.com',
    websiteTag:'<a href="http://www.dummy.com">My Website</a>'
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
