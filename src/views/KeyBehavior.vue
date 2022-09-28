<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>风控系统</el-breadcrumb-item>
                <el-breadcrumb-item>关键行为配置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search">
                <div>
                    <span style="margin-right: 10px;">关键行为名称</span>
                    <el-input
                    v-model="keywords"
                    placeholder="输入关键行为名称"
                    style="width:200px"
                    />
                </div>
                <el-button
                type="primary"
                @click="queryByKeyword"
                >
                    查询
                </el-button>
            </div>
            <el-button type="primary" style="margin-bottom:10px;" @click="addKeyBehavior">新增关键行为 +</el-button>
            <el-table :data="tableData" border>
                <el-table-column prop="id" label="关键行为id"></el-table-column>
                <el-table-column prop="event_name" label="关键行为名称" show-overflow-tooltip></el-table-column>
                <el-table-column prop="created_at" label="创建时间"></el-table-column>
                <el-table-column  label="操作">
                    <template #default="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEidtor(scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" @click="handleDelte(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {reactive, ref} from 'vue'
    import { useRouter } from "vue-router";
    import { ElMessage, ElMessageBox } from 'element-plus'
    import {fetchKeyBehavior,deleteKeyBehavior} from '../api/risk'
    import moment from 'moment';
    const router = useRouter()
    
    const keywords=ref("")
    const pageTotal=ref(1)
    const query=reactive({
        page_index:1,
        page_size:10,
    })


    const tableData=ref([])
    // const tableData=ref([{
    //     id:1,
    //     rule:'{"name":"","behavior_type":"event_1","condition":"1","ad_play":[{"id":"1","start_in":1,"play_times":4,"del_flag":false}],"ecpm_large":[{"id":"2","start_in":1,"forwords_times":"3","large_value":6,"del_flag":false}],"ecpm_middle":[{"id":"3","start_in":1,"forwords_times":"2","middle_value":5,"del_flag":false}],"ecpm_small":[{"id":"4","start_in":1,"forwords_times":"5","small_value":5,"del_flag":false}],"passed":[{"id":"5","start_in":1,"pass_times":4,"del_flag":false}],"withdraw":[{"id":"6","start_in":1,"withdraw_times":7,"del_flag":false}]}',
    //     behavior_type:"event_1",
    //     condition:"1",
    //     name:"自启动起2小时内，广告播放4次 且 自启动起3小时内，前3次ecpm最高值6 且 自启动起3小时内，前5次ecpm最低值5 且 自启动起4小时内，前2次ecpm均值5 且 自启动起3小时内，通关4次 且 自启动起2小时内，通关7次",
    //     created_at:"2022-09-20",
    //     updated_at:"2022-09-22"
    // },{
    //     id:2,
    //     rule:'{"name":"","behavior_type":"event_2","condition":"1","ad_play":[{"id":"1","start_in":2,"play_times":4,"del_flag":false}],"ecpm_large":[{"id":"2","start_in":3,"forwords_times":"3","large_value":6,"del_flag":false}],"ecpm_middle":[{"id":"3","start_in":4,"forwords_times":"2","middle_value":5,"del_flag":false}],"ecpm_small":[{"id":"4","start_in":3,"forwords_times":"5","small_value":5,"del_flag":false}],"passed":[{"id":"5","start_in":3,"pass_times":4,"del_flag":false}],"withdraw":[{"id":"6","start_in":2,"withdraw_times":7,"del_flag":false}]}',
    //     behavior_type:"event_2",
    //     condition:"1",
    //     name:"自启动起2小时内，广告播放4次 且 自启动起3小时内，前3次ecpm最高值6 且 自启动起3小时内，前5次ecpm最低值5 且 自启动起4小时内，前2次ecpm均值5 且 自启动起3小时内，通关4次 且 自启动起2小时内，通关7次",
    //     created_at:"2022-09-20",
    //     updated_at:"2022-09-22"
    // }])


    

//关键行为查询
const getKeyBehaviorData=()=>{
    
    fetchKeyBehavior(query).then((res)=>{
         console.log(res.data);
        pageTotal.value=res.data.total_count
        tableData.value=res.data.lists.map(item=>{
            return{
                ...item,
                created_at:moment(item.created_at).format("YYYY-MM-DD HH:mm:ss")
            }
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}




//分页
const handlePageChange=(val)=>{
    query.page_index=val
    getKeyBehaviorData()
}


//新增关键行为
    const addKeyBehavior=()=>{

        if(pageTotal.value<30){
            router.push({
                name: 'keybehavioradd',
            })  
        }else{
            ElMessage({
                type:'warning',
                message:'关键行为数已达上限',
            })
        }
        
    }

//关键字模糊搜索
    const queryByKeyword=()=>{
        if(keywords.value!=""){
            query.name=keywords.value
        }else{
            delete query.name
        }
        console.log(query);
        getKeyBehaviorData()
       
    }

//编辑
    const handleEidtor=(row)=>{
        console.log(row);
        let str=JSON.stringify(row)
        router.push({
            name:'keybehavioreidtor',
            params:{
                data:str
            }
        })
    }
//删除
    const handleDelte=(id)=>{
        console.log(id);
        ElMessageBox.confirm(
            '是否删除改关键行为?',
            '警告',
            {
            confirmButtonText: '是',
            cancelButtonText: '否',
            type: 'warning',
            }
        )
            .then(() => {
                console.log(id);
                deleteKeyBehavior(id).then((res)=>{
                    if(res.status==200){
                        getKeyBehaviorData()
                        ElMessage({
                            type: 'success',
                            message: '删除成功',
                        })
                    }
                }) 
            })
            .catch(() => {
                ElMessage({
                    type: 'info',
                    message: '取消操作',
                })
            })
    }

    getKeyBehaviorData()
</script>

<style scoped>
    .search{
        height:auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

</style>