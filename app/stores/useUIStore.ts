export const useUIStore = defineStore('ui', () => {
  const windowSize = reactive({
    width: 0,
    height: 0
  })
  const isDesktop = computed(() => windowSize.width > 768)

  return { windowSize, isDesktop }
})
