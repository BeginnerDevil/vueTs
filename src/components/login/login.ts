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
    private singin(): any {
        let self = this;
        if (this.userData.name == '') return alert("请输入账号");
        if (this.userData.password == '') return alert("请输入密码");
        return self.$http.post('http://192.168.1.73:3000/signup', {
            "name": this.userData.name,
            "password": this.userData.password
        }).then(msg => {
            if (msg.data.code == 1) {
                alert(msg.data.message);
                this.sign = false;
            } else {
                alert(msg.data.message);
            }


        })
    }
    private setSign(num:number):void {
         if (num == 1) {
             this.sign = false;
         } else {
             this.sign = true;
         }
    }
    private singup():any {
        let self = this;
        if (this.userData.name == '') return alert("请输入账号");
        if (this.userData.password == '') return alert("请输入密码");
        return self.$http.post('http://192.168.1.73:3000/signin', {
            "name": this.userData.name,
            "password": this.userData.password
        }).then(msg => {
            if (msg.data.code == 1) {
                alert(msg.data.message);
                this.sign = false;
            } else {
                alert(msg.data.message);
            }
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