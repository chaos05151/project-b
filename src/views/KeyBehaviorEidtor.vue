<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>风控系统</el-breadcrumb-item>
                <el-breadcrumb-item>关键行为配置</el-breadcrumb-item>
                <el-breadcrumb-item>编辑关键行为</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form  :model="form">
                <el-form-item label="关键行为类型">
                     <el-select v-model="form.behavior_type" @change="handleSelect">
                        <el-option v-for="item in typeList" :label="item.label" :value="item.value"></el-option>
                        <!-- <el-option label="激励视频" value="event_1"></el-option>
                        <el-option label="其他类型" value="event_2"></el-option> -->
                     </el-select>
                </el-form-item>
                <el-form-item 
                v-for="(item ,index) in form.ad_play"
                :label="'广告播放'"
                :key="item.id"
                >
                     <div class="text">
                        <div>
                            <span>自启动起</span>
                            <el-input-number v-model="item.start_in" style="width:60px;margin:0 5px" :controls=false ></el-input-number>
                            <span>小时内，广告播放</span>
                            <el-input-number  v-model="item.play_times" style="width:60px;margin:0 5px" :controls=false></el-input-number>
                            <span>次</span>
                        </div>
                         <el-button type="text"  @click.prevent="removeitem('ad_play',index)">删除</el-button>
                     </div>
                </el-form-item>
                <el-form-item 
                v-for="(item ,index) in form.ecpm_large"
                :label="'ecpm最高值'"
                :key="item.id"
                >
                    <div class="text">
                        <div>
                            <span>自启动起</span>
                            <el-input-number v-model="item.start_in" style="width:60px;margin:0 5px" :controls=false></el-input-number>
                            <span>小时内，前</span>
                            <el-select v-model="item.forwords_times" style="width:80px;margin:0 5px" :controls=false>
                                <el-option v-for="item in ecpm_list" :value="item.value"  :key="item.value"></el-option>
                            </el-select>
                            <span>次ecpm最高值</span>
                            <el-input-number v-model="item.large_value" style="width:60px;margin:0 5px" :controls=false></el-input-number> 
                        </div>
                        <el-button type="text" @click.prevent="removeitem('ecpm_large',index)">删除</el-button>
                    </div>
                </el-form-item>
                <el-form-item 
                v-for="(item ,index) in form.ecpm_small"
                :label="'ecpm最低值'"
                :key="item.id"
                >
                    <div class="text">
                        <div>
                            <span>自启动起</span>
                            <el-input-number v-model="item.start_in" style="width:60px;margin:0 5px" :controls=false></el-input-number>
                            <span>小时内，前</span>
                            <el-select v-model="item.forwords_times" style="width:80px;margin:0 5px">
                                <el-option v-for="item in ecpm_list" :value="item.value" :key="item.value"></el-option>
                            </el-select>
                            <span>次ecpm最低值</span>
                            <el-input-number v-model="item.small_value" style="width:60px;margin:0 5px" :controls=false></el-input-number> 
                        </div>
                        <el-button type="text" @click.prevent="removeitem('ecpm_small',index)">删除</el-button>
                    </div>
                </el-form-item>
                <el-form-item 
                v-for="(item ,index) in form.ecpm_middle"
                :label="'ecpm均值'"
                :key="item.id"
                >
                    <div class="text">
                        <div>
                            <span>自启动起</span>
                            <el-input-number v-model="item.start_in" style="width:60px;margin:0 5px" :controls=false></el-input-number>
                            <span>小时内，前</span>
                            <el-select v-model="item.forwords_times" style="width:80px;margin:0 5px">
                                <el-option v-for="item in ecpm_list" :value="item.value" :key="item.value"></el-option>
                            </el-select>
                            <span>次ecpm均值</span>
                            <el-input-number v-model="item.middle_value" style="width:60px;margin:0 5px" :controls=false></el-input-number> 
                        </div>
                        <el-button type="text" @click.prevent="removeitem('ecpm_middle',index)">删除</el-button>
                    </div>
                </el-form-item>
                <el-form-item 
                v-for="(item ,index) in form.passed"
                :label="'通关'"
                :key="item.id"
                >
                    <div class="text">
                        <div>
                            <span>自启动起</span>
                            <el-input-number v-model="item.start_in" style="width:60px;margin:0 5px" :controls=false></el-input-number>
                            <span>小时内，通关</span>
                            <el-input-number v-model="item.pass_times" style="width:60px;margin:0 5px" :controls=false></el-input-number>
                            <span>次</span>
                        </div>
                        <el-button type="text" @click.prevent="removeitem('passed',index)">删除</el-button>
                    </div>
                </el-form-item>
                <el-form-item 
                v-for="(item ,index) in form.withdraw"
                :label="'提现'"
                :key="item.id"
                >
                    <div class="text">
                        <div>
                            <span>自启动起</span>
                            <el-input-number v-model="item.start_in" style="width:60px;margin:0 5px" :controls=false></el-input-number>
                            <span >小时内，提现</span>
                            <el-input-number v-model="item.withdraw_times" style="width:60px;margin:0 5px" :controls=false></el-input-number>
                            <span >次</span>
                        </div>
                        <el-button type="text" @click.prevent="removeitem('withdraw',index)">删除</el-button>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="text" @click="dialogVisible = true">添加条件 +</el-button>
                </el-form-item>
                <el-form-item label="条件">
                     <el-switch v-model="form.condition" active-value="2" inactive-value="1" active-text="或" inactive-text="且"></el-switch>
                </el-form-item>
                <el-form-item>
                     <div style="display:flex;justify-content: end;">
                        <el-button type="primary" @click="submitForm">保存</el-button>
                    </div>
                </el-form-item>
            </el-form>

            <el-dialog v-model="dialogVisible" title="添加条件" width="30%" >
                <span>选择条件 </span>
                <el-select v-model="select_tiaojian">
                    <el-option v-for="item in tiaojian_list" :value="item.value" :label="item.label" :key="item.id"></el-option>
                </el-select>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="confirmSelect_tiaojian">确认</el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
    </div>
</template>

<script setup>
    import {reactive, ref} from 'vue'
    import { useRoute,useRouter } from "vue-router";
    import {updateKeyBehavior,getKeyBehaviorTypeList} from '../api/risk'
    import { ElMessage} from 'element-plus'
    const router=useRouter()
    const id=ref("")
    const type=ref("0")
    const dialogVisible=ref(false)
    const typeList=ref([{
        label:"激励视频",
        value:"event_1"
    },{
        label:"其他类型",
        value:"event_2"
    }])
    const route=useRoute()
    const ecpm_list=ref([{
        value:"1"
    },{
        value:"2"
    },{
        value:"3"
    },{
        value:"5"
    },{
        value:"10"
    }])
    const select_tiaojian=ref("1")
    const tiaojian_list=ref([{
        value:"1",
        label:"广告播放"
    },{
        value:"2",
        label:"ecpm最高值"
    },{
        value:"3",
        label:"ecpm最低值"
    },{
        value:"4",
        label:"ecpm均值"
    },{
        value:"5",
        label:"通关"
    },{
        value:"6",
        label:"提现"
    }])
    const isOr=ref("1")
    const form=reactive({
        name:"",
        behavior_type:"event_1",
        condition:"1",
        ad_play:[],
        ecpm_large:[],
        ecpm_middle:[],
        ecpm_small:[],
        passed:[],
        withdraw:[]

    })

    //接受参数
        let obj=JSON.parse(route.params.data)
        console.log(obj);
       id.value=obj.id
       type.value=obj.behavior_type
       isOr.value=obj.condition
       form.behavior_type=obj.behavior_type
       form.condition=obj.condition
       form.name=obj.name
       let dataRow=JSON.parse(obj.rule)
       console.log(dataRow);
       if(dataRow.ad_play){
        form.ad_play.push(dataRow.ad_play)
       }
       if(dataRow.ecpm_large){
        form.ecpm_large.push(dataRow.ecpm_large)
       }
       if(dataRow.ecpm_middle){
        form.ecpm_middle.push(dataRow.ecpm_middle)
       }
       if(dataRow.ecpm_small){
        form.ecpm_small.push(dataRow.ecpm_small)
       }
       if(dataRow.passed){
        form.passed.push(dataRow.passed)
       }
       if(dataRow.withdraw){
        form.withdraw.push(dataRow.withdraw)
       }
       console.log(form);


       const handleSelect=(val)=>{
        console.log(val);
        switch (val) {
        case 'event_1':
                form.ad_play=[]
                form.ecpm_large=[]
                form.ecpm_middle=[]
                form.ecpm_small=[]
                form.passed=[]
                form.withdraw=[]
                form.ad_play=[{
                    id:Date.now(),
                    start_in:0,
                    play_times:0,
                }];
                form.ecpm_large=[{
                    id:Date.now(),
                    start_in:0,
                    forwords_times:"1",
                    large_value:0,
                }];
                form.ecpm_small=[{
                    id:Date.now(),
                    start_in:0,
                    forwords_times:"1",
                    small_value:0,
                }];
                form.ecpm_middle=[{
                    id:Date.now(),
                    start_in:0,
                    forwords_times:"1",
                    middle_value:0,
                }];
                break;
        case 'event_2':
                form.ad_play=[]
                form.ecpm_large=[]
                form.ecpm_middle=[]
                form.ecpm_small=[]
                form.passed=[]
                form.withdraw=[]
                form.passed=[{
                    id:Date.now(),
                    start_in:0,
                    pass_times:0,
                }];
                form.withdraw=[{
                    id:Date.now(),
                    start_in:0,
                    withdraw_times:0,
                }]
                break;
       }
    }


    //获取关键行为类型列表
    const getTypeList=()=>{
        getKeyBehaviorTypeList().then(res=>{
            let data=res.data
            let arr=[]
            for(let key in data){
                console.log(key,data[key]);
                arr.push({
                    value:key,
                    label:data[key]
                })
            }
            typeList.value=arr
            
        }).catch(err=>{
            console.log(err);
        })
    }



    const handle=()=>{
        console.log()
    }

//选择添加条件
const confirmSelect_tiaojian=()=>{
        console.log(select_tiaojian.value);
        switch (select_tiaojian.value){
            case "1":
                console.log("广告播放")
                if(form.ad_play.length==0){
                        form.ad_play.push({
                        id:Date.now(),
                        start_in:0,
                        play_times:0,
                    })
                }else{
                    ElMessage({
                        type:"warning",
                        message:"该条件已存在"
                    })
                }
                break;
            case "2":
                console.log("ecpm最高值")
                if(form.ecpm_large.length==0){
                        form.ecpm_large.push({
                        id:Date.now(),
                        start_in:0,
                        forwords_times:"1",
                        large_value:0,
                    })
                }else{
                    ElMessage({
                        type:"warning",
                        message:"该条件已存在"
                    })
                }
                break;
            case "3":
                console.log("ecpm最低值")
                if(form.ecpm_small.length==0){
                        form.ecpm_small.push({
                        id:Date.now(),
                        start_in:0,
                        forwords_times:"1",
                        small_value:0,
                    })
                }else{
                    ElMessage({
                        type:"warning",
                        message:"该条件已存在"
                    })
                }
                break;
            case "4":
                console.log("ecpm均值")
                if(form.ecpm_middle.length==0){
                    form.ecpm_middle.push({
                        id:Date.now(),
                        start_in:0,
                        forwords_times:"1",
                        middle_value:0,
                    })
                }else{
                    ElMessage({
                        type:"warning",
                        message:"该条件已存在"
                    })
                }
                
                break;
            case "5":
                console.log("通关")
                if(form.passed.length==0){
                    form.passed.push({
                        id:Date.now(),
                        start_in:0,
                        pass_times:0,
                    })
                }else{
                    ElMessage({
                        type:"warning",
                        message:"该条件已存在"
                    })
                }  
                break;
            case "6":
                console.log("提现")
                if(form.withdraw.length==0){
                    form.withdraw.push({
                        id:Date.now(),
                        start_in:0,
                        withdraw_times:0,
                    })
                }else{
                    ElMessage({
                        type:"warning",
                        message:"该条件已存在"
                    })
                }  
                break;
        }
        dialogVisible.value=false
    }

    //删除
    const removeitem=(key,index)=>{
        console.log(key,index);
        console.log(form[key]);
        form[key].splice(index,1)
    }

//获取提交的数据
const getAddData=()=>{
        let arr=[]

        let form_copy=JSON.parse(JSON.stringify(form))
        delete form_copy.behavior_type
        delete form_copy.condition
        delete form_copy.name
        if(form.ad_play.length!=0){
            form.ad_play.forEach(item=>{
                arr.push(`自启动起${item.start_in}小时内，广告播放${item.play_times}次`)
            })
            form_copy.ad_play={...form.ad_play[0]}
        } if(form.ecpm_large.length!=0){
            form.ecpm_large.forEach(item=>{
                arr.push(`自启动起${item.start_in}小时内，前${item.forwords_times}次ecpm最高值${item.large_value}`)
            })
            form_copy.ecpm_large={...form.ecpm_large[0]}
        } if(form.ecpm_small!=0){
            form.ecpm_small.forEach(item=>{
                arr.push(`自启动起${item.start_in}小时内，前${item.forwords_times}次ecpm最低值${item.small_value}`)
            })
            form_copy.ecpm_small=form.ecpm_small[0]
        } if(form.ecpm_middle.length!=0){
            form.ecpm_middle.forEach(item=>{
                arr.push(`自启动起${item.start_in}小时内，前${item.forwords_times}次ecpm均值${item.middle_value}`)
            })
            form_copy.ecpm_middle={...form.ecpm_middle[0]}
        } if(form.passed.length!=0){
            form.passed.forEach(item=>{
                arr.push(`自启动起${item.start_in}小时内，通关${item.pass_times}次`)
            })
            form_copy.passed={...form.passed[0]}
        } if(form.withdraw.length!=0){
            form.withdraw.forEach(item=>{
                arr.push(`自启动起${item.start_in}小时内，通关${item.withdraw_times}次`)
            })
            form_copy.withdraw={...form.withdraw[0]}
        }
        let str=""
        

        if(form.condition=="1"){
            str=arr.join("且")
        } if(form.condition=="2"){
            str=arr.join("或")
        }

        form.name=str

        for(let key in form_copy){
            if(form_copy[key].length==0){
                delete form_copy[key]
            }
        }

        console.log("form_copy",form_copy);

       
        let jsonStr=JSON.stringify(form_copy)

        let data={
            name:str,
            behavior_type:form.behavior_type,
            condition:form.condition,
            rule:jsonStr
        }
        // console.log(str);
        return data
        // console.log(data);
    }

    //提交编辑
    const submitForm=()=>{
        let data=getAddData()
        console.log(id.value,data);
        updateKeyBehavior(id.value,data).then((res)=>{
            if(res.status==200){
                ElMessage({
                    type:"success",
                    message:"更新成功"
                })
                router.push({
                            name:'keybehavior'
                        })
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

     getTypeList()
  
</script>

<style scoped>

    .text{
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>