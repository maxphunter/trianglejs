<template>
  <div class="hello">
   <!-- Angle A<input v-model="angleA"> <br>
   Angle B<input v-model="angleB"><br> -->
   Angle C<input v-model="angleC"><br>
   Side A<input v-model="sideA"> <br>
   Side B<input v-model="sideB"><br>
    Side C<input v-model="sideC"> <br>
    Angle A<input v-model="angleA"><br>
    Angle B<input v-model="angleB"><br>

   <hr>
   <h1 v-for="(value, key, index) in triangleState">
     {{key}} = {{value}}
   </h1>
    <canvas id="myCanvas" width="500px" height="500px"></canvas>
  </div>
</template>

<script>

import {triangle} from '@/triangle/triangle'
import * as PIXI from 'pixi.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      angleA: '',
      angleB: '',
      angleC: '',
      sideA: '',
      sideB: '',
      sideC: ''
    }
  },
  methods: {
    createTriangle (triangleState) {
      var canvas = document.getElementById('myCanvas')
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.moveTo(triangleState.coordinates.pointA.x, triangleState.coordinates.pointA.y)
        ctx.lineTo(triangleState.coordinates.pointC.x, triangleState.coordinates.pointC.y)
        ctx.lineTo(triangleState.coordinates.pointB.x, triangleState.coordinates.pointB.y)
        ctx.fill()
      }
    }
  },
  computed: {
    triangleState () {
      let triangleObject = {}
      let scenario1 = this.angleA && this.sideB && this.sideC
      let scenario2 = this.angleB && this.sideA && this.sideC
      let scenario3 = this.angleC && this.sideA && this.sideB

      if (scenario1) {
        triangleObject = triangle.lawOfCosines(this.angleA, this.sideB, this.sideC)
      } else if (scenario2) {
        triangleObject = triangle.lawOfCosines(this.angleB, this.sideA, this.sideC)
      } else if (scenario3) {
        triangleObject = triangle.lawOfCosines(this.angleC, this.sideA, this.sideB)
      }
      if (triangleObject.coordinates) {
        this.createTriangle(triangleObject)
      }
      return triangleObject
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
