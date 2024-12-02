<script setup lang="ts">
import { Form } from '@primevue/forms'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { useMutation } from '@tanstack/vue-query'
import { useToast } from 'primevue/usetoast'
import { z } from 'zod'

const toast = useToast()
const router = useRouter()

const resolver = zodResolver(
  z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
)

const { mutate, isPending } = useMutation({
  mutationKey: ['login'],
  mutationFn: (data: any) => $fetch('/api/user/login', {
    method: 'POST',
    body: data,
  }),
  onSuccess: ({ accessToken }) => {
    localStorage.setItem('token', accessToken)
    toast.add({ severity: 'success', summary: 'Success', detail: 'Authorization successful', life: 3000 })
    router.push('/')
  },
  onError: (error) => {
    const message = (error as any).data?.message || 'An error occurred'
    toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 })
  },
})
</script>

<template>
  <div class="container max-w-5xl">
    <div class="py-8 text-center md:py-16">
      <h1 class="mb-4 text-2xl font-bold">
        Log in
      </h1>
      <Form :resolver="resolver" class="mx-auto flex w-full flex-col items-center gap-4 sm:w-60" @submit="({ values }) => mutate(values)">
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
        <Button :loading="isPending" type="submit" severity="secondary" label="log in" />
      </Form>
      <Toast />
    </div>
  </div>
</template>
