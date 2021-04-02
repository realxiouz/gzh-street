<script>
import '@/common/color-ui/main.css'
import '@/common/color-ui/icon.css'
import '@/common/color-ui/animate.css'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
	onLaunch() {
		
	},
	onShow() {
	},
	onHide() {
	},
	computed: {
		...mapState('user', ['openId'])
	},
	methods: {
		...mapActions('user', ['getSessionKey']),
		...mapMutations('user', ['setToken'])
	}
}
</script>
