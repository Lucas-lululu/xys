<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div>
                    <p class="page_p">
                        <img src="img/shutterstock_100468744.jpg" alt="" class="img_alignright">
                    </p>
                    <h3 style="text-align: left">{{list[0].atitle}}</h3>
                    <p class="page_p" v-for="item of list" :key="item.id">{{item.atext}}</p>
                    <p class="page_p" v-for="item of list" :key="item.id">{{item.atext}}</p>
                    <p class="page_p" v-for="item of list" :key="item.id">{{item.atext}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[{aid:"",atitle:"",atext:""}],
        }
    },
    methods: {
        about(){
            var url = "http://127.0.0.1:3500/about";
            this.axios.get(url).then(result=>{
                this.list = result.data.data;
            });
        },
    },
    created() {
        this.about();
    },
}
</script>
<style scoped>
    .img_alignright{
        float: right;
        margin: 5px 0 15px 20px;
        max-width: 100%;
    }
    .page_p{
        color: #646464;
        margin: 0 0 20px 0;
        font-family: Lora;
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
    }
    .page_p>img{
        display: block;
        width: 400px;
        height: 400px;
        border-radius: 50%;
    }
</style>