import { defineComponent, h, computed, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import { contentUpdatedCallbacks } from '../utils'

const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn())

export const Content = defineComponent({
  name: 'VitePressContent',
  props: {
    as: { type: [Object, String], default: 'div' }
  },
  setup(props) {
    const route = useRoute()
    const { frontmatter, site } = useData()
    watch(frontmatter, runCbs, { deep: true, flush: 'post' })

    // fix warn: name includes '/'
    const component = computed(() => {
      const component = route.component
      if (component?.name) {
        // @ts-ignore
        component.name = component.name?.replace('/', '-')
      }
      return component
    })

    return () =>
      h(
        props.as,
        site.value.contentProps ?? { style: { position: 'relative' } },
        [
          component.value
            ? h(component.value, {
                on: {
                  'hook:mounted': runCbs,
                  'hook:updated': runCbs,
                  'hook:unmounted': runCbs
                }
              })
            : '404 Page Not Found'
        ]
      )
  }
})
