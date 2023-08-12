# 容器

## 接口说明

| 接口说明 | 地址 |
| --- | --- |
| 列出镜像 | [/v1.43/images/json](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageList) |
| 构建镜像 | [/v1.43/build](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageBuild) |
| 删除构建器缓存 | [/v1.43/build/prune](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/BuildPrune) |
| 创建镜像 | [/v1.43/images/create](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageCreate) |
| 检查镜像 | [/v1.43/images/{name}/json](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageInspect) |
| 获取镜像的历史记录 | [/v1.43/images/{name}/history](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageHistory) |
| 推送镜像 | [/v1.43/images/{name}/push](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImagePush) |
| 标记镜像 | [/v1.43/images/{name}/tag](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageTag) |
| 移除镜像 | [/v1.43/images/{name}](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageDelete) |
| 搜索图片 | [/v1.43/images/search](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageSearch) |
| 删除未使用的映像 | [/v1.43/images/prune](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImagePrune) |
| 从容器创建新映像 | [https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageCommit](/v1.43/commit) |
| 导出镜像 | [/v1.43/images/{name}/get](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageGet) |
| 导出多个镜像 | [/v1.43/images/get](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageGetAll) |
| 导出多个镜像 | [/v1.43/images/load](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageLoad) |
