<template>
  <div class="cooperation-wrapper">
    <div class="cooperation">
      <div class="content-gray">
        <div class="content1-wrapper">
          <!-- 左边轮播图 -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../assets/image/cooperation-swiper-img1.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../assets/image/cooperation-swiper-img2.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../assets/image/cooperation-swiper-img3.png" alt="" />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <!-- 右边文字 -->
          <div class="content1">
            <h5>项目背景</h5>
            <h6>中央拟定公安改革六大方向</h6>
            <div class="tip-item">
              <div class="symbol">
                <img src="../assets/image/cooperation-icon1.png" alt="" />
              </div>
              <p>
                警察的编制机构应与一般行政机关相区别，跳出行政机关的编制体制
              </p>
            </div>
            <div class="tip-item">
              <div class="symbol">
                <img src="../assets/image/cooperation-icon1.png" alt="" />
              </div>
              <p>警察的工资待遇应提高</p>
            </div>
            <div class="tip-item">
              <div class="symbol">
                <img src="../assets/image/cooperation-icon1.png" alt="" />
              </div>
              <p>警察的医疗、住房、子女教育等待遇应得到特殊保障</p>
            </div>
            <div class="tip-item">
              <div class="symbol">
                <img src="../assets/image/cooperation-icon1.png" alt="" />
              </div>
              <p>警察的退休年龄应提前</p>
            </div>
            <div class="tip-item">
              <div class="symbol">
                <img src="../assets/image/cooperation-icon1.png" alt="" />
              </div>
              <p>警察的编制应保证工作任务需要</p>
            </div>
            <div class="tip-item">
              <div class="symbol">
                <img src="../assets/image/cooperation-icon1.png" alt="" />
              </div>
              <p>警察的社会地位应得到提高</p>
            </div>
          </div>
        </div>
        <div class="content2-wrapper">
          <div class="image-swiper">
            <img src="../assets/image/cooperation-img2.png" alt="" />
          </div>
          <div class="content2">
            <h3>商务合作</h3>
            <p>
              我们希望，在国家政策的指引下，能联合全国各地的政府及组织，真正落地“爱警惠警”政策，让全国民警及家属得到真正的福利。如有相关资源的个人或组织，请发送合作邮件至邮箱：56448558@qq.com。
            </p>
          </div>
        </div>
        <div class="content3-wrapper">
          <div class="image-swiper">
            <img src="../assets/image/cooperation-img3.png" alt="" />
          </div>
          <div class="content3">
            <h3>合作方式</h3>
            <p>1.服务合作：共同打造当地“爱警惠警”本地生活服务</p>
            <p>2.供应链合作：供应链合作，提供物美价廉或定制版的商品</p>
            <p>3.代理合作：直接授权代理，打造新产品</p>
          </div>
        </div>
        <div class="content4-wrapper">
          <div class="content4">
            <h3>合作品牌</h3>
            <hr />
          </div>
          <div class="image-swiper">
            <img src="../assets/image/cooperation-img4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="js">

import Swiper from 'swiper';
import Footer from '../components/Footer.vue'

  export default {
    components: {
      Footer,
    },
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环轮播
        pagination: '.swiper-pagination',  // 如果需要分页器
      })        
    }
  };
</script>

<style scoped lang="scss">
.cooperation {
  background: rgb(235, 235, 235);
  > .content-gray {
    width: 825px;
    margin: 0 auto;
  }
}
.swiper-container {
  width: 491px;
  height: 278px;
  img {
    height: 100%;
    object-fit: cover;
  }
}
.content1-wrapper {
  display: flex;
  > .content1 {
    width: 334px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 12px;
    > .tip-item {
      font-size: 9px;
      display: flex;
      .symbol {
        width: 8px;
        height: 8px;
        margin-right: 8px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  > h5,
  h6,
  .tip-item {
    margin: 8px 0;
  }
}
.content2-wrapper {
  margin-top: 40px;
  position: relative;
  > .image-swiper {
    width: 825px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  > .content2 {
    width: 334px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-90%, -50%);
    h3 {
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
    }
  }
}
.content3-wrapper {
  margin-top: 40px;
  position: relative;
  > .image-swiper {
    width: 825px;
    object-fit: contain;
    img {
      width: 100%;
      height: 100%;
    }
  }
  > .content3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-15%, -50%);
    p {
      font-size: 14px;
    }
    h3 {
      margin-bottom: 20px;
    }
  }
}
.content4-wrapper {
  margin-top: 40px;
  > .content4 {
    text-align: center;
    margin-bottom: 20px;
    hr {
      width: 5em;
      margin-left: 373px;
      margin-top: 4px;
    }
  }
  > .image-swiper {
    width: 825px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      margin-bottom: 40px;
    }
  }
}
</style>