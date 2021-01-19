<template>
    <div class="post">
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-body">{{ post.description }}</p>

        <div class="post-footer">Publié il y a {{ timeAgo }}</div>
    </div>
</template>

<script>
import moment from "moment"

export default {
    name: "PostItem",
    props: {
        post: {}
    },
    computed: {
        timeAgo: function() {
            return moment(this.post.date).fromNow()
        }
    }
}
</script>

<style scoped>
.post {
    background-color: #e5e5e5;
    border-radius: 16px;
}

.post-title,
.post-body {
    padding: 0 16px;
}

.post-title {
    margin: 0;
    padding-top: 16px;
}

.post-footer {
    width: 100%;
    background-color: #555;
    color: #fff;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 8px 16px;
}
</style>
