import { Component, Vue, Watch, Emit, Prop } from 'vue-property-decorator';
interface menu {
    title: string;
    comment: string;
    line: boolean;
}//菜单验证类型
@Component({
    components: {
    }
})

export default class Login extends Vue {
    private menus: Array<menu> = [{
        title: 'ALL',
        comment: 'allCards',
        line: false
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
    private ifMenuOpen:boolean = false;
    menuIconClick(){
        this.ifMenuOpen = !this.ifMenuOpen;
    }
    private menuMouseOver(flag: boolean, index: number): void {//菜单鼠标划入事件
            this.menus[index].line = true;
    }
    private menuMouseOut(index: number): void { //菜单鼠标划出事件
            this.menus[index].line = false;
    }
    created(): void {

    }
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