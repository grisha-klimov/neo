<script lang="ts" setup>
import { Form } from '@primevue/forms'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { useMutation } from '@tanstack/vue-query'
import { useToast } from 'primevue/usetoast'

import { z } from 'zod'

const toast = useToast()
const router = useRouter()

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const tokens = useAuthTokens()

const { mutate, isPending } = useMutation({
  mutationKey: ['register'],
  mutationFn: (data: any) => $fetch('/api/auth/sign-up', {
    method: 'POST',
    body: data,
  }),
  onSuccess: (res) => {
    tokens.value = res
    toast.add({ severity: 'success', summary: 'Success', detail: 'Registration successful', life: 3000 })
    router.push('/')
  },
  onError: (error) => {
    const message = (error as any).data?.message || 'An error occurred'
    toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 })
  },
})

const resolver = zodResolver(schema)
</script>

<template>
  <div class="container max-w-5xl">
    <div class="py-8 text-center md:py-16">
      <h1 class="mb-4 text-2xl font-bold">
        Registration
      </h1>
      <Form
        :resolver="resolver"
        class="mx-auto flex w-full flex-col items-center gap-4 sm:w-60"
        @submit="({ values }) => mutate(values)"
      >
        <FormField v-slot="$field" name="email" class="flex flex-col gap-1">
          <InputText type="email" placeholder="Email" />
          <Message v-if="$field.invalid" severity="error" size="small" variant="simple">
            {{ $field.error.message }}
          </Message>
        </FormField>
        <FormField v-slot="$field" name="password" class="flex flex-col gap-1">
          <Password placeholder="Password" class="flex flex-col" />
          <Message v-if="$field.invalid" severity="error" size="small" variant="simple">
            {{ $field.error.message }}
          </Message>
        </FormField>
        <Button :loading="isPending" type="submit" severity="secondary" label="Register" />
      </Form>
      <Toast />
    </div>
  </div>
</template>
