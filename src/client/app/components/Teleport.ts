import { defineComponent, getCurrentInstance, onMounted } from 'vue'

export const Teleport = defineComponent({
  name: 'VitePressTeleport',
  props: {
    to: {
      type: String,
      default: true
    }
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance()

    onMounted(() => {
      document.querySelector(props.to)?.append(instance?.proxy.$el as Element)
    })

    return () => slots.default?.()
  }
})
