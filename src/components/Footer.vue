<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="content1">
        <div class="image-wrapper">
          <img src="../assets/image/footer-logo.png" alt="" />
        </div>
        <div class="text-wrapper">
          <p>公司地址：杭州市西湖区文新数字产业园5楼509</p>
          <p>联系我们：400-056-8110</p>
          <p>邮箱：56448558@qq.com</p>
        </div>
      </div>
      <div class="content2">
        <div class="image-wrapper">
          <img src="../assets/image/footer-qrcode.png" alt="" />
        </div>
        <div class="text-wrapper">
          <p>扫描二维码</p>
          <p>下载蜀黍之家APP</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="police">
      <p>网站备案：浙ICP备20028867号-3</p>
      <p>浙江腾势网络科技有限公司 版权所有</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  width: 825px;
  margin: 0 auto;
  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    font-size: 9px;
    padding: 20px 0;
    .content1 {
      padding-top: 26px;
      .image-wrapper {
        width: 147px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .content2 {
        text-align: center;
      .image-wrapper {
        width: 94px;
        height: 94px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  hr {
    opacity: 50%;
  }
  .police {
    font-size: 8px;
    text-align: center;
    padding: 10px 0;
  }
}
</style>