import { Button, message } from 'antd';
import { useEffect, useState } from 'react';

import { PlaySquareOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProForm,
  ProFormDigit,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';

import { createContainer } from '@/services/container/ContainerController';
import { getImageDetail } from '@/services/images/ImagesController';

type CreateContainerModelProps = {
  name: string;
  trigger?: any;
};
const CreateContainerModel = ({
  name: Id,
  trigger,
}: CreateContainerModelProps) => {
  const [formRef] = ProForm.useForm();
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState();
  const [ports, setPorts] = useState<any[]>([]);

  const queryImageDetail = async () => {
    const res = await getImageDetail(Id);
    setData(res);
    const ports = Object.keys(res.ContainerConfig.ExposedPorts ?? {});
    setPorts(ports);
    formRef.setFieldValue(
      'ports',
      ports.map((ps) => {
        return {
          port: ps,
        };
      }),
    );
  };

  useEffect(() => {
    if (open) {
      queryImageDetail();
    }
  }, [open]);

  return (
    <ModalForm
      form={formRef}
      title="创建容器"
      open={open}
      onOpenChange={setOpen}
      trigger={
        trigger && (
          <Button
            type="text"
            icon={<PlaySquareOutlined />}
            onClick={() => {
              setOpen(!open);
            }}
            shape="circle"
          ></Button>
        )
      }
      onFinish={async (value: any) => {
        const PortBindings: any = {};

        value.ports?.forEach((port: any) => {
          PortBindings[port.port] = [{ HostPort: port.cPort?.toString() }];
        });

        const Binds: any[] = [];

        value.vols.forEach((vol: any) => {
          if (vol.hostPath && vol.containerPath) {
            Binds.push(`${vol.hostPath}:${vol.containerPath}`);
          }
        });

        const Env: any[] = [];

        value.envs.forEach((env: any) => {
          if (env.key && env.value) {
            Binds.push(`${env.key}=${env.value}`);
          }
        });

        const res = await createContainer({
          Image: Id,
          HostConfig: {
            PortBindings,
            Binds,
          },
          Env,
        });
        message.success(res.Id + '容器已被创建');
        return true;
      }}
    >
      <ProFormText
        name="name"
        label="容器名字"
        tooltip="A random name is generated if you do not provide one."
        placeholder="请输入名称"
        extra="A random name is generated if you do not provide one."
        rules={[
          {
            required: true,
            message: '请选择输入',
          },
        ]}
      />
      {/* 端口：存在已经暴露端口 */}
      {ports.length > 0 ? (
        <ProFormList label="端口" name={'ports'}>
          <ProForm.Group>
            <ProFormDigit
              width="md"
              name="cPort"
              placeholder="请输入宿主机端口"
              rules={[
                {
                  required: true,
                  message: '请选择输入',
                },
              ]}
            />
            <ProFormDigit
              width="md"
              name="port"
              disabled
              placeholder="请输入端口"
              rules={[
                {
                  required: true,
                  message: '请选择输入',
                },
              ]}
            />
          </ProForm.Group>
        </ProFormList>
      ) : (
        <ProFormDigit
          width="md"
          name="cPort"
          label="端口"
          tooltip="No ports exposed in this image"
          disabled
          placeholder=""
          extra="No ports exposed in this image"
          rules={[
            {
              required: true,
              message: '请选择输入',
            },
          ]}
        />
      )}
      <ProFormList
        label="卷"
        name={'vols'}
        initialValue={[{ hostPath: '', containerPath: '' }]}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="hostPath"
            placeholder="请输入主机地址"
            rules={[
              {
                required: true,
                message: '请选择输入',
              },
            ]}
          />
          <ProFormText
            width="sm"
            name="containerPath"
            placeholder="请输入容器地址"
            rules={[
              {
                required: true,
                message: '请选择输入',
              },
            ]}
          />
        </ProForm.Group>
      </ProFormList>
      <ProFormList
        label="环境变量"
        name={'envs'}
        initialValue={[{ key: '', value: '' }]}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="key"
            placeholder="请输入变量名"
            rules={[
              {
                required: true,
                message: '请选择输入',
              },
            ]}
          />
          <ProFormText
            width="md"
            name="value"
            placeholder="请输入变量值"
            rules={[
              {
                required: true,
                message: '请选择输入',
              },
            ]}
          />
        </ProForm.Group>
      </ProFormList>
    </ModalForm>
  );
};

export default CreateContainerModel;
