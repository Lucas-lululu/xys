<template>
 <!-- 二级导航 -->
 <div>    
    <div class="container mt-5">
        <ul class="breadcrumb" >
            <li class="breadcrumb-item ml-5 ">
                <router-link to="/Recommend">推荐</router-link>
            </li>
            <li class="breadcrumb-item  ml-5">
                <router-link to="/fashion">时尚</router-link>
            </li>
            <li class="breadcrumb-item  ml-5">
                <router-link to="/beautymakeup">美妆</router-link>
            </li>
            <li class="breadcrumb-item  ml-5">
                <router-link to="/deliciousfood">美食</router-link>
            </li>
            <li class="breadcrumb-item  ml-5">
                <router-link to="/motion">运动</router-link>
            </li> 
            <li class="breadcrumb-item ml-5">
                <router-link to="/video">影音</router-link>
            </li>
            <li class="breadcrumb-item ml-5">
                <router-link to="/travel">旅行</router-link>
            </li>
            <li class="breadcrumb-item ml-5">
                <router-link to="/skincare">护肤</router-link>
            </li>
            <li class="breadcrumb-item ml-5">
                <router-link to="/infant">母婴</router-link>
            </li>
            <li class="breadcrumb-item ml-5">
                <router-link to="/read">读书</router-link>
            </li>
            <li class="breadcrumb-item ml-5">
                <router-link to="/fmen">时尚男士</router-link>
            </li>
        </ul>
    </div>
    <router-view></router-view>
</div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        cleardiv(e){
            console.log(e.target);
            $(e.target).css("border-bottom","2px solid red")
            .siblings().css("border-bottom","none");
            e.stopPropagation();
        },
    },
}
</script>
<style scoped>
    a:hover{
        border-bottom: 2px solid red;
    }
</style>
