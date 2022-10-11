<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>权限管理</el-breadcrumb-item>
                <el-breadcrumb-item>账号列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <span>账号列表</span>
                <el-button type="primary" @click="goPrivilegeAccountAdd">添加账号</el-button>
            </div>
            <el-divider />
            <div class="search">
                <el-input placeholder="请输入用户名称" style="width:250px;" v-model="query.account">
                    <template #append>
                        <el-button  @click="handleSearch"><el-icon><Search /></el-icon></el-button>
                    </template>
                </el-input>
            </div>
            <el-table border :data="tableData">
                <el-table-column prop="name" label="昵称"></el-table-column>
                <el-table-column prop="user_name" label="用户名"></el-table-column>
                <el-table-column prop="add_date" label="添加日期"></el-table-column>
                <el-table-column  label="操作">
                    <template #default="scope">
                        <el-button type="text"  icon="el-icon-edit" @click="handleEidtor(scope.row)">编辑</el-button>
                        <el-button type="text" style="color:red" icon="el-icon-delete" @click="handleDelte(scope.row.id)">删除</el-button>
                        <el-button type="text" style="color:rgb(11 210 72)" icon="el-icon-delete" @click="changePSW(scope.row)">改密</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
            </div>
        </div>
        <!-- 改密对话框 -->
        <el-dialog
            v-model="dialogVisible"
            title="修改密码"
            width="30%"
        >
            <div>id:{{currentAccount.id}}</div>
            <div>昵称:{{currentAccount.name}}</div>
            <div>用户名:{{currentAccount.user_name}}</div>
            <div>密码：<el-input v-model="currentAccount.password"></el-input></div>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="confirmChange"
                >确认</el-button
                >
            </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
    import { ref,reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import {ElMessageBox} from 'element-plus';
    import { useProject } from '../../store/project';
    const useProjectStore=useProject()
    const dialogVisible=ref(false)
    const router=useRouter()
    const query=reactive({
        page_index:1,
        page_size:10,
        account:undefined
    })
    const pageTotal=ref(1);
    const tableData=ref([
        {
            id:"1",
            name:"sdf",
            user_name:"1313",
            password:"dfggdf8",
            add_date:"2022-10-13"
        }
    ])
    const currentAccount=ref({
        id:"",
        name:"",
        user_name:"",
        password:""
    })
    //handleSearch
    const handleSearch=()=>{
        console.log(query);
    }
    //获取表格数据
    const getData=()=>{
        console.log();
    }
    //分页
    const handlePageChange=(val)=>{
        query.page_index=val
    }
    //跳转添加账号页
    const goPrivilegeAccountAdd=()=>{
        router.push({
            name:'accountadd'
        })
    }
    //编辑
    const handleEidtor=(row)=>{
        console.log(row);
        useProjectStore.setprivilegeaccount(row)
        router.push({name:"accounteidtor"})
    }
    //删除
    const handleDelte=(id)=>{
        console.log(id);
    }
    //改密
    const changePSW=(row)=>{
        currentAccount.value=row
        console.log(currentAccount.value);
        dialogVisible.value=true
    }
    //改密确认
     const confirmChange=()=>{
        console.log(currentAccount.value.password);
        dialogVisible.value=false
     }
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