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
                <el-form-item prop="password" label="密码" :required="true">
                    <el-input v-model="form.password" type="password" placeholder="请输入密码"  show-password ></el-input>
                </el-form-item>
                <el-form-item prop="name" label="昵称" :required="true">
                    <el-input v-model="form.name" placeholder="请输入昵称" clearable></el-input>
                </el-form-item>
                <el-form-item  label="项目" required>
                    <el-select v-model="selectedProject" @change="getProductList" placeholder="请选择项目">
                        <el-option v-for="item in projectList" :value="item.value" :label="item.label" :key="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label="应用" :required="true" >
                    <el-select v-model="form.product_id" @change="hanleChange" placeholder="请先选择项目">
                        <el-option v-for="item in selectList" :value="item.value" :label="item.label" :key="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="prilegeList" label="角色" :rules="[{ required: true,message: '请选择角色', trigger: 'blur' }]">
                     <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleAllChange">全选</el-checkbox>
                     <el-checkbox-group v-model="checkedList" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="item in list" :key="item.value" :label="item.value">{{item.label}}</el-checkbox>
                     </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button>取消</el-button>
                    <el-button type="primary" @click="submit">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref,reactive } from 'vue'
    import {fetchRoles} from '../../api/privilelge'
    import { fetchMainProductList,fetchProductList} from '../../api/product'
    const form=reactive({
        user_name:"",
        password:"",
        product_id:"",
        name:"",
        privilegeList:''
    });
    const selectedProject=ref("")
    const projectList=ref([])
    const selectList=ref([])

    //获取项目
    const getMainprodutlist=()=>{
        fetchMainProductList().then(res=>{
            if(res.status==200){
                projectList.value=res.data.map(item=>{
                    return {
                        value:item.id,
                        label:item.main_product_name,
                        children:[]
                    }
                })
            }
        })
    }
    // const getProductList=(id)=>{
    //     let data={
    //         main_product_id:id
    //     }
    //   return  fetchProductList(data)
    // }
    const selectGame=ref([])
    const checkAll=ref(false)
    const checkedList=ref([])
    const isIndeterminate = ref(true)
    const ruleFormRef = ref()
    

    const props=ref({
        expandTrigger:'click',
        lazy: true,
        lazyLoad(node, resolve){
            const { value }=node
            let data={
                main_product_id:value
            }
            fetchProductList(data).then(res=>{
                if(res.data==200){
                    console.log(res);
                    const nodes=res.data.map(item=>{
                        return {
                            value:item.product_id,
                            label:item.item.product_name
                        }
                    })
                    resolve(nodes)
                }
            })
        }
    })

    //hanleChange
    const hanleChange=(val)=>{
        console.log(val);
    }


    //获取应用
    const getProductList=()=>{
        selectList.value=[]
        form.product_id=""
        let data={
            main_product_id:selectedProject.value
        }
        fetchProductList(data).then(res=>{
            if(res.status==200){
               selectList.value=res.data.map(item=>{
                    return {
                        value:item.product_id,
                        label:item.product_name
                    }
                })
            }
        })
    }


    //角色列表
    const getRoles=()=>{
        fetchRoles().then(res=>{
            if(res.status==200){
                res.data.lists
            }
        })
    }

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
        }else{
            callback()
        }
    }

    //validatePSW
    const validatePSW=(rule,value,callback)=>{
        if(!value){
            return callback(new Error('请输入密码'))
        }else{
            callback()
        }
    }

    //checkName
    const checkName=(rule,value,callback)=>{
        if(!value){
            return callback(new Error('请输入昵称'))
        }else{
            callback()
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

    getMainprodutlist()
</script>

<style  scoped>

</style>