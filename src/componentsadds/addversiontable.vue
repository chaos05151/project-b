<template>
    <el-dialog title="新增版本" width="60%" v-model="addVisible" @close="close">
        <el-form label-width="110px">
            <el-form-item label="游戏选择">
                <el-select style="width:18%" v-model="formAdd.add_product_name_selected" placeholder="游戏选择" class="m-2">
                    <el-option v-for="item in addproductoptions" :key="item.value" :label="item.label_name"
                        :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="渠道选择">
                <el-select ref="add_channel_name_selected_label" style="width:18%"
                    v-model="formAdd.add_channel_name_selected" placeholder="游戏选择" class="m-2">
                    <el-option v-for="item in addchanneloptions" :key="item.value" :label="item.label_name"
                        :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="后台版本">
                <el-input style="width: 160px" v-model="formAdd.add_versions_b"></el-input>
            </el-form-item>
            <el-form-item label="前端版本">
                <el-input style="width: 160px" v-model="formAdd.add_versions_c"></el-input>
            </el-form-item>
            <el-form-item label="预期上线时间" prop="uptime">
                <el-date-picker v-model="formAdd.add_uptime" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="saveAdd">确 定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref, reactive ,onMounted} from "vue";
import { addVersionTableData, fetchProductChannelData } from '../api/product'
import { ElMessage } from "element-plus";
import moment from "moment";

defineProps({
    addVisible: {
        default: false
    }
})
//定义自定义事件

const emits = defineEmits(['update-add', 'update-addVisible'])
const checkVersion = (value) => {
    if (value) {
        let z_reg = /^([0-9]\d|[0-9])(.([0-9]\d|\d)){2}$/;
        if (!z_reg.test(value)) {
            ElMessage.error("版本号格式为数字如:x.x.x");
            return false;
        } else {
            return true;
        }
    } else {
        ElMessage.error("请选择游戏！");
        return false;
    }
};

const addchanneloptions = ref([]);
const formAdd = reactive({})
const addproductoptions = ref([]);
const add_channel_name_selected_label = ref('')
const saveAdd = async () => {
    emits('update-addVisible', false)
    // addVisible.value = false;
    if (formAdd.add_uptime && formAdd.add_uptime < moment().format("YYYY-MM-DD HH:mm:ss")) {
        ElMessage.error("预期上线时间不能在当前时间之前！");
        return;
    }
    if (!checkVersion(formAdd.add_versions_b) || !checkVersion(formAdd.add_versions_c)) return
    const data = {
        product_id: formAdd.add_product_name_selected,
        channel: formAdd.add_channel_name_selected,
        // channel_name: formAdd.add_channel_name_selected.label,
        versions_b: formAdd.add_versions_b,
        versions_c: formAdd.add_versions_c,
        uptime: formAdd.add_uptime ? formAdd.add_uptime : moment().format("YYYY-MM-DD HH:mm:ss"),
    }
    await addVersionTableData(data)
    ElMessage.success('新增成功')

    emits('update-add')
}
onMounted(() => {
 getadd()
})
const getadd=async()=>{
    try {
     const res= await fetchProductChannelData()
            addproductoptions.value = res.data.games
            addchanneloptions.value = res.data.channels
    
        
    } catch (error) {
        console.log(error)
        ElMessage.error("服务器异常！");
    }
}
const close=()=>{
    emits('update-add')
}


</script>

<style scoped>

</style>