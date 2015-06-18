Vue.config.debug = true

var add = new Vue({

// element to mount to
el: '#app',

// initial data
data: {
  users: [],
  newEvent: {
    title: '',
    description: '',
    date: '',
    location: ''
  },
  validation: {
    title: false,
    description: false,
    date: false,
    location: false
  }
},

// validation 個別に作っているので、評価の仕方を変えられる
filters: {
  titleValidator: {
    write: function (val) {
      this.validation.title = !!val
      return val
    }
  },
  descriptionValidator: {
    write: function (val) {
      this.validation.description = !!val
      return val
    }
  },
  dateValidator: {
    write: function (val) {
      this.validation.date = !!val
      return val
    }
  },
  locationValidator: {
    write: function (val) {
      this.validation.location = !!val
      return val
    }
  }
},

// computed property for form validation state
computed: {
  isValid: function () {
    var valid = true
    for (var key in this.validation) {
      if (!this.validation[key]) {
        valid = false
      }
    }
    return valid
  }
},

// methods
methods: {
  addEvent: function (e) {
    document.getElementById("errors").className = ""
    e.preventDefault()
    if (this.isValid) {
      console.log("success")
      console.log("title: " + this.newEvent.title)
      console.log("description: " + this.newEvent.description)
      console.log("date: " + this.newEvent.date)
      console.log("location: " + this.newEvent.location)

      // POST
        this.$http.post('http://example.com/forPOST', this.newEvent, function (data, status, request) {
          console.log("post success")
          //status check
          console.log(status)


          }).error(function (data, status, request) {
            console.log("post failed")
          })

    }else{
      console.log("need edit")
    }
  },
}
})
