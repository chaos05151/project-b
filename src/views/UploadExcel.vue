<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 积分系统
                </el-breadcrumb-item>
                <el-breadcrumb-item>点消项目</el-breadcrumb-item>
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
            <el-upload class="upload-demo" drag multiple :show-file-list="false" 
                action
                :http-request="ImportExcelData">
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
import {
    fetchImportResult,
    importDianxiaoExcelData,
} from "../api/dianxiao";
import moment from "moment";
const active = ref(1)
const tableData = ref([]);
//导入excel
const ImportExcelData = (file) => {
    active.value = 2
      let formDatas = new FormData();
      formDatas.append("file", file.file);
  importDianxiaoExcelData(formDatas)
    .then((res) => {
    if (res.status == 200) {
        active.value = 3
        ElMessage.success(res.message);
        fetchImportResultData()
      }else{
        ElMessage.error(res?.message);
        active.value = 1
      }
      setTimeout(() => {
        active.value = 1
    }, 3000)
    })
    .catch(() => {
    });
};
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
export default {
    name: "upload",
    setup() {
        console.log('environment', process.env.NODE_ENV)
        fetchImportResultData()
        return {
            active,
            tableData,
            ImportExcelData,
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