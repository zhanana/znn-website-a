<template>
  <div class="about">
    <div class="bg-gray">
      <div class="content-wrapper">
        <div class="image">
          <img src="../assets/image/about-img1.png" alt="" />
        </div>
        <div class="content">
          <h3>公司简介</h3>
          <p>
            浙江腾势网络科技有限公司是由一批具有国内著名网络公司的网络精英所组成，公司年轻、富有活力，具有丰富的平台运营经验和强大的供应链整合能力。是一家专业从事技术开发、推广和网络营销的互联网基础运营服务商，我们全心致力服务于企事业单位。以奉献网络科技而缩短人类之间沟通的距离，提升政府、企业的形象，为客户创造价值为自身的社会使命，致力开创线上信息流、线下业务流无缝整合，通过平台的力量实现消费者、商家的效率最大化。
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from '../components/Footer.vue'

@Component({
  components: {
    Footer
  },
})
export default class about extends Vue {}
</script>
<style scoped lang="scss">
.bg-gray {
  background: rgb(235, 235, 235);
  > .content-wrapper {
    position: relative;
    > .image {
      width: 100%;
      height: 564px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    >.content{
      width: 825px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: white;
      >h3{
        margin-bottom: 8px;
      }
    }
  }
}
</style>
