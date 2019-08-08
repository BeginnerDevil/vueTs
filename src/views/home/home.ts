import { Component, Vue, Watch, Emit } from 'vue-property-decorator';
import backgroundImage from '../backgroundImage/backgroundImage.vue'
import welcome from '../welcome/welcome.vue';
import contents from '../content/content.vue';
import leaveWords from '../leaveWords/leaveWords.vue';
import menus from '../../components/menu/menu.vue';

@Component({
    components: {
        backgroundImage,
        welcome,
        contents,
        leaveWords,
        menus
    }
})

export default class Login extends Vue {
    created(): void {
        console.log('this is created')

    }
    mounted(): void {
        console.log('this is mounted')
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