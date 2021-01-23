<template>
    <div>
        <h1>Latest news</h1>
        <button @click="toggleModal" class="btn btn-blue">A modal box because it's so funny 🤡 !</button>
        <button @click="triggerNotification" class="btn btn-red">Show a notification 🤡 !</button>
        <Modal :open="open" :onclick="toggleModal">
            <template #title>Hello World</template>
            <template #body>Hi how are you today ?</template>
        </Modal>

        <Notification :open="notify" :text="notificationText" :delete="triggerNotification" />

        <h2 v-if="loading">Loading data...</h2>
        <div v-else class="posts-list">
            <div v-for="post in posts" v-bind:key="post._id">
                <PostItem v-bind:post="post"/>
            </div>
        </div>
    </div>
</template>

<script>
import PostItem from "@/components/posts/PostItem";
import Modal from "@/components/utils/Modal";
import "@/assets/main.scss"
import Notification from "@/components/utils/Notification";

export default {
    name: "PostList",
    components: {Notification, Modal, PostItem},
    data: function () {
        return {
            posts: [],
            loading: true,
            error: "",
            open: false,
            notify: false,
            notificationText: "Vous avez un  nouveau message !"
        }
    },
    async mounted() {
        fetch("http://localhost:8000/")
            .then(res => res.json().then(json => this.posts = json.posts))
            .catch(err => this.error = err)
            .finally(() => this.loading = false)
    },
    methods: {
        toggleModal() {
            this.open = !this.open
        },
        triggerNotification() {
            this.notify = !this.notify
        },
    }
}
</script>

<style scoped>
    .posts-list {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
</style>
