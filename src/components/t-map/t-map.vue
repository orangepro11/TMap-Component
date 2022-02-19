<template>
  <div id="tdt-map" :style="[{width,height}]"></div>
</template>

<script>

/**
 * @property {string} mapKey - 地图key
 * @property {string} width - 地图宽度
 * @property {string} height - 地图高度
 * @property {string} latitude - 地图中心纬度
 * @property {string} longitude - 地图中心经度
 * @property {string | number} zoom - 地图缩放级别
 */

import props from "./mixins/props.js";
import * as helpers from "./helpers";

export default {
  name: "t-map",
  mixins: [props],
  data() {
    return {
      
    };
  },
  created() {
    // 先根据给定的map_key创建引入地图script的路由
    helpers.createScriptElement(this.mapKey);
  },
  async mounted() {
    await helpers.sleep(300);

    if (window.T) {
      let map = new T.Map("tdt-map");
      
      map.centerAndZoom(new T.LngLat(this.longitude, this.latitude), this.zoom);
    }
  }
};
</script>

<style scoped>
</style>