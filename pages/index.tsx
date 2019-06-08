import { Vue } from "nuxt-property-decorator"

export default Vue.extend({
  name: "Index",
  middleware: ["index-redirect"],
  render() {
    return <div />
  }
})
