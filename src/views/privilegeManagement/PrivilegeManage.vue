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
                <el-table-column prop="name" label="角色名称"></el-table-column>
                <el-table-column prop="remark" label="备注/描述"></el-table-column>
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
    import {fetchRoles,deleteRoles } from  '../../api/privilelge'
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
            name:"fdsafh",
            remark:"dsf",
            founder:"sdf",
            add_date:"2022-09-13",
            privilege:'100,1372,1373,1374,1375,1376,1377,1472,1473,1474,1475,1476'
        }
    ]);


    //获取角色权限列表
    const getRoles=()=>{
        fetchRoles(query).then(res=>{
            if(res.status==200){
                tableData.value=res.data.lists
                pageTotal=res.data.total_count
            }
        })
    }

    //删除角色权限
    const delRoles=(id)=>{
        deleteRoles(id).then(res=>{
            if(res.status==200){
                ElMessage.success('删除成功')
            }
        })
    }

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
     const handleEidtor=(row)=>{
                // console.log(row)
                useProjectStore.setprivilegemanage(row),
        router.push({
            name:'privilegeeidtor'
        })
     }
     //删除
    const handleDelte=(id)=>{
        console.log(id);
    }



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