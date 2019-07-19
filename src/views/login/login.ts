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
    private message: string = '';

    private userData: form = {
        name: '',
        password: ''
    }
    private singin(): any {
        let self = this;
        if (this.userData.name == '') return alert("请输入账号");
        if (this.userData.password == '') return alert("请输入密码");
        return self.$http.post('http://192.168.12.20:3000/signin', {
            "name": this.userData.name,
            "password": this.userData.password
        }).then(msg => {
            console.log(msg);

        })

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