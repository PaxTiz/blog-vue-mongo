<template>
    <div class="notification">
        <p>
            {{ text }}
            <span @click="this.delete">x</span>
        </p>
    </div>
</template>

<script>
export default {
    name: "Notification",
    props: {
        text: String,
        delete: Function
    }
}
</script>

<style scoped>
.notification {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 16px;
    right: 16px;
    padding: 0 16px;
    color: #fff;
    background-color: #555555;
    border-radius: 16px;
}

.notification span {
    margin-left: 32px;
    cursor: pointer;
    background-color: dodgerblue;
    color: #fff;
    padding: 4px 10px;
    border-radius: 50%;
}
</style>
