<template>
    <p>
        {{ post }}
    </p>
</template>

<script>
export default {
    name: "PostItem",
    props: {
        post: String
    }
}
</script>

<style scoped>

</style>
