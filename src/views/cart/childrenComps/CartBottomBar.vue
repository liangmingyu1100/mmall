<template>
  <div class="bottom-bar">
    <div class="bottom-check">
      <check-button
        class="allSelectButton"
        :isChecked="isAllSelect"
        @click.native="allSelectClick"
      />
      <span>全选</span>
    </div>
    <div class="totalPrice" v-if="!isManage">
      合计:<span>￥{{ totalPrice }}</span>
    </div>
    <div class="calculate" @click="calcClick" v-if="!isManage">
      <span>结算({{ totalCount }})</span>
    </div>
    <div class="placeholder" v-if="isManage"></div>
    <div class="remove" @click="removeClick" v-if="isManage">
      <span>删除</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkbutton/CheckButton.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isManage: false,
    };
  },
  mounted() {
    this.$bus &&
      this.$bus.$on("manageClick", () => {
        this.isManage = !this.isManage;
      });
  },
  components: {
    CheckButton,
  },
  create() {},
  methods: {
    ...mapActions(["removeFromCart"]),
    allSelectClick() {
      if (this.isAllSelect) {
        this.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.cartList.forEach((item) => {
          item.checked = true;
        });
      }
    },
    calcClick() {
      if (!this.isAllSelect) {
        this.$toast.show("请选择您要结算的商品");
      }
    },
    removeClick() {
      // this.$store.dispatch("removeFromCart", this.checkedProduct);
      this.removeFromCart(this.checkedProduct).then((res) => {
        this.$toast.show(res);
      });
    },
  },
  computed: {
    ...mapGetters(["totalPrice", "totalCount", "cartList", "checkedProduct"]),
    isAllSelect() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.some((item) => !item.checked);
    },
    checkedProduct() {
      if (this.cartList.length === 0) return 0;
      return this.cartList.filter((item) => item.checked);
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  display: flex;
  height: 54px;
  line-height: 54px;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}
.bottom-check {
  display: flex;
  width: 80px;
  justify-content: center;
  align-items: center;
  line-height: 27px;
  margin-left: 5px;
}

.allSelectButton {
  margin-right: 5px;
}
.totalPrice,
.placeholder {
  flex: 1;
  margin-right: 10px;
  text-align: right;
}
.totalPrice span {
  color: var(--color-tint);
}
.calculate,
.remove {
  width: 80px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin-top: 7px;
  margin-right: 10px;
  background-color: var(--color-tint);
  border-radius: 15px;
  color: #fff;
}
.remove {
  background-color: #d9534f;
}
</style>