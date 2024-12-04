import type { UseFetchOptions } from '#app'
import dayjs from 'dayjs'
import { jwtDecode } from 'jwt-decode'

export const $appFetch = $fetch.create({
  onRequest: async ({ options }) => {
    const tokens = useAuthTokens()

    if (tokens.value) {
      const decoded = jwtDecode(tokens.value.accessToken)
      const tokenExpMoreThan1M = decoded.exp && dayjs(decoded.exp * 1000).isAfter(dayjs().add(60, 'minute'))

      if (!tokenExpMoreThan1M) {
        const newTokens = await $fetch('/api/auth/refresh', {
          method: 'POST',
          body: {
            refreshToken: tokens.value.refreshToken,
          },
          headers: {
            Authorization: `Bearer ${tokens.value.accessToken}`,
          },
        })

        tokens.value = newTokens
      }

      options.headers.set('Authorization', `Bearer ${tokens.value.accessToken}`)
    }
  },
  onResponseError: ({ response }) => {
    if (response.status === 401) {
      navigateTo('/sign-in')
    }
  },
})

// eslint-disable-next-line ts/no-explicit-any
export function useAppFetch(url: string, options: UseFetchOptions<any, any, any, any, any, any>) {
  return useFetch(url, {
    ...options,
    $fetch: $appFetch,
  })
}
