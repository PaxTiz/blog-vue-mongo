<template>
    <div class="modal" :class="open ? 'open' : ''">
        <div class="flex">
            <h2 class="modal-title">
                <slot name="title"></slot>
            </h2>
            <span @click="onclick">X</span>
        </div>
        <p class="modal-body">
            <slot name="body"></slot>
        </p>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: {
        open: Boolean,
        onclick: Function
    }
}
</script>

<style scoped>
.modal > * {
    margin: 0;
}

.modal {
    position: absolute;
    left: 300px;
    right: 300px;
    width: calc(100% - 600px);
    max-width: 100vw;
    padding: 16px;
    color: #fff;
    background-color: #555555;
    border-radius: 16px;
    transform: translateY(-100vh);
    transition: transform .3s;
}

.modal.open {
    transform: translateY(-100px);
    transition: transform .3s;
}

.modal-title {
    font-size: 1.5em;
    font-weight: bold;
    padding: 0;
    margin: 0;
}

.modal span {
    cursor: pointer;
    background-color: dodgerblue;
    color: #fff;
    padding: 8px 14px;
    border-radius: 50%;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-body {
    margin-top: 16px;
}
</style>
