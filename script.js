Vue.component('selected-fruit', {
    props: ['select','selected','searchinput'],
    template: `
      <div>
        <p>{{searchinput}}{{select.name}}</p>
        <i class="fa fa-times" aria-hidden="true"  v-on:click=deleteItem(select)></i>
      </div>
    `,
    methods: {
      // delete item
      deleteItem: function(select) {
        select.state = !select.state
        var index = this.$parent.selected.indexOf(select);
        this.$parent.selected.splice(index, 1);
      }
    }
  });
  
  var app = new Vue({
    el: '#app',
    data: {
      domains: [{
        name: '.com',
        state: false
      }, {
        name: '.net',
        state: false
      }, {
        name: '.org',
        state: false
      }, {
        name: '.co',
        state: false
      }, {
        name: '.life',
        state: false
      }, {
        name: '.com.co',
        state: false
      }, {
        name: '.info',
        state: false
      }, {
        name: '.me',
        state: false
      }, {
        name: '.biz',
        state: false
      }, {
        name: '.cloud',
        state: false
      }, {
        name: '.company',
        state: false
      }, {
        name: '.net.co',
        state: false
      }, {
        name: '.group',
        state: false
      }, {
        name: '.tv',
        state: false
      }, {
        name: '.es',
        state: false
      }, {
        name: '.bz',
        state: false
      }],
      selected: [],
      searchinput:''
    },
    methods: {
      // when click push data to selected
      select: function(domain) {
        var index = this.selected.indexOf(domain);
        if (index === -1) {
          this.selected.push(domain);
        } else {
          this.selected.splice(index, 1);
        }
      }
    }
  });