<script setup lang="ts">
import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useToast } from "primevue/usetoast";
import { z } from "zod";


const toast = useToast();
const router = useRouter();

const resolver = zodResolver(
  z.object({
    email: z.string().email(),
    password: z.string().min(8)
  })
);

async function onFormSubmit(data: any) {
  if (data.valid) {
    try {
      const response = await $fetch("/api/user/login", {
        method: "POST",
        body: data.values
      });

      const token = response.token
      localStorage.setItem('token', token)
      toast.add({ severity: "success", summary: "Success", detail: "Authorization successful", life: 3000 });
      await router.push('/')
    } catch (error: any) {
      const message = error.data?.message || "An error occurred";
      toast.add({ severity: "error", summary: "Error", detail: message, life: 3000 });
    }
  }
}
</script>

<template>
  <div class="container max-w-5xl">
    <div class="py-8 md:py-16 text-center">
      <h1 class="mb-4 text-2xl font-bold">
        Log in
      </h1>
      <Form :resolver="resolver" class="flex w-full flex-col items-center gap-4 sm:w-60 mx-auto" @submit="onFormSubmit">
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
        <Button type="submit" severity="secondary" label="log in" />
      </Form>
      <Toast />
    </div>
  </div>
</template>