<template>
  <div class="param-info">
    <table
      v-for="(item, index) in goodsParam.sizes"
      :key="index"
      class="info-size"
    >
      <tr v-for="(tr, index) in item" :key="index">
        <td v-for="(td, index) in tr" :key="index">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item, index) in goodsParam.info" :key="index">
        <td class="info-param-key">{{ item.key }}</td>
        <td class="info-param-value">{{ item.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParam.image">
      <img :src="goodsParam.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    goodsParam: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  create () {},
  methods: {}
}
</script>
<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr {
  height: 42px;
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.info-param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>
