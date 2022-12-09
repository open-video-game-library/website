<script lang="ts" setup>
import { mdiSend } from "@mdi/js"

const valid = ref(true)
const isSending = ref(false)

const formInfo = {
    action: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScpDBuQV0ca-PTrxrzm4QniH_u5_wF-3SGEHx1FT3SVJGbpqg/formResponse",
    senderName: "entry.1143921380",
    senderEmail: "entry.2040321557",
    message: "entry.752954745",
}
const formParams = reactive({
    senderName: "",
    senderEmail: "",
    message: ""
})
let { senderName, senderEmail, message } = toRefs(formParams)

const submit = () => {
    isSending.value = true
    const submitParams = new FormData()
    const CORS_PROXY = "https://cors-anywhere-keitalab.herokuapp.com/"
    const GOOGLE_FORM_ACTION = formInfo.action
    submitParams.append("senderName", senderName.value)
    submitParams.append("senderEmail", senderEmail.value)
    submitParams.append("message", message.value)
    useFetch((CORS_PROXY + GOOGLE_FORM_ACTION), {
        method: "POST",
        body: submitParams
    }).then(response => {
        console.log(response)
        navigateTo({
            path: '/contact/thanks',
            query: {
                name: senderName.value,
                email: senderEmail.value,
                message: message.value
            }
        })
    })
}
</script>

<template>
    <v-container class="py-16">
        <h1>Contact</h1>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                v-model="senderName"
                :counter="50"
                :rules="[v => !!v || 'Name is required', v => (v && v.length <= 50) || 'Name must be less than 50 characters']"
                label="Name*"
                required
                class="my-8"
            ></v-text-field>

            <v-text-field
                v-model="senderEmail"
                :rules="[v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
                label="E-mail*"
                required
                class="my-8"
            ></v-text-field>

            <v-textarea 
                v-model="message"
                label="Message*"
                class="my-8"
                :rules="[v => !!v || 'Message is required']"
            ></v-textarea>

            <v-btn
                :disabled="!valid"
                color="primary"
                class="mb-8"
                @click="submit"
                :appendIcon="mdiSend"
                :loading="isSending"
            >Send</v-btn>
        </v-form>
    </v-container>
</template>