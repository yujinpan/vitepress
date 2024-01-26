// entry for SSR
import { createApp } from './index'
import { createRenderer } from 'vue-server-renderer'
import type { SSGContext } from '../shared'

export async function render(path: string) {
  const { app, router } = await createApp()
  await router.go(path)
  const ctx: SSGContext = { content: '' }
  ctx.content = await createRenderer().renderToString(app as any, ctx)
  return ctx
}
