import { PageContainer, ProCard, ProList } from '@ant-design/pro-components';

import { useParams } from '@/.umi/exports';
import {
  getImageDetail,
  getImageHistory,
} from '@/services/images/ImagesController';
import { Segmented } from 'antd';
import { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import dockerAvatar from '../../assets/images/dockerfile.png';

const LayerList = ({ data }: { data: any[] }) => {
  const items = data.map((item: any, index) => {
    return {
      id: index + 1,
      title: '镜像层',
      image: dockerAvatar,
      desc: (
        <div>
          <div>Id: {item.Id}</div>
          <div>命令：{item.CreatedBy}</div>
        </div>
      ),
    };
  });

  return (
    <div>
      <ProCard>
        <ProList
          rowKey="id"
          headerTitle={false}
          dataSource={items}
          metas={{
            title: {
              dataIndex: 'title',
            },
            avatar: {
              dataIndex: 'image',
              editable: false,
            },
            description: {
              dataIndex: 'desc',
            },
          }}
          showActions="hover"
        />
      </ProCard>
    </div>
  );
};

const HomePage: React.FC = () => {
  const [type, setType] = useState<string>('JSON');
  const [data, setData] = useState({});
  const [hData, setHData] = useState<any[]>([]);

  const { id } = useParams();

  const queryInfo = async () => {
    const res = await getImageDetail(id);
    console.log(res);
    setData(res);
  };

  const queryHistoryInfo = async () => {
    const res = await getImageHistory(id);
    console.log('h', res);
    setHData(res);
  };

  useEffect(() => {
    queryInfo();
  }, []);
  return (
    <PageContainer ghost>
      <Segmented
        options={['JSON', '数据']}
        onChange={async (type: string) => {
          if (type === '数据' && hData.length <= 0) {
            await queryHistoryInfo();
          }
          setType(type);
          return Promise.resolve(true);
        }}
        style={{
          marginBottom: 16,
        }}
      />
      <ProCard>
        {type === '数据' && <LayerList data={hData ?? []} />}
        {type === 'JSON' && <ReactJson src={data ?? {}} />}
      </ProCard>
    </PageContainer>
  );
};

export default HomePage;
