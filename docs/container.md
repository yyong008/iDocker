# 容器接口

## 接口

| 接口说明 | 地址 |
| --- | --- |
| 容器列表 | [/v1.43/containers/json](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerList) |
| 创建容器 | [/v1.43/containers/create](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerCreate) |
| 检查容器 | [/v1.43/containers/{id}/json](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerInspect) |
| 列出容器内运行的进程 | [/v1.43/containers/{id}/top](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerTop) |
| 获取容器日志 | [/v1.43/containers/{id}/logs](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerLogs) |
| 获取容器文件系统上的更改 | [/v1.43/containers/{id}/changes](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerChanges) |
| 导出容器 | [/v1.43/containers/{id}/export](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerExport) |
| 根据资源使用情况获取容器统计信息 | [/v1.43/containers/{id}/stats](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerStats) |
| 调整容器 TTY 的大小 | [/v1.43/containers/{id}/resize](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerResize) |
| 启动容器 | [/v1.43/containers/{id}/start](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerStart) |
| 停止容器 | [/v1.43/containers/{id}/stop](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerStop) |
| 重启容器 | [/v1.43/containers/{id}/restart](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerRestart) |
| 杀死容器 | [/v1.43/containers/{id}/kill](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerKill) |
| 更新容器 | [/v1.43/containers/{id}/update](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerUpdate) |
| 重命名容器 | [/v1.43/containers/{id}/rename](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerRename) |
| 暂停容器 | [/v1.43/containers/{id}/pause](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerPause) |
| 附加到容器 | [/v1.43/containers/{id}/attach](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerAttach) |
| 通过 websocket 附加到容器 | [/v1.43/containers/{id}/attach/ws](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerAttachWebsocket) |
| 等待容器 | [/v1.43/containers/{id}](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerWait) |
| 删除容器 | [/v1.43/containers/{id}](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerDelete) |
| 获取有关容器中文件的信息 | [/v1.43/containers/{id}/archive](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerArchiveInfo) |
| 获取容器中文件系统资源的存档 | [/v1.43/containers/{id}/archive](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerArchive) |
| 将文件或文件夹的存档提取到容器中的目录 | [/v1.43/containers/{id}/archive](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/PutContainerArchive) |
| 删除已停止的容器 | [/v1.43/containers/prune](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerPrune) |
