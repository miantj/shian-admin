<template>
    <div class="justify-center">
        <noExist />

        <div class="text">
            <p class="font-medium">404</p>
            <p class="text-gray">抱歉，你访问的页面不存在</p>
            <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import noExist from '@/assets/status/404.svg'
</script>
