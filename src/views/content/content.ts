import { Component, Vue, Watch, Emit, Prop } from 'vue-property-decorator';


interface menu {
    title: string;
    comment: string;
    line: boolean;
}//菜单验证类型
interface card {
    title: string;
    url: string;
    id: string;
    isHover: boolean;
    content: string;
}
@Component({
    components: {
    }
})

export default class Contents extends Vue {
    private cards: Array<card> = [{
        title: 'AWESOME RACING CAR',
        url: require('../../../public/images/center/portfolio-image-1.jpg'),
        id: '111111111',
        isHover: false,
        content: 'PORTFOLIO'
    },
    {
        title: 'AWESOME RACING CAR',
        url: require('../../../public/images/center/portfolio-image-2.jpg'),
        id: '22222222',
        isHover: false,
        content: 'PORTFOLIO'
    },
    {
        title: 'AWESOME RACING CAR',
        url: require('../../../public/images/center/portfolio-image-3.jpg'),
        id: '3333333',
        isHover: false,
        content: 'PORTFOLIO'
    },
    {
        title: 'AWESOME RACING CAR',
        url: require('../../../public/images/center/portfolio-image-4.jpg'),
        id: '4444444',
        isHover: false,
        content: 'PORTFOLIO'
    },
    {
        title: 'AWESOME RACING CAR',
        url: require('../../../public/images/center/portfolio-image-5.jpg'),
        id: '5555555',
        isHover: false,
        content: 'PORTFOLIO'
    },
    {
        title: 'AWESOME RACING CAR',
        url: require('../../../public/images/center/portfolio-image-6.jpg'),
        id: '6666666',
        isHover: false,
        content: 'PORTFOLIO'
    },
    {
        title: 'AWESOME RACING CAR',
        url: require('../../../public/images/center/portfolio-image-7.jpg'),
        id: '7777777',
        isHover: false,
        content: 'PORTFOLIO'
    },
    {
        title: 'AWESOME RACING CAR',
        url: require('../../../public/images/center/portfolio-image-8.jpg'),
        id: '888888',
        isHover: false,
        content: 'PORTFOLIO'
    },
    {
        title: 'AWESOME RACING CAR',
        url: require('../../../public/images/center/portfolio-image-9.jpg'),
        id: '99999',
        isHover: false,
        content: 'PORTFOLIO'
    },]
    private menus: Array<menu> = [{
        title: 'ALL',
        comment: 'allCards',
        line: true
    }, {
        title: 'GRAPHIC',
        comment: 'graphicCards',
        line: false
    }, {
        title: 'PHOTOSHOP',
        comment: 'photoshopCards',
        line: false
    }, {
        title: 'DESIGN',
        comment: 'designCards',
        line: false
    },];//菜单数组
    private lineFlag: boolean = false;//是否是点击后永久存在线
    private compontent: string = 'allCards';//:is 组件名称
    private menuClick(com: string, index: number): void { //菜单点击
        this.compontent = com;
        this.menus.forEach(item => {
            item.line = false;
        });
        this.menus[index].line = true;
        this.lineFlag = true;
    }
    private menuMouseOver(flag: boolean, index: number): void {//菜单鼠标划入事件
        if (flag) {//判断是否点击选中
            this.lineFlag = true;
        } else {
            this.menus[index].line = true;
            this.lineFlag = false;
        }
    }
    private menuMouseOut(index: number): void { //菜单鼠标划出事件
        if (!this.lineFlag) {
            this.menus[index].line = false;
        }
    }


    created(): void {    }
    mounted(): void {
    }
    //computed
    get computed(): any {
        return 1
    }
    @Emit()
    setLine(n: string) {

    }
    @Watch('message')
    setMessage(newd: any, old: any) {

    }
}