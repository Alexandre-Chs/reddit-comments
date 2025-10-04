import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/assigned/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/assigned/"!</div>
}
