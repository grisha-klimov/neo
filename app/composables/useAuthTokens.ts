export function useAuthTokens() {
  const tokens = useCookie<{
    accessToken: string
    refreshToken: string
  } | null>('tokens', {
    default: () => null,
  })

  return tokens
}
