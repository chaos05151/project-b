<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>权限管理</el-breadcrumb-item>
                <el-breadcrumb-item>添加账号</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form :model="form" label-width="100px" style="width:400px"  status-icon ref="ruleFormRef"
                :rules="rules">
                <el-form-item prop="user_name" label="用户名" :required="true">
                    <el-input  v-model="form.user_name" placeholder="请输入用户名" clearable></el-input>
                </el-form-item>
                <el-form-item prop="name" label="昵称" :required="true">
                    <el-input v-model="form.name" placeholder="请输入昵称" clearable></el-input>
                </el-form-item>
                <el-form-item prop="prilegeList" label="角色" :rules="[{ required: true,message: '请选择角色', trigger: 'blur' }]">
                     <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleAllChange">全选</el-checkbox>
                     <el-checkbox-group v-model="checkedList" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="item in list" :key="item.value" :label="item.value">{{item.label}}</el-checkbox>
                     </el-checkbox-group>
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
    import { ref,reactive } from 'vue'
import router from '../../router';
    import { useProject } from '../../store/project'
    const useProjectStore=useProject()
    const form=reactive({
        user_name:"",
        name:"",
        privilegeList:''
    });
    const checkAll=ref(false)
    const checkedList=ref([])
    const isIndeterminate = ref(true)
    const ruleFormRef = ref()
    
    const list=[
        {
            value:"admin",
            label:"管理员"
        },
        {
            value:"server",
            label:"客服"
        },
        {
            value:"yunying",
            label:"运营"
        }
    ]
    //单选
    const handleCheckedCitiesChange=(value)=>{
        const checkedCount = value.length
        checkAll.value = checkedCount === list.length
        isIndeterminate.value = checkedCount > 0 && checkedCount < list.length
    }

    //全选
    const handleAllChange=(val)=>{
        console.log(checkedList.value,val);
        checkedList.value = val ? list.map(item=>item.value) : []
        isIndeterminate.value = false
    }


    //validateUserName
    const validateUserName=(rule,value,callback)=>{
        if(!value){
            return callback(new Error('请输入用户名'))
        }
    }

    //validatePSW
    const validatePSW=(rule,value,callback)=>{
        if(!value){
            return callback(new Error('请输入密码'))
        }
    }

    //checkName
    const checkName=(rule,value,callback)=>{
        if(!value){
            return callback(new Error('请输入昵称'))
        }
    }

    const rules = reactive({
        user_name: [{ validator: validateUserName, trigger: 'blur' }],
        password: [{ validator: validatePSW, trigger: 'blur' }],
        name: [{ validator: checkName, trigger: 'blur' }],
        })


    //提交
    const submit=()=>{
        form.privilegeList=checkedList.value
        let data=JSON.parse(JSON.stringify(form))
        checkName()
        validatePSW()
        validatePSW()
        console.log(data);
    }
    //取消
    const goback=()=>{
        router.go(-1)
    }

    //数据回显示
    const getDataBack=()=>{    
        console.log(useProjectStore.privilegeaccount);
        form.user_name=useProjectStore.privilegeaccount.user_name;
        form.name=useProjectStore.privilegeaccount.name
    }

    getDataBack()
</script>

<style  scoped>

</style>