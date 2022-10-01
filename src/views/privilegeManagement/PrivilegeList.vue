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
                <el-input placeholder="请输入角色名称" style="width:250px;height: 42px;" v-model="query.account" @change="inputChange"></el-input>
                <el-button style="margin-left:10px" type="primary" @click="handleSearch"><el-icon><Search /></el-icon></el-button>
            </div>
            <el-table border :data="tableData">
                <el-table-column prop="name" label="昵称"></el-table-column>
                <el-table-column prop="user_name" label="用户名"></el-table-column>
                <el-table-column prop="add_date" label="添加日期"></el-table-column>
                <el-table-column  label="操作">
                    <template #default="scope">
                        <el-button type="text"  icon="el-icon-edit" @click="handleEidtor(scope.row)">编辑</el-button>
                        <el-button type="text" style="color:red" icon="el-icon-delete" @click="handleDelte(scope.row.id)">删除</el-button>
                        <el-button type="text" style="color:rgb(11 210 72)" icon="el-icon-delete" @click="handleDelte(scope.row.id)">改密</el-button>
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
    import { ref,reactive } from 'vue';
    import { useRouter } from 'vue-router';
    const router=useRouter()
    const query=reactive({
        page_index:1,
        page_size:10,
        account:undefined
    })
    const pageTotal=ref(1);
    const tableData=ref([
        {
            name:"sdf",
            user_name:"1313",
            add_date:"2022-10-13"
        }
    ])
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