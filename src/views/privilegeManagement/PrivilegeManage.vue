<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>权限管理</el-breadcrumb-item>
                <el-breadcrumb-item>角色创建</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <span>角色列表</span>
                <el-button type="primary" @click="goPrivilegeAdd">添加角色</el-button>
            </div>
            <el-divider />
            <div class="search">
                <el-input placeholder="请输入角色名称" style="width:250px;height: 42px;" v-model="query.character" @change="inputChange"></el-input>
                <el-button style="margin-left:10px" type="primary" @click="handleSearch"><el-icon><Search /></el-icon></el-button>
            </div>
            <el-table border :data="tableData">
                <el-table-column prop="id" label="id"></el-table-column>
                <el-table-column prop="characterName" label="角色名称"></el-table-column>
                <el-table-column prop="describe" label="备注/描述"></el-table-column>
                <el-table-column prop="founder"  label="创建者"></el-table-column>
                <el-table-column prop="add_date" label="添加日期"></el-table-column>
                <el-table-column  label="操作">
                    <template #default="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEidtor(scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" style="color:red" @click="handleDelte(scope.row.id)">删除</el-button>
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
    import { ref,reactive } from 'vue'
    import {useRouter} from 'vue-router'
    import { useProject } from '../../store/project'
    const router=useRouter()
    const useProjectStore=useProject()
    const query=reactive({
        page_index:1,
        page_size:10,
        character:undefined
    })
    const pageTotal=ref(1);
    const tableData=ref([
        {
            id:"1",
            characterName:"fdsafh",
            describe:"dsf",
            founder:"sdf",
            add_date:"2022-09-13",
            privilege:[
    {
        "id": "1-1-1",
        "label": "查看应用"
    },
    {
        "id": "1-1-2",
        "label": "编辑应用"
    },
    {
        "id": "1-2-1",
        "label": "查看版本"
    },
    {
        "id": "1-2-2",
        "label": "编辑版本"
    }
]
        }
    ]);

    //输入框的值改变
    const inputChange=(val)=>{
        console.log(val);
        if(val==""){
            query.character=undefined
        }
    }
    //搜索
    const handleSearch=()=>{
        console.log(query);
    }
    //分页
    const handlePageChange=(val)=>{
        query.page_index=val
    }
    //跳转至添加角色页面
    const goPrivilegeAdd=()=>{
        router.push({
            name:'privilegeadd'
        })
    }
    //获取表格数据
     const getData=()=>{

     }
     //编辑
     const handleEidtor=(row)=>[
        // console.log(row)
        useProjectStore.setprivilegemanage(row),
        router.push({
            name:'privilegeeidtor'
        })
        
     ]



     getData()
</script>

<style  scoped>
    .handle-box{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .search{
        width: 300px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>