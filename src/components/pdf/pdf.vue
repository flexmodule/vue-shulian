<template>
  <div id="printContainer" @click="scalePDF">
    <canvas v-for="n in totalPage" :id="'pdf-canvas' + n" class="pdf-content"></canvas>
  </div>
</template>

<style lang="scss" scoped>
#pdf-container {
  width: 100%;
}
</style>

<script>
import PDFJS from "pdfjs-dist";
export default {
  name: "PDFViewer",
  props: {
    pdfUrl: ""
  },
  data() {
    return {
      show: false,
      totalPage: 0,
      loadedPageCount: 0,
      meta: "",
      hasScale: false
    };
  },
  mounted() {
    this.showPdf();
  },
  methods: {
    showPdf(scaleRate) {
      // PDFJS.PDFJS.disableWorker = true;
      PDFJS.getDocument(this.pdfUrl).then(pdf => {
        this.totalPage = pdf.numPages; //总页数
        for (var i = 1; i <= this.totalPage; i++) {
          pdf.getPage(i).then(page => {
            /* 获取当前屏幕的宽度 */
            var clientWidth = document.body.clientWidth;

            var viewport = page.getViewport(1);
            var scale = clientWidth / viewport.width;
            var scaleViewport = page.getViewport(scaleRate ? scaleRate : scale);

            var canvas = document.getElementById(
              "pdf-canvas" + page.pageNumber
            );

            var context = canvas.getContext("2d");
            /* 解决canvas在移动端模糊不清的问题 */
            var devicePixelRatio = window.devicePixelRatio || 1,
              backingStoreRatio =
                context.webkitBackingStorePixelRatio ||
                context.mozBackingStorePixelRatio ||
                context.msBackingStorePixelRatio ||
                context.oBackingStorePixelRatio ||
                context.backingStorePixelRatio ||
                1,
              ratio = devicePixelRatio / backingStoreRatio;

            canvas.width = scaleViewport.width * ratio;
            canvas.height = scaleViewport.height * ratio;
            canvas.style.width = scaleViewport.width + "px";
            canvas.style.height = scaleViewport.height + "px";
            context.scale(ratio, ratio);

            var renderContext = {
              canvasContext: context,
              viewport: scaleViewport
            };
            page.render(renderContext).promise.then(() => {
              this.loadedPageCount++; //加载一个+1，最后总数和totalPage一样了，表示pdf加载完了
            });
          });
        }
      });
    },
    scalePDF() {
      //   this.hasScale = !this.hasScale;
      //   this.showPdf(this.hasScale ? "" : 2);
    }
  }
};
</script>