import { Vue, Component } from 'vue-property-decorator';
import SHZ from '../../js/public'

interface app {
    title: string;
}
@Component({
    components: {
    }
})
export default class BackgroundImage extends Vue {
    private name: string = '';
    private email: string = '';
    private phone: string = '';
    private remark: string = '';
    private apps: Array<app> = [{
        title: 'javascript'
    },
    {
        title: 'typescript'
    }, {
        title: 'vue-cli 3.9'
    }, {
        title: 'axios'
    }, {
        title: 'vuex'
    }]
   
    private submit(): any {
        if (this.name == '') return alert('输入姓名');
        if (this.remark == '') return alert('输入内容');
        return this.$http.post(SHZ.path +'/leaveWords', {
            "name": this.name,
            "remark": this.remark,
            "email": this.email,
            "phone": this.phone,
        }).then(res => {
            alert(res.data.message);
            if (res.data.code == 1) {
                this.name = '';
                this.email = '';
                this.phone = '';
                this.remark = '';
            }
            console.log(this.name, this.email, this.phone, this.remark)
        }).catch(req => {
            alert(req.data.message);
        })

    }
    mounted() {
    }

}