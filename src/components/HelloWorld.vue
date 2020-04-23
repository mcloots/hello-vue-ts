<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ fullName }}</h2>
    <button @click="alertHi">Alert</button>
    <button @click="logMessage('Hi')">Log</button>
  </div>
</template>

<script lang="ts">
//Documentation decorators: https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  //Property waartegen we kunnen binden via {{ interpolatie }}
  //Properties die binnenkomen via element: <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  //@Prop() kunnen we gebruiken dankzij vue-property-decorator package
  /*props: {
      msg: String
  }*/
  @Prop() private msg!: string;

  //Zoals in data()
  /* data: function() { 
      return {
        firstName: ‘Vue’ ,
        lastName: ‘Mastery’
      }
    } 
 */
  firstName = 'Michaël';
  lastName = 'Cloots';

  //computed properties (computed: { ... })
  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  //methods (methods: { ... })
  alertHi() {
    alert('Hi');
  }

  logMessage(message: string) {
    console.log(message);
  }

  //lifecycle hooks
  mounted() {
    console.info('HelloWorld component mounted');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
