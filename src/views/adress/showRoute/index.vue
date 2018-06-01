<template>
  <div class="navigation-container" :style="'height:' +height+ 'px'">
    <div id="map-container">
    </div>
    <div class="reLocation" @click="reLocation"><img src="../../../static/images/icon_dw_cklx@2x.png" alt=""></div>
    <div class="change-type">
      <div @click="getDrivingRoute()" :class="currentType==='driving'?'active':''">驾车</div>
      <div @click="getTransitRoute()" :class="currentType==='transit'?'active':''">公交</div>
      <div @click="getWalkingRoute()" :class="currentType==='walk'?'active':''">步行</div>
    </div>
    <div>
      <div id="r-result"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navigation-container {
  position: relative;
  #map-container {
    height: 100%;
    font-size: 0.3rem;
  }
  .reLocation {
    width: 0.94rem;
    height: 0.94rem;
    position: absolute;
    bottom: 1.66rem;
    right: 0rem;
  }
  .change-type {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    div {
      width: 2rem;
      height: 0.7rem;
      line-height: 0.7rem;
      border: 1px solid #8c8c8c;
      border-radius: 0.1rem;
      font-size: 0.3rem;
      color: $fc-black;
      text-align: center;
      &.active {
        background-color: $blue;
        color: #fff;
        border-color: $blue;
      }
    }
  }
}
</style>
<script>
import { getPosition } from "@/utils/tools";
export default {
  name: "Navigation",
  data() {
    return {
      latitude: "", //经度
      longitude: "", //纬度
      current: "",
      height: 0,
      currentType: 'driving'
    };
  },
  created() {
    this.height = document.documentElement.clientHeight;
    this.latitude = this.$route.query.latitude;
    this.longitude = this.$route.query.longitude;
  },
  mounted() {
    this.getDrivingRoute();
  },
  methods: {
    reLocation(){
      switch(this.currentType){
        case 'driving':
          this.getDrivingRoute()
          break;
        case 'walk':
          this.getWalkingRoute()
          break;
        case 'transit':
          this.getTransitRoute()
          break;
      }
    },
    getDrivingRoute() {
      this.currentType = 'driving'
      getPosition().then(obj => {
        var map = new BMap.Map("map-container");
        map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 15);
        var p1 = new BMap.Point(obj.point.lng,obj.point.lat);
        var p2 = new BMap.Point(this.longitude, this.latitude);
        var driving = new BMap.DrivingRoute(map, {
          renderOptions: { map: map, autoViewport: true}
        });
        driving.search(p1, p2);
      });
    },
    getWalkingRoute() {
      this.currentType = 'walk'
      getPosition().then(obj => {
        var map = new BMap.Map("map-container");
        map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 15);
        var p1 = new BMap.Point(obj.point.lng,obj.point.lat);
        var p2 = new BMap.Point(this.longitude, this.latitude);
        var walk = new BMap.WalkingRoute(map, {
          renderOptions: { map: map }
        });
        walk.search(p1, p2);
      });
    },
    getTransitRoute() {
      this.currentType = 'transit'
      getPosition().then(obj => {
        var map = new BMap.Map("map-container");
        map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 15);
        var p1 = new BMap.Point(obj.point.lng,obj.point.lat);
        var p2 = new BMap.Point(this.longitude, this.latitude);
        var transit = new BMap.TransitRoute(map, {
          renderOptions: { map: map }
        });
        transit.search(p1, p2);
      });
    }
  }
};
</script>
