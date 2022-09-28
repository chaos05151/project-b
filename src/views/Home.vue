<template>
    <div class="about">
        <v-header />
        <v-sidebar />
        <div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">

            <v-tags></v-tags>
            <div class="content">
                <router-view v-slot="{ Component }" :key="key">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tags.nameList">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
                <!-- <el-backtop target=".content"></el-backtop> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useSidebarStore } from '../store/sidebar'
import { useTagsStore } from '../store/tags'
import vHeader from "../components/Header.vue";
import vSidebar from "../components/Sidebar.vue";
import vTags from "../components/Tags.vue";

const route = useRoute();
const key = computed(() => {
    return route.path + Math.random();
})
const sidebar = useSidebarStore();
const tags = useTagsStore();



</script>
