<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 积分系统
                </el-breadcrumb-item>
                <el-breadcrumb-item>短视频项目</el-breadcrumb-item>
                <el-breadcrumb-item>配置表导入</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-steps :active="active" finish-status="success">
                <el-step title="选择文件" />
                <el-step title="导入数据" />
                <el-step title="导入完成" />
            </el-steps>
            <div class="content-title">支持拖拽</div>
            <el-upload class="upload-demo" drag multiple :show-file-list="false" :on-success="uploadSuccess"
                :on-error="uploadError" v-model:file-list="fileList"
                action="https://flora.guanxiapp.cn/api/v1/business_altman/read_excel_data">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                    将文件拖到此处，或
                    <em>点击上传</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">只能上传 xlsx/xls 文件</div>
                </template>
            </el-upload>
            <el-divider />
            <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
                <el-table-column prop="file_name" label="文件名称"></el-table-column>
                <el-table-column prop="import_status" label="状态">
                <template #default="scope">
                        <el-tag :type="
                                scope.row.import_status === '导入成功'
                                    ? 'success'
                                    : scope.row.import_status === '导入失败'
                                    ? 'danger'
                                    : ''
                            ">{{ scope.row.import_status }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="updated_at" label="导入时间"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import "cropperjs/dist/cropper.css";
import {
    fetchImportResult,
} from "../api/dianxiao";
import moment from "moment";
const active = ref(1)
const fileList = ref()
const tableData = ref([]);
//导入结果查询
const fetchImportResultData = () => {
  fetchImportResult()
    .then((res) => {
      tableData.value = res.data.map((item) => {
          return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss")
          };
        });;
    })
    .catch(() => {
    });
};
const uploadSuccess = (res, file, fileList) => {
    console.log('res', res)
    console.log('file', file)
    active.value = 2
    if (res.status == 200) {
        active.value = 3
        file.name = `${file.name}（上传成功）`
        // fileList.value = fileList
    } else {
        file.name = `${file.name}（上传失败）`
        active.value = 1
        //    fileList.value = fileList
    }
    fetchImportResultData()
    setTimeout(() => {
        active.value = 1
    }, 5000)
};
const uploadError = (res, file, fileList) => {
    console.log('res', res)
    console.log('file', file)
    console.log('fileList', fileList)
    file.name = `${file.name}（上传失败）`
    fileList.value = file
    active.value = 1
    ElMessage.error("上传失败，请检查配置表！");
    fetchImportResultData()
};
export default {
    name: "upload",
    setup() {
        fetchImportResultData()
        const imgSrc = ref("");
        const dialogVisible = ref(false);
        const cropper = ref(null);

        const setImage = (e) => {
            const file = e.target.files[0];
            if (!file.type.includes("image/")) {
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                dialogVisible.value = true;
                imgSrc.value = event.target.result;
                cropper.value && cropper.value.replace(event.target.result);
            };
            reader.readAsDataURL(file);
        };

        const cropImage = () => {
            cropImg.value = cropper.value.getCroppedCanvas().toDataURL();
        };

        const cancelCrop = () => {
            dialogVisible.value = false;
        };

        return {
            active,
            uploadSuccess,
            fileList,
            tableData,
            uploadError,
            cropper,
            imgSrc,
            dialogVisible,
            setImage,
            cropImage,
            cancelCrop,
        };
    },
};
</script>

<style scoped>
.content-title {
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}

.pre-img {
    width: 100px;
    height: 100px;
    background: #f8f8f8;
    border: 1px solid #eee;
    border-radius: 5px;
}

.crop-demo {
    display: flex;
    align-items: flex-end;
}

.crop-demo-btn {
    position: relative;
    width: 100px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    margin-left: 30px;
    background-color: #409eff;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    box-sizing: border-box;
}

.crop-input {
    position: absolute;
    width: 100px;
    height: 40px;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
}
</style>