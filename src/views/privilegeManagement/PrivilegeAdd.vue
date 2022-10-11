<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>权限管理</el-breadcrumb-item>
                <el-breadcrumb-item>添加角色</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form :model="form" label-width="100px" style="width:400px">
                <el-form-item prop="name" label="角色名称"
                :rules="[{ required: true,message: '请输入角色名称', trigger: 'blur' }]"
                >
                    <el-input  v-model="form.name" placeholder="请输入角色名称" clearable></el-input>
                </el-form-item>
                <el-form-item prop="remark" label="备注/描述">
                    <el-input v-model="form.remark" placeholder="请输入您的昵称"></el-input>
                </el-form-item>
                <el-form-item prop="menus" label="角色权限" :rules="[{ required: true, message: '请选择', trigger: 'blur' }]">
                    <el-tree
                    ref="treeRef"
                    :data="data"
                    show-checkbox
                    node-key="id"
                    ></el-tree>
                </el-form-item>
                <el-form-item>
                    <el-button @click="goback">取消</el-button>
                    <el-button type="primary" @click="submit">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
    import {ref ,reactive} from 'vue'
    import { useRouter } from 'vue-router';
    import privilegeJSON from '../../config/privilege.json'
    import { ElMessage } from 'element-plus'
    import { addRoles } from '../../api/privilelge'
    import menus from '../../mock/menus.json'
    import { dealMenus } from '../../utils/getMenus'
    const router=useRouter()
    const form=reactive({
        name:"",
        remark:"",
        menus:[]
    })
    const treeRef=ref()
    // const data=privilegeJSON.privilegList

    const data=dealMenus(menus)
    console.log(dealMenus(menus));

//添加角色
const handleAdd=()=>{
    addRoles(form).then(res=>{
        if(res.status==200){
            ElMessage.success('添加成功')
        }
    })
}

//提交
const submit=()=>{
    let arr=JSON.parse(JSON.stringify(treeRef.value.getCheckedNodes(false, true)))
    arr=arr.map(item=>{
        return item.id
    })
   const str=arr.join(',')
   form.menus=str
    // console.log(arr,str)
    // console.log(treeRef.value);
    if(form.menus==0){
        ElMessage.error('请选择角色权限')
        return 
    }else if(form.name==""){
        ElMessage.error('请输入角色名称')
        return 
    }else{
        console.log(form);
        handleAdd()
    } 
}
//取消（返回）
const goback=()=>{
    router.go(-1)
}


</script>

<style  scoped>

</style>