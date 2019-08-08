import { Component, Vue, Watch, Emit, Prop } from 'vue-property-decorator';
import SHZ from '../../js/public'
@Component({
    components: {
    }
})

export default class Welcome extends Vue {
    private leaveWordData: Array<any> = [];
    private getLeaveWords(): void {
        this.$http.get(SHZ.path + '/leaveWordsData').then(res => {
            this.leaveWordData = res.data.message;
        })
    }
    created(): void {

    }
    mounted(): void {
        this.getLeaveWords();
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