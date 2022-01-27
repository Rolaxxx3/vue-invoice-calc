export default [
  {
    path: '/',
    name: 'invoice',
    component: () => import('@/views/Invoice.vue'),
  },
  {
    path: '*',
    redirect: { name: 'invoice' },
  },
]
