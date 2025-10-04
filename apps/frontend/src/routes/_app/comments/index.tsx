import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/comments/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/comments/"!</div>
}
