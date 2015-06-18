<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue.js todo app</title>
  <script src="vue.js"></script>
  <script src="vue-resource.js"></script>
</head>
<body>
  <div id="home">
    <h1>My Todos</h1>
    <hr>
    <div v-repeat="t : events">
        {{$index}}
        <h2>{{t.title}}</h2>
        <p>{{t.description}}</p>
        <p>{{t.date}}</p>
        <p>{{t.location}}</p>
        <hr>
    </div>
    <div>
        left {{lefts}} tasks.
    </div>
</div>

<script type="text/javascript">
  var app = new Vue({
    //select html element
    el: '#home',
    //init data
    data: {
      //ここに渡す必要があるか
        events: [],
        someData: [],
        input: ""
    },
    //automatically value will be computed
    computed: {
        lefts: function(){
            return this.events.filter(function(t){ return !t.isDone }).length;
        }
    },
    //called when loaded
    created: function(){
        this.title = "My Todos";
        // GET request
        var self = this
          this.$http.get('http://10.130.10.204/mock/events', function (data, status, request) {
                for(var i = 0; i < data.length; i++){
                    this.events.push(data[i]);
                }
            }).error(function (data, status, request) {
                // handle error
            })
    },
    methods:{
        //some methods
    }
  })
</script>

</body>
</html>
