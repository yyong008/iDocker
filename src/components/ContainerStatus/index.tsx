import Created from '@/assets/images/status/Created.png';
import Dead from '@/assets/images/status/Dead.png';
import Exited from '@/assets/images/status/Exited.png';
import Paused from '@/assets/images/status/Paused.png';
import Remove from '@/assets/images/status/Removing.png';
import Restarting from '@/assets/images/status/Restarting.png';
import Running from '@/assets/images/status/Running.png';

export const statusMap = {
  created: Created,
  running: Running,
  paused: Paused,
  restarting: Restarting,
  exited: Exited,
  dead: Dead,
  remove: Remove,
};

export type StatusMapKeys = keyof typeof statusMap;

const ContainerStatusIcon = ({ status }: { status: StatusMapKeys }) => {
  return (
    <div style={{ width: 20, height: 14, marginRight: '10px' }}>
      <img
        style={{ width: '100%', height: '100%' }}
        src={statusMap[status]}
        alt=""
      />
    </div>
  );
};

export default ContainerStatusIcon;
