import { Component, Vue, Watch, Emit, Prop } from 'vue-property-decorator';
interface form {
    name: string;
    password: string;
}
@Component({
    components: {
    }
})

export default class Login extends Vue {
    @Prop({ default: 'default value' }) propB!: string;
    private sign: boolean = true;

    private userData: form = {
        name: '',
        password: ''
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