// types
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import type { FC } from 'react';

// cores
import { useRef, useState } from 'react';

// components:vendors
import {
  PageContainer,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';

// services
import { searchImage } from '@/services/images/ImagesController';

import './index.css';

const columns: ProColumns<any, any>[] = [
  {
    title: '镜像名',
    dataIndex: 'name',
    ellipsis: true,
    width: 300,
  },
  {
    title: '星数',
    dataIndex: 'star_count',
    ellipsis: true,
    width: 150,
    sorter: (a, b) => b.star_count - a.star_count,
  },
  {
    title: '是否为官方',
    dataIndex: 'is_official',
    ellipsis: true,
    width: 150,
    renderText(text) {
      return <div>{text ? '是' : '否'}</div>;
    },
  },
  {
    title: '是否自动构建',
    dataIndex: 'is_automated',
    ellipsis: true,
    width: 150,

    renderText(text) {
      return <div>{text ? '是' : '否'}</div>;
    },
  },
  {
    title: '描述',
    dataIndex: 'description',
    ellipsis: true,
  },
];

const ContainerList: FC = () => {
  const actionRef = useRef<ActionType>();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchData, setSearchData] = useState({
    term: '',
  });

  const onSearch = async () => {
    setLoading(true);
    const data = await searchImage({
      term: searchData.term,
      filters: JSON.stringify({}),
      limit: 50,
    });
    if (data ** data.length >= 0) {
      message.success('搜索成功');
    }
    setData(data);

    setLoading(false);
  };

  const onSearchChange = async (value: any) => {
    setSearchData({
      term: value.target.value,
    });
  };

  const onEntry = async (event: any) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };
  return (
    <PageContainer
      header={{
        title: '镜像列表',
        breadcrumb: {},
      }}
    >
      <div className="search-bar">
        <ProFormText
          width={500}
          fieldProps={{
            onChange: onSearchChange,
            onKeyDown: onEntry,
            size: 'large',
          }}
          addonAfter={
            <Button
              size="large"
              type="primary"
              disabled={loading}
              ghost
              onClick={onSearch}
            >
              搜索
            </Button>
          }
          allowClear
        />
      </div>
      <ProTable
        loading={loading}
        search={false}
        actionRef={actionRef}
        columns={columns}
        rowKey="Id"
        dataSource={data}
      />
    </PageContainer>
  );
};

export default ContainerList;
