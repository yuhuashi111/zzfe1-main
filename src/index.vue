<template>
    
  <div id="app">
    <div id="cal">
    <el-select v-model="value1" placeholder="请选择数字" style="margin-right:15px;">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="operator" placeholder="请选择符号" style="margin-right:15px;">
    <el-option
      v-for="operators in operators"
      :key="operators.value"
      :label="operators.label"
      :value="operators.value">
    </el-option>
  </el-select>
  <el-select v-model="value2" placeholder="请选择数字" style="margin-right:15px;">
    <el-option
      v-for="item2 in 100"
      :key="item2"
      :label="item2"
      :value="item2">
    </el-option>
  </el-select>

  <span> </span>
  <el-button type="primary" @click="cal(value1,operator,value2)">执行</el-button>
  </div>
  </br>
  </br>

  <div id="test">
    <font size="66px" color="grey">执行结果:</font>
  <font size="88px">{{result}}</font>
  </div>
  
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  },
  methods:{
    cal:function(value1,operator,value2){

      if(operator=='+'){
        this.result=value1+value2;
      }

      if(operator=='-')
      this.result=value1-value2;
      if(operator=='*')
      this.result=value1*value2;
      if(operator=='/')
      this.result=value1/value2;

    }
  },
  data() {
      return {
        options: [{
          value: 2,
          label: 2
        }, {
          value: 4,
          label: 4
        }, {
          value: 8,
          label: 8
        }, {
          value: 16,
          label: 16
        }, {
          value: 32,
          label: 32
        },{
          value: 64,
          label: 64
        },{
          value: 128,
          label: 128
        },{
          value: 256,
          label: 256
        },{
          value: 512,
          label: 512
        },{
          value: 1024,
          label: 1024
        }
        ],    
        operators:[{
          value: '+',
          label: '+'
        },{
          value: '-',
          label: '-'
        },{
          value: '*',
          label: '*'
        },{
          value: '/',
          label: '/'
        },],
        result:'',
        value1: '',
        operator:'',
        value2:'',
        value3:'',
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-shadow: gray;
  margin:5px;
}
#test{
  background-color:transparent;
  box-shadow: 2px 2px grey;
}
#cal{
    background-color:transparent;
  box-shadow: 2px 2px grey;
}
</style>

