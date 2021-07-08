<template>
  <div class="production">
    <div class="bg-image">
      <img src="../assets/image/index-img1.png" alt="" />
    </div>
    <div class="bg-gray">
      <div class="content-wrapper">
        <div class="content1">
          <div class="image-wrapper">
            <img src="../assets/image/index-img2.png" alt="" />
          </div>
          <div class="text-wrapper">
            <h4>产品定位</h4>
            <p class="p1">
              "蜀黍之家"在国家"爱警惠警"的政策指引下，秉承爱工作、爱家庭、爱生活的宗旨；<br />
              建设一个服务全国民警及其家属群体的专属APP；<br />
              打造一个全国警察体系共建共享、互联互通、惠生活、惠服务、惠购物的平台；<br />
              运营一个对内帮扶、学习、交流，警察及家属互帮互助、共进共勉的线上社区。
            </p>
          </div>
        </div>
        <div class="content2">
          <div class="text-wrapper">
            <h4>蜀黍之家解决的问题：</h4>
            <p>
              (1)在编警员工作压力大，时间少，不能第一时间购买某些活动商品；<br />
              (2)地方性政府及部门有某些特有合作渠道服务民警，但未做到全国共享；<br />
              (3)针对民警家庭的一些特有生活服务、教育医疗未被开发落地，真正实施；<br />
              (4)针对民警及其家庭的知识普及、学习提升、绿色通道等信息未有一个完整的入口及沉淀的平台；<br />
              (5)针对全国民警及其家属的精神生活、思想交流、日常交集、公益帮扶，没有一个有组织的线上社区。<br />
            </p>
          </div>
          <div class="image-wrapper">
            <img src="../assets/image/index-img3.png" alt="" />
          </div>
        </div>
      </div>
      <div class="img-box">
        <img src="../assets/image/index-ios.png" alt="" />
        <img src="../assets/image/index-android.png" alt="" />
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
    Footer,
  },
})
export default class production extends Vue {}
</script>

<style scoped lang="scss">
.production {
  // >.bg-image{
  //   width: 100%;
  //   >img{
  //     width: 100%;
  //     object-fit: contain;
  //   }
  // }
  > .bg-image {
    position: relative;
    width: 100%;
    padding-bottom: 43.29%;
    > img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .bg-gray {
    background: rgb(235, 235, 235);
  }
  .content-wrapper {
    width: 825px;
    margin: 0 auto;
  }
  .content1,
  .content2 {
    display: flex;
    > .text-wrapper {
      width: 425px;
      align-self: flex-end;
      font-size: 10px;
      > .p1 {
        padding-bottom: 60px;
      }
    }
    > .image-wrapper {
      height: 531px;
      width: 400px;
      > img {
        width: 100%;
      }
    }
  }
  .content2 {
    padding-bottom: 40px;
  }
  .img-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >img{
      width: 444px;
      margin: 20px;
    }
  }
}
</style>