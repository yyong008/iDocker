import { useNavigate, useParams } from '@umijs/max';
import { useEffect, useState } from 'react';

import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Segmented } from 'antd';

import ReactJson from 'react-json-view';

import {
  getContainerArchive,
  getContainerDetail,
  getContainerLogs,
  getContainerStats, //
} from '@/services/container/ContainerController';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LayerList = ({ data }: { data: any }) => {
  return <ReactJson src={data} />;
};

const Logs = (value: any) => {
  return <ReactJson src={value} />;
};

const tabs = ['Logs', 'Inspect', 'Terminal', 'Files', 'Stats'];

const ContainerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [type, setType] = useState<string>('Logs');
  //
  const [logs, setLogs] = useState('');
  const [data, setData] = useState({});

  const [terminal, setTerminal] = useState('');
  const [files, setFiles] = useState();
  const [stats, setStats] = useState();

  if (!id) {
    navigate('/containers');
    return;
  }

  const queryLogs = async () => {
    const res = await getContainerLogs(id, { stdout: 1 });
    setLogs(res);
  };

  const queryInspect = async () => {
    const res = await getContainerDetail(id);
    setData(res);
  };

  const queryTerminal = async () => {
    // TOOD: 与终端进行交互
    setTerminal('terminal');
  };

  const queryFiles = async () => {
    const res = await getContainerArchive(id);
    setFiles(res);
  };

  const queryStatus = async () => {
    const res = await getContainerStats(id);
    setStats(res);
  };

  const handleChange = async () => {
    if (type === tabs[0]) {
      await queryLogs();
    } else if (type === tabs[1]) {
      await queryInspect();
    } else if (type === tabs[2]) {
      await queryTerminal();
    } else if (type === tabs[3]) {
      await queryFiles();
    } else if (type === tabs[4]) {
      await queryStatus();
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    handleChange();
  }, []);

  return (
    <PageContainer ghost>
      <Segmented
        options={tabs}
        onChange={async (type: string) => {
          handleChange();
          setType(type);
        }}
        style={{
          marginBottom: 16,
        }}
      />
      <ProCard>
        {type === tabs[0] && <Logs value={logs ?? {}} />}
        {type === tabs[1] && <LayerList data={data ?? []} />}
        {type === tabs[2] && <LayerList data={terminal ?? []} />}
        {type === tabs[3] && <LayerList data={files ?? []} />}
        {type === tabs[4] && <LayerList data={stats ?? []} />}
      </ProCard>
    </PageContainer>
  );
};

export default ContainerDetail;
