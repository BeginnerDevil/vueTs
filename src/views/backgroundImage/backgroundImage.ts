import { Vue, Component } from 'vue-property-decorator';
@Component({
    components: {
    }
})
export default class BackgroundImage extends Vue {
    private boxTranslate: string = 'translate3d(0px, 0px, 0px)';
    private translate: string = 'translate3d(0px, -200px, 0px)';
    private boxTranslateBottom: string = 'translate3d(0px, 0px, 0px)';
    private translateBottom: string = 'translate3d(0px, -100px, 0px)';
    private showBackFlag: boolean = true;
    private goTopIcon: boolean = false;
    private timer: any = null;
    private handleScroll() {
        let self = this;
        let t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t <= 100) {
            this.goTopIcon = false;
        } else if (t > 100 && t <= 1600) {
            this.goTopIcon = true;
            this.showBackFlag = true;
            self.boxTranslate = "translate3d(0px," + (-(t / 1.5)) + "px, 0px)";
            self.translate = "translate3d(0px," + (((t / 1.5) * 0.8) - 200) + "px, 0px)";
        } else {
            let p = t - 1600;
            this.goTopIcon = true;
            this.showBackFlag = false;
            self.boxTranslateBottom = "translate3d(0px," + (-(p / 1.5)) + "px, 0px)";
            self.translateBottom = "translate3d(0px," + (((p / 1.5) * 0.8) - 100) + "px, 0px)";
        }
    }
    goTopClick() {
        clearInterval(this.timer);
        let self = this;
        this.timer = setInterval(() => {
            //获取滚动条距离顶部的高度
            let osTop = document.documentElement.scrollTop || document.body.scrollTop; //同时兼容了ie和Chrome浏览器
            //减小的速度
            let isSpeed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
         
            //判断，然后清除定时器
            if (osTop == 0) {
                clearInterval(self.timer);
            }
        }, 30);
    }
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    destroyed() {
        clearInterval(this.timer);

    }
}